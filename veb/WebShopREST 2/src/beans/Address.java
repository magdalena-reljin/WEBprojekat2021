package beans;

public class Address {
    private String streetAndNumber;
    private String town;
    private String zipCode;
    public String getStreetAndNumber() {
        return streetAndNumber;
    }
    public void setStreetAndNumber(String streetAndNumber) {
        this.streetAndNumber = streetAndNumber;
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
    public Address(String streetAndNumber, String town, String zipCode) {
        super();
        this.streetAndNumber = streetAndNumber;
        this.town = town;
        this.zipCode = zipCode;
    }
    public Address() {}
}