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

import beans.Basket;
import beans.Buyer;
import beans.Item;
import beans.Order;
import beans.User;
import dto.BasketDTO;
import enums.BuyerTitle;

public class BuyerDAO {
		private List<Buyer> buyers=new ArrayList<Buyer>();
	 
	    public BuyerDAO() {}
	    
	    public BuyerDAO(String contextPath) {
	    	for(Buyer i:loadBuyers(contextPath)) {
	    		if(i.isDeleted()==false)
	    			buyers.add(i);
	            
	    	}
	    	
	    
	        
	    }
	    public List<Buyer> findAll() {
	    	List<Buyer> buyerP=new ArrayList<Buyer>();
	    	for(Buyer buyer: buyers) {
	    		if(!buyer.isDeleted())
	    			buyerP.add(buyer);
	    	}
	        return buyers;
	    }
	 
	    public Buyer getBuyerById(String id) {
	        for(Buyer buyer :buyers) {
	            if(buyer.getUsername().equals(id)) 
	                return buyer;
	        }
	        return null;
	    }
	  
	    private List<Buyer> loadBuyers(String contextPath) {
			List<Buyer> buyerss=new ArrayList<Buyer>();
			List<Buyer> currentItemss=new ArrayList<Buyer>();
			Gson gson = new Gson();
			Reader in=null;
			try {
				String s=new File("").getAbsolutePath();
				System.out.println("putanja u load "+s);
			    String magdalena="C:\\Users\\computer\\Desktop\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\buyers.json";
			    String dajana=s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\buyers.json";
				in=Files.newBufferedReader(Paths.get(magdalena));
				//in=Files.newBufferedReader(Paths.get(s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\users.json"));
				buyerss=Arrays.asList(gson.fromJson(in, Buyer[].class));
			    
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
			for(Buyer i: buyerss) {
				if(i.isDeleted()==false) {
					currentItemss.add(i);
				}
			}
			return currentItemss;
		}



		public void saveBuyer(Buyer newBuyer)  {
			buyers.add(newBuyer);
			BufferedWriter writer=null;
			
			 Gson gson = new Gson();
			   String json = gson.toJson(buyers);  
			   System.out.println(json);
			   
			 try {
				 String magdalena="C:\\Users\\computer\\Desktop\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\buyers.json";
				 String s=new File("").getAbsolutePath();
				 String dajana=s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\buyers.json";
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

		public void updateBasket(Basket buyerBasket) {
			// TODO Auto-generated method stu
			List<Item>items=new ArrayList<Item>();
			 Buyer currentBuyer=getBuyerById(buyerBasket.getBuyer().getUsername());
			 buyers.remove(currentBuyer);
			 
			 items.addAll(currentBuyer.getBasket().getItems());
				for(Item it: buyerBasket.getItems()) {

					if(!it.getName().equals("") )
					  items.add(it);
					
				}
				currentBuyer.getBasket().setItems(items);
				saveBuyer(currentBuyer);
			}

		public Basket findBasket(Buyer buyer) {
			Buyer currentBuyer=getBuyerById(buyer.getUsername());
			return currentBuyer.getBasket();
		}
		

		public Basket removeItemFromBasket(BasketDTO basket) {
			// TODO Auto-generated method stub
			List<Item> itemss=new ArrayList<Item>();
			Buyer currentBuyer=getBuyerById(basket.getIdBuyer());
			for(Item item: currentBuyer.getBasket().getItems()) {
				if(item.getName().equals(basket.getIdItem())) {
						item.setDeleted(true);
				}
				itemss.add(item);
			}
			currentBuyer.getBasket().setItems(itemss);
			buyers.remove(currentBuyer);
			saveBuyer(currentBuyer);
			return currentBuyer.getBasket();
		}

		public Item isItemInBasket(BasketDTO basket) {
			// TODO Auto-generated method stub
			Buyer currentBuyer=getBuyerById(basket.getIdBuyer());
			for(Item item: currentBuyer.getBasket().getItems()) {
				if(item.getName().equals(basket.getIdItem()) && item.getDeleted()==false){
					return item;
				}
			}
			return null;
		}

		public int numOfItemsInBasket(BasketDTO basket) {
			// TODO Auto-generated method stub
			int number=0;
			
			Buyer currentBuyer=getBuyerById(basket.getIdBuyer());
			for(Item item: currentBuyer.getBasket().getItems()) {
				if(item.getDeleted()==false && item.getRestaurant().getName().equals(basket.getIdRest())){
					number++;
				}
			}
			return number;
		}

		public void updateNumberInOrder(BasketDTO buyerBasket) {
			// TODO Auto-generated method stub
			List<Item>items=new ArrayList<Item>();
			List<Item>itemss=new ArrayList<Item>();
			 Buyer currentBuyer=getBuyerById(buyerBasket.getIdBuyer());
			 buyers.remove(currentBuyer);
			 
			 items.addAll(currentBuyer.getBasket().getItems());
				for(Item it:items) {
					if(it.getName().equals(buyerBasket.getIdItem())) {
						it.setNumberInOrder(buyerBasket.getNumOfOrder());
						
				}
					itemss.add(it);
			}
				currentBuyer.getBasket().setItems(itemss);
				saveBuyer(currentBuyer);
			}

		public int totalPrice(BasketDTO buyerBasket) {
			// TODO Auto-generated method stub
			int totalPrice=0;
			 Buyer currentBuyer=getBuyerById(buyerBasket.getIdBuyer());
			 for(Item item: currentBuyer.getBasket().getItems()) {
					if(item.getDeleted()==false && item.getRestaurant().getName().equals(buyerBasket.getIdRest())){
						totalPrice+=item.getNumberInOrder()*item.getPrice();
					}
				}
			return totalPrice;
		}

		public List<Item> findItemInBuyerBasket(BasketDTO buyerBasket) {
			// TODO Auto-generated method stub
			List<Item>itemsInBasket=new ArrayList<Item>();
			 Buyer currentBuyer=getBuyerById(buyerBasket.getIdBuyer());
			 for(Item item: currentBuyer.getBasket().getItems()) {
					if(item.getDeleted()==false && item.getRestaurant().getName().equals(buyerBasket.getIdRest())){
						itemsInBasket.add(item);
					}
		}
			
			
			return itemsInBasket;
		}

		public void updateBuyerPoints(Buyer buyer) {
			// TODO Auto-generated method stub
			Buyer currentBuyer=getBuyerById(buyer.getUsername());
			double currentPoints=currentBuyer.getPoints()+buyer.getPoints();
		
			if(currentPoints <3000) {
				currentBuyer.getType().setPoints(3000-currentPoints);
			}else if(currentPoints >= 3000 && currentPoints<4000) {
					currentBuyer.getType().setTitle(BuyerTitle.SILVER);
					currentBuyer.getType().setDiscount(3);
					currentBuyer.getType().setPoints(4000-currentPoints);
					
		    }else if(currentPoints>=4000) {
		    	currentBuyer.getType().setTitle(BuyerTitle.GOLD);
				currentBuyer.getType().setDiscount(5);
			
		    }		
			
			currentBuyer.setPoints(currentPoints);
			buyers.remove(currentBuyer);
			saveBuyer(currentBuyer);
			
		}

		

		public void clearBasketAfterOrdering(BasketDTO buyerBasket) {
			// TODO Auto-generated method stub
			Buyer currentBuyer=getBuyerById(buyerBasket.getIdBuyer());
			List<Item> newBasket=new ArrayList<Item>();
			for(Item item: currentBuyer.getBasket().getItems()) {
				if(item.getRestaurant().getName().equals(buyerBasket.getIdRest()) && item.getDeleted()==false)
						item.setDeleted(true);
						
				newBasket.add(item);
			}
			currentBuyer.getBasket().setItems(newBasket);
			buyers.remove(currentBuyer);
			saveBuyer(currentBuyer);
		}

		public double setPointsAfterCancelingOrder(Order order) {
			// TODO Auto-generated method stub
			System.out.println("ovo je name od buuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuyera"+order.getBuyer().getUsername());
			Buyer buyer=getBuyerById(order.getBuyer().getUsername());
			double currentPoints=buyer.getPoints();
			double lostPoints=order.getCena()/1000*133*4;
			double newPoints=currentPoints-lostPoints;
			if(newPoints<0)
				newPoints=0;
			
			
			if(newPoints <3000) {
				buyer.getType().setPoints(3000-newPoints);
				buyer.getType().setTitle(BuyerTitle.BRONZE);
				buyer.getType().setDiscount(0);
			}else if(newPoints >= 3000 && newPoints<4000) {
					buyer.getType().setTitle(BuyerTitle.SILVER);
					buyer.getType().setDiscount(3);
					buyer.getType().setPoints(4000-newPoints);
					
		    }else if(newPoints>=4000) {
		    	buyer.getType().setTitle(BuyerTitle.GOLD);
				buyer.getType().setDiscount(5);
			
		    }		
			
			buyers.remove(buyer);
			buyer.setPoints(newPoints);
			saveBuyer(buyer);
			return lostPoints;
		}

		public int getDiscount(BasketDTO basket) {
			// TODO Auto-generated method stub
			Buyer buyer=getBuyerById(basket.getIdBuyer());
			if(buyer.getType().getTitle().equals(BuyerTitle.BRONZE)) {
				return 0;
			}else if(buyer.getType().getTitle().equals(BuyerTitle.SILVER)) {
				return 3;
			}
			return 5;
			
		}

		public User editData(User user) {
			// TODO Auto-generated method stub
			Buyer buyer=getBuyerById(user.getUsername());
			buyers.remove(buyer);
			buyer.setName(user.getName());
			buyer.setSurname(user.getSurname());
			saveBuyer(buyer);
			return buyer;
		}

		public BuyerTitle buyerType(User user) {
			// TODO Auto-generated method stub
			Buyer buyer=getBuyerById(user.getUsername());
			return buyer.getType().getTitle();
		}
			
		
			
		
}
