package beans;

import java.util.List;

public class Basket {
    private List<Item> items;
    private Buyer buyer;
    private double totalPrice;
    public List<Item> getItems() {
        return items;
    }
    public void setItems(List<Item> items) {
        this.items = items;
    }
    public Buyer getBuyer() {
        return buyer;
    }
    public void setBuyer(Buyer buyer) {
        this.buyer = buyer;
    }
    public double getTotalPrice() {
        return totalPrice;
    }
    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }
    public Basket(List<Item> items, Buyer buyer, double totalPrice) {
        super();
        this.items = items;
        this.buyer = buyer;
        this.totalPrice = totalPrice;
    }

    public Basket() {}
}