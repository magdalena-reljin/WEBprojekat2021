package beans;

import enums.RestaurantRating;

public class Review {
    private Buyer buyer;
    private Restaurant restaurant;
    private String comment;
    private RestaurantRating rating;
    private boolean deleted;
    public Buyer getBuyer() {
        return buyer;
    }
    public void setBuyer(Buyer buyer) {
        this.buyer = buyer;
    }
    public Restaurant getRestaurant() {
        return restaurant;
    }
    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }
    public String getComment() {
        return comment;
    }
    public void setComment(String comment) {
        this.comment = comment;
    }
    public RestaurantRating getRating() {
        return rating;
    }
    public void setRating(RestaurantRating rating) {
        this.rating = rating;
    }
  

    public Review(Buyer buyer, Restaurant restaurant, String comment, RestaurantRating rating) {
		super();
		this.buyer = buyer;
		this.restaurant = restaurant;
		this.comment = comment;
		this.rating = rating;
		this.deleted=false;
	}
	public boolean isDeleted() {
		return deleted;
	}
	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}
	public Review() {}
}