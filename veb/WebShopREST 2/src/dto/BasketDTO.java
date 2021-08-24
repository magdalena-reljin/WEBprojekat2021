package dto;

import beans.Buyer;

public class BasketDTO {
	private String idBuyer;
	private String idItem;
	private int numOfOrder;
	
	public int getNumOfOrder() {
		return numOfOrder;
	}
	public void setNumOfOrder(int numOfOrder) {
		this.numOfOrder = numOfOrder;
	}
	public String getIdBuyer() {
		return idBuyer;
	}
	public void setIdBuyer(String idBuyer) {
		this.idBuyer = idBuyer;
	}
	public String getIdItem() {
		return idItem;
	}
	public void setIdItem(String idItem) {
		this.idItem = idItem;
	}
	public BasketDTO(String idBuyer, String idItem) {
		super();
		this.idBuyer = idBuyer;
		this.idItem = idItem;
	}
	
	public BasketDTO(){}
	

}
