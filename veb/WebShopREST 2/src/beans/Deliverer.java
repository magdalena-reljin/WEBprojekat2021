package beans;

import java.util.List;

import enums.Gender;
import enums.Role;

public class Deliverer extends User {
     private List<Order> orders;

    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }

    public Deliverer(List<Order> orders) {
        super();
        this.orders = orders;
    }
    public Deliverer() {}

	public Deliverer(String username, String password, String name, String surname, Gender gender, String birthDate,
			Role role, boolean deleted, boolean blocked, List<Order> orders) {
		super(username, password, name, surname, gender, birthDate, role, deleted, blocked);
		this.orders = orders;
	}

	
    
}