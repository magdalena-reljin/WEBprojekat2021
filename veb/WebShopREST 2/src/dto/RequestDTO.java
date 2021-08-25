package dto;

public class RequestDTO {
       private String delivererId;
       private String orderId;
	public String getDelivererId() {
		return delivererId;
	}
	public void setDelivererId(String delivererId) {
		this.delivererId = delivererId;
	}
	public String getOrderId() {
		return orderId;
	}
	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}
	public RequestDTO(String delivererId, String orderId) {
		super();
		this.delivererId = delivererId;
		this.orderId = orderId;
	}
    public RequestDTO() {};
}
