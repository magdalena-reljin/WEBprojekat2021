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

import beans.Admin;
import beans.Buyer;
import beans.Deliverer;
import beans.Order;
import beans.User;
import dto.BasketDTO;
import dto.RequestDTO;
import enums.OrderStatus;

public class DelivererDAO {
	private List<Deliverer> deliverers;


    public DelivererDAO() {}
    
    public DelivererDAO(String contextPath) {
    	deliverers=new ArrayList<Deliverer>();
    	for(Deliverer i:loadDeliverers(contextPath)) {
    		if(i.isDeleted()==false)
    			deliverers.add(i);
            
    	}
    }
    public List<Deliverer> findAll() {
        return deliverers;
    }
 
    public Deliverer getDelivererById(String id) {
        for(Deliverer deliverer :deliverers) {
            if(deliverer.getUsername().equals(id)) 
                return deliverer;
        }
        return null;
    }
    private List<Deliverer> loadDeliverers(String contextPath) {
			List<Deliverer> delivererss=new ArrayList<Deliverer>();
			List<Deliverer> currentItemss=new ArrayList<Deliverer>();
			Gson gson = new Gson();
			Reader in=null;
			try {
				String s=new File("").getAbsolutePath();
				System.out.println("putanja u load "+s);
			    String magdalena="C:\\Users\\computer\\Desktop\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\deliverers.json";
			    String dajana=s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\deliverers.json";
				in=Files.newBufferedReader(Paths.get(magdalena));
				//in=Files.newBufferedReader(Paths.get(s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\users.json"));
				delivererss=Arrays.asList(gson.fromJson(in, Deliverer[].class));
			    
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
			for(Deliverer i: delivererss) {
				if(i.isDeleted()==false) {
					currentItemss.add(i);
				}
			}
			return currentItemss;
		}

  

	public void saveDeliverer(Deliverer newDeliverer)  {
		deliverers.add(newDeliverer);
		BufferedWriter writer=null;
		
		 Gson gson = new Gson();
		   String json = gson.toJson(deliverers);  
		   System.out.println(json);
		   
		 try {
			 String magdalena="C:\\Users\\computer\\Desktop\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\deliverers.json";
			 String s=new File("").getAbsolutePath();
			 String dajana=s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\deliverers.json";
			 File file = new File(magdalena);
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


	public void addOrder(Deliverer deliverer) {
		// TODO Auto-generated method stub
		List<Order> orders = new ArrayList<Order>();
	
		Deliverer currentDeliverer= getDelivererById(deliverer.getUsername());
		deliverers.remove(currentDeliverer);
			for(Order order: deliverer.getOrders()) {
				if(!order.getId().equals("")) {
					orders.add(order);
				}
				
			}
		currentDeliverer.setOrders(orders);
		saveDeliverer(currentDeliverer);
		
		
	}

	public void accept(RequestDTO requestDto) {
		// TODO Auto-generated method stub
		Deliverer currentD= getDelivererById(requestDto.getDelivererId());
		deliverers.remove(currentD);
		for(Order order: currentD.getOrders()) {
			if(order.getId().equals(requestDto.getOrderId())) {
				order.setStatus(OrderStatus.TRANSPORTING);
			}
		}
		saveDeliverer(currentD);
	}

		
	

	public void deny(RequestDTO requestDto) {
		// TODO Auto-generated method stub
		List<Order>orders= new ArrayList<Order>();
		Deliverer currentD= getDelivererById(requestDto.getDelivererId());
		deliverers.remove(currentD);
		for(Order order: currentD.getOrders()) {
			if(order.getId().equals(requestDto.getOrderId()) && !currentD.getUsername().equals(requestDto.getDelivererId())) {
				orders.add(order);
			}
		}
	   currentD.setOrders(orders);
		saveDeliverer(currentD);
	}

	public List<Order> getOrdersForDeliverer(String orderId) {
		// TODO Auto-generated method stub
		Deliverer currentD= getDelivererById(orderId);
		return currentD.getOrders();
		
	}

	public void setStatus(RequestDTO req) {
		// TODO Auto-generated method stub
		Deliverer currentD= getDelivererById(req.getDelivererId());
		deliverers.remove(currentD);
		for(Order order: currentD.getOrders()) {
			if(order.getId().equals(req.getOrderId()) &&order.getStatus().equals(OrderStatus.TRANSPORTING)) {
				order.setStatus(OrderStatus.DELIVERED);
			}
		}
		saveDeliverer(currentD);
		
	}

	public User editData(User user) {
		// TODO Auto-generated method stub
		Deliverer deliverer= getDelivererById(user.getUsername());
		deliverers.remove(deliverer);
		deliverer.setName(user.getName());
		deliverer.setSurname(user.getSurname());
		saveDeliverer(deliverer);
		return deliverer;
	}
		

}
