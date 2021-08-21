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

import beans.Manager;
import beans.Restaurant;

public class RestaurantDAO {

	   List<Restaurant> restaurants;

    public RestaurantDAO() {}
    
    public RestaurantDAO(String contextPath) {
    	restaurants=new ArrayList<Restaurant>();
    	for(Restaurant r: loadRestaurant(contextPath)) {
    		restaurants.add(r);
        
    	}
    }
    
    private List<Restaurant> loadRestaurant(String contextPath) {
		List<Restaurant> restaurantss=new ArrayList<Restaurant>();
		Gson gson = new Gson();
		Reader in=null;
		try {
			String s=new File("").getAbsolutePath();
			System.out.println("putanja u load "+s);
		
			in=Files.newBufferedReader(Paths.get(s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\restaurants.json"));
			restaurantss=Arrays.asList(gson.fromJson(in, Restaurant[].class));
		    
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
	
		return restaurantss;
	}
    public void saveRestaurant(Restaurant newRestaurant)  {
		
		restaurants.add(newRestaurant);
		BufferedWriter writer=null;
		 
		 Gson gson = new Gson();
		   String json = gson.toJson(restaurants);  
		   System.out.println(json);
		   
		 try {
			 String s=new File("").getAbsolutePath();
			 
			 File file = new File(s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\restaurants.json");
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
    
    public Restaurant getRestaurantByName(String name) {
        for(Restaurant restaurant :restaurants) {
            if(restaurant.getName().equals(name)) 
                return restaurant;
        }
        return null;
    }

    public List<Restaurant> getAllRestaurants(){
    	return restaurants;
    }
    
	
	
}
