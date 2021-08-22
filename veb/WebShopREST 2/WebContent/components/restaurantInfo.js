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
			
			},
      items:
      [{
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
       deleted: false

      }
    ]
		


		}
	},
	    template: ` 
    	<div  >
    	<nav class="navbar navbar-expand-lg navbar-light bg-light">
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
        <div  class="col">
          <h1 style="color:white;" class="mb-3">{{restaurant.name}}</h1>
          <h4 style="color:white;" class="mb-3">{{restaurant.restaurantType}}</h4>
          <h5 style="color:white;" class="mb-3">{{restaurant.status}}</h5>
          
        </div>
        
      </div>
    </div>
  </div>
  <!-- Background image -->
  </div>
</header>

  <!-- Controls -->
  <div class="d-flex justify-content-center mb-4">
    <button
      class="carousel-control-prev position-relative"
      type="button"
      data-mdb-target="#carouselMultiItemExample"
      data-mdb-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next position-relative"
      type="button"
      data-mdb-target="#carouselMultiItemExample"
      data-mdb-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <!-- Inner -->
  <div class="carousel-inner py-4">
    <!-- Single item -->
    <div class="carousel-item active">
      <div class="container">
        <div class="row">
          <div  v-for="item in items" class="col-lg-3">
            <div class="card" style="width: 18rem;">
			<img v-bind:src="item.image"
              />
              <div class="card-body">
              <div class="row">

                
                <h3 class="card-title">{{item.name}} </h3>
               
             
                <h6 class="card-title" style="color:gray;">  price: {{item.price}}</h6>
              
                
              </div>
              <h5 class="card-title">{{item.description}}</h5>
            </div>
          </div>
  </div>
  <!-- Inner -->
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
             
              this.restaurant.name=this.id,
                axios
                .post('/WebShopREST/rest/restaurants/findRestaurantData',this.restaurant)
                .then(response=> (this.restaurant=response.data))

                
              axios
              .post('/WebShopREST/rest/items/findAllItemsInRestaurant',this.restaurant)
              .then(response=> {this.items=response.data})
              
          },
        }
	
});