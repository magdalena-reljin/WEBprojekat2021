package services;

import java.io.IOException;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import beans.Buyer;
import dao.BuyerDAO;
import dao.UserDAO;

@Path("/buyers")
public class BuyersService {

	@Context
	ServletContext ctx;
	
	public BuyersService() {
		System.out.println("KONSTRUKTOR");
	}
	
	@PostConstruct
	// ctx polje je null u konstruktoru, mora se pozvati nakon konstruktora (@PostConstruct anotacija)
	public void init() {
		// Ovaj objekat se instancira vi�e puta u toku rada aplikacije
		// Inicijalizacija treba da se obavi samo jednom
		if (ctx.getAttribute("buyerDAO") == null) {
	    	String contextPath = ctx.getRealPath("");
			ctx.setAttribute("buyerDAO", new BuyerDAO(contextPath));
		}
	}

	@POST
	@Path("/signup")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response signup(Buyer newBuyer, @Context HttpServletRequest request) throws IOException {
		BuyerDAO buyerDao = (BuyerDAO) ctx.getAttribute("buyerDAO");
		UserDAO userDao = (UserDAO) ctx.getAttribute("userDAO");
		System.out.println("USPEO SAM buyer isgnup");
		Buyer buyer = buyerDao.getBuyerById(newBuyer.getUsername());
		if (buyer != null) {
			return Response.status(400).entity("Username already exits").build();
		}
		buyerDao.saveBuyer(newBuyer);
		userDao.saveUser(newBuyer);
		
	
		request.getSession().setAttribute("buyer", newBuyer);
		
		return Response.status(200).build();
	}
}
