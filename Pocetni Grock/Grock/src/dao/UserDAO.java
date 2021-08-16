package dao;


import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.Writer;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Date;
import beans.User;
import enums.Gender;
import enums.Role;


public class UserDAO {
	
	private List<User> users=new ArrayList<User>();
	
	public UserDAO() {}
    
    public UserDAO(String contextPath) {
      //  loadUsers(contextPath);
    	users.add(new User("magdalena@gmail.com","a","magdalena",Gender.FEMALE,"",Role.ADMINISTRATOR));
    	users.add(new User("dajana@gmail.com","da","dajana",Gender.FEMALE,"",Role.ADMINISTRATOR));
    }
    public List<User> findAll() {
        return users;
    }
    private void loadLoggedUsers() throws IOException {
    	
    	User user=new User("dfvd","aaa","fdd",Gender.FEMALE,"aaaa",Role.ADMINISTRATOR);
    	users.add(user);
    	 String fileName = "files/users.json";
         Path path = Paths.get(fileName);
         
         try (Writer writer = Files.newBufferedWriter(path, StandardCharsets.UTF_8)) {

             Gson gson = new Gson();
             gson.toJson(users, writer);
         }
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
	public User getUserById(String user) {
    	for(User user :users) {
    		if(user.getUsername().equals(id)) 
    			return user;
    	}
		return null;
	}
    
}
