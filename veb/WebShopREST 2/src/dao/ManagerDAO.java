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
				File file = new File("C:\\Users\\computer\\Desktop\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\users.json");
				in=Files.newBufferedReader(Paths.get("C:\\Users\\computer\\Desktop\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\users.json"));
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
			
			managers.add(newUser);
			BufferedWriter writer=null;
			 
			 Gson gson = new Gson();
			   String json = gson.toJson(managers);  
			   System.out.println(json);
			   
			 try {
				 String s=new File("").getAbsolutePath();
				 
				 File file = new File(s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\users.json");
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
