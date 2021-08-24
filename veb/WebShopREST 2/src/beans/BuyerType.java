package beans;

import enums.BuyerTitle;

public class BuyerType {
    private BuyerTitle title;
    private int discount;
    private double points;
    
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
	public double getPoints() {
		return points;
	}
	public void setPoints(double points) {
		this.points = points;
	}
	public BuyerType(BuyerTitle title, int discount, double points) {
		super();
		this.title = title;
		this.discount = discount;
		this.points = points;
	}
    
    public BuyerType() {}
}