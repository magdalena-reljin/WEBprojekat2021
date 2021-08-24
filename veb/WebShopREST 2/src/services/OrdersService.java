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

import beans.Order;
import beans.Restaurant;
import dao.BuyerDAO;
import dao.OrderDAO;


@Path("/orders")
public class OrdersService {
		@Context
		ServletContext ctx;
		
		public OrdersService() {
			System.out.println("KONSTRUKTOR ORDERS");
		}
		
		@PostConstruct
		// ctx polje je null u konstruktoru, mora se pozvati nakon konstruktora (@PostConstruct anotacija)
		public void init() {
			// Ovaj objekat se instancira vi�e puta u toku rada aplikacije
			// Inicijalizacija treba da se obavi samo jednom
			if (ctx.getAttribute("orderDAO") == null) {
		    	String contextPath = ctx.getRealPath("");
				ctx.setAttribute("orderDAO", new OrderDAO(contextPath));
			}
		}
		
		@POST
		@Path("/createOrder")
		@Consumes(MediaType.APPLICATION_JSON)
		@Produces(MediaType.APPLICATION_JSON)
		public boolean addNewOrder(Order newOrder, @Context HttpServletRequest request) throws IOException {
			OrderDAO orderDao = (OrderDAO) ctx.getAttribute("orderDAO");
			BuyerDAO buyerDao= (BuyerDAO) ctx.getAttribute("buyerDAO");
			System.out.println("USPEO SAM");
			Order order= orderDao.getOrderById(newOrder.getId());
			if (order != null) {
				return false;
			}
			buyerDao.updateBuyerPoints(newOrder.getBuyer());
			orderDao.saveOrders(newOrder);
			return true;
		}
	
}
