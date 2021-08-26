package beans;

import enums.Gender;
import enums.Role;

public class Admin extends User{

	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Admin(String username, String password, String name, String surname, Gender gender, String birthDate,
			Role role, boolean deleted, boolean blocked) {
		super(username, password, name, surname, gender, birthDate, role, deleted, blocked);
		// TODO Auto-generated constructor stub
	}

}
