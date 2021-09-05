Vue.component("homeLoggedInManager", {
    data: function () {
      return {
        id: this.$route.params.id,
        flagg: false,
			searchName: '',
			searchType: '',
			searchRating: '',
			searchLocation: '',
			sortBy: '',
			filterStatus:'ALL',
			townSearch: '',
			cela: '',
        restaurants:[
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
          
      },
      restaurant: {
        name: '',
        restaurantType: null,
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
              street: '',
              number: '',
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
    
        },
      ],
      status: 0,
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
      deleted: false,
      avg: 0
      
      },
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
       <div class="header">
       <form>
           <h1>
               Search restaurants
           </h1>
           <div class="form-box">
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
     
               <select v-model="searchType" class="search-select" placeholder="Type">
       <option disabled value="">SELECT TYPE</option>
         <option  selected>SERBIAN</option>
       <option >ITALIAN</option>
       <option >CHINESE</option>
       <option >AMERICAN</option>
     </select>

     <select  v-model="searchRating" class="search-select" placeholder="Rating">
         <option disabled value="">SELECT RATING</option>
         <option v-bind:value=5 >FIVE STARS</option>
         <option v-bind:value=4 >FOUR STARS</option>
         <option v-bind:value=3 >THREE STARS</option>
         <option v-bind:value=2 >TWO STARS</option>
         <option v-bind:value=1 >ONE STAR</option> 
     </select>

     <button @click="sortRA()" type="button" class="btn btn-outline-light" >
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" fill="currentColor" class="bi bi-sort-down" viewBox="0 0 16 16">
       <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
     </svg>
     </button>
     <button  @click="sortRD()" type="button" class="btn btn-outline-light">
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" fill="currentColor" class="bi bi-sort-down-alt" viewBox="0 0 16 16">
       <path d="M3.5 3.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 12.293V3.5zm4 .5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z"/>
     </svg>
     
     </button>


     <input type="text" class="search-field" placeholder="LOCATION" :value="searchLocation" @input="searchLocation = $event.target.value.toUpperCase()">
     <button @click="sortLA()" type="button" class="btn btn-outline-light" >
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" fill="currentColor" class="bi bi-sort-alpha-down" viewBox="0 0 16 16">
     <path fill-rule="evenodd" d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"/>
     <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
       </svg>
     </button>
     <button  @click="sortLD()" type="button" class="btn btn-outline-light">
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" fill="currentColor" class="bi bi-sort-alpha-down-alt" viewBox="0 0 16 16">
        <path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"/>
      <path fill-rule="evenodd" d="M10.082 12.629 9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"/>
       <path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
               </svg>
     
     </button>

     <select  v-model="filterStatus" class="search-select" placeholder="STATUS">
         <option disabled value="">SELECT STATUS</option>
         <option >ALL</option>
         <option >OPEN</option>
     </select>
     <button @click="resetSearch()" type="button" class="btn btn-outline-light" >RESET SEARCH</button>


               <br>
               <br>
               <button  @click="setFlagg()" type="button" class="btn btn-outline-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
     <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
     <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
     </svg> SEARCH BY MAPS
     </button>

     <div v-if="flagg === true" align="center" vertical-align="center" style="border-style:solid; width:100%; height:200px;">
                 <map-container
                 :coordinates="[this.restaurant.location.longitude,this.restaurant.location.latitude]"
                   ></map-container>
     </div>
     <div v-else></div>


      

           </div>

       
   
   
       </form>
   </div>
   <br>
 
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
                 <div v-if="item.deleted === false"v-for="item in filteredRestaurants" class="col-lg-4">
                   <div class="card">
             <img v-bind:src="item.logo"
                     />
                     <div class="card-body">
                       <h4 class="card-title">{{item.name}}</h4>
               <h6 v-if="item.status === 'OPEN'" style="color: green;">{{item.status}}</h6>
                       <h6 v-else style="color: red;">{{item.status}}</h6>
                       <h6>{{item.location.address.streetAndNumber}}<p>{{item.location.address.town}}</p></h6>
                       <h6 >Rating: <svg xmlns="http://www.w3.org/2000/svg" v-for="p in item.avg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                       </svg></h6>
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
              .then(response=> (this.restaurants=response.data))
            },
            saveRestaurantId: function (id) {
              this.$router.push("/restaurantInfoManager/"+id+"/"+this.manager.username);
              console.log("ovo je id rest"+id)
            },
            redirect: function(){
              this.$router.push("/profile/"+this.manager.username);
            },
            resetSearch: function(){

              this.searchName=""
              this.searchRating=""
              this.searchType=""
              this.sortBy=""
              this.filterStatus='ALL'
              this.searchLocation=""
              this.townSearch=""
              this.flagg=false;
            },
            sortNameAToZ: function(){
               this.sortBy='NameAsc'
            },
            sortNameZToA: function(){
              this.sortBy='NameDesc'
            },
            sortRA: function(){
              this.sortBy='RatingAsc'
            },
            sortRD: function(){
              this.sortBy='RatingDesc'
            },
            sortLA: function(){
              this.sortBy='LocationAsc'
            },
            sortLD: function(){
              this.sortBy='LocationDesc'
            },
            azuriranjeAdrese : function() {
            
              axios.get("https://nominatim.openstreetmap.org/reverse", {
                params: {
                lat: this.restaurant.location.latitude,
                lon: this.restaurant.location.longitude,
                format: "json",
               },
               })
              .then((response) => {
                  const { address } = response.data;
                  var flag = false;
        
                  
        
                  if (address) {
            
                    if (address.road) {
                      this.restaurant.location.address.street = address.road;
                
                      flag = true;
                    } else if (address.street) {
                      this.restoran.location.address.street = address.street;
                      flag = true;
                    }
                    if (flag && address["house-number"]) {
                      this.restaurant.location.address.number = address["house-number"];
                    }
                    else if (flag && address["house_number"]) {
                      this.restaurant.location.address.number = address["house_number"];
                    }
                    if (flag && address.town) {
                      this.restaurant.location.address.town = address.town;
                      this.townSearch= this.restaurant.location.address.town;
                    }
                    else if (flag && address.city) {
                      this.restaurant.location.address.town = address.city;
                      this.townSearch= this.restaurant.location.address.town;
                    }
                    if (flag && address.postCode) {
                      this.restaurant.location.address.zipCode = address.postCode;
                    }
                    else if (flag && address.postcode) {
                      this.restaurant.location.address.zipCode = address.postcode;
                    }
                    if (flag) {
                      this.cela = this.restaurant.location.address.street  + " " + this.restaurant.location.address.number 
                    }
                  }
                  this.searchLocation=""
                  console.log("ovo je grad "+ this.townSearch)
                  console.log("ovo je grad2 "+ this.restaurant.location.address.town)
                  
                })
                  
            
            },
            setFlagg: function(){
              if(this.flagg === true){
                this.flagg=false
              }else if(this.flagg === false){
                this.flagg=true;
              }
              console.log("ovo je flag "+this.flagg)
            }
          },
          computed: {
            filteredRestaurants: function(){
          
              temp = this.restaurants.filter((restaurant)=>{
                this.cela=restaurant.location.address.street +" "+ restaurant.location.address.number + " "+ restaurant.location.address.town
                     if(this.townSearch === '') {
                 if(this.filterStatus === 'ALL'){
                 if(restaurant.restaurantType != null){   
                  if(this.searchRating===0)
                return restaurant.name.match(this.searchName) && restaurant.restaurantType.match(this.searchType) 
                else
                return restaurant.name.match(this.searchName) && restaurant.restaurantType.match(this.searchType) && restaurant.avg.toString().match(this.searchRating.toString()) && this.cela.toUpperCase().match(this.searchLocation)  
                      }
                 } else if(this.filterStatus === 'OPEN'){
                if(restaurant.restaurantType != null){   
                  if(this.searchRating===0)
                  return restaurant.name.match(this.searchName) && restaurant.restaurantType.match(this.searchType) && restaurant.status.match(this.filterStatus)
                  else
                  return restaurant.name.match(this.searchName) && restaurant.restaurantType.match(this.searchType) && restaurant.avg.toString().match(this.searchRating.toString()) && this.cela.toUpperCase().match(this.searchLocation) && restaurant.status.match(this.filterStatus)
                   }
                 }
                }else{
                this.searchLocation=""
                if(this.filterStatus === 'ALL'){
                  if(restaurant.restaurantType != null){   
                   if(this.searchRating===0)
                   return restaurant.name.match(this.searchName) && restaurant.restaurantType.match(this.searchType) 
                   else
                   return restaurant.name.match(this.searchName) && restaurant.restaurantType.match(this.searchType) && restaurant.avg.toString().match(this.searchRating.toString()) && restaurant.location.address.town.toUpperCase().match(this.townSearch.toUpperCase()) 
                  }
                  } else if(this.filterStatus === 'OPEN'){
                   if(restaurant.restaurantType != null){   
                     if(this.searchRating===0)
                     return restaurant.name.match(this.searchName) && restaurant.restaurantType.match(this.searchType) && restaurant.status.match(this.filterStatus)
                     else
                     return restaurant.name.match(this.searchName) && restaurant.restaurantType.match(this.searchType) && restaurant.avg.toString().match(this.searchRating.toString()) && restaurant.location.address.town.toUpperCase().match(this.townSearch.toUpperCase()) && restaurant.status.match(this.filterStatus)
                    }
                  }
          
                }
          
          
              });
          
          
          
              temp = temp.sort((a, b) => {
                      if (this.sortBy == 'NameAsc') {
                          let fa = a.name.toLowerCase(), fb = b.name.toLowerCase()
                    
                        if (fa < fb) {
                          return -1
                        }
                        if (fa > fb) {
                          return 1 
                        }
                        return 0
          
                      } else if (this.sortBy == 'NameDesc') {
                  return (b.name > a.name) ? 1 : -1
          
                  } else if (this.sortBy == 'RatingDesc') {
                          return a.avg - b.avg
                    }else if (this.sortBy == 'RatingAsc') {
                  return (b.avg - a.avg)
                }else if (this.sortBy == 'LocationAsc') {
                  let fa = a.location.address.town.toLowerCase(), fb = b.location.address.town.toLowerCase()
                    
                  if (fa < fb) {
                    return -1
                  }
                  if (fa > fb) {
                    return 1 
                  }
                  return 0
                }else if (this.sortBy == 'LocationDesc') {
                  return (b.location.address.town > a.location.address.town) ? 1 : -1
                }
                  })
          
              return temp;
            }
          }
          

          
      
      
  });