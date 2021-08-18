package beans;

import enums.BuyerTitle;

public class BuyerType {
    private BuyerTitle title;
    private int discount;
    private int points;
	public BuyerTitle getTitle() {
		return title;
	}
	public void setTitle(BuyerTitle title) {
		this.title = title;
	}
	public int getDiscount() {
		return discount;
	}
	public void setDiscount(int discount) {
		this.discount = discount;
	}
	public int getPoints() {
		return points;
	}
	public void setPoints(int points) {
		this.points = points;
	}
	public BuyerType(BuyerTitle title, int discount, int points) {
		super();
		this.title = title;
		this.discount = discount;
		this.points = points;
	}
    
    public BuyerType() {}
}