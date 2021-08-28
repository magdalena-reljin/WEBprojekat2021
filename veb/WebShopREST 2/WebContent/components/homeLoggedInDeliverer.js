Vue.component("homeLoggedInDeliverer", {
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
      }
    },
    template: ` 
  <div>
        <nav class="navbar navbar-default navbar-fixed-top" style="background-color: #ffa6c9; list-style: none;">
          <div class="container-fluid" style="background-color: #ffa6c9;">
            <a class="navbar-brand" href="#">
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
        <a class="nav-link" @click="goToAllOrders()">All orders</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" @click="goToMyOrders()">My delivery orders</a>
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
                 <div  v-if="restaurant.deleted === false" v-for="item in restaurant" class="col-lg-4">
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
            this.getAllRestaurants();
          },
         
          methods: {
            redirect: function(){
              this.$router.push("/profile/"+this.id)
            },
            goToAllOrders: function(){
              this.$router.push("/allOrdersDeliverer/"+this.id)
            },
            goToMyOrders: function(){
              this.$router.push("/ordersDeliverer/"+this.id)
            },
            goToHome: function(){
              location.reload();
            },
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