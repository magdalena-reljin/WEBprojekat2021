Vue.component("ordersBuyer", {
    data: function () {
      return {
        id: this.$route.params.id,
        searchName: '',
        searchType: '',
        searchPriceStart: '',
        searchPriceEnd: '',
        sort: '',
        startSearch:'',
        endSearch: '',
        filterStatus: '',
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
        <a style="color: white;" class="nav-link" @click="goToRestaurants()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
        <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
      </svg> RESTAURANTS</a>
        </li>
        <li class="nav-item">
        <a style="color: white;" class="nav-link" @click="goToAllUsers()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
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
        

     
       <div class="header" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('components/images/porudzbine.jpeg');" >
       <form>
           <h1>
               Search all orders
           </h1>
           <div class="form-box">
     &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
     <p style="color: white;" >  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;
     &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
       START DATE  &nbsp;   &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;END DATE &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  START PRICE &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp;   &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp; END PRICE </p>
     
   
     <input type="text" class="search-field" placeholder="RESTAURANT NAME" :value="searchName" @input="searchName = $event.target.value.toUpperCase()">
     <button @click="sortNameAToZ()" type="button" class="btn btn-outline-light" >
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" fill="currentColor" class="bi bi-sort-alpha-down" viewBox="0 0 16 16">
     <path fill-rule="evenodd" d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"/>
     <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
       </svg>
     </button>
     <button  @click="sortNameZToA()" type="button" class="btn btn-outline-light">
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" fill="currentColor" class="bi bi-sort-alpha-down-alt" viewBox="0 0 16 16">
        <path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"/>
      <path fill-rule="evenodd" d="M10.082 12.629 9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"/>
       <path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
               </svg>
     
     </button>
     
     <select v-model="searchType" class="search-select" placeholder="Restaurant type">
       <option disabled value="">SELECT TYPE</option>
         <option  selected>SERBIAN</option>
       <option >ITALIAN</option>
       <option >CHINESE</option>
       <option >AMERICAN</option>
     </select>


     <input v-model="startSearch" type="date" class="search-field checkin" placeholder="START DATE" >
   

     <button @click="sortDA()" type="button" class="btn btn-outline-light" >
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" fill="currentColor" class="bi bi-sort-down" viewBox="0 0 16 16">
       <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
     </svg>
     </button>
     <button  @click="sortDD()" type="button" class="btn btn-outline-light">
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" fill="currentColor" class="bi bi-sort-down-alt" viewBox="0 0 16 16">
       <path d="M3.5 3.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 12.293V3.5zm4 .5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z"/>
     </svg>
     </button>
     
     <input v-model="endSearch" type="date" class="search-field checkout" placeholder="END DATE" >
     
   


     <input type="text" class="search-field" placeholder="PRICE" :value="searchPriceStart" @input="searchPriceStart = $event.target.value.toUpperCase()">
     <button @click="sortPriceA()" type="button" class="btn btn-outline-light" >
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" fill="currentColor" class="bi bi-sort-alpha-down" viewBox="0 0 16 16">
     <path fill-rule="evenodd" d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"/>
     <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
       </svg>
     </button>
     <button  @click="sortPriceD()" type="button" class="btn btn-outline-light">
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" fill="currentColor" class="bi bi-sort-alpha-down-alt" viewBox="0 0 16 16">
        <path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"/>
      <path fill-rule="evenodd" d="M10.082 12.629 9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"/>
       <path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
               </svg>
     
     </button>
     <input type="text" class="search-field" placeholder="PRICE" :value="searchPriceEnd" @input="searchPriceEnd = $event.target.value.toUpperCase()">
     
      
     <select  v-model="filterStatus" class="search-select" placeholder="STATUS">
     <option disabled value="">SELECT STATUS</option>
     <option >PROCESSING</option>
     <option >INPREPARATION</option>
     <option >WAITINGFORDELIVERY</option>
     <option >WAITINGFORACCEPTANCE</option>
     <option >TRANSPORTING</option>
     <option >CANCELED</option>
     </select>

     <button @click="resetSearch()" type="button" class="btn btn-outline-light" >RESET SEARCH</button>


           </div>

       
   
   
       </form>
   </div>









<br>
            <h1 style="text-align:center;">CURRENT ORDERS</h1>



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
                                <tr   v-for="order in filteredOrders">
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
                                        <span v-if="order.status === 'PROCESSING'" style ="color: green;"  class="label label-default">{{order.status}}</span>
                                        <span v-else style ="color: red;" class="label label-default">{{order.status}}</span>
                                    </td>
                                   
                                    <td>
                                      <button @click="cancelOrder(order)" v-if="order.status === 'PROCESSING'"  type="button" class="btn btn-outline-danger">CANCEL</button>
                                      <button v-else  type="button" class="btn btn-outline-danger" disabled>CANCEL</button>
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
                location.reload();
            },
            goToRestaurants: function(){
                this.$router.push("/homeLoggedInBuyer/"+this.id);
            },
            goToBuyerCard: function(){
                this.$router.push("/buyerCard/"+this.id);
            },
            goToDelivered: function(){
              this.$router.push("/deliveredOrders/"+this.id);
            },
            getAllOrders: function(){
                this.buyer.username=this.id
                  axios
                 .post('/WebShopREST/rest/orders/getOrdersByBuyerID',this.buyer)
                 .then(response=> {
                  this.orders=response.data
                  console.log("USPESNO"+response)
                 })
                .catch(err=>console.log("GRESKA"))
            },
            cancelOrder: function(orderForCanceling){
              axios
              .post('/WebShopREST/rest/orders/buyerCancelsOrder',orderForCanceling)
              .then(response=> {
                  console.log("USPESNO otkazao")
                  alert("Lost points: "+response.data)
                  location.reload();
              })
            
            },
            resetSearch: function () {
              this.searchName=''
              this.searchType=''
              this.searchPriceStart=''
              this.searchPriceEnd=''
              this.startSearch=''
              this.endSearch=''
              this.filterStatus=''
              this.sort=''
            }


          },

          computed: {
            filteredOrders: function(){
          
              temp = this.orders.filter((order)=>{
                  return order
              });
                 
           
              temp1 = temp.filter((order)=>{
                 if(order.status!=null && order.dateAndTime !=null && order.restaurant.restaurantType !=null){
                      
                     if(this.endSearch === '' && this.searchPriceEnd ===''){
                       return order.cena.toString().match(this.searchPriceStart) && order.dateAndTime.match(this.startSearch) && order.status.match(this.filterStatus) && order.restaurant.name.match(this.searchName) && order.restaurant.restaurantType.match(this.searchType)
                     }else if(this.endSearch !='' && this.searchPriceEnd === ''){
                       return order.cena.toString().match(this.searchPriceStart) && order.dateAndTime.substring(0,10) >= this.startSearch.substring(0,10)  && order.dateAndTime.substring(0,10) <= this.endSearch.substring(0,10) && order.status.match(this.filterStatus) && order.restaurant.name.match(this.searchName) && order.restaurant.restaurantType.match(this.searchType)
                     }else if(this.endSearch ==='' && this.searchPriceEnd != ''){
                       return order.dateAndTime.match(this.startSearch) &&  order.cena>= parseFloat(this.searchPriceStart) && order.cena <= parseFloat(this.searchPriceEnd) && order.status.match(this.filterStatus) && order.restaurant.name.match(this.searchName) && order.restaurant.restaurantType.match(this.searchType)
                     }else if(this.endSearch != '' && this.searchPriceEnd !='' && this.startSearch != '' && this.searchPriceStart !='' && this.filterStatus!=''){
                      return order.dateAndTime.substring(0,10) >= this.startSearch.substring(0,10) && order.dateAndTime.substring(0,10) <= this.endSearch.substring(0,10) &&  order.cena>= parseFloat(this.searchPriceStart) && order.cena <= parseFloat(this.searchPriceEnd) && order.status.match(this.filterStatus) && order.restaurant.name.match(this.searchName) && order.restaurant.restaurantType.match(this.searchType)
                    }else if(this.endSearch != '' && this.searchPriceEnd !='' && this.startSearch != '' && this.searchPriceStart !='' && this.filterStatus===''){
                      return order.dateAndTime.substring(0,10) >= this.startSearch.substring(0,10) && order.dateAndTime.substring(0,10) <= this.endSearch.substring(0,10) &&  order.cena>= parseFloat(this.searchPriceStart) && order.cena <= parseFloat(this.searchPriceEnd) && order.restaurant.name.match(this.searchName) && order.restaurant.restaurantType.match(this.searchType)
                    }
                    
                 }
              });
         
              temp=temp1
              temp = temp.sort((a, b) => {
                if (this.sort == 'PriceDesc') {
                    return a.cena - b.cena
                }else if (this.sort == 'PriceAsc') {
                    return (b.cena - a.cena)
                }else if (this.sort == 'DateAsc') {
                    let fa = a.dateAndTime.toLowerCase(), fb = b.dateAndTime.toLowerCase()
              
                    if (fa < fb) {
                    return -1
                    }
                     if (fa > fb) {
                     return 1 
                     }
                   return 0
                }else if (this.sort == 'DateDesc') {
                   return (b.dateAndTime > a.dateAndTime) ? 1 : -1
                }
                })
      
                return temp;
              
            }
          }
          
      
      
  });