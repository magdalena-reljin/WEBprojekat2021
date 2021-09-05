Vue.component("homeMap", { 
	data: function () {
	    return {
            idRest: this.$route.params.id,
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
    	<nav  class="navbar navbar-fixed-top navbar-expand" style="background-color: #ffa6c9; list-style: none;">
  <div class="container-fluid" style="background-color: #ffa6c9;">
  <a class="navbar-brand">
  <img src="components/images/grockLogo4.png" alt="" width="194" height="80" class="d-inline-block align-text-top">
</a>

<ul class="navbar-nav me-auto mb-2 mb-lg-0">
<li class="nav-item">
  <a style="color: black;" class="nav-link active" aria-current="page" href="http://localhost:8080/WebShopREST/#/login">Login</a>
</li>
<li class="nav-item">
  <a style="color: black;" class="nav-link active" href="http://localhost:8080/WebShopREST/#/signup"">Sign up</a>
</li>
</ul>




  </div>

</nav>

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
		mounted(){
			this.getRestaurant();
		},
   
    methods: {
		getRestaurant: function () {
            this.restaurant.name=this.idRest;
			axios
			.post('/WebShopREST/rest/restaurants/findRestaurantData',this.restaurant)
			.then(response=> {this.restaurant=response.data
			
			
			})
		},
        showItems: function () {
            this.$router.push("/restaurantInfo/"+this.restaurant.name);
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
		
   
    
},

	
});