Vue.component("deliveryRequestsManager", {
    data: function () {
      return {
        idManager: this.$route.params.id,
        requestDto:{
          delivererId: '',
          orderId: ''
        },
        basketDto:{
            idRest: '',
          },
          deliverers: [{
		    username: '',
	    	password: '',
        name: '',
        surname:'',
        gender: 0,
        birthDate: '',
        role: 2,
        deleted: false,
        blocked: false,
        orders: [
            {
                id: '',
                items: [
                    {
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
                ],
              restaurant:{
                  name: ''
    
              } ,
              dateAndTime: null,
               cena: 0,
               buyer: {
                   username: '',
                   points: 0
               },
               status: 0
    
           }
            
        ],
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
            streetAndNumber: '',
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
        <a class="nav-link" @click="goToRestaurants()">Restaurant</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" @click="goToOrders()">Orders</a>
        </li>
        </li>
        <li class="nav-item">
        <a class="nav-link" @click="goToRequests()">Delivery requests</a>
        </li>
        
         
       </ul>
        

     
  
            <h1 style="text-align:center;">Current orders</h1>



            <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css">
<hr>
<div class="container bootstrap snippets bootdey">
    <div class="row">
        <div class="col-lg-12">
            <div class="main-box no-header clearfix">
                <div class="main-box-body clearfix">
                    <div class="table-responsive">
                        <table class="table user-list">
                            <thead>
                                <tr>
                                <th><span>OrderID</span></th>
                                <th><span>Created</span></th>
                                <th><span>Items</span></th>
                                <th><span>Quantity</span></th>
                                <th class="text-center"><span>Status</span></th>
                                <th><span>Price</span></th>
                                <th><span>Deliverer</span></th>
                                <th>&nbsp;</th>
                                </tr>
                            </thead>
                        <tbody v-for="deliverer in deliverers">

                                <tr v-if="order.status === 'WAITINGFORACCEPTANCE' && basketDto.idRest === order.restaurant.name " v-for="order in deliverer.orders">
                                    <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                                    </svg>
                                        
                                        <span class="user-subhead">{{order.id}}</span>
                                    </td>
                                    <td>{{order.dateAndTime}}</td>
                                    <td>
                                    <div  v-for="item in order.items">
                                      
                                        <img  style="height: 60px;" v-bind:src="item.image"/>
                                        <span class="label label-default">{{item.name}}</span>
                                        
                                        <br>
                                      
                                   </div> 
                                   </td>

                                   <td>
                                   <div v-for="item in order.items">
                                     
                                     
                                       <span class="label label-default">{{item.numberInOrder}}</span>
                                       
                                       <br>
                                       <br>
                                       <br>
                                     
                                  </div> 
                                  </td>
                                    
                                    <td class="text-center">
                                        <span v-if="order.status === 'PROCESSING'" style ="color: green;"  class="label label-default">{{order.status}}</span>
                                        <span v-else style ="color: red;" class="label label-default">{{order.status}}</span>
                                    </td>
                                    <td>
                                    <span class="label label-default">{{order.cena}}$</span>
                                    </td>
                                 
                                    <td>
                                    <span class="label label-default">{{deliverer.username}}$</span>
                                    </td>

                                    <td>
                                    <button  type="button" @click="accept(deliverer,order)" class="btn btn-outline-success" >ACCEPT</button>
                                    <button  type="button" @click="deny(deliverer,order)" class="btn btn-outline-danger" >DENY</button>
                                    </td>
                                
                                 </tr>
                            
                                
                                
                            </tbody>
                        </table>
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
            loadData: function(){
                this.manager.username=this.idManager
               axios
              .post('/WebShopREST/rest/managers/findData',this.manager)
              .then(response=> {
                  
                this.manager=response.data
                this.basketDto.idRest=this.manager.restaurant.name
                console.log("ispred find all sam")
                axios
                .get('/WebShopREST/rest/deliverers/findAllreq')
                .then(response=> {this.deliverers=response.data
                       console.log("Magdalena je bila ovde")
                })
            
            })
            },
            goToRestaurants: function(){
                this.$router.push("/restaurantManager/"+this.idManager+"/"+this.basketDto.idRest);
            },
            goToOrders: function(){
                this.$router.push("/ordersManager/"+this.idManager)
            },
            goToHome: function(){
                this.$router.push("/homeLoggedInManager/"+this.idManager);
            },
            redirect: function(){
                this.$router.push("/profile/"+this.manager.username);
            },
            goToRequests: function(){
                location.reload();
              
            },
             accept: function(deliverer,order){
               this.requestDto.delivererId=deliverer.username
               this.requestDto.orderId=order.id
              axios
              .post('/WebShopREST/rest/deliverers/acceptOrder',this.requestDto)
              .then(response=> {
                     console.log("Magdalena je bila ovde accept")

                     axios
                     .post('/WebShopREST/rest/orders/acceptOrder',this.requestDto)
                     .then(response=>console.log("Magdalena je bila ovde accept"))
                     location.reload();
              })

            
            },
           deny: function(deliverer,order){
            this.requestDto.delivererId=deliverer.username
            this.requestDto.orderId=order.id
            axios
            .post('/WebShopREST/rest/deliverers/denyOrder',this.requestDto)
            .then(response=> {
                   console.log("Magdalena je bila ovde deny")
                   location.reload();
            })
          
           },



          },
          
      
      
  });