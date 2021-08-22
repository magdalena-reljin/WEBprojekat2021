package dao;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;

import beans.User;
import enums.Gender;
import enums.Role;

public class AdminDAO {
	 private List<User> admins=new ArrayList<User>();

	

	    public AdminDAO() {}
	    
	    public AdminDAO(String contextPath) {
	      //  loadUsers(contextPath);
	    	admins.add(new User("magdalena@gmail.com","a","Magdalena","Reljin",Gender.FEMALE,"",Role.ADMINISTRATOR, false, false));
	    	admins.add(new User("dajana@gmail.com","da","Dajana","Zlokapa",Gender.FEMALE,"",Role.ADMINISTRATOR, false, false));
	   
	    }
	    public List<User> findAll() {
	        return admins;
	    }
	  
	   
	    public User getAdminById(String id) {
	        for(User admin :admins) {
	            if(admin.getUsername().equals(id)) 
	                return admin;
	        }
	        return null;
	    }
	  

		public void saveAdmin(User newUser)  {
			admins.add(newUser);
			BufferedWriter writer=null;
			
			 Gson gson = new Gson();
			   String json = gson.toJson(admins);  
			   System.out.println(json);
			   
			 try {
				 String magdalena="C:\\Users\\computer\\Desktop\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\admins.json";
				 String s=new File("").getAbsolutePath();
				 String dajana=s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\admins.json";
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
}
