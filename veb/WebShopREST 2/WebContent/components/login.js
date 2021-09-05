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
        role: 0,
        deleted: false,
        blocked: false
		  	},
        greska: "",
      
        }
    },
    template: ` 
        <div>

        <nav  class="navbar navbar-fixed-top navbar-expand" style="background-color: #ffa6c9; list-style: none;">
        <div class="container-fluid" style="background-color: #ffa6c9;">
        <a class="navbar-brand">
        <img src="components/images/grockLogo4.png" alt="" width="194" height="80" class="d-inline-block align-text-top">
      </a>
      
      
      
        </div>
      
      </nav>

      <br>
      <br>


      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
      <br>
      <br>
      <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="card-group mb-0">
                <div class="card p-4">
                  <div class="card-body">
                    <h1>Login</h1>
                    <p class="text-muted">Sign In to your account</p>
                    <div class="input-group mb-3">
                      <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg></span>
                      <input type="text" v-model="user.username" class="form-control" placeholder="Username">
                    </div>
                    <div class="input-group mb-4">
                      <span class="input-group-text"> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                    </svg></span>
                      <input type="password" class="form-control" v-model="user.password" placeholder="Password">
                    </div>
                    <div style="color: red;" id="greska">{{greska}}</div>
                    <br>
                    <div class="row">
                      <div class="col-6">
                        <button @click="checkUser()" type="button" class="btn btn-outline-dark active px-4">Login</button>
                      </div>
                     
                    </div>
                  </div>
                </div>
                <div class="card text-white py-5 d-md-down-none" style="width:44%; background-image: url('components/images/loginKONACNO.png');">
                  <div class="card-body text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Don't have an account?</p>
                      <button @click="sign()" type="button" class="btn btn-outline-light active mt-3">Sign up now!</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


     </div>
     `,
    methods: {
      checkUser: function() {
			
     axios
     .post('/WebShopREST/rest/users/login',this.user)
     .then(response=> {
        console.log("USPESNO"+response.data.role)

         if(response.data.blocked === false){
         if(response.data.role=='ADMINISTRATOR'){
         this.$router.push("/homeLoggedIn/"+this.user.username);
         } else if(response.data.role=='MANAGER'){
         this.$router.push("/homeLoggedInManager/"+this.user.username);
         }else if(response.data.role=='BUYER'){
          this.$router.push("/homeLoggedInBuyer/"+this.user.username);
         }else {
          this.$router.push("/homeLoggedInDeliverer/"+this.user.username);
         }
      
         
        }else if(response.data.blocked === true) {
          this.greska="Your account is blocked!"
        }else{
          this.greska="Wrong password or username!"
        }
        
     })
     .catch(err => {
      this.greska = "Wrong password or username!";
      console.log(err);
    })
	},
  goToRegister: function(){
    this.$router.push("/signup")	
  },
  goToHome: function(){
    this.$router.push("/")	
  },
  sign: function(){
    this.$router.push("/signup")
  }

  }

});