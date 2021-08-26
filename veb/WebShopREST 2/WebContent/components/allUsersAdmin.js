Vue.component("allUsersAdmin", {
    data: function () {
      return {
        id: this.$route.params.id,
      }
    },
    template: ` 
  <div>
        <nav class="navbar navbar-default navbar-fixed-top" style="background-color: #ffa6c9; list-style: none;">
          <div class="container-fluid" style="background-color: #ffa6c9;">
            <a class="navbar-brand" @click="goToHome()">
              <img src="components/images/grockLogo4.png" alt="" width="194" height="80" class="d-inline-block align-text-top"> 
            </a>
  
              
  
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
  
  
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-person-circle" viewBox="0 0 16 16">
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
        <a class="nav-link" @click="goToAllUsers()">Users</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" @click="goToRestaurants()">Restaurants</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" @click="goToReviews()">Reviews</a>
        </li>
         
       </ul>
  
  
  
            <h1>USERS</h1>
            
            <button @click="registerDeliverer">Register deliverer</button>
            <button @click="registerManager">Register managers</button>
            <table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
            <thead>
            <tr>
              <th class="th-sm">Name
              </th>
             <th class="th-sm">Position
             </th>
             <th class="th-sm">Office
             </th>
            <th class="th-sm">Age
            </th>
             <th class="th-sm">Start date
              </th>
              <th class="th-sm">Salary
             </th>
             </tr>
         </thead>
         <tbody></tbody>
         </table>
      
  </div>
          `,
          methods: {
            redirect: function(){
              this.$router.push("/profile/"+this.id)
            },
            goToAllUsers: function(){
              this.$router.push("/allUsersAdmin/"+this.id)
            },
            goToRestaurants: function(){
              this.$router.push("/restaurantsAdmin/"+this.id)
            },
            goToReviews: function(){
              this.$router.push("/reviewAdmin/"+this.id)
            },
            goToHome: function(){
                this.$router.push("/homeLoggedIn/"+this.id)
              }  ,
              registerManager: function(){
                this.$router.push("/newManager/"+this.id)
              } ,
              registerDeliverer: function(){
                this.$router.push("/newDeliverer/"+this.id)
              } 
          }
          
      
      
  });