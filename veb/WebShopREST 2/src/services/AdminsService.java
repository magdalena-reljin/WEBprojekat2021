package services;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import beans.User;
import dao.AdminDAO;
import dao.BuyerDAO;

@Path("/admins")
public class AdminsService {

	

		@Context
		ServletContext ctx;
		
		public AdminsService() {
			System.out.println("KONSTRUKTOR");
		}
		
		@PostConstruct
		// ctx polje je null u konstruktoru, mora se pozvati nakon konstruktora (@PostConstruct anotacija)
		public void init() {
			// Ovaj objekat se instancira vi�e puta u toku rada aplikacije
			// Inicijalizacija treba da se obavi samo jednom
			if (ctx.getAttribute("adminDAO") == null) {
		    	String contextPath = ctx.getRealPath("");
				ctx.setAttribute("adminDAO", new AdminDAO(contextPath));
			}
		}
		
		@POST
		@Path("/editData")
		@Consumes(MediaType.APPLICATION_JSON)
		@Produces(MediaType.APPLICATION_JSON)
		public User editData(User user, @Context HttpServletRequest request) {
			AdminDAO adminDao = (AdminDAO) ctx.getAttribute("adminDAO");
			System.out.println("USPEO SAM edittttttttt :)))");
			return  adminDao.editData(user);
			
		}

}
