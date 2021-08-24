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

import beans.Buyer;
import beans.Deliverer;

public class DelivererDAO {
	private List<Deliverer> deliverers=new ArrayList<Deliverer>();


    public DelivererDAO() {}
    
    public DelivererDAO(String contextPath) {
    	for(Deliverer i:loadDeliverers(contextPath)) {
    		if(i.isDeleted()==false)
    			deliverers.add(i);
            
    	}
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
    private List<Deliverer> loadDeliverers(String contextPath) {
			List<Deliverer> delivererss=new ArrayList<Deliverer>();
			List<Deliverer> currentItemss=new ArrayList<Deliverer>();
			Gson gson = new Gson();
			Reader in=null;
			try {
				String s=new File("").getAbsolutePath();
				System.out.println("putanja u load "+s);
			    String magdalena="C:\\Users\\computer\\Desktop\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\buyers.json";
			    String dajana=s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\buyers.json";
				in=Files.newBufferedReader(Paths.get(magdalena));
				//in=Files.newBufferedReader(Paths.get(s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\users.json"));
				delivererss=Arrays.asList(gson.fromJson(in, Deliverer[].class));
			    
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
			for(Deliverer i: deliverers) {
				if(i.isDeleted()==false) {
					currentItemss.add(i);
				}
			}
			return currentItemss;
		}

  

	public void saveDeliverer(Deliverer newDeliverer)  {
		deliverers.add(newDeliverer);
		BufferedWriter writer=null;
		
		 Gson gson = new Gson();
		   String json = gson.toJson(deliverers);  
		   System.out.println(json);
		   
		 try {
			 String magdalena="C:\\Users\\computer\\Desktop\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\deliverers.json";
			 String s=new File("").getAbsolutePath();
			 String dajana=s+"\\web\\WEBprojekat2021\\veb\\WebShopREST 2\\deliverers.json";
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
