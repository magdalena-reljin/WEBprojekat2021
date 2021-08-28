package services;

import java.io.IOException;
import java.text.ParseException;
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

import beans.Buyer;
import beans.Manager;
import beans.Order;
import beans.Restaurant;
import dao.BuyerDAO;
import dao.DelivererDAO;
import dao.ManagerDAO;
import dao.OrderDAO;
import dto.BasketDTO;
import dto.RequestDTO;
import enums.OrderStatus;



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
		
		
		@POST
		@Path("/getOrdersByBuyerID")
		@Consumes(MediaType.APPLICATION_JSON)
		@Produces(MediaType.APPLICATION_JSON)
		public List<Order> getOrdersByBuyerID(Buyer buyer, @Context HttpServletRequest request) throws IOException {
			OrderDAO orderDao = (OrderDAO) ctx.getAttribute("orderDAO");
			System.out.println("USPEO SAM get orders by buyer id -----------------------");
			return orderDao.getOrdersByBuyerID(buyer.getUsername());
		}
		
		@POST
		@Path("/buyerCancelsOrder")
		@Consumes(MediaType.APPLICATION_JSON)
		@Produces(MediaType.APPLICATION_JSON)
		public double buyerCancelsOrder(Order order, @Context HttpServletRequest request) throws IOException, ParseException {
			OrderDAO orderDao = (OrderDAO) ctx.getAttribute("orderDAO");
			BuyerDAO buyerDao = (BuyerDAO) ctx.getAttribute("buyerDAO");
			orderDao.buyerCancelsOrder(order);
			double points= buyerDao.setPointsAfterCancelingOrder(order);
			buyerDao.checkIfTrol(order.getBuyer());
			return points;
		}
		
		@POST
		@Path("/delete")
		@Consumes(MediaType.APPLICATION_JSON)
		@Produces(MediaType.APPLICATION_JSON)
		public void deleteOrder(Order order, @Context HttpServletRequest request) throws IOException {
			OrderDAO orderDao = (OrderDAO) ctx.getAttribute("orderDAO");
			orderDao.delete(order);
		}
		

		@POST
		@Path("/getOrdersForManager")
		@Consumes(MediaType.APPLICATION_JSON)
		@Produces(MediaType.APPLICATION_JSON)
		public List<Order> getOrdersForManager(BasketDTO basketDto, @Context HttpServletRequest request) throws IOException {
			OrderDAO orderDao = (OrderDAO) ctx.getAttribute("orderDAO");
			System.out.println("													stiglo ime restorana"+basketDto.getIdRest());
			return orderDao.getOrdersForManager(basketDto.getIdRest());
		}
		

		@PUT
		@Path("/setStatus")
		@Consumes(MediaType.APPLICATION_JSON)
		@Produces(MediaType.APPLICATION_JSON)
		public Order setStatus(Order order, @Context HttpServletRequest request) throws IOException {
			OrderDAO orderDao = (OrderDAO) ctx.getAttribute("orderDAO");
			System.out.println("		////tiglo ime restorana"+ order.getStatus());
			return orderDao.setStatus(order);
		}
		
		@GET
		@Path("/getOrdersForDeliverer")
		@Consumes(MediaType.APPLICATION_JSON)
		@Produces(MediaType.APPLICATION_JSON)
		public List<Order> getOrdersForDeliverer() throws IOException {
			OrderDAO orderDao = (OrderDAO) ctx.getAttribute("orderDAO");
			System.out.println("OOOOOOOOVDEEEEEEEEEEEEE SAM BIOOOOOOOOOOOOOOOO C O O L");
			
			return orderDao.getOrdersForDeliverer();
		}
		
		@POST
		@Path("/acceptOrder")
		@Consumes(MediaType.APPLICATION_JSON)
		@Produces(MediaType.APPLICATION_JSON)
		public void acceptOrder(RequestDTO requestDto, @Context HttpServletRequest request) throws IOException {
			OrderDAO orderDao = (OrderDAO)ctx.getAttribute("orderDAO");
			Order order =orderDao.getOrderById(requestDto.getOrderId());
			order.setStatus(OrderStatus.TRANSPORTING);
			orderDao.setStatus(order);
		}
		
		@POST
		@Path("/getDeliveredOrdersForBuyer")
		@Consumes(MediaType.APPLICATION_JSON)
		@Produces(MediaType.APPLICATION_JSON)
		public List<Order> getDeliveredOrdersForBuyer(Buyer buyer, @Context HttpServletRequest request) throws IOException {
			OrderDAO orderDao = (OrderDAO)ctx.getAttribute("orderDAO");
			System.out.println("trazim ordere od buyeraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa !!!!!!!!!!");
			return orderDao.getDeliveredOrdersForBuyer(buyer);
		}
		
		@POST
		@Path("/findData")
		@Consumes(MediaType.APPLICATION_JSON)
		@Produces(MediaType.APPLICATION_JSON)
		public Order findData(Order order, @Context HttpServletRequest request) {
			OrderDAO orderDao = (OrderDAO)ctx.getAttribute("orderDAO");
			System.out.println("USPEO SAM findData manager :)))");
			Order ord = orderDao.getOrderById(order.getId());
			System.out.println("								"+ "ja sam u find data order");
			return ord;
		}
		
}
