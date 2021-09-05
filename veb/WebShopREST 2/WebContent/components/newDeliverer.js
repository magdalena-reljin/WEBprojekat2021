Vue.component("newDeliverer", {
    data: function () {
        return {
        id: this.$route.params.id,
        deliverer: {
		    username: '',
	    	password: '',
        name: '',
        surname:'',
        gender: 0,
        birthDate: '',
        role: 2,
        deleted: false,
        blocked: false,
        orders: [
         
        ]
        
		},
    err:''
      
        }
    },
    template: ` 
    <div>

    <nav class="navbar navbar-default navbar-fixed-top" style="background-color: #ffa6c9; list-style: none;">
    <div class="container-fluid" style="background-color: #ffa6c9;">
    <a class="navbar-brand">
    <img src="components/images/grockLogo4.png" alt="" width="194" height="80" class="d-inline-block align-text-top">
  </a>

    </div>
  
  </nav>
  <br>
  <div class="container">
  
  <div class="row justify-content-center">
  <div class="col-md-6">
  <div class="card">
  <header class="card-header">
      <h4 class="card-title mt-2"> Register Deliverer</h4>
  </header>
  <article class="card-body">
  <form @submit="registerDeliverer" method='post' class="was-validated">
      <div class="form-row">
          <div class="col form-group">
              <label>Name </label>   
                <input v-model="deliverer.name" type="text" class="form-control" required>
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Please fill out this field.</div>
          </div> 
          <div class="col form-group">
              <label>Surname</label>
                <input v-model="deliverer.surname" type="text" class="form-control" required>
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Please fill out this field.</div>
          </div> 
      </div>
      <div class="form-group">
          <label>Username</label>
          <input v-model="deliverer.username" type="text" class="form-control" required>
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
      </div>
      <div class="col form-group">
      <label>Password </label>   
        <input v-model="deliverer.password" type="password" class="form-control" required>
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
  </div> 
      <br>
      <div class="form-group">
              <label class="form-check form-check-inline">
            <input v-model="deliverer.gender" class="form-check-input" type="radio" name="gender" value="1" required>
            <span class="form-check-label"> Male </span>
          </label>
          <label class="form-check form-check-inline">
            <input v-model="deliverer.gender" class="form-check-input" type="radio" name="gender" value=0 required>
            <span class="form-check-label"> Female</span>
          </label>
      </div> 
      <br>
      <div class="form-row">
      <div class="row">
      <div class="col-12">
<div class="form-group">
<label >Birthday</label>
<input v-model="deliverer.birthDate" type="date" name="bday" min="1930-01-01"
      max="2002-12-31" class="form-control" required>
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
</div>
<br>
</div>
  </div>
      </div> 
      <div style="color:red;">{{err}}</div>
      <br>
      <div class="form-group">
          <button type="submit" class="btn btn-outline-success"> Register  </button>
      </div>                                                
  </form>
  </article> 
 
  </div> 
  </div> 
  
  </div> 
  
  
  </div> 
 
 </div>
     `,
    methods: {
        registerDeliverer: function(event) {
            event.preventDefault();
  
          
        if(this.deliverer.password.length< 8 || this.deliverer.password.length>20){
          this.err="The password must be 8-20 characters!";
        }else if(this.deliverer.password.length>=8 && this.deliverer.password.length<=20){

              axios
              .post('/WebShopREST/rest/deliverers/signup',this.deliverer)
              .then(response=>this.$router.push("/allUsersAdmin/"+this.id))
              .catch(err=>this.err='Username already exists')
           }
     
    }

  }

});