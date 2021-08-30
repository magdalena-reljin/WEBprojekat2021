Vue.component("homeLoggedInBuyer", {
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
          <div v-if="item.deleted === false" v-for="item in filteredRestaurants" class="col-lg-4">
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
              this.$router.push("/profile/"+this.id);
            },
            goToAllOrders: function(){
              this.$router.push("/ordersBuyer/"+this.id);
            },
            goToBuyerCard: function(){
              this.$router.push("/buyerCard/"+this.id);
            },
            goToDelivered: function(){
              this.$router.push("/deliveredOrders/"+this.id);
            },
            getAllRestaurants: function () {
              axios
              
              .get('/WebShopREST/rest/restaurants/findAllRestaurants')
              .then(response=> (this.restaurants=response.data))
            },
            saveRestaurantId: function (idRest) {
              this.$router.push("/restaurantInfoBuyers/"+idRest+"/"+this.id);
           
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