package dto;

import beans.User;
import enums.BuyerTitle;

public class UserDTO {
private User user;
private boolean trol;
private BuyerTitle title;
private double points;
public UserDTO(User user, boolean trol, BuyerTitle title, double points) {
	super();
	this.user = user;
	this.trol = trol;
	this.title = title;
	this.points = points;
}
public BuyerTitle getTitle() {
	return title;
}
public void setTitle(BuyerTitle title) {
	this.title = title;
}
public double getPoints() {
	return points;
}
public void setPoints(double points) {
	this.points = points;
}


public User getUser() {
	return user;
}
public void setUser(User user) {
	this.user = user;
}
public boolean isTrol() {
	return trol;
}
public void setTrol(boolean trol) {
	this.trol = trol;
}

}
