package dao;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Reader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.print.DocFlavor.URL;
import javax.ws.rs.Path;

import com.fasterxml.jackson.annotation.JsonSubTypes.Type;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import beans.User;
import enums.Gender;
import enums.Role;

public class UserDAO {
    
    private List<User> users;
   

    public UserDAO() {}
    
    public UserDAO(String contextPath) {
    	users=new ArrayList<User>();
    	for(User u:loadUsers(contextPath)) {
            users.add(u);
            System.out.println("user stigao"+u.getUsername());
    	}
    }
    public List<User> findAll() {
        return users;
    }
  
    public User findUser(String username, String password) {
        System.out.println("usao sam u fin user");
        for(User user :users) {
            if(user.getUsername().equals(username) && user.getPassword().equals(password)) {
                System.out.println("nasao sam usera");
                return user;
            }
        }
        System.out.println("nisam nasao usera");
        return null;
    }
    public User getUserById(String id) {
        for(User user :users) {
            if(user.getUsername().equals(id)) 
                return user;
        }
        return null;
    }
  

	public void saveUser(User newUser)  {
		newUser.setName("");
		newUser.setBirthDate("");
		newUser.setSurname("");
		users.add(newUser);
		BufferedWriter writer=null;
		 
		 Gson gson = new Gson();
		   String json = gson.toJson(users);  
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
	
	private List<User> loadUsers(String contextPath) {
		List<User> userss=new ArrayList<User>();
		Gson gson = new Gson();
		Reader in=null;
		try {
			String s=new File("").getAbsolutePath();
			System.out.println("putanja u load "+s);
			in=Files.newBufferedReader(Paths.get(s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\users.json"));
			userss=Arrays.asList(gson.fromJson(in, User[].class));
		    
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
		for(User u: userss)
			System.out.println("user "+u.getUsername());
		return userss;
	}
	
}
