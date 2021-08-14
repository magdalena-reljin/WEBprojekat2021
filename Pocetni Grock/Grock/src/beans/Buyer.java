package beans;

import java.util.List;

public class Buyer extends User {
	private List<Order> orders;
	private Basket basket;
	private int points;
}
