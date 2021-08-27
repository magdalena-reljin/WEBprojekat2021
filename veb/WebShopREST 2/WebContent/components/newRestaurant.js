Vue.component("newRestaurant", {
    data: function () {
        return {
        id: this.$route.params.id,
        restaurant: {
		    name: '',
	      restaurantType: null,
        items: [
          {
              name:'',
              price: null,
              itemType: null,
              restaurant: {
                name: '',
                restaurantType: null,
                items: [],
                status: 0,
                location: {
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
                
            },
             quantity: '',
             description: '',
             image: '',
             numberInOrder: 1,
             deleted: false
  
            },
        ],
        status: 0,
        location: {
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
        deleted: '',
        avg: 0
        
		},
    selectedManagerID:'',
    selectedManager: {
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
    

      },
    managers: [],
    newManager: {
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
      
  
        },
        isHidden: true,
        value: null,
      }
    
    },

    template: ` 
    <div>

    <nav class="navbar navbar-default navbar-fixed-top" style="background-color: #ffa6c9; list-style: none;">
    <div class="container-fluid" style="background-color: #ffa6c9;">
    <a class="navbar-brand" href="#">
    <img src="components/images/grockLogo4.png" alt="" width="194" height="80" class="d-inline-block align-text-top">
  </a>

    </div>
  
  </nav>
  <br>
  
  <div class="container">
  <div class="row">
    <div class="col">
    
    <div class="container">
  <div class="row justify-content-left">
  <div class="col-md-12">
  <div class="card">
  <header class="card-header">
      <h4 class="card-title mt-2">Create Restaurant</h4>
  </header>
  <article class="card-body">
  <form @submit="createRestaurant" method='post'>
      <div class="form-row">
          <div class="col form-group">
              <label>Name </label>   
                <input v-model="restaurant.name" type="text" class="form-control">
          </div> 
          <label for="inputState">Restaurant Type</label>
          <select v-model="restaurant.restaurantType" id="inputState" class="form-control">
            <option v-bind:value=0>SERBIAN</option>
            <option v-bind:value=1>ITALIAN</option>
            <option v-bind:value=2>CHINESE</option>
            <option v-bind:value=3>AMERICAN</option>
          </select>
          
      </div>
      
      <div class="form-group">
          <label>Longitude</label>
          <input v-model="restaurant.location.longitude" type="text" class="form-control">
      </div>
      <div class="form-group">
          <label>Latitude</label>
          <input v-model="restaurant.location.latitude" type="text" class="form-control">
      </div>
      <div class="form-group">
      <label>Street and number</label>
      <input v-model="restaurant.location.address.streetAndNumber" type="text" class="form-control">
  </div>
  <div class="form-group">
  <label>Town</label>
  <input v-model="restaurant.location.address.town" type="text" class="form-control">
</div>
<div class="form-group">
  <label>ZipCode</label>
  <input v-model="restaurant.location.address.zipCode" type="text" class="form-control">
</div>
      <div class="col form-group">
      <label>Logo </label>   
      <div class="mb-3">
      <input @click="data" class="form-control" type="file" id="formFile">
    </div>
  </div> 
  <div class="form-group">
  <label>Select manager</label>
  <div class="input-group">

  <select v-model="selectedManagerID" @click="getManagers()" class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
    <option v-for="manager in managers">{{manager}}</option>
   
  </select>
  <button v-on:click="isHidden = false" class="btn btn-outline-secondary" type="button">Register new manager</button>
</div>
  </div>
      <br>
      <div class="form-group">
          <button type="submit" class="btn btn-primary"> Create  </button>
      </div>                                                
  </form>
 
  </article> 
 
  </div> 
  </div> 
  
  </div> 
  
  
  </div> 
    
    
    </div>
    <div class="col">
    <div v-if="!isHidden"  class="container">
  
    <div class="row justify-content-center">
    <div class="col-md-12">
    <div class="card">
    <header class="card-header">
        <h4 class="card-title mt-2"> Register Manager</h4>
    </header>
    <article class="card-body">
    <form @submit="registerManager" method='post'>
        <div class="form-row">
            <div class="col form-group">
                <label>Name </label>   
                  <input v-model="newManager.name" type="text" class="form-control" placeholder="">
            </div> 
            <div class="col form-group">
                <label>Surname</label>
                  <input v-model="newManager.surname" type="text" class="form-control" placeholder=" ">
            </div> 
        </div>
        <div class="form-group">
            <label>Username</label>
            <input v-model="newManager.username" type="text" class="form-control" placeholder="">
        </div>
        <div class="col form-group">
        <label>Password </label>   
          <input v-model="newManager.password" type="password" class="form-control" placeholder="">
    </div> 
        <br>
        <div class="form-group">
                <label class="form-check form-check-inline">
              <input v-model="newManager.gender" class="form-check-input" type="radio" name="gender" value="1">
              <span class="form-check-label"> Male </span>
            </label>
            <label class="form-check form-check-inline">
              <input v-model="newManager.gender" class="form-check-input" type="radio" name="gender" value=0>
              <span class="form-check-label"> Female</span>
            </label>
        </div> 
        <br>
        <div class="form-row">
        <div class="row">
        <div class="col-12">
  <div class="form-group">
  <label >Birthday</label>
  <input v-model="newManager.birthDate" type="date" name="bday" min="1000-01-01"
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
    <div class="w-100"></div>
    
  </div>
</div>
  
 
 </div>
     `,
  
  methods: {
    getManagers: function () {
          axios
        
          .get('/WebShopREST/rest/managers/findUnemployed')
          .then(response=> (this.managers=response.data))
      },
      data: function(){
        document.getElementById("formFile").onchange = function () {
          console.log("SLIKKKa"+document.getElementById("formFile").value)
          }
      },
      createRestaurant: function(event){
        event.preventDefault();
        
        this.restaurant.logo= document.getElementById("formFile").value
        this.selectedManager.restaurant=this.restaurant
        this.selectedManager.username=this.selectedManagerID
        console.log("AAAA"+this.restaurant.logo);
        axios
        .post('/WebShopREST/rest/restaurants/addNewRestaurant',this.restaurant)
        .then(response=> {
          console.log("USPESNO"+response)
        })
        .catch(err=>console.log("GRESKA prvi axios"))

       
        axios
        .put('/WebShopREST/rest/managers/update',this.selectedManager)
        .then(response=> {
          console.log("USPESNO put"+response)
          this.$router.push("/homeLoggedIn/"+this.id)

        })
        .catch(err=>console.log("GRESKA drugi"))

     
      },
    registerManager: function(event) {
        event.preventDefault();

   axios
   .post('/WebShopREST/rest/managers/signup',this.newManager)
   .then(response=> {
    isHidden=true;
     console.log("USPESNO"+response)
   })
   .catch(err=>console.log("GRESKA"))
}
  }

});
