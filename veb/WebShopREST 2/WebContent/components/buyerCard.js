Vue.component("buyerCard", {
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
        <a class="nav-link" @click="goToRestaurants()">Restaurants</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" @click="goToAllOrders()">Orders</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" @click="goToBuyerCard()">Buyer card</a>
        </li>
         
       </ul>
  

    


     
  
            <h1>OVO JE BUYER CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARD!</h1>
  </div>
          `,
          mounted(){
            this.getAllRestaurants();
          },
          methods: {
            redirect: function(){
              this.$router.push("/profile/"+this.id);
            },
            goToAllOrders: function(){
                this.$router.push("/ordersBuyer/"+this.id);
            },
            goToRestaurants: function(){
                this.$router.push("/homeLoggedInBuyer/"+this.id);
            },
            goToBuyerCard: function(){
                location.reload();
            }
          }
          
      
      
  });