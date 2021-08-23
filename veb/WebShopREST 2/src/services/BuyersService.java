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

import beans.Basket;
import beans.Buyer;
import beans.Item;
import beans.User;
import dao.BuyerDAO;
import dto.BasketDTO;

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
		System.out.println("USPEO SAM buyer isgnup");
		Buyer buyer = buyerDao.getBuyerById(newBuyer.getUsername());
		if (buyer != null) {
			return Response.status(400).entity("Username already exits").build();
		}
		buyerDao.saveBuyer(newBuyer);
		request.getSession().setAttribute("buyer", newBuyer);
		
		return Response.status(200).build();
	}
	
	@GET
	@Path("/currentUser")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Buyer login(@Context HttpServletRequest request) {
		return (Buyer) request.getSession().getAttribute("buyer");
	}
	
	@POST
	@Path("/addItemInBasket")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void addItem(Basket buyerBasket, @Context HttpServletRequest request) throws IOException {
		BuyerDAO buyerDao = (BuyerDAO) ctx.getAttribute("buyerDAO");
		System.out.println("USPEO SAM buyer addItemInBasket");
		buyerDao.updateBasket(buyerBasket);
	}
	
	@POST
	@Path("/findBasket")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Basket findBasket(Buyer buyer, @Context HttpServletRequest request) throws IOException {
		BuyerDAO buyerDao = (BuyerDAO) ctx.getAttribute("buyerDAO");
		System.out.println("USPEO SAM buyer findBasket");
		return buyerDao.findBasket(buyer);
	}
	
	@POST
	@Path("/removeFromBasket")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Basket removeFromBasket(BasketDTO basket, @Context HttpServletRequest request) throws IOException {
		BuyerDAO buyerDao = (BuyerDAO) ctx.getAttribute("buyerDAO");
		System.out.println("USPEO SAM buyer removeFromBasket");
		return buyerDao.removeItemFromBasket(basket);
	}
	
	@POST
	@Path("/isItemInBasket")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public boolean isItemInBasket(BasketDTO basket, @Context HttpServletRequest request) throws IOException {
		BuyerDAO buyerDao = (BuyerDAO) ctx.getAttribute("buyerDAO");
		System.out.println("USPEO SAM buyer isItemInBasket");
		Item item= buyerDao.isItemInBasket(basket);
		System.out.println("VRATIOOOOO SAMMMM******************"+item);
		if(item==null)
		return false;
		
	return true;
	
	}
	@POST
	@Path("/numOfItems")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public int numOfItems(BasketDTO basket, @Context HttpServletRequest request) throws IOException {
		BuyerDAO buyerDao = (BuyerDAO) ctx.getAttribute("buyerDAO");
		System.out.println("USPEO SAM buyer isItemInBasket");
		return buyerDao.numOfItemsInBasket(basket);
	}
	
}
