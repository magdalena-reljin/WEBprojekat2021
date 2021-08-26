package services;

import java.io.IOException;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import beans.User;
import dao.ManagerDAO;
import dao.UserDAO;

@Path("/users")
public class LoginService {
	
	@Context
	ServletContext ctx;
	
	public LoginService() {
		System.out.println("KONSTRUKTOR");
	}
	
	@PostConstruct
	// ctx polje je null u konstruktoru, mora se pozvati nakon konstruktora (@PostConstruct anotacija)
	public void init() {
		// Ovaj objekat se instancira vi�e puta u toku rada aplikacije
		// Inicijalizacija treba da se obavi samo jednom
		if (ctx.getAttribute("userDAO") == null) {
	    	String contextPath = ctx.getRealPath("");
			ctx.setAttribute("userDAO", new UserDAO(contextPath));
		}
	}
	@POST
	@Path("/signup")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response signup(User newUser, @Context HttpServletRequest request) throws IOException {
		UserDAO userDao = (UserDAO) ctx.getAttribute("userDAO");
	
		System.out.println("USPEO SAM");
		User user = userDao.getUserById(newUser.getUsername());
		if (user != null) {
			return Response.status(400).entity("Username already exits").build();
		}
		
		userDao.saveUser(newUser);
		
		System.out.println("ovo je novi user"+newUser.getName());
		System.out.println("ovo je novi user"+newUser.getSurname());
		System.out.println("ovo je novi user"+newUser.getUsername());
		System.out.println("ovo je novi user"+newUser.getPassword());
		System.out.println("ovo je novi user"+newUser.getBirthDate());
		System.out.println("ovo je novi user"+newUser.getRole());
		System.out.println("ovo je novi user"+newUser.getGender());
		request.getSession().setAttribute("user", newUser);
		
		return Response.status(200).build();
	}
	
	@POST
	@Path("/login")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public User login(User user, @Context HttpServletRequest request) {
		System.out.println("DOSAO SAM U LOGIN");
		UserDAO userDao = (UserDAO) ctx.getAttribute("userDAO");
		System.out.println("dobar mi je user dao");
		User loggedUser = userDao.findUser(user.getUsername(), user.getPassword());
       

		if (loggedUser == null) 
			return null;
		
		request.getSession().setAttribute("user", loggedUser);
		return loggedUser;
	}
	@POST
	@Path("/findData")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public User findUserData(User user, @Context HttpServletRequest request) {
		UserDAO userDao = (UserDAO) ctx.getAttribute("userDAO");
		System.out.println("USPEO SAM findData :)))");
		User userWithData = userDao.getUserById(user.getUsername());
		return userWithData;
	}
	
	
	@POST
	@Path("/logout")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void logout(@Context HttpServletRequest request) {
		request.getSession().invalidate();
	}
	
	@GET
	@Path("/currentUser")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public User login(@Context HttpServletRequest request) {
		return (User) request.getSession().getAttribute("user");
	}
	
	@POST
	@Path("/editData")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public User editData(User user, @Context HttpServletRequest request) {
		UserDAO userDao = (UserDAO) ctx.getAttribute("userDAO");
		System.out.println("USPEO SAM edittttttttt :)))");

		return  userDao.editData(user);
		
	}
}
