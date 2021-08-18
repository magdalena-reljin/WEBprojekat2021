Vue.component("login", {
    data: function () {
        return {
        user: {
				username: '',
        password: '',
        name: '',
        surname: '',
        gender: 0,
        birthDate: '',
        role: 0
		  	},
        greska: "",
      
        }
    },
    template: ` 
        <div>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid" style="background-color: #ffa6c9;">
        <a class="navbar-brand" href="#">
        <img src="components/images/grockLogo4.png" alt="" width="194" height="80" class="d-inline-block align-text-top">
      </a>
      
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="http://localhost:8080/WebShopREST/#/login">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active"  @click="goToRegister()">Sign up</a>
      </li>
      </ul>
      
      <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" >
      <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      
      
        </div>
      
      </nav>

       
           <div class="container-sm"> 
           <h1>Login and start grocking!</h1>
            <form @submit="checkUser" method='post'>
                <div class="mt-221 bg-light border">
                    <label for="exampleDropdownFormEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control"  placeholder="email@example.com" v-model="user.username">
                 </div>

                <div class="mt-221 bg-light border">
                        <label for="exampleDropdownFormPassword1"  class="form-label">Password</label>
                        <input type="password" class="form-control"  placeholder="Password" v-model="user.password">
                 </div>

                            
                 <button class="btn btn-primary" type="submit">Log in</button>
            </form>
            <div id="greska">{{greska}}</div>
            </div>
     </div>
     `,
    methods: {
      checkUser: function(event) {
			event.preventDefault();
     axios
     .post('/WebShopREST/rest/users/login',this.user)
     .then(response=> {
        console.log("USPESNO"+response.data.role)

         if(response.data.role=='ADMINISTRATOR'){
         this.$router.push("/homeLoggedIn/"+this.user.username);
         } else{
         this.$router.push("/homeLoggedInBuyer/"+this.user.username);
         }
        
     })
     .catch(err => {
      this.greska = "Neuspesšna registracija!";
      console.log(err);
    })
	},
  goToRegister: function(){
    this.$router.push("/signup")	
  }

  }

});