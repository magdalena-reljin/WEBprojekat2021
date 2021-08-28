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
import beans.Manager;
import beans.Restaurant;
import enums.RestaurantStatus;

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
		    String magdalena="C:\\Users\\computer\\Desktop\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\restaurants.json";
		    String dajana=s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\restaurants.json";
			in=Files.newBufferedReader(Paths.get(dajana));
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
    	if(getRestaurantByName(newRestaurant.getName())!= null) {
			Restaurant currentRestaurant= getRestaurantByName(newRestaurant.getName());
			int index=restaurants.indexOf(currentRestaurant);
			restaurants.remove(index);
			restaurants.add(index, newRestaurant);
		}else {
			restaurants.add(newRestaurant);
		}
		BufferedWriter writer=null;
		 
		 Gson gson = new Gson();
		   String json = gson.toJson(restaurants);  
		   System.out.println(json);
		   
		 try {
			 String magdalena="C:\\Users\\computer\\Desktop\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\restaurants.json";
			 String s=new File("").getAbsolutePath();
			 String dajana=s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\restaurants.json";
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
    
    public Restaurant getRestaurantByName(String name) {
        for(Restaurant restaurant :restaurants) {
            if(restaurant.getName().equals(name)) 
                return restaurant;
        }
        return null;
    }

    public List<Restaurant> getAllRestaurants(){
    	List<Restaurant> sortedByStatus=new ArrayList<Restaurant>();
    	for(Restaurant rest1: restaurants) {
    		if(rest1.getStatus().equals(RestaurantStatus.OPEN))
    			sortedByStatus.add(rest1);
    	}
    	for(Restaurant rest2: restaurants) {
    		if(rest2.getStatus().equals(RestaurantStatus.CLOSED))
    			sortedByStatus.add(rest2);
    	}
    	return sortedByStatus;
    }
    
    public Restaurant addNewItemInRestaurant(Restaurant newRestaurant) {
		// TODO Auto-generated method stub
		saveRestaurant(newRestaurant);
		return newRestaurant;
		
	}

	public void setAvg(String name, double num) {
		// TODO Auto-generated method stub
		Restaurant oldRestaurant=getRestaurantByName(name);
		oldRestaurant.setAvg(num);
		saveRestaurant(oldRestaurant);
	}

	public void deleteRestaurant(String name) {
		// TODO Auto-generated method stub
		Restaurant oldRestaurant=getRestaurantByName(name);
		oldRestaurant.setDeleted(true);
		saveRestaurant(oldRestaurant);
		
	}

	
	
}
