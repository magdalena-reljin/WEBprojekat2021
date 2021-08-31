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
                        street: '',
                        number: '',
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
                street: '',
                number: '',
                town: '',
                zipCode: ''
              },
        },
        logo: '',
        deleted: false,
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
            street: '',
            number: '',
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
              street: '',
              number: '',
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
        err: ''
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
  <form @submit="createRestaurant" method='post' class="was-validated">
      <div class="form-row">
          <div class="col form-group">
              <label>Name </label>   
                <input v-model="restaurant.name" type="text" class="form-control" required>
                <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div> 
          <label for="inputState">Restaurant Type</label>
          <select v-model="restaurant.restaurantType" id="inputState" class="form-control" required>
            <option v-bind:value=0>SERBIAN</option>
            <option v-bind:value=1>ITALIAN</option>
            <option v-bind:value=2>CHINESE</option>
            <option v-bind:value=3>AMERICAN</option>
          </select>
          <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          
      </div>
      
      <div class="form-group">
          <label>Longitude</label>
          <input v-model="restaurant.location.longitude" type="text" class="form-control"  pattern="[0-9]*\.?[0-9]*" required>
          <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
      </div>
      <div class="form-group">
          <label>Latitude</label>
          <input v-model="restaurant.location.latitude" type="text" class="form-control" pattern="[0-9]*\.?[0-9]*" required>
          <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
      </div>
      <div class="form-group">
      <label>Street</label>
      <input v-model="restaurant.location.address.street" type="text" class="form-control" required>
      <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
  </div>
  <div class="form-group">
  <label>Number</label>
  <input v-model="restaurant.location.address.number" type="text" class="form-control" required>
  <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
</div>

  <div class="form-group">
  <label>Town</label>
  <input v-model="restaurant.location.address.town" type="text" class="form-control" required>
  <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
</div>
<div class="form-group">
  <label>ZipCode</label>
  <input v-model="restaurant.location.address.zipCode" type="text" class="form-control" pattern="[0-9]*" required>
  <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
</div>

<br>
<div align="center" vertical-align="center" style="border-style:solid; width:100%; height:200px;">
                <map-container
                :coordinates="[this.restaurant.location.longitude,this.restaurant.location.latitude]"
                ></map-container>
</div>
<br>


<div class="col form-group">
      <label>Logo </label>   
      <div class="mb-3">
      <input @click="data" class="form-control" type="file" id="formFile" required>
      <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
    </div>
  </div> 
  <div class="form-group">
  <label>Select manager</label>
  <div class="input-group">

  <select v-model="selectedManagerID" @click="getManagers()" class="form-select" id="inputGroupSelect04" required>
    <option v-for="manager in managers">{{manager}}</option>
  </select>
  <button v-on:click="isHidden = false" class="btn btn-outline-secondary" type="button">Register new manager</button>
  <div class="valid-feedback">Valid.</div>
  <div class="invalid-feedback">Please fill out this field.</div>
</div>
  </div>
      <br>
      <div class="form-group">
          <button type="submit" class="btn btn-outline-success"> Create  </button>
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
    <form @submit="registerManager" method='post' class="was-validated">
        <div class="form-row">
            <div class="col form-group">
                <label>Name </label>   
                  <input v-model="newManager.name" type="text" class="form-control" required>
                  <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
            </div> 
            <div class="col form-group">
                <label>Surname</label>
                  <input v-model="newManager.surname" type="text" class="form-control" required>
                  <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
            </div> 
        </div>
        <div class="form-group">
            <label>Username</label>
            <input v-model="newManager.username" type="text" class="form-control" required>
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
        </div>
        <div class="col form-group">
        <label>Password </label>   
          <input v-model="newManager.password" type="password" class="form-control" required>
          <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
    </div> 
        <br>
        <div class="form-group">
                <label class="form-check form-check-inline">
              <input v-model="newManager.gender" class="form-check-input" type="radio" name="gender" value="1" required>
              <span class="form-check-label"> Male </span>
            </label>
            <label class="form-check form-check-inline">
              <input v-model="newManager.gender" class="form-check-input" type="radio" name="gender" value=0 required>
              <span class="form-check-label"> Female</span>
            </label>
        </div> 
        <br>
        <div class="form-row">
        <div class="row">
        <div class="col-12">
  <div class="form-group">
  <label >Birthday</label>
  <input v-model="newManager.birthDate" type="date" name="bday" min="1930-01-01"
        max="2000-12-31" class="form-control" required>
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

        if(this.newManager.password.length< 8 || this.newManager.password.length>20){
          this.err="The password must be 8-20 characters!";
        }else if(this.newManager.password.length>=8 && this.newManager.password.length<=20){

   axios
   .post('/WebShopREST/rest/managers/signup',this.newManager)
   .then(response=> this.isHidden=true)
   .catch(err=>this.err='Username already exists')
        }
   },
   azuriranjeAdrese : function() {
            
    axios.get("https://nominatim.openstreetmap.org/reverse", {
      params: {
        lat: this.restaurant.location.latitude,
        lon: this.restaurant.location.longitude,
        format: "json",
     },
     })
    .then((response) => {
            const { address } = response.data;
            var flag = false;
            if (address) {
    
                if (address.road) {
                    this.restaurant.location.address.street = address.road;
      
                    flag = true;
                } else if (address.street) {
                    this.restoran.location.address.street = address.street;
                    flag = true;
                }
                if (flag && address["house-number"]) {
                    this.restaurant.location.address.number = address["house-number"];
                }
                else if (flag && address["house_number"]) {
                    this.restaurant.location.address.number = address["house_number"];
                }
                if (flag && address.town) {
                    this.restaurant.location.address.town = address.town;
                }
                else if (flag && address.city) {
                    this.restaurant.location.address.town = address.city;
                }
                if (flag && address.postCode) {
                    this.restaurant.location.address.zipCode = address.postCode;
                }
                else if (flag && address.postcode) {
                    this.restaurant.location.address.zipCode = address.postcode;
                }
                if (flag) {
                    this.cela = this.restaurant.location.address.street  + " " + this.restaurant.location.address.number + ", " + this.restaurant.location.address.town + " " + this.restaurant.location.address.zipCode 
                }
            }
        })
          .catch(function(error) {
         alert('Nije moguće pronaći adresu sa zadatim koordinatama.');
          });

},

   


  }

});
