Vue.component("newManager", {
    data: function () {
        return {
        id: this.$route.params.id,
        manager: {
		    username: '',
	    	password: '',
        name: '',
        surname:'',
        gender: 0,
        birthDate: '',
        role: 1,
        deleted: false,
        blocked: false,
        restaurant: 
          {name:'',
           restaurantType: 0,
           items: null,
           status: 0,
           location: 
           {
            longitude: '',
            latitude: '',
            address:
            
              {
                streetAndNumber: '',
                town: '',
                zipCode: ''
              },
           },

           logo: '',
           deleted: ''
          
          }
        
		}
      
        }
    },
    template: ` 
    <div>

    <nav class="navbar navbar-default navbar-fixed-top style="background-color: #ffa6c9; list-style: none;">
    <div class="container-fluid" style="background-color: #ffa6c9;">
    <a class="navbar-brand" href="#">
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
      <h4 class="card-title mt-2"> Register Manager</h4>
  </header>
  <article class="card-body">
  <form @submit="registerManager" method='post'>
      <div class="form-row">
          <div class="col form-group">
              <label>Name </label>   
                <input v-model="manager.name" type="text" class="form-control" placeholder="">
          </div> 
          <div class="col form-group">
              <label>Surname</label>
                <input v-model="manager.surname" type="text" class="form-control" placeholder=" ">
          </div> 
      </div>
      <div class="form-group">
          <label>Username</label>
          <input v-model="manager.username" type="text" class="form-control" placeholder="">
      </div>
      <div class="col form-group">
      <label>Password </label>   
        <input v-model="manager.password" type="password" class="form-control" placeholder="">
  </div> 
      <br>
      <div class="form-group">
              <label class="form-check form-check-inline">
            <input v-model="manager.gender" class="form-check-input" type="radio" name="gender" value="1">
            <span class="form-check-label"> Male </span>
          </label>
          <label class="form-check form-check-inline">
            <input v-model="manager.gender" class="form-check-input" type="radio" name="gender" value=0>
            <span class="form-check-label"> Female</span>
          </label>
      </div> 
      <br>
      <div class="form-row">
      <div class="row">
      <div class="col-12">
<div class="form-group">
<label >Birthday</label>
<input v-model="manager.birthDate" type="date" name="bday" min="1000-01-01"
      max="3000-12-31" class="form-control">
</div>
<br>
</div>
  </div>
      </div> 
      <div class="form-group">
          <button type="submit" class="btn btn-primary"> Register  </button>
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
        registerManager: function(event) {
            event.preventDefault();
  
       axios
       .post('/WebShopREST/rest/managers/signup',this.manager)
       .then(response=> {
  
        this.$router.push("/allUsersAdmin/"+this.id)
         console.log("USPESNO"+response)
       })
       .catch(err=>console.log("GRESKA"))
    }

  }

});