package dao;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Reader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.google.gson.Gson;

import beans.Order;
import beans.Restaurant;
import enums.OrderStatus;

public class OrderDAO {

	
	   List<Order> orders;

 public OrderDAO() {}
 
 public OrderDAO(String contextPath) {
	 orders=new ArrayList<Order>();
 	for(Order r: loadOrders(contextPath)) {
 		orders.add(r);
     
 	}
 }
 
 private List<Order> loadOrders(String contextPath) {
		List<Order> orderss=new ArrayList<Order>();
		Gson gson = new Gson();
		Reader in=null;
		try {
			String s=new File("").getAbsolutePath();
			System.out.println("putanja u load "+s);
		    String magdalena="C:\\Users\\computer\\Desktop\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\orders.json";
		    String dajana=s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\orders.json";
			in=Files.newBufferedReader(Paths.get(dajana));
			orderss=Arrays.asList(gson.fromJson(in, Order[].class));
		    
		} catch (Exception ex) {
			ex.printStackTrace();
		}finally {
			if (in != null) {
				try {
					in.close();
				}
				catch (Exception e) { }
			}
		}
	
		return orderss;
	}
 public void saveOrders(Order newOrder)  {
		
		orders.add(newOrder);
		BufferedWriter writer=null;
		 
		 Gson gson = new Gson();
		   String json = gson.toJson(orders);  
		   System.out.println(json);
		   
		 try {
			 String magdalena="C:\\Users\\computer\\Desktop\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\orders.json";
			 String s=new File("").getAbsolutePath();
			 String dajana=s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\orders.json";
			 File file = new File(dajana);
			writer = new BufferedWriter(new FileWriter(file));
			  writer.write(json);
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			if(writer!=null) {
				try {
					writer.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
		
	}
 
 public Order getOrderById(String id) {
     for(Order order :orders) {
         if(order.getId().equals(id)) 
             return order;
     }
     return null;
 }

public List<Order> getOrdersByBuyerID(String username) {
	List<Order> activeOrders=new ArrayList<Order>();
	for(Order order: orders) {
		if(order.getBuyer().getUsername().equals(username) && 
				!order.getStatus().equals(OrderStatus.CANCELED) &&
				!order.getStatus().equals(OrderStatus.DELIVERED) 
				) {
			activeOrders.add(order);
		}
	}
	return activeOrders;
}

public void buyerCancelsOrder(Order order) {
	// TODO Auto-generated method stub
	Order orderForCanceling=getOrderById(order.getId());
	orders.remove(order);
	orderForCanceling.setStatus(OrderStatus.CANCELED);
	saveOrders(orderForCanceling);
}

public List<Order> getOrdersForManager(String idRest) {
	List<Order> ordersForManager=new ArrayList<Order>();
	for(Order order: orders) {
		if(order.getRestaurant().getName().equals(idRest) && !order.getStatus().equals(OrderStatus.DELIVERED))
			ordersForManager.add(order);
	}
	return ordersForManager;
}

public Order setStatus(Order order) {
	// TODO Auto-generated method stu
	Order orderSet=getOrderById(order.getId());
	orders.remove(orderSet);
	orderSet.setStatus(order.getStatus());
	saveOrders(orderSet);

	return orderSet;
}

public List<Order> getOrdersForDeliverer() {
	// TODO Auto-generated method stub
	List<Order>ordersForDeliverer= new ArrayList<Order>();
	for(Order order: orders) {
		if(order.getStatus().equals(OrderStatus.WAINTINGFORDELIVERY) || order.getStatus().equals(OrderStatus.WAINTINGFORMANAGER)) {
			ordersForDeliverer.add(order);
		}
	}
	return ordersForDeliverer;
}

}
