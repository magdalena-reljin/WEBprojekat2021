package services;

import java.io.IOException;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import beans.Manager;
import beans.Restaurant;
import beans.User;
import dao.DelivererDAO;
import dao.ManagerDAO;
import dao.UserDAO;
import enums.RestaurantType;

	
	@Path("/managers")
	public class ManagerService {
		
		@Context
		ServletContext ctx;
		
		public ManagerService() {
			System.out.println("KONSTRUKTOR MANAGER");
		}
		
		@PostConstruct
		// ctx polje je null u konstruktoru, mora se pozvati nakon konstruktora (@PostConstruct anotacija)
		public void init() {
			// Ovaj objekat se instancira vi�e puta u toku rada aplikacije
			// Inicijalizacija treba da se obavi samo jednom
			if (ctx.getAttribute("managerDAO") == null) {
		    	String contextPath = ctx.getRealPath("");
				ctx.setAttribute("managerDAO", new ManagerDAO(contextPath));
			}
		}
		
		
		@POST
		@Path("/signup")
		@Consumes(MediaType.APPLICATION_JSON)
		@Produces(MediaType.APPLICATION_JSON)
		public Response signup(Manager newManager, @Context HttpServletRequest request) throws IOException {
			ManagerDAO managerDao = (ManagerDAO) ctx.getAttribute("managerDAO");
			UserDAO userDao = (UserDAO) ctx.getAttribute("userDAO");
			System.out.println("USPEO SAM");
			Manager manager = managerDao.getManagerById(newManager.getUsername());
			if (manager != null) {
				return Response.status(400).entity("Username already exits").build();
			}
			managerDao.saveManager(newManager);
			userDao.saveUser(newManager);
		
			request.getSession().setAttribute("manager", newManager);
			
			return Response.status(200).build();
		}
		
		
		@GET
		@Path("/findUnemployed")
		@Consumes(MediaType.APPLICATION_JSON)
		@Produces(MediaType.APPLICATION_JSON)
		public List<String> findUnemployed(@Context HttpServletRequest request) {
			System.out.println("Pogodio sam!!!");
			ManagerDAO managerDao = (ManagerDAO) ctx.getAttribute("managerDAO");
		    return managerDao.findUnemployed();
		}
		
		@PUT
		@Path("/update")
		@Consumes(MediaType.APPLICATION_JSON)
		@Produces(MediaType.APPLICATION_JSON)
		public Manager update(Manager newManager, @Context HttpServletRequest request) {
			System.out.println("pogodio update MANAGER");
			ManagerDAO managerDao = (ManagerDAO) ctx.getAttribute("managerDAO");
			String logo=newManager.getRestaurant().getLogo().substring(12);
			newManager.getRestaurant().setLogo("components/images/"+logo);
			managerDao.addRestaurant(newManager);
			return newManager;
		}
		
		@POST
		@Path("/findData")
		@Consumes(MediaType.APPLICATION_JSON)
		@Produces(MediaType.APPLICATION_JSON)
		public Manager findData(Manager manager, @Context HttpServletRequest request) {
			ManagerDAO managerDao = (ManagerDAO) ctx.getAttribute("managerDAO");
			System.out.println("USPEO SAM findData manager :)))");
			Manager managerWithData = managerDao.getManagerById(manager.getUsername());
			System.out.println("								"+ managerWithData.getRestaurant().getName());
			return managerWithData;
		}
		
		@POST
		@Path("/editData")
		@Consumes(MediaType.APPLICATION_JSON)
		@Produces(MediaType.APPLICATION_JSON)
		public User editData(User user, @Context HttpServletRequest request) {
			ManagerDAO managerDao = (ManagerDAO) ctx.getAttribute("managerDAO");
			return  managerDao.editData(user);
			
		}
}
