package beans;

public class Address {
    private String street;
    private String number;
    private String town;
    private String zipCode;
    
    
    
    public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	public String getTown() {
        return town;
    }
    public void setTown(String town) {
        this.town = town;
    }
    public String getZipCode() {
        return zipCode;
    }
    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }
    public Address(String street, String number, String town, String zipCode) {
        super();
        this.street = street;
        this.number = number;
        this.town = town;
        this.zipCode = zipCode;
    }
    public Address() {}
}