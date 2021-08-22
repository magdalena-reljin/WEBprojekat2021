package beans;

import java.util.List;

public class Basket {
    private List<Item> items;

    private double totalPrice;
    public List<Item> getItems() {
        return items;
    }
    public void setItems(List<Item> items) {
        this.items = items;
    }
    
    public double getTotalPrice() {
        return totalPrice;
    }
    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }
    public Basket(List<Item> items, double totalPrice) {
        super();
        this.items = items;
        this.totalPrice = totalPrice;
    }

    public Basket() {}
}