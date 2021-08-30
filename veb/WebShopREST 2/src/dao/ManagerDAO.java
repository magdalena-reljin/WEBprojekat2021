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

import beans.Deliverer;
import beans.Manager;
import beans.Restaurant;
import beans.User;

public class ManagerDAO {
	 private List<Manager> managers;
	   

	    public ManagerDAO() {}
	    
	    public ManagerDAO(String contextPath) {
	    	managers=new ArrayList<Manager>();
	    	for(Manager m: loadManagers(contextPath)) {
	    		managers.add(m);
	            System.out.println("user stigao"+m.getUsername());
	    	}
	    }
	    
	    private List<Manager> loadManagers(String contextPath) {
			List<Manager> managerss=new ArrayList<Manager>();
			Gson gson = new Gson();
			Reader in=null;
			try {
				String s=new File("").getAbsolutePath();
				System.out.println("putanja u load "+s);
			    String magdalena="C:\\Users\\computer\\Desktop\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\managers.json";
			    String dajana=s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\managers.json";
				in=Files.newBufferedReader(Paths.get(dajana));
				managerss=Arrays.asList(gson.fromJson(in, Manager[].class));
			    
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
			for(Manager u: managerss)
				System.out.println("managersss    "+u.getUsername());
			return managerss;
		}
	    public void saveManager(Manager newUser)  {
	    	if(getManagerById(newUser.getUsername())!= null) {
				Manager currentManager= getManagerById(newUser.getUsername());
				int index=managers.indexOf(currentManager);
				managers.remove(index);
				managers.add(index, newUser);
			}else {
				managers.add(newUser);
			}
			BufferedWriter writer=null;
			 
			 Gson gson = new Gson();
			   String json = gson.toJson(managers);  
			   System.out.println(json);
			   
			 try {
				 String magdalena="C:\\Users\\computer\\Desktop\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\managers.json";
				 String s=new File("").getAbsolutePath();
				 String dajana=s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\managers.json";
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
	    
	    public Manager getManagerById(String id) {
	        for(Manager manager :managers) {
	            if(manager.getUsername().equals(id) && manager.isDeleted()==false) 
	                return manager;
	        }
	        return null;
	    }

		public List<String> findUnemployed() {
			List<String> unemployedManagers=new ArrayList<String>();
			for(Manager manager: managers) {
				if(manager.getRestaurant().getName().equals("")) {
					unemployedManagers.add(manager.getUsername());
				}
			}
			return unemployedManagers;
		}

		public Manager addRestaurant(Manager newManager) {
			// TODO Auto-generated method stub
			Manager oldManager=getManagerById(newManager.getUsername());
			oldManager.setRestaurant(newManager.getRestaurant());
			saveManager(oldManager);
			return oldManager;
			
		}


		public String getManagerByRestaurantName(String r) {
			for(Manager manager: managers) {
		    	if(manager.getRestaurant().getName().equals(r))
		    		return manager.getUsername();
		    }
		    return "";
		}


		public User editData(User user) {
			// TODO Auto-generated method stub
			Manager manager= getManagerById(user.getUsername());
			manager.setName(user.getName());
			manager.setSurname(user.getSurname());
			saveManager(manager);
			return manager;
		}
		public Manager deleteManager(User user) {
			// TODO Auto-generated method stub
			Manager manager= getManagerById(user.getUsername());
			manager.setDeleted(true);
			saveManager(manager);
			return manager;
		}

		public void deleteRestaurant(Restaurant restaurant) {
			// TODO Auto-generated method stub
			for(Manager manager:managers) {
				if(manager.getRestaurant().getName().equals(restaurant.getName())) {
					manager.setRestaurant(new Restaurant(""));
					saveManager(manager);
				}
			}
			
		}
		

}

