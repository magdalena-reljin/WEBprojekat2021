Vue.component("restaurantInfoBuyers", { 
	data: function () {
	    return {
            idRest: this.$route.params.idRest,
            id: this.$route.params.id,
            itemQuantity: null,
            isHidden: true,
            inBasket: false,
            numberOfItems: 0,
            basketDto:{
              idBuyer: '',
              idItem: '',
              idRest: ''

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
			deleted: ''
			
			},
      items:
      [{
        name:'',
        price: 0,
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
    ],
    basket: {
        buyer: {
            username:''
        },
        items: [
            {
                name:'',
                price: 0,
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
               numberInOrder: 0,
               deleted: false
        
              }

        ],
        totalPrice: 0
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
    
       
        <button style="background-color: #ffa6c9;" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    
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

<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link" @click="goToItems()">Items</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" @click="goToReview()">Reviews</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" @click="goToMaps()">Location</a>
  </li>
  
</ul>
<br>
<div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button 
  style="display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #ffa6c9;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;" 
  class="btn btn-primary me-md-2" @click="goToBasket()" type="button" >
 
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg> My Basket ({{numberOfItems}})
  </button>

</div>

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
             
             <hr>
              <h6 class="card-title" style="color:gray;">QUANTITY:</h6>
              <div class="d-grid gap-2 col-0 mx-auto">
              <input v-model="item.numberInOrder" type="number" value="1" min="1" max="1000" step="1"/>
              <button @click="addItemToBasket(item)" type="button" class="btn btn-outline-dark">Add to basket</button>
              <button @click="removeFromBasket(item)" type="button" class="btn btn-outline-danger">Remove</button>
              </div>
            
            </div>
           
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
        this.numOfItems();
    
          
    },
        methods: {
            
            loadData: function(){
 
              this.restaurant.name=this.idRest,
                axios
                .post('/WebShopREST/rest/restaurants/findRestaurantData',this.restaurant)
                .then(response=> (this.restaurant=response.data))

                
              axios
              .post('/WebShopREST/rest/items/findAllItemsInRestaurant',this.restaurant)
              .then(response=> {this.items=response.data})

              
          },
          addItemToBasket: function(item){
             if(this.restaurant.status=='OPEN'){
             this.basket.buyer.username=this.id
             this.basket.items.push(item);
             

             axios
              .post('/WebShopREST/rest/buyers/addItemInBasket',this.basket)
              .then(response=>{
                location.reload()
               
              })
            }else{
              alert("Restaurant is closed!")
            }
            
        },
        removeFromBasket: function(item){
          this.basketDto.idBuyer=this.id
          this.basketDto.idItem=item.name

          axios
          .post('/WebShopREST/rest/buyers/isItemInBasket',this.basketDto)
          .then(response=>{
            console.log("VRATIOOO"+response.data)
            if(response.data == true){
              axios
              .post('/WebShopREST/rest/buyers/removeFromBasket',this.basketDto)
              .then(response=>{
                alert("Item removed!")
               location.reload()
               
              })
            }
           
          })
        
       
       

        },
        goToBasket(){
        
            this.$router.push("/basket/"+this.idRest+"/"+this.id);
     
        },
        goToReview:function(){
          this.$router.push("/reviewBuyer/"+this.id+"/"+this.idRest);
        },
        numOfItems(){
          this.basketDto.idBuyer=this.id
          this.basketDto.idRest=this.idRest
          axios
              .post('/WebShopREST/rest/buyers/numOfItems',this.basketDto)
              .then(response=>{
              this.numberOfItems=response.data
        
              })
        },
        goToMaps: function(){
          this.$router.push("/showMapBuyer/"+this.id+"/"+this.idRest);
        },
        goToItems: function(){
          location.reload();
        }

        }
	
});