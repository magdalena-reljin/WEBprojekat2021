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

import beans.Item;
import beans.Restaurant;
import beans.User;

public class ItemDAO {
	 private List<Item> items;
	   

	    public ItemDAO() {}
	    
	    public ItemDAO(String contextPath) {
	    	System.out.println("BIO SAM OVDE ITEM DAO");
	    	items=new ArrayList<Item>();
	    	for(Item i:loadItems(contextPath)) {
	            items.add(i);
	            System.out.println("item stigao"+i.getName());
	            
	    	}
	    	System.out.println("BIO SAM OVDE ITEM DAO kraj");
	    }
	    public List<Item> findAll() {
	        return items;
	    }
	  
	    public Item getItemByName(String id) {
	        for(Item item :items) {
	            if(item.getName().equals(id)) 
	                return item;
	        }
	        return null;
	    }
	  

		public void saveItem(Item newItem)  {
			
			BufferedWriter writer=null;
			 
			 Gson gson = new Gson();
			   String json = gson.toJson(items);  
			   System.out.println(json);
			   
			 try {
				 String magdalena="C:\\Users\\computer\\Desktop\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\items.json";
				 String s=new File("").getAbsolutePath();
				 String dajana=s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\items.json";
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
		
		private List<Item> loadItems(String contextPath) {
			List<Item> itemss=new ArrayList<Item>();
			Gson gson = new Gson();
			Reader in=null;
			try {
				String s=new File("").getAbsolutePath();
				System.out.println("putanja u load "+s);
			    String magdalena="C:\\Users\\computer\\Desktop\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\items.json";
			    String dajana=s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\items.json";
				in=Files.newBufferedReader(Paths.get(magdalena));
				//in=Files.newBufferedReader(Paths.get(s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\users.json"));
				itemss=Arrays.asList(gson.fromJson(in, Item[].class));
			    
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
			for(Item u: itemss)
				System.out.println("item "+u.getName());
			return itemss;
		}

		

		public List<Item> findAllItemsInRestaurant(Restaurant r) {
			List<Item> itemsInRestaurant=new ArrayList<Item>();
			for(Item item:items) {
				if(item.getRestaurant().getName().equals(r.getName()))
					itemsInRestaurant.add(item);
			}
			return itemsInRestaurant;
		}
}
