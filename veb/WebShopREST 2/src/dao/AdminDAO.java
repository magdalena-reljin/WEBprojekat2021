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
import beans.Item;
import beans.User;
import enums.Gender;
import enums.Role;

public class AdminDAO {
	 private List<Admin> admins=new ArrayList<Admin>();

		

	    public AdminDAO() {}
	    
	    public AdminDAO(String contextPath) {
	      admins=loadAdmins(contextPath);
	    }
	    public List<Admin> findAll() {
	        return admins;
	    }
	  
	   
	    public Admin getAdminById(String id) {
	        for(Admin admin :admins) {
	            if(admin.getUsername().equals(id)) 
	                return admin;
	        }
	        return null;
	    }
	  
	    private List<Admin> loadAdmins(String contextPath) {
			List<Admin> adminss=new ArrayList<Admin>();
			List<Admin> currentItemss=new ArrayList<Admin>();
			Gson gson = new Gson();
			Reader in=null;
			try {
				String s=new File("").getAbsolutePath();
				System.out.println("putanja u load "+s);
			    String magdalena="C:\\Users\\computer\\Desktop\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\admins.json";
			    String dajana=s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\admins.json";
				in=Files.newBufferedReader(Paths.get(magdalena));
				//in=Files.newBufferedReader(Paths.get(s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\users.json"));
				adminss=Arrays.asList(gson.fromJson(in, Admin[].class));
			    
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
			for(Admin i: adminss) {
				if(i.isDeleted()==false) {
					currentItemss.add(i);
				}
			}
			return currentItemss;
		}
	   
		public void saveAdmin(Admin newAdmin)  {
			if(getAdminById(newAdmin.getUsername())!= null) {
				Admin currentAdmin= getAdminById(newAdmin.getUsername());
				int index=admins.indexOf(currentAdmin);
				admins.remove(index);
				admins.add(index, newAdmin);
			}else {
				admins.add(newAdmin);
			}
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
		public User editData(User user) {
			// TODO Auto-generated method stub
			Admin admin= getAdminById(user.getUsername());
			admin.setName(user.getName());
			admin.setSurname(user.getSurname());
			saveAdmin(admin);
			return admin;
		}
			

}
