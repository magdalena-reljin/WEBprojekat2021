Vue.component("reviewInfo", { 
	data: function () {
	    return {
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
      reviews:
      [{
          buyer: {
              username: '',
              password: '',
          name: '',
          surname:'',
          gender: null,
          birthDate: '',
          role: 3,
          deleted: false,
          blocked: false,
          orders: [],
          basket: {
            buyer: null,
            items: [],
            totalPrice: null
          },
          points: 0,
          type: {
            title: 2,
            discount: 0,
            points: 0
          },
          num: 0,
          trol:false,
          cancel: '',
                },

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
               deleted: '',
               avg: 0
               },

               comment: '',
               rating: null,
               deleted: false,
               status: 'UNREVIEWED',
               id: '',



      }
  ]
      
      


		}
	},
	    template: `
      
        <div>
      <nav  class="navbar navbar-fixed-top navbar-expand" style="background-color: #ffa6c9; list-style: none;">
      <div class="container-fluid" style="background-color: #ffa6c9;">
      <a class="navbar-brand">
      <img src="components/images/grockLogo4.png" alt="" width="194" height="80" class="d-inline-block align-text-top" @click="home()">
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
    <a style="color: white;" class="nav-link"  @click="goToItems()">ITEMS</a>
  </li>
  <li class="nav-item">
    <a style="color: white;" class="nav-link" @click="goToReview()">REVIEWS</a>
  </li>
  <li class="nav-item">
    <a style="color: white;" class="nav-link" @click="goToMaps()">LOCATION</a>
  </li>
</ul>


<div class="container">
	<div class="row">
    <br>
    <br>
    &nbsp;
		<h2>ALL REVIEWS</h2>
	</div>
</div>
<div v-for="review in reviews" class="carousel-reviews broun-block">
    <div class="container">
        <div class="row">
            <div  id="carousel-reviews" class="carousel slide" data-ride="carousel" >
                          
                              <div class="carousel-inner">
                                  <div class="item active">
                                    <div  class="col-md-12">
                                  <div class="block-text rel zmin">
                                <div class="mark">RATING:  {{review.rating}} <span class="rating-input"><span data-value="0" class="glyphicon glyphicon-star"></span><span data-value="1" class="glyphicon glyphicon-star"></span><span data-value="2" class="glyphicon glyphicon-star"></span><span data-value="3" class="glyphicon glyphicon-star"></span><span data-value="4" class="glyphicon glyphicon-star-empty"></span><span data-value="5" class="glyphicon glyphicon-star-empty"></span>  </span></div>
                                  <p>{{review.comment}}</p>
                                <ins class="ab zmin sprite sprite-i-triangle block"></ins>
                                </div>
                            <div class="person-text rel">
                                    
                              <a title="" >By: {{review.buyer.username}}</a>
                              
                            </div>
                            <hr>
                          </div>
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

                axios
                .post('/WebShopREST/rest/reviews/findAllReviews',this.restaurant)
                .then(response=> (this.reviews=response.data))

              
          },
          goToReview:function(){
            location.reload();
          },
          home: function(){
            this.$router.push("/homepage");
        },
          goToItems:function(){
              this.$router.push("/restaurantInfo/"+this.idRest);
            },
          goToMaps: function(){
            this.$router.push("/showMapInfoRestaurant/"+ this.idRest);
          },
         

        }
	
});