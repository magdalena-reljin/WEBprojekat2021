package services;
import java.util.Collection;
import java.util.Date;
import java.util.List;

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
import dao.UserDAO;
import enums.Gender;
import enums.Role;

@Path("/users")
public class UserService {
    @Context
    ServletContext ctx;

    public UserService() {
    	System.out.println("KONSTRUKTOR");
    }

    @PostConstruct
    public void init() {
        if (ctx.getAttribute("userDAO") == null) {
            String contextPath = ctx.getRealPath("");
            ctx.setAttribute("userDAO", new UserDAO(contextPath));
        }
    }

    @GET
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    public List<User> getUsers() {
    	System.out.println("pogodio sam geeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet usersssssssssssssss");
    	UserDAO dao = (UserDAO) ctx.getAttribute("userDAO");
        return dao.findAll();
    }
    @GET
    @Path("/")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public User getUser(User userr) {
    	UserDAO dao = (UserDAO) ctx.getAttribute("userDAO");
    	User user=dao.getUserById(userr.getUsername());
    	System.out.println("pogodio sam geeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet user"+user.getName());
        return user;
    }
    
    @POST
    @Path("/login")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response login(User user,@Context HttpServletRequest request) {
        UserDAO userDao = (UserDAO) ctx.getAttribute("userDAO");
        System.out.println("POGODIO SAM PRAVU");
        User loggedUser = userDao.findUser(user.getUsername(), user.getPassword());
        if (loggedUser == null) {
        	System.out.println("loggeduser je nulll");
            return Response.status(400).entity("Invalid username and/or password").build();
        }
        System.out.println("logged user nije nulll");
        request.getSession().setAttribute("user", loggedUser);
        return Response.status(200).build();
    }
    @POST
    @Path("/findData")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public User findUserData(User user1,@Context HttpServletRequest request) {
        UserDAO userDao = (UserDAO) ctx.getAttribute("userDAO");
        User loggedUser = userDao.getUserById(user1.getUsername());
        return loggedUser;
    }
    
}