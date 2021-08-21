Vue.component("homeLoggedInManager", {
    data: function () {
      return {
        id: this.$route.params.id,
      }
    },
    template: ` 
  <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
        <a class="nav-link" @click="goToAllUsers()">Users</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" @click="goToRestaurants()">Restaurants</a>
        </li>
         
       </ul>
  
  
            <h1>MANAGER!</h1>
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
            }
          }
          
      
      
  });