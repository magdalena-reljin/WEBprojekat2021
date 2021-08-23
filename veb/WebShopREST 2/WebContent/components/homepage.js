Vue.component("homepage", { 
	data: function () {
	    return {
			restaurant:[
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
					streetAndNumber: '',
					town: '',
					zipCode: ''
				  },
			},
			logo: '',
			deleted: ''
			
			}
     
		],
    restaurantID: ''



		}
	},
	    template: ` 
    	<div>
    	<nav  class="navbar navbar-fixed-top" style="background-color: #ffa6c9; list-style: none;">
  <div class="container-fluid" style="background-color: #ffa6c9;">
  <a class="navbar-brand" href="#">
  <img src="components/images/grockLogo4.png" alt="" width="194" height="80" class="d-inline-block align-text-top">
</a>

<ul class="navbar-nav me-auto mb-2 mb-lg-0">
<li class="nav-item">
  <a class="nav-link active" aria-current="page" href="http://localhost:8080/WebShopREST/#/login">Login</a>
</li>
<li class="nav-item">
  <a class="nav-link active" href="http://localhost:8080/WebShopREST/#/signup"">Sign up</a>
</li>
</ul>

<form class="d-flex">
<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
<button class="btn btn-outline-success" type="submit">Search</button>
</form>


  </div>

</nav>

<!-- Carousel wrapper -->
<div
  id="carouselMultiItemExample"
  class="carousel slide carousel-dark text-center"
  data-mdb-ride="carousel"
>

  <!-- Inner -->
  <div class="carousel-inner py-4">
    <!-- Single item -->
    <div class="carousel-item active">
      <div class="container">
        <div class="row">
          <div  v-for="item in restaurant" class="col-lg-4">
            <div class="card">
			<img v-bind:src="item.logo"
              />
              <div class="card-body">
                <h5 class="card-title">{{item.name}}</h5>
                <a @click="saveRestaurantId(item.name)" class="btn btn-primary">Button</a>
              </div>
            </div>
          </div>
  </div>
  <!-- Inner -->
  </div>
  </div>
  </div>

</div>

    	</div>		  
    	`,
		mounted(){
			this.getAllRestaurants();
		},
   
    methods: {
		getAllRestaurants: function () {
			axios
		  
			.get('/WebShopREST/rest/restaurants/findAllRestaurants')
			.then(response=> (this.restaurant=response.data))
		},
    saveRestaurantId: function (id) {
      this.$router.push("/restaurantInfo/"+id);
			console.log("ovo je id rest"+id)
		},
    
    }
	
});