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

import beans.Buyer;
import beans.Item;
import beans.Restaurant;

public class ItemDAO {
	 private List<Item> items;
	   

	    public ItemDAO() {}
	    
	    public ItemDAO(String contextPath) {
	    	items=new ArrayList<Item>();
	    	
	    	for(Item i:loadItems(contextPath)) {
	    		if(i.getDeleted()==false)
	            items.add(i);
	            
	    	}
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
			if(getItemByName(newItem.getName())!= null) {
				Item currentItem= getItemByName(newItem.getName());
				int index=items.indexOf(currentItem);
				items.remove(index);
				items.add(index, newItem);
			}else {
				items.add(newItem);
			}
			BufferedWriter writer=null;
			 
			 Gson gson = new Gson();
			   String json = gson.toJson(items);  
			   System.out.println(json);
			   
			 try {
				 String magdalena="C:\\Users\\computer\\Desktop\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\items.json";
				 String s=new File("").getAbsolutePath();
				 String dajana=s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\items.json";
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
		
		private List<Item> loadItems(String contextPath) {
			List<Item> itemss=new ArrayList<Item>();
			List<Item> currentItemss=new ArrayList<Item>();
			Gson gson = new Gson();
			Reader in=null;
			try {
				String s=new File("").getAbsolutePath();
				System.out.println("putanja u load "+s);
			    String magdalena="C:\\Users\\computer\\Desktop\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\items.json";
			    String dajana=s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\items.json";
				in=Files.newBufferedReader(Paths.get(dajana));
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
			for(Item i: itemss) {
				if(i.getDeleted()==false) {
					currentItemss.add(i);
				}
			}
			return currentItemss;
		}

		

		public List<Item> findAllItemsInRestaurant(Restaurant r) {
			List<Item> itemsInRestaurant=new ArrayList<Item>();
			for(Item item:items) {
				if(item.getRestaurant().getName().equals(r.getName()) && item.getDeleted()==false)
					itemsInRestaurant.add(item);
			}
			return itemsInRestaurant;
		}

		public Item updateItem(Item item) {
			Item oldItem= getItemByName(item.getName());
			saveItem(item);
			return item;
		}

		public String getRestaurant(String name) {
			Item item=getItemByName(name);
			return item.getRestaurant().getName();
		}

		public void deleteItem(String item) {
			// TODO Auto-generated method stub
			Item itemToDelete=getItemByName(item);
			itemToDelete.setDeleted(true);
			saveItem(itemToDelete);
			
		}

}
