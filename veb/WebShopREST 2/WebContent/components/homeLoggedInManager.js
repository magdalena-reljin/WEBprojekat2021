Vue.component("homeLoggedInManager", {
    data: function () {
      return {
        id: this.$route.params.id,
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
        manager: {
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
                  street: '',
                  number: '',
                  town: '',
                  zipCode: ''
                },
             },
  
             logo: '',
             deleted: ''
            
            }
          
      }
      }
    },
    template: ` 
  <div>
        <nav class="navbar navbar-default navbar-fixed-top" style="background-color: #ffa6c9; list-style: none;">
          <div class="container-fluid" style="background-color: #ffa6c9;">
            <a class="navbar-brand" href="#">
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
           
        <ul class="nav justify-content-center" style="background-color: black;">
  
        <li class="nav-item">
        <a style="color: white;" class="nav-link" @click="goToHome()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
        <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
      </svg> HOME</a>
        </li>
        <li class="nav-item">
        <a style="color: white;" class="nav-link" @click="goToRestaurant()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
      </svg> RESTAURANT</a>
        </li>
        <li class="nav-item">
        <a style="color: white;" class="nav-link" @click="goToOrders()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
        <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
        <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
      </svg> ORDERS</a>
        </li>
        <li class="nav-item">
        <a style="color: white;" class="nav-link" @click="goToRequests()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
      </svg> DELIVERY REQUESTS</a>
        </li>
        <li class="nav-item">
        <a style="color: white;" class="nav-link" @click="goToReviews()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
        <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
      </svg> REVIEWS</a>
        </li>
        
         
       </ul>
  
       
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
                 <div v-if="item.deleted === false"v-for="item in restaurant" class="col-lg-4">
                   <div class="card">
             <img v-bind:src="item.logo"
                     />
                     <div class="card-body">
                       <h4 class="card-title">{{item.name}}</h4>
               <h6 v-if="item.status === 'OPEN'" style="color: green;">{{item.status}}</h6>
                       <h6 v-else style="color: red;">{{item.status}}</h6>
                       <h6>{{item.location.address.streetAndNumber}}<p>{{item.location.address.town}}</p></h6>
			              	<h6 >Rating: {{item.avg}}</h6>
               <button @click="saveRestaurantId(item.name)" type="button" class="btn btn-outline-dark">SEE ITEMS</button>
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
            this.getManager();
            this.getAllRestaurants();
          },
          methods: {
            redirect: function(){
              this.$router.push("/profile/"+this.id)
            },
            goToRestaurant: function(){
              this.$router.push("/restaurantManager/"+this.id+"/"+this.manager.restaurant.name)
            },
            goToOrders: function(){
              this.$router.push("/ordersManager/"+this.id)
            },
            goToHome: function(){
             location.reload();
            },
            goToRequests: function(){
              
              this.$router.push("/deliveryRequestsManager/"+this.id)
             },
             goToReviews: function(){
              
              this.$router.push("/reviewManager/"+this.id)
             },
            getManager: function(){
              this.manager.username=this.id
              axios
                  .post('/WebShopREST/rest/managers/findData',this.manager)
                  .then(response=> (this.manager=response.data))


                  
            },
            getAllRestaurants: function () {
              axios
              
              .get('/WebShopREST/rest/restaurants/findAllRestaurants')
              .then(response=> (this.restaurant=response.data))
            },
            saveRestaurantId: function (id) {
              this.$router.push("/restaurantInfoManager/"+id+"/"+this.manager.username);
              console.log("ovo je id rest"+id)
            },
            redirect: function(){
              this.$router.push("/profile/"+this.manager.username);
            }
          }

          
      
      
  });