Vue.component("signup", {
    data: function () {
        return {
        buyer: {
		    username: '',
		    password: '',
        name: '',
        surname:'',
        gender: null,
        birthDate: '',
        role: 3,
        deleted: false,
        blocked: false,
        orders: [],
        basket: {
          buyer: null,
          items: [],
          totalPrice: null
        },
        points: 0,
        type: {
          title: 2,
          discount: 0,
          points: 0
        },
        num: 0,
        trol:false,
        cancel: '',
		  	},

        user: {
          username: '',
          password: '',
          name: '',
          surname: '',
          gender: 0,
          birthDate: '',
          role: 3,
          deleted: false,
          blocked: false
          },
       
      
        }
    },
    template: ` 
        <div  style="background-image: url('components/images/pig2.png');">

        <nav class="navbar navbar-fixed-top navbar-expand" style="background-color: #ffa6c9; list-style: none;">
        <div class="container-fluid" style="background-color: #ffa6c9;">
        <a class="navbar-brand"  href="http://localhost:8080/WebShopREST/#/">
        <img src="components/images/grockLogo4.png" alt="" width="194" height="80" class="d-inline-block align-text-top">
      </a>
    
        </div>
      
      </nav>
      <br>
      <div class="container" >
      
      <div class="row justify-content-center" >
      <div class="col-md-6">
      <div class="card" >
      <header class="card-header" >
          <h4 class="card-title mt-2">Sign up</h4>
      </header>
      <article class="card-body"  >
      <form @submit="registerUser" method='post'>
          <div class="form-row">
              <div class="col form-group">
                  <label>Name </label>   
                    <input v-model="buyer.name" type="text" class="form-control" placeholder="">
              </div> 
              <div class="col form-group">
                  <label>Surname</label>
                    <input v-model="buyer.surname" type="text" class="form-control" placeholder=" ">
              </div> 
          </div>
          <div class="form-group">
              <label>Username</label>
              <input v-model="buyer.username" type="text" class="form-control" placeholder="">
          </div>
          <div class="col form-group">
          <label>Password </label>   
            <input v-model="buyer.password" type="password" class="form-control" placeholder="">
      </div> 
          <br>
          <div class="form-group">
                  <label class="form-check form-check-inline">
                <input v-model="buyer.gender" class="form-check-input" type="radio" name="gender" value="1">
                <span class="form-check-label"> Male </span>
              </label>
              <label class="form-check form-check-inline">
                <input v-model="buyer.gender" class="form-check-input" type="radio" name="gender" value=0>
                <span class="form-check-label"> Female</span>
              </label>
          </div> 
          <br>
          <div class="form-row">
          <div class="row">
          <div class="col-12">
  <div class="form-group">
   <label >Birthday</label>
   <input v-model="buyer.birthDate" type="date" name="bday" min="1000-01-01"
          max="3000-12-31" class="form-control">
  </div>
    <br>
  </div>
      </div>
          </div> 
          <div class="form-group">
              <button type="submit" class="btn btn-primary"> Sign up  </button>
          </div>                                                
      </form>
      </article> 
      <div class="border-top card-body text-center" >Have an account? <a href="http://localhost:8080/WebShopREST/#/login">Log In</a></div>
      </div> 
      </div> 
      
      </div> 
      
      
      </div> 
     
     </div>
     `,
    methods: {
        registerUser: function(event) {
            event.preventDefault();
       
       axios
       .post('/WebShopREST/rest/buyers/signup',this.buyer)
       .then(response=> {

         console.log("USPESNO buyer"+response)
         this.user.name=this.buyer.name;
         this.user.surname=this.buyer.surname;
         this.user.username=this.buyer.username;
         this.user.password=this.buyer.password;
         this.user.birthDate=this.buyer.birthDate;
         this.user.gender=this.buyer.gender;
         axios
         .post('/WebShopREST/rest/users/signup',this.user)
         .then(response=> {
    
          this.$router.push("/login")
           console.log("USPESNO user"+response)
         })

       })

    
    }

  }

});