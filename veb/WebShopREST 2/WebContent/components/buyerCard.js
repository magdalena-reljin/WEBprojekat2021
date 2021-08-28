Vue.component("buyerCard", {
    data: function () {
      return {
        id: this.$route.params.id,
        buyer: {
          username: '',
          password: '',
          name: '',
          surname:'',
          gender: 0,
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
        <a class="nav-link" @click="goToDelivered()">Delivered Orders</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" @click="goToBuyerCard()">Buyer card</a>
        </li>
         
       </ul>
  

    


     
  
            

            <br>
            <br>
            <div class="container col-lg-12 col-md-12">
            <div class="main-body">
          
            
                  <div class="row gutters-sm">
                    <div class="col-md-12 mb-12">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex flex-column align-items-center text-center">
                            <img v-if="buyer.type.title === 'BRONZE'" src="components/images/bronze.png" alt="Admin" class="rounded-circle" width="150">
                            <img v-else-if="buyer.type.title === 'SILVER'" src="components/images/silver.png" alt="Admin" class="rounded-circle" width="150">
                            <img v-else  src="components/images/gold.png" alt="Admin" class="rounded-circle" width="150">
                            <div class="mt-3">
                              <h4>{{buyer.username}}</h4>
                              <h4>{{buyer.type.title}}</h4>
                              <p>POINTS: {{buyer.points}} </p> 
                             
                              <p v-if="buyer.type.title === 'BRONZE'" class="text-secondary mb-1">POINTS UNTIL SILVER: {{buyer.type.points}}</p>
                              <p v-else-if="buyer.type.title === 'SILVER'"  style="background-color: gold;" class="text-secondary mb-1">POINTS UNTIL GOLD: {{buyer.type.points}}</p>
                              <p v-else style="background-color: gold;" class="text-secondary mb-1">Max points reached.</p>
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
          mounted(){
            this.loadData();
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
            goToDelivered: function(){
              this.$router.push("/deliveredOrders/"+this.id);
            },
            goToBuyerCard: function(){
                location.reload();
            },
            loadData: function(){
              this.buyer.username=this.id
              axios
              .post('/WebShopREST/rest/buyers/findData',this.buyer)
              .then(response=> (this.buyer=response.data))
            }
          }
          
      
      
  });