Vue.component("ordersManager", {
    data: function () {
      return {
        idManager: this.$route.params.id,
        searchName: '',
            searchType: '',
            filterStatus: '',
            searchPriceStart: '',
            searchPriceEnd: '',
            sort: '',
            startSearch:'',
            endSearch: '',
        basketDto:{
            idRest: '',
          },

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
        <a style="color: white;" class="nav-link" @click="goToRestaurants()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
      </svg> RESTAURANT</a>
        </li>
        <li class="nav-item">
        <a style="color: white;" class="nav-link" @click="goToOrders()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
        <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
        <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
      </svg> ORDERS</a>
        </li>
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

       <div class="header" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('components/images/porudzbine.jpeg');" >
            <form>
                <h1>
                    Search my delivery orders
                </h1>
                <div class="form-box">
          &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
          <p style="color: white;" > START DATE &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; END DATE  &nbsp; &nbsp;  &nbsp;  &nbsp;
          &nbsp;    
            &nbsp; START PRICE  &nbsp;   &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;END PRICE</p>
          
        
		
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
					    <option >DELIVERED</option>
					    <option >CANCELED</option>
					</select>
					<button @click="resetSearch()" type="button" class="btn btn-outline-light" >RESET SEARCH</button>


                </div>

				    
				
				
            </form>
        </div>









<br>
        

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
                                <th><span>Created</span></th>
                                <th><span>Items</span></th>
                                <th><span>Quantity</span></th>
                                <th class="text-center"><span>Status</span></th>
                                <th><span>Price</span></th>
                                <th><span>Buyer</span></th>
                                <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="order in filteredOrders">
                                    <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                                  </svg>
                                        
                                        <span class="user-subhead">{{order.id}}</span>
                                    </td>
                                    <td>{{order.dateAndTime}}</td>
                                    <td>
                                    <div v-for="item in order.items">
                                      
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
                                    <span class="label label-default">{{order.buyer.username}}</span>
                                    </td>
                                    <td>
                                    <button @click="setStatus(order)" v-if="order.status === 'PROCESSING'"  type="button" class="btn btn-outline-success">INPREPARATION</button>
                                    <button v-else  type="button" class="btn btn-outline-danger" disabled>INPREPARATION</button>
                                    <button @click="setStatusWAITINGFORDELIVERY(order)" v-if="order.status === 'INPREPARATION'"  type="button" class="btn btn-outline-success">WAINTING DELIVERY</button>
                                    <button v-else  type="button" class="btn btn-outline-danger" disabled>WAINTING DELIVERY</button>
                                    
                                  
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

                axios
                .post('/WebShopREST/rest/orders/getOrdersForManager',this.basketDto)
                .then(response=> {this.orders=response.data})
            
            })
            },
            goToRestaurants: function(){
                this.$router.push("/restaurantManager/"+this.idManager+"/"+this.basketDto.idRest);
            },
            goToOrders: function(){
                location.reload();
            },
            goToHome: function(){
                this.$router.push("/homeLoggedInManager/"+this.idManager);
            },
            goToReviews: function(){
              
              this.$router.push("/reviewManager/"+this.id)
             },
            redirect: function(){
                this.$router.push("/profile/"+this.idManager);
            },
            goToRequests: function(){
              
              this.$router.push("/deliveryRequestsManager/"+this.idManager)
             },
            setStatus: function(order){
              order.status='INPREPARATION'
              axios
              .put('/WebShopREST/rest/orders/setStatus',order)
              .then(response=> location.reload() )
          
          },
          setStatusWAITINGFORDELIVERY: function(order){
            order.status='WAITINGFORDELIVERY'
            axios
            .put('/WebShopREST/rest/orders/setStatus',order)
            .then(response=> location.reload() )
        
          },
          sortNameAToZ: function(){
                this.sort="NameAsc"
          },
          sortNameZToA: function(){
            this.sort="NameDesc"
          },
          sortDA: function() {
            this.sort="DateAsc"
          },
          sortDD: function() {
            this.sort="DateDesc"
          },
          sortPriceA: function (){
            this.sort="PriceAsc"
          },
          sortPriceD: function (){
            this.sort="PriceDesc"
          },
          resetSearch: function () {
           
            this.searchPriceStart=''
            this.searchPriceEnd=''
            this.startSearch=''
            this.endSearch=''
            this.filterStatus=''
            this.sort=''
          },

          
         



          },

          computed: {
            filteredOrders: function(){
          
              temp = this.orders.filter((order)=>{
                  return order
              });


              temp1 = temp.filter((order)=>{
                 if(order.status!=null && order.dateAndTime !=null){

                     if(this.endSearch === '' && this.searchPriceEnd ===''){
                       return order.cena.toString().match(this.searchPriceStart) && order.dateAndTime.match(this.startSearch) && order.status.match(this.filterStatus)
                     }else if(this.endSearch !='' && this.searchPriceEnd === ''){
                       return order.cena.toString().match(this.searchPriceStart) && order.dateAndTime.substring(0,10) >= this.startSearch.substring(0,10)  && order.dateAndTime.substring(0,10) <= this.endSearch.substring(0,10) && order.status.match(this.filterStatus)
                     }else if(this.endSearch ==='' && this.searchPriceEnd != ''){
                       return order.dateAndTime.match(this.startSearch) &&  order.cena>= parseFloat(this.searchPriceStart) && order.cena <= parseFloat(this.searchPriceEnd) && order.status.match(this.filterStatus)
                     }
                    
                 }
              });
         
              temp=temp1
              temp = temp.sort((a, b) => {
                if (this.sort == 'NameAsc') {
                    let fa = a.restaurant.name.toLowerCase(), fb = b.restaurant.name.toLowerCase()
              
                  if (fa < fb) {
                    return -1
                  }
                  if (fa > fb) {
                    return 1 
                  }
                  return 0
      
                } else if (this.sort == 'NameDesc') {
                  return (b.restaurant.name > a.restaurant.name) ? 1 : -1
      
                } else if (this.sort == 'PriceDesc') {
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