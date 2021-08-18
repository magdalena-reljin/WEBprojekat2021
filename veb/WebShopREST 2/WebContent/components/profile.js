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
        }, 
      }
    },
    template: ` 
  <div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid" style="background-color: #ffa6c9;">
    <a class="navbar-brand" @click="backHome()">
      <img src="components/images/grockLogo4.png" alt="" width="194" height="80" class="d-inline-block align-text-top"> 
    </a>

      

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

  
  <div class="container">
  <div class="main-body">

  
        <div class="row gutters-sm">
          <div class="col-md-4 mb-3">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150">
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
                    <a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Update picture</a>
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
              this.$router.push("/homeLoggedIn/"+this.id)
            }
        }
    });