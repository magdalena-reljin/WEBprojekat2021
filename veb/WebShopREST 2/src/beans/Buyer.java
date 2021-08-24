package beans;

import java.util.List;

import enums.Gender;
import enums.Role;

public class Buyer extends User {
    private List<Order> orders;
    private Basket basket;
    private double points;
    private BuyerType type;
	
    
    public BuyerType getType() {
		return type;
	}
	public void setType(BuyerType type) {
		this.type = type;
	}
	public Buyer(String username, String password, String name, String surname, Gender gender, String birthDate,
			Role role, boolean deleted, boolean blocked, List<Order> orders, Basket basket, double points,BuyerType type) {
		super(username, password, name, surname, gender, birthDate, role, deleted, blocked);
		this.orders = orders;
		this.basket = basket;
		this.points = points;
		this.type = type;
	}
	public List<Order> getOrders() {
        return orders;
    }
    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }
    public Basket getBasket() {
        return basket;
    }
    public void setBasket(Basket basket) {
        this.basket = basket;
    }
    public double getPoints() {
        return points;
    }
    public void setPoints(double points) {
        this.points = points;
    }
    public Buyer() {}

}