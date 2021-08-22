package services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.websocket.server.PathParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import beans.Item;
import beans.Manager;
import beans.Restaurant;
import beans.User;
import dao.ItemDAO;
import dao.ManagerDAO;
import dao.RestaurantDAO;
import dao.UserDAO;

@Path("/items")
public class ItemsService {

	@Context
	ServletContext ctx;
	
	public ItemsService() {
		System.out.println("KONSTRUKTOR items");
	}
	
	@PostConstruct
	// ctx polje je null u konstruktoru, mora se pozvati nakon konstruktora (@PostConstruct anotacija)
	public void init() {
		// Ovaj objekat se instancira vi�e puta u toku rada aplikacije
		// Inicijalizacija treba da se obavi samo jednom
		if (ctx.getAttribute("itemDAO") == null) {
	    	String contextPath = ctx.getRealPath("");
			ctx.setAttribute("itemDAO", new ItemDAO(contextPath));
			
		}
	}
	
	@POST
	@Path("/add")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response add (Item newItem, @Context HttpServletRequest request) throws IOException {
		System.out.println("BIO SAM OVDE");
		ItemDAO itemDao = (ItemDAO) ctx.getAttribute("itemDAO");
		System.out.println("USPEO SAM aadd idem servis ");
		Item item= itemDao.getItemByName(newItem.getName());
		if (item != null) {
			return Response.status(400).entity("Username already exits").build();
		}
	String str=newItem.getImage().substring(12);
	newItem.setImage("components/images/"+str);
	System.out.println("AAAAAAA"+newItem.getDescription());
	System.out.println("AAAAAAA"+newItem.getImage());
	System.out.println("AAAAAAA"+newItem.getName());
	System.out.println("AAAAAAA"+newItem.getPrice());
	System.out.println("AAAAAAA"+newItem.getQuantity());
	System.out.println("AAAAAAA"+newItem.getRestaurant().getName());
	itemDao.saveItem(newItem);
		return Response.status(200).build();
	}


	@POST
	@Path("/findData")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Item findData(Item item, @Context HttpServletRequest request) {
		ItemDAO itemDao = (ItemDAO) ctx.getAttribute("itemDAO");
		System.out.println("USPEO SAM u rest findData :)))");
		Item itemWithData = itemDao.getItemByName(item.getName());
		return itemWithData;
	}
	
	@POST
	@Path("/findAllItemsInRestaurant")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public List<Item> findData(Restaurant restaurant, @Context HttpServletRequest request) {
		List<Item>itemInRestaurant=new ArrayList<Item>();
		ItemDAO itemDao = (ItemDAO) ctx.getAttribute("itemDAO");
		System.out.println("USPEO SAM u rest findAllItemsInRestaurant :)))");
		System.out.println("imeee rest"+restaurant.getName());
		itemInRestaurant= itemDao.findAllItemsInRestaurant(restaurant);
		return itemInRestaurant;
	}
	@PUT
	@Path("/update")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Item update(Item item, @Context HttpServletRequest request) {
		System.out.println("pogodio update item");
		if(!item.getImage().startsWith("components")) {
		String str=item.getImage().substring(12);
		item.setImage("components/images/"+str);
		}
		ItemDAO itemDao = (ItemDAO) ctx.getAttribute("itemDAO");
		itemDao.updateItem(item);
		return item;
	}
	@POST
	@Path("/findDataManager")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public String findDataManager(Item item, @Context HttpServletRequest request) {
		ItemDAO itemDao = (ItemDAO) ctx.getAttribute("itemDAO");
		ManagerDAO managerDao=(ManagerDAO) ctx.getAttribute("managerDAO");
		String m=managerDao.getManagerByRestaurantName(item.getRestaurant().getName());
		System.out.println("aaaaaaaaaaao "+item.getRestaurant().getName());
		System.out.println("aaaaaaaaaaao "+m);
		return m;
	}
	
	@POST
	@Path("/deleteItem")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Item deleteItem(Item item, @Context HttpServletRequest request) {
		ItemDAO itemDao = (ItemDAO) ctx.getAttribute("itemDAO");
		itemDao.deleteItem(item.getName());
		return null;
	}
	
	
	
}

