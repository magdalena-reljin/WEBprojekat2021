package services;

import java.io.File;
import java.io.IOException;
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


import beans.Restaurant;
import beans.User;
import dao.ManagerDAO;
import dao.RestaurantDAO;
import dao.UserDAO;


@Path("/restaurants")
public class RestaurantService {

	@Context
	ServletContext ctx;
	
	public RestaurantService() {
		System.out.println("KONSTRUKTOR RESTAURANT");
	}
	
	@PostConstruct
	// ctx polje je null u konstruktoru, mora se pozvati nakon konstruktora (@PostConstruct anotacija)
	public void init() {
		// Ovaj objekat se instancira vi�e puta u toku rada aplikacije
		// Inicijalizacija treba da se obavi samo jednom
		if (ctx.getAttribute("restaurantDAO") == null) {
	    	String contextPath = ctx.getRealPath("");
			ctx.setAttribute("restaurantDAO", new RestaurantDAO(contextPath));
		}
	}
	
	@POST
	@Path("/addNewRestaurant")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response signup(Restaurant newRestaurant, @Context HttpServletRequest request) throws IOException {
		RestaurantDAO restaurantDao = (RestaurantDAO) ctx.getAttribute("restaurantDAO");
		ManagerDAO managerDao = (ManagerDAO) ctx.getAttribute("managerDAO");
		System.out.println("USPEO SAM");
		Restaurant restaurant= restaurantDao.getRestaurantByName(newRestaurant.getName());
		if (restaurant != null) {
			return Response.status(400).entity("Username already exits").build();
		}
	String str=newRestaurant.getLogo().substring(12);
	newRestaurant.setLogo("components/images/"+str);
	restaurantDao.saveRestaurant(newRestaurant);
		request.getSession().setAttribute("restaurant", newRestaurant);
		
		return Response.status(200).build();
	}
	
	@GET
	@Path("/findAllRestaurants")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public List<Restaurant> findAllRestaurants(@Context HttpServletRequest request) {
		System.out.println("Pogodio sam RESTAURANTS ALLL!!!");
		RestaurantDAO restaurantDao = (RestaurantDAO) ctx.getAttribute("restaurantDAO");
	    return restaurantDao.getAllRestaurants();
	}
	@POST
	@Path("/findRestaurantData")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Restaurant findUserData(Restaurant restaurant, @Context HttpServletRequest request) {
		RestaurantDAO restaurantDao = (RestaurantDAO) ctx.getAttribute("restaurantDAO");
		System.out.println("USPEO SAM u rest findData :)))");
		Restaurant restaurantWithData = restaurantDao.getRestaurantByName(restaurant.getName());
		return restaurantWithData;
	}
	
	
}
