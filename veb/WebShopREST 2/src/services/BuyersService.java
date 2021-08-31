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

import beans.Basket;
import beans.Buyer;
import beans.Item;
import beans.User;
import dao.BuyerDAO;
import dao.DelivererDAO;
import dao.UserDAO;
import dto.BasketDTO;
import dto.UserDTO;
import enums.BuyerTitle;

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
		UserDAO userDao = (UserDAO) ctx.getAttribute("userDAO");System.out.println("USPEO SAM");
		User user=userDao.getUserById(newBuyer.getUsername());
		if (user != null) {
			return Response.status(400).entity("Username already exits").build();
		}
		newBuyer.getType().setTitle(BuyerTitle.BRONZE);
		newBuyer.getType().setDiscount(0);
		newBuyer.getType().setPoints(3000);
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
	
	@POST
	@Path("/updateNumberInOrder")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void updateNuberInOrder(BasketDTO buyerBasket, @Context HttpServletRequest request) throws IOException {
		BuyerDAO buyerDao = (BuyerDAO) ctx.getAttribute("buyerDAO");
		
		buyerDao.updateNumberInOrder(buyerBasket);
	}
	
	@POST
	@Path("/totalPrice")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public int totalPrice(BasketDTO buyerBasket, @Context HttpServletRequest request) throws IOException {
		BuyerDAO buyerDao = (BuyerDAO) ctx.getAttribute("buyerDAO");
		System.out.println("USPEOOOOO TOTALL -*********-");
		return buyerDao.totalPrice(buyerBasket);
	}
	

	@POST
	@Path("/findItemInBuyerBasket")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public List<Item> findItemInBuyerBasket( BasketDTO buyerBasket, @Context HttpServletRequest request) throws IOException {
		BuyerDAO buyerDao = (BuyerDAO) ctx.getAttribute("buyerDAO");
		
		System.out.println("AAAAAAAAAAA JA SAM VRATIOOOO TU SAM BIOOO ++++++++"+ buyerBasket.getIdBuyer() + "yyyyyy"+ buyerBasket.getIdRest());
		return buyerDao.findItemInBuyerBasket(buyerBasket);
	}

	@POST
	@Path("/clearBasketAfterOrdering")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void clearBasketAfterOrdering( BasketDTO buyerBasket, @Context HttpServletRequest request) throws IOException {
		BuyerDAO buyerDao = (BuyerDAO) ctx.getAttribute("buyerDAO");
		buyerDao.clearBasketAfterOrdering(buyerBasket);
		System.out.println("usao sam u CLEAAAAAAAAAAAAAAAAAAAAAAAAAAAAR BASKET");
	}
	
	@POST
	@Path("/findData")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Buyer findData(Buyer buyer, @Context HttpServletRequest request) {
		BuyerDAO buyerDao = (BuyerDAO) ctx.getAttribute("buyerDAO");
		System.out.println("USPEO SAM findData buyeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeer :)))");
		return buyerDao.getBuyerById(buyer.getUsername());
	}
	
	@POST
	@Path("/discount")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public int discount(BasketDTO basket, @Context HttpServletRequest request) {
		BuyerDAO buyerDao = (BuyerDAO) ctx.getAttribute("buyerDAO");
		System.out.println("USPEO SAM findData BASKET DISCOUNT :)))");
		return buyerDao.getDiscount(basket);
	}
	
	@POST
	@Path("/editData")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public User editData(User user, @Context HttpServletRequest request) {
		BuyerDAO buyerDao = (BuyerDAO) ctx.getAttribute("buyerDAO");
		return  buyerDao.editData(user);
		
	}
	
	
	@GET
	@Path("/getAllUser")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public List<UserDTO> getAllUser() {
		BuyerDAO buyerDao = (BuyerDAO) ctx.getAttribute("buyerDAO");
		UserDAO userDao = (UserDAO) ctx.getAttribute("userDAO");
		return buyerDao.getAllBuyers(userDao.findAll());
		 
		
	}
}
