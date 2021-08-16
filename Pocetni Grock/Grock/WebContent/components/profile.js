Vue.component("profile", {
    data: function () {
      return {
        id: this.$route.params.id,
        user: {
            username: null,
            password: null,
            name: null,
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
            <a class="navbar-brand" >
              <img src="components/pictures/grockLogo4.png" alt="" width="194" height="80" class="d-inline-block align-text-top"> 
            </a>
  
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="http://localhost:8080/Grock/#/login">Login</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">Sign up</a>
                </li>
              </ul>
  
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
              <li><a class="dropdown-item" href="http://localhost:8080/Grock/#/profile">Profile</a></li>
              <li><a class="dropdown-item" href="http://localhost:8080/Grock/#/login">Log out</a></li>
            </ul>
          </li>
  
  
          </div>
     
        </nav>
        <div class="container">
        <div class="row gutters">
        <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        <div class="card h-100">
            <div class="card-body">
                <div class="account-settings">
                    <div class="user-profile">
                        <div class="user-avatar">
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin">
                        </div>
                        <h5 >{{user.username}}</h5>
                        <h6>{{user.role}}</h6>
                    </div>
                </div>
            </div>
        </div>
        </div>


        <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
        <div class="card h-100">
            <div class="card-body">
                <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h6 class="mb-2 text-primary">Personal Details</h6>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                            <label for="Name">Name</label>
                            <input class="form-control" v-model="user.name" id="Name" disabled>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                            <label for="Surname">Surname</label>
                            <input  class="form-control" id="Surname" disabled >
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                            <label for="Gender">Gender</label>
                            <input v-model="user.gender" type="text" class="form-control" id="Gender" disabled>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                            <label for="DateBirth">Birthday</label>
                            <input type="text" class="form-control" id="DateBirth" disabled>
                        </div>
                    </div>
                </div>
                <div><div>
                <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="text-right">
                            <button type="button" id="submit" name="submit" class="btn btn-primary">   Update profile     </button>
                            <button type="button" id="submit" name="submit" class="btn btn-primary">   Change password    </button>
                            <button type="button" id="submit" name="submit" class="btn btn-primary">Change profile picture</button>
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
                this.user.username=this.id
                axios
                .post('/Grock/rest/users/findData',this.user)
                .then(response=> (this.user=response.data))
            }
        }
    });