package beans;

import enums.RestaurantRating;
import enums.ReviewStatus;

public class Review {
    private Buyer buyer;
    private Restaurant restaurant;
    private String comment;
    private int rating;
    private boolean deleted;
    private ReviewStatus status;
    private String id;
    public ReviewStatus getStatus() {
		return status;
	}
	public void setStatus(ReviewStatus status) {
		this.status = status;
	}
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
    public int getRating() {
        return rating;
    }
    public void setRating(int rating) {
        this.rating = rating;
    }
  

    public Review(Buyer buyer, Restaurant restaurant, String comment, int rating,ReviewStatus status,String id) {
		super();
		this.buyer = buyer;
		this.restaurant = restaurant;
		this.comment = comment;
		this.rating = rating;
		this.deleted=false;
		this.status=status;
		this.id=id;
	}
	public boolean isDeleted() {
		return deleted;
	}
	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public Review() {}
}