package dao;
import java.util.ArrayList;
import java.util.List;
import beans.User;
import enums.Gender;
import enums.Role;

public class UserDAO {
    
    private List<User> users=new ArrayList<User>();
    
    public UserDAO() {}
    
    public UserDAO(String contextPath) {
      //  loadUsers(contextPath);
        users.add(new User("magdalena@gmail.com","a","Magdalena","Reljin",Gender.FEMALE,"",Role.ADMINISTRATOR));
        users.add(new User("dajana@gmail.com","da","Dajana","Zlokapa",Gender.FEMALE,"",Role.ADMINISTRATOR));
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
  

	public void saveUser(User newUser) {
		users.add(newUser);
		
	}
}
