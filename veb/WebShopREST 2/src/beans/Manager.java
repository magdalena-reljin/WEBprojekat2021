package beans;
import com.google.gson.annotations.Expose;

import enums.Gender;
import enums.Role;

public class Manager extends User {

     private Restaurant restaurant;

    public Restaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }

    
    public Manager(String username, String password, String name, String surname, Gender gender, String birthDate,
			Role role, boolean deleted, boolean blocked, Restaurant restaurant) {
		super(username, password, name, surname, gender, birthDate, role, deleted, blocked);
		this.restaurant = restaurant;
	}

	public Manager() {}
}