Vue.component("restaurantInfoManager", { 
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

      }
    ]
		


		}
	},
	    template: `
      
      <div>
      <nav  class="navbar navbar-fixed-top navbar-expand" style="background-color: #ffa6c9; list-style: none;">
      <div class="container-fluid" style="background-color: #ffa6c9;">
      <a class="navbar-brand">
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
        <h6 style="color:white;" class="mb-3">RATED: <svg xmlns="http://www.w3.org/2000/svg" v-for="po in restaurant.avg" width="25" height="25" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
      </svg></h6>
      
        <span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Open maps">
        <button @click="showMap()" type="button" class="btn btn-outline-light active mt-3">
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
            
            <h3 class="card-title">{{item.name}} </h3>
            <h5 class="card-title" style="color: #44ad73;">  price: {{item.price}} $</h5>
            <h6 class="card-title" style="color:gray;">{{item.description}}</h6>
            
           
          
          </div>
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
          showMap: function(){
            this.$router.push("/restaurantMap/"+this.restaurant.name);
          },
          goToReview:function(){
            this.$router.push("/reviewInfoManager/"+this.id+"/"+this.idRest);
          },
          goToItems:function(){
            location.reload();
            },
          goToMaps: function(){
            this.$router.push("/showMapManager/"+this.id+"/"+this.idRest);
          },
          redirect: function(){
            this.$router.push("/profile/"+this.idRest)
          },
        }
	
});