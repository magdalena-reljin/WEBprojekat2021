package beans;

import java.util.List;

public class Deliverer {
     private List<Order> orders;

    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }

    public Deliverer(List<Order> orders) {
        super();
        this.orders = orders;
    }
    public Deliverer() {}
}