Vue.component("reviewBuyer", { 
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
					streetAndNumber: '',
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
          }
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
                   streetAndNumber: '',
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
      <nav class="navbar navbar-default navbar-fixed-top" style="background-color: #ffa6c9; list-style: none;">
      <div class="container-fluid" style="background-color: #ffa6c9;">
        <a class="navbar-brand" @click="backHome()">
          <img src="components/images/grockLogo4.png" alt="" width="194" height="80" class="d-inline-block align-text-top"> 
        </a>
    
       
        <button style="background-color: #ffa6c9;" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    
        <li style="background-color: #ffa6c9;" class="nav-item dropdown">
        <a style="background-color: #ffa6c9;" class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" class="bi bi-person-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>
        </a>
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
      </div>
      
    </div>
  </div>
</div>
<!-- Background image -->
</div>
</header>

<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link " aria-current="page" href="#">Items</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="#">Review</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Location</a>
  </li>
</ul>


<div class="container">
	<div class="row">
		<h2>Carousel Reviews</h2>
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
                                <div class="mark">My rating:  {{review.rating}} <span class="rating-input"><span data-value="0" class="glyphicon glyphicon-star"></span><span data-value="1" class="glyphicon glyphicon-star"></span><span data-value="2" class="glyphicon glyphicon-star"></span><span data-value="3" class="glyphicon glyphicon-star"></span><span data-value="4" class="glyphicon glyphicon-star-empty"></span><span data-value="5" class="glyphicon glyphicon-star-empty"></span>  </span></div>
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
         

        }
	
});