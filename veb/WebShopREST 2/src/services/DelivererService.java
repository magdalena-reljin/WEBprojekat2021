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

import beans.Deliverer;
import beans.Manager;
import dao.DelivererDAO;
import dao.ManagerDAO;
import dao.UserDAO;

@Path("/deliverer")
public class DelivererService {
	
	@Context
	ServletContext ctx;
	
	public DelivererService() {
		System.out.println("KONSTRUKTOR DELIVERER");
	}
	
	@PostConstruct
	// ctx polje je null u konstruktoru, mora se pozvati nakon konstruktora (@PostConstruct anotacija)
	public void init() {
		// Ovaj objekat se instancira vi�e puta u toku rada aplikacije
		// Inicijalizacija treba da se obavi samo jednom
		if (ctx.getAttribute("delivererDAO") == null) {
	    	String contextPath = ctx.getRealPath("");
			ctx.setAttribute("delivererDAO", new DelivererDAO(contextPath));
		}
	}
	
	@POST
	@Path("/signup")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response signup(Deliverer newDeliverer, @Context HttpServletRequest request) throws IOException {
		DelivererDAO delivererDao = (DelivererDAO) ctx.getAttribute("delivererDAO");
		UserDAO userDao = (UserDAO) ctx.getAttribute("userDAO");
		System.out.println("USPEO SAM");
		Deliverer deliverer = delivererDao.getDelivererById(newDeliverer.getUsername());
		if (deliverer != null) {
			return Response.status(400).entity("Username already exits").build();
		}
		delivererDao.saveDeliverer(newDeliverer);
		userDao.saveUser(newDeliverer);
	
		request.getSession().setAttribute("deliverer", newDeliverer);
		
		return Response.status(200).build();
	}
}
