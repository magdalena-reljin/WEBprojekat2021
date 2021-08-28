Vue.component("deliveredOrders", {
    data: function () {
      return {
        id: this.$route.params.id,
        orders:[
           {
            id: '',
            items: [

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
    },
    num: 0,
    trol:false,
    cancel: '',
          },

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
                                <th><span>Restaurant</span></th>
                                <th><span>Type</span></th>
                                <th><span>Created</span></th>
                                <th><span>Items</span></th>
                                <th><span>Quantity</span></th>
                                <th><span>Price</span></th>
                                <th class="text-center"><span>Status</span></th>
                                <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="order in orders">
                                    <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                                  </svg>
                                        
                                        <span class="user-subhead">{{order.id}}</span>
                                    </td>
                                    <td>
                                    <span class="label label-default">{{order.restaurant.name}}</span>
                                   </td>
                                   <td>
                                   <span class="label label-default">{{order.restaurant.restaurantType}}</span>
                                   </td>
                                    <td>{{order.dateAndTime}}</td>

                                    <td>
                                    <div v-for="item in order.items">
                                      
                                        <span class="label label-default">{{item.name}}</span>
                                        <br>
                                        <br>
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
                                   <td>
                                   {{order.cena}}$
                                  </td>


                                    <td class="text-center">
                                    
                                        <span style ="color: pink;" class="label label-default">{{order.status}}</span>
                                    
                                   
                                    <td>
                                    
                                      <button @click="writeAReview(order)"  type="button" class="btn btn-outline-dark" >WRITE A REVIEW</button>
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
            this.getAllOrders();
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
                location.reload();
            },
            goToBuyerCard: function(){
                this.$router.push("/buyerCard/"+this.id);
            },
            getAllOrders: function(){
                this.buyer.username=this.id
                axios
                .post('/WebShopREST/rest/orders/getDeliveredOrdersForBuyer',this.buyer)
                .then(response=> {
                 this.orders=response.data
                 console.log("USPESNO"+response)
                })
                
            },
            writeAReview: function(orderForReviewing){
                this.$router.push("/writeAReview/"+this.id+"/"+orderForReviewing.restaurant.name+"/"+orderForReviewing.id); 
                 
            }


          },
          
      
      
  });