Vue.component("homeLoggedIn", { 
	data: function () {
	    return {
        id: this.$route.params.id,
			searchName: '',
			searchType: '',
			searchRating: '',
			searchLocation: '',
			sortBy: '',
			filterStatus:'ALL',
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
			deleted: '',
			avg: 0,
			
			}
     
		],
    restaurantID: '',
		}
	},
	    template: ` 
    	<div>
    	<nav  class="navbar navbar-fixed-top navbar-expand" style="background-color: #ffa6c9; list-style: none;">
  <div class="container-fluid" style="background-color: #ffa6c9;">
  <a class="navbar-brand" href="#">
  <img src="components/images/grockLogo4.png" alt="" width="194" height="80" class="d-inline-block align-text-top">
</a>


<form class="d-flex">
<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
<button class="btn btn-outline-success" type="submit">Search</button>
</form>


  </div>

</nav>
<!-- OVO JE MESTO ZA PRETRAGUUUUUUUUUUUUU-->

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
                   
				   

                </div>

				    
				
				
            </form>
        </div>



<!-- OVO JE MESTO ZA PRETRAGUUUUUUUUUUUUU-->

<ul class="nav justify-content-center">

<li class="nav-item">
<a class="nav-link" @click="goToHome()" >Home</a>
</li>
<li class="nav-item">
<a class="nav-link" @click="goToAllUsers()">Users</a>
</li>
<li class="nav-item">
<a class="nav-link" @click="goToRestaurants()">Restaurants</a>
</li>
<li class="nav-item">
<a class="nav-link" @click="goToReviews()">Reviews</a>
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
          <div v-for="restaurant in filteredRestaurants" class="col-lg-4">
            <div class="card">
			<img v-bind:src="restaurant.logo"
              />
              <div class="card-body">
                <h4 class="card-title">{{restaurant.name}}</h4>
				<h6 v-if="restaurant.status === 'OPEN'" style="color: green;">{{restaurant.status }}</h6>
                <h6 v-else style="color: red;">{{restaurant.status}}</h6>
				<h6>{{restaurant.location.address.streetAndNumber}}<p>{{restaurant.location.address.town}}</p></h6>
				<h6 >Rating: {{restaurant.avg}}</h6>
				<button @click="saveRestaurantId(restaurant.name)" type="button" class="btn btn-outline-dark">SEE ITEMS</button>
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
            goToAllUsers: function(){
              this.$router.push("/allUsersAdmin/"+this.id)
            },
            goToReviews: function(){
              this.$router.push("/reviewAdmin/"+this.id)
            },
            goToRestaurants: function(){
              this.$router.push("/restaurantsAdmin/"+this.id)
            },
            goToHome: function(){
              location.reload();
            },	getAllRestaurants: function () {
              axios
              
              .get('/WebShopREST/rest/restaurants/findAllRestaurants')
              .then(response=> {this.restaurants=response.data
              
              
        
              
              })
        
            },
            resetSearch: function(){
        
              this.searchName=""
              this.searchRating=""
              this.searchType=""
              this.sortBy=""
              this.filterStatus=""
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
            }
            
           
            
        },
        
        computed: {
          filteredRestaurants: function(){
        
            temp = this.restaurants.filter((restaurant)=>{
        
               if(this.filterStatus === 'ALL'){
               if(restaurant.restaurantType != null){   
                if(this.searchRating===0)
              return restaurant.name.match(this.searchName) && restaurant.restaurantType.match(this.searchType) 
              else
              return restaurant.name.match(this.searchName) && restaurant.restaurantType.match(this.searchType) && restaurant.avg.toString().match(this.searchRating.toString()) && (restaurant.location.address.town.toUpperCase().match(this.searchLocation) || restaurant.location.address.streetAndNumber.toUpperCase().match(this.searchLocation))
               }
               } else if(this.filterStatus === 'OPEN'){
              if(restaurant.restaurantType != null){   
                if(this.searchRating===0)
                return restaurant.name.match(this.searchName) && restaurant.restaurantType.match(this.searchType) && restaurant.status.match(this.filterStatus)
                else
                return restaurant.name.match(this.searchName) && restaurant.restaurantType.match(this.searchType) && restaurant.avg.toString().match(this.searchRating.toString()) && (restaurant.location.address.town.toUpperCase().match(this.searchLocation) || restaurant.location.address.streetAndNumber.toUpperCase().match(this.searchLocation)) && restaurant.status.match(this.filterStatus)
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