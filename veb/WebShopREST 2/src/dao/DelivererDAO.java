package dao;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import com.google.gson.Gson;
import beans.Deliverer;

public class DelivererDAO {
	private List<Deliverer> deliverers=new ArrayList<Deliverer>();


    public DelivererDAO() {}
    
    public DelivererDAO(String contextPath) {
      //  loadUsers(contextPath);
        
    }
    public List<Deliverer> findAll() {
        return deliverers;
    }
 
    public Deliverer getDelivererById(String id) {
        for(Deliverer deliverer :deliverers) {
            if(deliverer.getUsername().equals(id)) 
                return deliverer;
        }
        return null;
    }
  

	public void saveDeliverer(Deliverer newDeliverer)  {
		deliverers.add(newDeliverer);
		BufferedWriter writer=null;
		
		 Gson gson = new Gson();
		   String json = gson.toJson(deliverers);  
		   System.out.println(json);
		   
		 try {
			 String s=new File("").getAbsolutePath();
			 File file = new File(s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\deliverers.json");
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
