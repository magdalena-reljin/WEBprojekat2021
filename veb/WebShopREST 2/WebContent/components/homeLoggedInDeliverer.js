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
              street: '',
              number: '',
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
           
        <ul class="nav justify-content-center" style="background-color: black;">

        <li class="nav-item">
        <a style="color: white;" class="nav-link" @click="goToHome()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
        <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
      </svg> HOME</a>
        </li>
        <li class="nav-item">
        <a style="color: white;" class="nav-link" @click="goToAllOrders()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
      </svg> ALL ORDERS</a>
        </li>
        <li class="nav-item">
        <a style="color: white;" class="nav-link" @click="goToMyOrders()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-check" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
      </svg> MY DELIVERY ORDERS</a>
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
                 <div  v-if="item.deleted === false" v-for="item in restaurant" class="col-lg-4">
                   <div class="card">
             <img v-bind:src="item.logo"
                     />
                     <div class="card-body">
                       <h4 class="card-title">{{item.name}}</h4>
               <h6 v-if="item.status === 'OPEN'" style="color: green;">{{item.status}}</h6>
                       <h6 v-else style="color: red;">{{item.status}}</h6>
                       <h6>{{item.location.address.town}}<p>{{item.location.address.street}} {{item.location.address.number}}</p></h6>
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
              this.$router.push("/restaurantInfoDeliverer/"+id+"/"+this.id);
              console.log("ovo je id rest"+id)
            },
          }
          
      
      
  });