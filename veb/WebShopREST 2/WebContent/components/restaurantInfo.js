Vue.component("restaurantInfo", { 
	data: function () {
	    return {
            id: this.$route.params.id,
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
					streetAndNumber: '',
					town: '',
					zipCode: ''
				  },
			},
			logo: '',
			deleted: ''
			
			}
		


		}
	},
	    template: ` 
    	<div style="background-image: url(components/images/pocetna.jpeg)" >
    	<nav  class="navbar navbar-expand-lg navbar-light bg-light">
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
        <div class="text-white" class="col">
          <h1 style="color:white;" class="mb-3">{{restaurant.name}}</h1>
          <h4 style="color:white;" class="mb-3">{{restaurant.restaurantType}}</h4>
          <h5 style="color:white;" class="mb-3">{{restaurant.status}}</h5>
        </div>
        
      </div>
    </div>
  </div>
  <!-- Background image -->
</header>


    	</div>		  
    	`,
	
   
        mounted () {
            this.refreshData();
              
        },
        methods: {
            refreshData: function () {
                this.restaurant.name=this.id,
                axios
                .post('/WebShopREST/rest/restaurants/findRestaurantData',this.restaurant)
                .then(response=> (this.restaurant=response.data))
            }
        }
	
});