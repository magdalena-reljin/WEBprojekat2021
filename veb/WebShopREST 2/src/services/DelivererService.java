package services;

import java.io.IOException;
import java.util.ArrayList;
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

import beans.Deliverer;
import beans.Manager;
import beans.Order;
import dao.DelivererDAO;
import dao.ManagerDAO;
import dao.OrderDAO;
import dao.UserDAO;
import dto.BasketDTO;
import dto.RequestDTO;
import enums.OrderStatus;

@Path("/deliverers")
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
		Deliverer deliverer = delivererDao.getDelivererById(newDeliverer.getUsername());
		if (deliverer != null) {
			return Response.status(400).entity("Username already exits").build();
		}
		
		delivererDao.saveDeliverer(newDeliverer);
		userDao.saveUser(newDeliverer);
	
		request.getSession().setAttribute("deliverer", newDeliverer);
		
		return Response.status(200).build();
	}
	
	@POST
	@Path("/addOrder")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void addOrder(Deliverer deliverer, @Context HttpServletRequest request) throws IOException {
		DelivererDAO delivererDao = (DelivererDAO) ctx.getAttribute("delivererDAO");
		delivererDao.addOrder(deliverer);
	}
	
	@GET
	@Path("/findAllreq")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public List<Deliverer> findAll(@Context HttpServletRequest request) {
		System.out.println("Pogodio sam find alllllllllllllllllllllll delivereeeeeeeeeeeeeeeeeeeeeeeeer!!!");
		DelivererDAO delivererDao = (DelivererDAO) ctx.getAttribute("delivererDAO");
	    return delivererDao.findAll();
	}
	

	@POST
	@Path("/acceptOrder")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Order acceptOrder(RequestDTO requestDto, @Context HttpServletRequest request) throws IOException {
		DelivererDAO delivererDao = (DelivererDAO) ctx.getAttribute("delivererDAO");
		OrderDAO orderDao = (OrderDAO)ctx.getAttribute("orderDAO");

	System.out.println("IDDDDD ORDERRRR++++-+-+-+-+-"+requestDto.getOrderId());
		System.out.println("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
		//order.setStatus(OrderStatus.TRANSPORTING);
		//orderDao.setStatus(order);
		delivererDao.accept(requestDto);
		return orderDao.getOrderById(requestDto.getOrderId());
		
	}
	
	@POST
	@Path("/denyOrder")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void denyOrder(RequestDTO requestDto, @Context HttpServletRequest request) throws IOException {
		DelivererDAO delivererDao = (DelivererDAO) ctx.getAttribute("delivererDAO");
		OrderDAO orderDao=(OrderDAO) ctx.getAttribute("orderDAO");
		Order order= orderDao.getOrderById(requestDto.getOrderId());
		delivererDao.deny(requestDto,order);
	}
	
	
}
