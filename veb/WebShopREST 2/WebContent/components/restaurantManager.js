Vue.component("restaurantManager", {
    data: function () {
      return {
        id: this.$route.params.id,
        itemsPom: [],
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
                  streetAndNumber: '',
                  town: '',
                  zipCode: ''
                },
             },
      
             logo: '',
             deleted: ''
            
            }
          
      
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
             numberInOrder: 1,
             deleted: false
  
            }
          ]
      }
    },
    template: ` 
  <div>
        <nav class="navbar navbar-default navbar-fixed-top" style="background-color: #ffa6c9; list-style: none;">
          <div class="container-fluid" style="background-color: #ffa6c9;">
            <a class="navbar-brand" href="#">
              <img src="components/images/grockLogo4.png" alt="" width="194" height="80" class="d-inline-block align-text-top"> 
            </a>
  
              
  
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
  
  
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
           
        <ul class="nav justify-content-center">
        
        <li class="nav-item">
        <a class="nav-link" @click="goToHome()">Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" @click="goToRestaurant()">Restaurant</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" @click="goToOrders()">Orders</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" @click="goToRequests()">Delivery requests</a>
        </li>
        
         
       </ul>

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
                  <img v-bind:src="selectedManager.restaurant.logo"  width="200">
                </div>
              </div>
        </div>
        
        
        </div>
        <div  class="col">
          <h1 style="color:white;" class="mb-3">{{selectedManager.restaurant.name}}</h1>
          <h4 style="color:white;" class="mb-3">{{selectedManager.restaurant.restaurantType}}</h4>
          <h5 style="color:white;" class="mb-3">{{selectedManager.restaurant.status}}</h5>
          <a class="btn btn-outline-light btn-lg" @click="createItem()" role="button"
            >Create item</a
          >
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
                <h5 class="card-title">{{item.name}}</h5>
                <a @click="editItem(item.name)" class="btn btn-primary">Edit</a>
                <a @click="deleteItem(item)" class="btn btn-primary">Delete</a>
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
            redirect: function(){
              this.$router.push("/profile/"+this.id)
            },
            goToRestaurant: function(){
              location.reload();
            },
            goToOrders: function(){
              this.$router.push("/ordersManager/"+this.id)
            },
            goToHome: function(){
              this.$router.push("/homeLoggedInManager/"+this.id)
            },
            goToRequests: function(){
              
              this.$router.push("/deliveryRequestsManager/"+this.id)
             },
            loadData: function(){
                this.selectedManager.username=this.id;
                axios
                .post('/WebShopREST/rest/managers/findData',this.selectedManager)
                .then(response=> {
                  this.selectedManager=response.data
                  axios
                  .post('/WebShopREST/rest/items/findAllItemsInRestaurant',this.selectedManager.restaurant)
                  .then(response=> (this.items=response.data))
                })
                
            },
            createItem: function(){
                this.$router.push("/createItemManager/"+this.id)
            },
            editItem: function(name){
              this.$router.push("/editItemManager/"+name)
            },
           deleteItem: function(item){
              console.log("jkdsnfkds  "+item.name)
              axios
              .post('/WebShopREST/rest/items/deleteItem',item)
              .then(response=> {

                alert("Item deleted");
                location.reload()
              })
              
              
            },
            redirect: function(){
              this.$router.push("/profile/"+this.selectedManager.username);
            }
           
          }
          
      
      
  });