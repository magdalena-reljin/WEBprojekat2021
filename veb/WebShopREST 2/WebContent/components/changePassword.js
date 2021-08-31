Vue.component("changePassword", {
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
        oldPass: '',
        checkPass: '',
        newPass: '',
        err:''
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
    <h3 style="text-align:center;" class="mb-0">Change Password</h3>
</div>
<div style="width: 70%;" class="card-body">
    <form @submit="changePassword" method='post' class="was-validated">
        <div class="form-group">
            <label for="inputPasswordOld">Current Password</label>
            <input v-model="oldPass" type="password" class="form-control" id="inputPasswordOld" required>
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
        </div>
        <div class="form-group">
            <label for="inputPasswordNew">New Password</label>
            <input v-model="newPass"  type="password" class="form-control" id="inputPasswordNew" required>
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
            <span class="form-text small text-muted">
                    The password must be 8-20 characters, and must <em>not</em> contain spaces.
                </span>
        </div>
        <div class="form-group">
            <label for="inputPasswordNewVerify">Verify</label>
            <input v-model="checkPass" type="password" class="form-control" id="inputPasswordNewVerify" required>
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
            <span class="form-text small text-muted">
                    To confirm, type the new password again.
                </span>
        </div>
        <br>
        <div style="color:red;">{{err}}</div>
        <br>
        <div class="form-group">
            <button type="submit" class="btn btn-outline-dark">Save</button>
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
            changePassword: function(event){
              event.preventDefault()
              if(this.oldPass==""){
                this.err="All fields are required!";
              }else if(this.checkPass== ""){
                this.err="All fields are required!";
              }else if(this.newPass==""){
                this.err="All fields are required!";
              }

                if(this.oldPass != "" && this.newPass !="" && this.checkPass !=""){
                  if(this.newPass.length< 8 || this.newPass.length>20){
                    this.err="The password must be 8-20 characters!";
                  }else if(this.newPass.length>=8 && this.newPass.length<=20){
                      if(this.oldPass === this.user.password){
                        
                      if(this.newPass === this.checkPass){
                        this.user.password=this.newPass
                        axios
                        .post('/WebShopREST/rest/users/changePassword',this.user)
                        .then(response=> {
                          alert("Password changed!")
                          this.$router.push("/profile/"+this.id)
                        })
                      }else {
                        this.err="Verify password correctly!";
                      }
                    }else {
                      this.err="Inccorect password!";
                    }

                  }

                
              }

             

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
           
        }
    });





















