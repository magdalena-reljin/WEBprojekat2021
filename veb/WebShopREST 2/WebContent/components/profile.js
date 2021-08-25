Vue.component("profile", {
    data: function () {
      return {
        id: this.$route.params.id,
        user: {
            username: null,
            password: null,
            name: null,
            surname: null,
            gender: null,
            birthDate: null,
            role: null,
            deleted: false,
            blocked: false
        }, 
      }
    },
    template: ` 
  <div>
  <nav class="navbar navbar-default navbar-fixed-top" style="background-color: #ffa6c9; list-style: none;">
  <div class="container-fluid" style="background-color: #ffa6c9;">
    <a class="navbar-brand" @click="backHome()">
      <img src="components/images/grockLogo4.png" alt="" width="194" height="80" class="d-inline-block align-text-top"> 
    </a>

   
    <button style="background-color: #ffa6c9;" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <li style="background-color: #ffa6c9;" class="nav-item dropdown">
    <a style="background-color: #ffa6c9;" class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" class="bi bi-person-circle" viewBox="0 0 16 16">
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
    </svg>
    </a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
      <li><a class="dropdown-item" @click="redirect()">Profile</a></li>
      <li><a class="dropdown-item" href="http://localhost:8080/WebShopREST/#/login">Log out</a></li>
      <li><a class="dropdown-item" @click="goToHome()">Home</a></li>
    </ul>
    </li>


  </div>

</nav>

  <br>
  <br>
  <div class="container">
  <div class="main-body">

  
        <div class="row gutters-sm">
          <div class="col-md-4 mb-3">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <img v-if="user.role === 'ADMINISTRATOR'" src="components/images/admin.png"  class="rounded-circle" width="150">
                  <img v-else-if="user.role === 'MANAGER'" src="components/images/manager.png"  class="rounded-circle" width="150">
                  <img v-else-if="user.role === 'BUYER'" src="components/images/buyer.png"  class="rounded-circle" width="150">
                  <img v-else src="components/images/deliverer.png" class="rounded-circle" width="150">
                  <div class="mt-3">
                    <h4>{{user.username}}</h4>
                    <p class="text-secondary mb-1">{{user.role}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card mb-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Name</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">{{user.name}}</div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Surname</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                     {{user.surname}}
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Gender</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{user.gender}}
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Birthday</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{user.birthDate}}
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-12">
                    <a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit profile</a>
               
                    <a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Change password</a>
                  </div>
                  
                </div>
              </div>
            </div>
            </div>

          </div>
        </div>

      </div>
  </div>


  </div>
          `,


        mounted () {
            this.refreshData();
              
        },
        methods: {
            refreshData: function () {
                this.user.username=this.id,
                axios
                .post('/WebShopREST/rest/users/findData',this.user)
                .then(response=> (this.user=response.data))
            },
            backHome: function(){
              if(this.user.role === 'ADMINISTRATOR'){
                this.$router.push("/homeLoggedIn/"+this.id)
              }else if(this.user.role === 'BUYER'){
                this.$router.push("/homeLoggedInBuyer/"+this.id)
              }else if(this.user.role === 'MANAGER'){
                this.$router.push("/homeLoggedInManager/"+this.id)
              }else {
                this.$router.push("/homeLoggedInDeliverer/"+this.id)
              }
             
            },
            goToHome: function(){
              if(this.user.role === 'ADMINISTRATOR'){
                this.$router.push("/homeLoggedIn/"+this.id)
              }else if(this.user.role === 'BUYER'){
                this.$router.push("/homeLoggedInBuyer/"+this.id)
              }else if(this.user.role === 'MANAGER'){
                this.$router.push("/homeLoggedInManager/"+this.id)
              }else {
                this.$router.push("/homeLoggedInDeliverer/"+this.id)
              }
            }
        }
    });