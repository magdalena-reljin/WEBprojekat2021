package beans;

import java.awt.Image;
import java.util.List;

import enums.RestaurantStatus;
import enums.RestaurantType;

public class Restaurant {
    private String name;
    private RestaurantType restaurantType;
    private List<Item> items;
    private RestaurantStatus status;
    private Location location;
    private Image logo;
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
    public RestaurantType getRestaurantType() {
        return restaurantType;
    }
    public void setRestaurantType(RestaurantType restaurantType) {
        this.restaurantType = restaurantType;
    }
    public List<Item> getItems() {
        return items;
    }
    public void setItems(List<Item> items) {
        this.items = items;
    }
    public RestaurantStatus getStatus() {
        return status;
    }
    public void setStatus(RestaurantStatus status) {
        this.status = status;
    }
    public Location getLocation() {
        return location;
    }
    public void setLocation(Location location) {
        this.location = location;
    }
    public Image getLogo() {
        return logo;
    }
    public void setLogo(Image logo) {
        this.logo = logo;
    }
    public Restaurant(String name, RestaurantType restaurantType, List<Item> items, RestaurantStatus status,
            Location location, Image logo) {
        super();
        this.name = name;
        this.restaurantType = restaurantType;
        this.items = items;
        this.status = status;
        this.location = location;
        this.logo = logo;
    }

    public Restaurant() {}
}