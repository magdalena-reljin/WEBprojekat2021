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
import beans.User;
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
		UserDAO userDao = (UserDAO) ctx.getAttribute("userDAO");
		BuyerDAO buyerDao = (BuyerDAO) ctx.getAttribute("buyerDAO");
		System.out.println("USPEO SAM");
		Buyer buyer= buyerDao.getBuyerById(newBuyer.getUsername());
		if (buyer != null) {
			return Response.status(400).entity("Username already exits").build();
		}
		
		userDao.saveUser(newBuyer);
		buyerDao.saveBuyer(newBuyer);
		
		request.getSession().setAttribute("user", newBuyer);
		
		return Response.status(200).build();
	}
}
