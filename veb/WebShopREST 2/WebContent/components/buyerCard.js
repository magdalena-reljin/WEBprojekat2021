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
              
        <ul class="nav justify-content-center" style="background-color: black;">
  
        <li class="nav-item">
        <a style="color: white;" class="nav-link" @click="goToRestaurants()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
        <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
      </svg> RESTAURANTS</a>
        </li>
        <li class="nav-item">
        <a style="color: white;" class="nav-link" @click="goToAllOrders()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
      </svg> ORDERS</a>
        </li>
        <li class="nav-item">
        <a style="color: white;" class="nav-link" @click="goToDelivered()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-check" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
      </svg> DELIVERED ORDERS</a>
        </li>
        <li class="nav-item">
        <a style="color: white;" class="nav-link" @click="goToBuyerCard()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
        <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
      </svg> BUYER CARD</a>
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