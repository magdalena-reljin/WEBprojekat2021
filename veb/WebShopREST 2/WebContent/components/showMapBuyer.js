Vue.component("showMapBuyer", { 
	data: function () {
	    return {
            id: this.$route.params.id,
            idRest: this.$route.params.idRest,
          
			restaurant:
			 {
				name: '',
			   restaurantType: null,
			   items: [],
			   status: null,
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
    
		


		}
	},
	    template: `
      
      <div>
      <nav class="navbar navbar-default navbar-fixed-top" style="background-color: #ffa6c9; list-style: none;">
      <div class="container-fluid" style="background-color: #ffa6c9;">
        <a class="navbar-brand" @click="backHome()">
          <img src="components/images/grockLogo4.png" alt="" width="194" height="80" class="d-inline-block align-text-top"> 
        </a>
    
       
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" @click="redirect()">Profile</a></li>
              <li><a class="dropdown-item" href="http://localhost:8080/WebShopREST/#/login">Log out</a></li>
            </ul>
            </li>
    
    
      </div>
      </nav>

<header>
<!-- Background image -->
<div
  class="p-5 text-center bg-image"
  style="
    background-image: url('components/images/restaurant.jpeg');
    height: 400px;
  "
>
  <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
    <div class="d-flex justify-content-center align-items-center h-100">
      <div class="row">
      <div class="col">
      
      <div class="card">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <img v-bind:src="restaurant.logo"  width="200">
              </div>
            </div>
      </div>
      
      
      </div>
      <div  class="col">
        <h1 style="color:white;" class="mb-3">{{restaurant.name}}</h1>
        <h4 style="color:white;" class="mb-3">{{restaurant.restaurantType}}</h4>
        <h5 style="color:white;" class="mb-3">{{restaurant.status}}</h5>
        <span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Open maps">
        <button @click="goToMaps()" type="button" class="btn btn-outline-light active mt-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
      </svg> {{restaurant.location.address.street}} {{restaurant.location.address.number}} , {{restaurant.location.address.town}}
        </button>
      </span>
      </div>
      
    </div>
  </div>
</div>
<!-- Background image -->
</div>
</header>

<ul class="nav nav-tabs" style="background-color: black;">
  <li class="nav-item">
    <a style="color: white;" class="nav-link" @click="goToItems()">ITEMS</a>
  </li>
  <li class="nav-item">
    <a style="color: white;" class="nav-link" @click="goToReview()">REVIEWS</a>
  </li>
  <li class="nav-item">
    <a style="color: white;" class="nav-link" @click="goToMaps()">LOCATION</a>
  </li>
  
</ul>
<br>


<br>

<div class="container col-lg-12 col-md-12">
<div class="main-body">


      <div class="row gutters-sm">
        <div class="col-md-12 mb-12">
          <div class="card">
            <div class="card-body">
              
                <div class="mt-6">
                  <h2>{{restaurant.name.toUpperCase()}}</h2>
                  <br>
                  <h2>{{restaurant.location.address.street}} {{restaurant.location.address.number}}</h2>
                  <h5>{{restaurant.location.address.town}} {{restaurant.location.address.zipCode}}</h5>
                  <h5>{{restaurant.location.latitude}} , {{restaurant.location.longitude}}</h5>

                  <br>
                    <div align="center" vertical-align="center" style="border-style:solid; width:50%; height:200px;">
                      <map-container
                      :coordinates="[this.restaurant.location.longitude,this.restaurant.location.latitude]"
                      ></map-container>
                    </div>
                  <br>

              
              </div>
            </div>
          </div>
        </div>

        </div>
        </div>
      </div>

</div>
    	`,
      mounted () {
        this.loadData();
    
          
    },
        methods: {
            
            loadData: function(){
 
              this.restaurant.name=this.idRest,
                axios
                .post('/WebShopREST/rest/restaurants/findRestaurantData',this.restaurant)
                .then(response=> (this.restaurant=response.data))

              
          },
        goToReview:function(){
          this.$router.push("/reviewBuyer/"+this.id+"/"+this.idRest);
        },
        goToItems:function(){
            this.$router.push("/restaurantInfoBuyers/"+this.idRest+"/"+ this.id);
          },
        goToMaps: function(){
           location.reload();
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
                    
                })
                
        
        },

        }
	
});