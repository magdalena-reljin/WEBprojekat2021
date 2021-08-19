package beans;

import java.awt.Image;

import enums.ItemType;

public class Item {
     private String name;
     private double price;
     private ItemType itemType;
     private Restaurant restaurant;
     private String quantity;
     private String description;
     private Image image;
     private boolean deleted;
     
    public boolean isDeleted() {
		return deleted;
	}
	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}
	public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        this.price = price;
    }
    public ItemType getItemType() {
        return itemType;
    }
    public void setItemType(ItemType itemType) {
        this.itemType = itemType;
    }
    public Restaurant getRestaurant() {
        return restaurant;
    }
    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }
    public String getQuantity() {
        return quantity;
    }
    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public Image getImage() {
        return image;
    }
    public void setImage(Image image) {
        this.image = image;
    }
    public Item(String name, double price, ItemType itemType, Restaurant restaurant, String quantity,
            String description, Image image) {
        super();
        this.name = name;
        this.price = price;
        this.itemType = itemType;
        this.restaurant = restaurant;
        this.quantity = quantity;
        this.description = description;
        this.image = image;
        this.deleted=false;
    }
    public Item() {} 
}
