package dto;


public class OrderDTO {
private String idOrder;
private String idDeliverer;
private String status;


public String getStatus() {
	return status;
}
public void setStatus(String status) {
	this.status = status;
}
public OrderDTO(String idOrder, String idDeliverer) {
	super();
	this.idOrder = idOrder;
	this.idDeliverer = idDeliverer;
}
public String getIdOrder() {
	return idOrder;
}
public void setIdOrder(String idOrder) {
	this.idOrder = idOrder;
}
public String getIdDeliverer() {
	return idDeliverer;
}
public void setIdDeliverer(String idDeliverer) {
	this.idDeliverer = idDeliverer;
}



}
