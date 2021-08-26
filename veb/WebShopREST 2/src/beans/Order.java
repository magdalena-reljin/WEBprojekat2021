package beans;


import java.util.List;

import enums.OrderStatus;

public class Order {
     private String id;
     private List<Item> items;
     private Restaurant restaurant;
     private String dateAndTime;
     private double cena;
     private Buyer buyer;
     private OrderStatus status;
     private boolean deleted;
     public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public List<Item> getItems() {
        return items;
    }
    public void setItems(List<Item> items) {
        this.items = items;
    }
    public Restaurant getRestaurant() {
        return restaurant;
    }
    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }
    public String getDateAndTime() {
        return dateAndTime;
    }
    public void setDateAndTime(String dateAndTime) {
        this.dateAndTime = dateAndTime;
    }
    public double getCena() {
        return cena;
    }
    public void setCena(double cena) {
        this.cena = cena;
    }
    public Buyer getBuyer() {
        return buyer;
    }
    public void setBuyer(Buyer buyer) {
        this.buyer = buyer;
    }
    public OrderStatus getStatus() {
        return status;
    }
    public void setStatus(OrderStatus status) {
        this.status = status;
    }
    public Order(String id, List<Item> items, Restaurant restaurant, String dateAndTime, double cena, Buyer buyer,
            OrderStatus status,boolean deleted) {
        super();
        this.id = id;
        this.items = items;
        this.restaurant = restaurant;
        this.dateAndTime = dateAndTime;
        this.cena = cena;
        this.buyer = buyer;
        this.status = status;
        this.deleted=false;
    }
    
    public boolean isDeleted() {
		return deleted;
	}
	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}
	public Order() {} 
}
