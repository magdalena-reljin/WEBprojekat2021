Vue.component("editProfileData", {
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

<div class="row justify-content-center">
<div class="col-md-6">
<div class="card card-outline-secondary">
<div class="card-header">
    <h3 style="text-align:center;" class="mb-0">Personal info</h3>
</div>
<div class="card-body">
    <form class="form" role="form" autocomplete="off">
        <div class="form-group">
            <label>First name:</label>
            <input class="form-control" type="text" v-model="user.name">
        </div>

        <div class="form-group">
          <label>Last name:</label>
          <input class="form-control" type="text" v-model="user.surname">
        </div>

        <div class="form-group">
          <label>Username:</label>
          <input class="form-control" type="text" v-model="user.username" disabled>

        </div>

        <div class="form-group">
            
          <label>Gender:</label>
          <input class="form-control" type="text" v-model="user.gender" disabled>
        </div>
        <div class="form-group">
          <label>Birthday:</label>
        
           <input class="form-control" type="text" v-model="user.birthDate" disabled>
        
        </div>
        <br>
        <div class="form-group">
        <button @click="editData" class="btn btn-outline-dark">Save</button>
        </div>
    </form>
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
            },
            editData: function (event) {
                event.preventDefault();
                this.user.username=this.id,
                axios
                .post('/WebShopREST/rest/users/editData',this.user)
                .then(response=> {
                    if(this.user.role === 'ADMINISTRATOR'){
                        axios
                         .post('/WebShopREST/rest/admins/editData',this.user)
                         .then(response=>  this.$router.push("/profile/"+this.id))
                      }else if(this.user.role === 'BUYER'){
                        axios
                        .post('/WebShopREST/rest/buyers/editData',this.user)
                        .then(response=>  this.$router.push("/profile/"+this.id))
                      }else if(this.user.role === 'MANAGER'){
                        axios
                         .post('/WebShopREST/rest/manager/editData',this.user)
                         .then(response=>  this.$router.push("/profile/"+this.id))
                      }else {
                        axios
                        .post('/WebShopREST/rest/deliverers/editData',this.user)
                        .then(response=>  this.$router.push("/profile/"+this.id))
                      }   


                })
            },
            
        }
    });