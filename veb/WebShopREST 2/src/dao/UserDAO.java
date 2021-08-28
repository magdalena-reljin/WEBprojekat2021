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
import beans.User;

public class UserDAO {
    
    private List<User> users;
   

    public UserDAO() {}
    
    public UserDAO(String contextPath) {
    	users=new ArrayList<User>();
    	for(User u:loadUsers(contextPath)) {
            users.add(u);
    	}
    }
    public List<User> findAll() {
    	List<User> userP=new ArrayList<User>();
    	for(User user:users) {
    		if(!user.isBlocked())
    			userP.add(user);
    	}
        return users;
    }
  
    public User findUser(String username, String password) {
        for(User user :users) {
            if(user.getUsername().equals(username) && user.getPassword().equals(password)) {
                return user;
            }
        }
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
		users.add(newUser);
		BufferedWriter writer=null;
		 
		 Gson gson = new Gson();
		   String json = gson.toJson(users);  
		   System.out.println(json);
		   
		 try {
			 String magdalena="C:\\Users\\computer\\Desktop\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\users.json";
			 String s=new File("").getAbsolutePath();
			 String dajana=s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\users.json";
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
	
	private List<User> loadUsers(String contextPath) {
		List<User> userss=new ArrayList<User>();
		Gson gson = new Gson();
		Reader in=null;
		try {
			String s=new File("").getAbsolutePath();
			System.out.println("putanja u load "+s);
		    String magdalena="C:\\Users\\computer\\Desktop\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\users.json";
		    String dajana=s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\users.json";
			in=Files.newBufferedReader(Paths.get(dajana));
			//in=Files.newBufferedReader(Paths.get(s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\users.json"));
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
		return userss;
	}

	public User editData(User user) {
		// TODO Auto-generated method stub
		User currentUser= getUserById(user.getUsername());
				users.remove(currentUser);
				saveUser(user);
				return user;
		
		
	}


	
}
