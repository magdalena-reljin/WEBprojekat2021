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
	  
	   
	    public User getAdminById(String id) {
	        for(User admin :admins) {
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
				in=Files.newBufferedReader(Paths.get(dajana));
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
	   

}
