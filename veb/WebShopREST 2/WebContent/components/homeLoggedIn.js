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
<ul class="nav justify-content-center"  style="background-color: black;">

<li class="nav-item">
<a style="color: white;" class="nav-link" @click="goToHome()" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
<path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg> HOME</a>
</li>
<li class="nav-item">
<a style="color: white;" class="nav-link" @click="goToAllUsers()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
<path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
</svg> USERS</a>
</li>
<li class="nav-item">
<a style="color: white;" class="nav-link" @click="goToReviews()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
<path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg> REVIEWS</a>
</li>
 
</ul>

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



				    
					<button  @click="resetSearch()" type="button" class="btn btn-outline-light" >RESET SEARCH</button>
                   
				   

                </div>

				    
				
				
            </form>
        </div>



<!-- OVO JE MESTO ZA PRETRAGUUUUUUUUUUUUU-->
<br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
<button class="btn btn-outline-dark btn-lg" @click="createRestaurant">Create Restaurant</button>
<hr>

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
          <div v-if="restaurant.deleted === false" v-for="restaurant in filteredRestaurants" class="col-lg-4">
            <div class="card">
			<img v-bind:src="restaurant.logo"
              />
              <div class="card-body">
                <h4 class="card-title">{{restaurant.name}}</h4>
				<h6 v-if="restaurant.status === 'OPEN'" style="color: green;">{{restaurant.status }}</h6>
                <h6 v-else style="color: red;">{{restaurant.status}}</h6>
                <h6>{{restaurant.location.address.town}}<p>{{restaurant.location.address.street}} {{restaurant.location.address.number}}</p></h6>
				<h6 >Rating: {{restaurant.avg}}</h6>
				<button @click="saveRestaurantId(restaurant.name)" type="button" class="btn btn-outline-dark">SEE ITEMS</button>
        <button @click="deleteRestaurant(restaurant)" type="button" class="btn btn-outline-danger">DELETE</button>
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
            goToHome: function(){
              location.reload();
            },	getAllRestaurants: function () {
              axios
              
              .get('/WebShopREST/rest/restaurants/findAllRestaurants')
              .then(response=> this.restaurants=response.data)
        
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
            },
            saveRestaurantId: function(rname){
              this.$router.push("/restaurantInfoAdmin/"+rname+"/"+this.id);
            },
            createRestaurant: function(){
              this.$router.push("/newRestaurant/"+this.id)
              } ,
              deleteRestaurant: function(rest){
                axios
                .post('/WebShopREST/rest/restaurants/deleteRestaurant',rest)
                .then(response=> {  
                  
                  axios
                  .post('/WebShopREST/rest/managers/deleteRestaurant',rest)
                  .then(response=> {})
                  
                  location.reload()})

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