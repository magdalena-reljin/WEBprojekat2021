Vue.component("allUsersAdmin", {
  data: function () {
    return {
      id: this.$route.params.id,
      nameSearch: '',
      surnameSearch: '',
      usernameSearch:'',
      pointsSearch: '',
      filterRole: '',
      filterType: '',
      sort: '',
    
      userDto:
       [{

      user:{
        username: '',
        password: '',
        name: '',
        surname: '',
        gender: 0,
        birthDate: '',
        role: 0,
        deleted: false,
        blocked: false
      },
       trol: false,
       title: null,
       points: 0
      }]
     
    }
  },
  template: ` 
  <div>
  <nav  class="navbar navbar-fixed-top navbar-expand" style="background-color: #ffa6c9; list-style: none;">
<div class="container-fluid" style="background-color: #ffa6c9;">
<a class="navbar-brand">
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
      <a style="color: white;" class="nav-link" @click="goToHome()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
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

     <div class="header" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('components/images/porudzbine.jpeg');" >
          <form>
              <h1>
                  Search users
              </h1>
              <div class="form-box">

      
  
        <input class="search-field checkin" placeholder="NAME" :value="nameSearch" @input="nameSearch = $event.target.value.toUpperCase()">
      

        <button @click="sortNA()" type="button" class="btn btn-outline-light" >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" fill="currentColor" class="bi bi-sort-alpha-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"/>
        <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
          </svg>
        </button>
        <button  @click="sortND()" type="button" class="btn btn-outline-light">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" fill="currentColor" class="bi bi-sort-alpha-down-alt" viewBox="0 0 16 16">
           <path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"/>
         <path fill-rule="evenodd" d="M10.082 12.629 9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"/>
          <path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
                  </svg>
        </button>
        
        <input :value="surnameSearch" @input="surnameSearch = $event.target.value.toUpperCase()"  class="search-field checkout" placeholder="SURNAME" >
        
    
        <button @click="sortSA()" type="button" class="btn btn-outline-light" >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" fill="currentColor" class="bi bi-sort-alpha-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"/>
        <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
          </svg>
        </button>
        <button  @click="sortSD()" type="button" class="btn btn-outline-light">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" fill="currentColor" class="bi bi-sort-alpha-down-alt" viewBox="0 0 16 16">
           <path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"/>
         <path fill-rule="evenodd" d="M10.082 12.629 9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"/>
          <path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
                  </svg>
        
        </button>

        <input :value="usernameSearch" @input="usernameSearch = $event.target.value.toUpperCase()"  class="search-field checkout" placeholder="USERNAME" >
        
    
        <button @click="sortUA()" type="button" class="btn btn-outline-light" >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" fill="currentColor" class="bi bi-sort-alpha-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"/>
        <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
          </svg>
        </button>
        <button  @click="sortUD()" type="button" class="btn btn-outline-light">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" fill="currentColor" class="bi bi-sort-alpha-down-alt" viewBox="0 0 16 16">
           <path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"/>
         <path fill-rule="evenodd" d="M10.082 12.629 9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"/>
          <path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
                  </svg>
        
        </button>

        <input :value="pointsSearch" @input="pointsSearch = $event.target.value.toUpperCase()"  class="search-field checkout" placeholder="POINTS" >
        
    
        <button @click="sortPA()" type="button" class="btn btn-outline-light" >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" fill="currentColor" class="bi bi-sort-down" viewBox="0 0 16 16">
        <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
      </svg>
        </button>
        <button  @click="sortPD()" type="button" class="btn btn-outline-light">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" fill="currentColor" class="bi bi-sort-down-alt" viewBox="0 0 16 16">
        <path d="M3.5 3.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 12.293V3.5zm4 .5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z"/>
      </svg>
        
        </button>



        <select  v-model="filterRole" class="search-select" placeholder="ROLE">
            <option disabled value="">SELECT ROLE</option>
            <option >ADMINISTRATOR</option>
            <option >MANAGER</option>
            <option >BUYER</option>
            <option >DELIVERER</option>
        </select>
        <select  v-model="filterType" class="search-select" placeholder="USER TYPE">
            <option disabled value="">SELECT TYPE</option>
            <option >BRONZE</option>
            <option >SILVER</option>
            <option >GOLD</option>
        </select>
        <button @click="resetSearch()" type="button" class="btn btn-outline-light" >RESET SEARCH</button>


              </div>

          
      
      
          </form>
      </div>









<br>
      

         <br>
     <br>
     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
     
          <button class="btn btn-outline-dark btn-lg" @click="registerDeliverer">Register deliverer</button>
          &nbsp; &nbsp; &nbsp; 
          <button class="btn btn-outline-dark btn-lg"  @click="registerManager">Register manager</button>



          
          <h1 style="text-align:center;">All USERS</h1>



          <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css">
<hr>
<div class="container bootstrap snippets bootdey">
  <div class="row">
      <div class="col-lg-12">
          <div class="main-box no-header clearfix">
              <div class="main-box-body clearfix">
                  <div class="table-responsive">
                      <table class="table user-list">
                          <thead>
                              <tr>
                              <th><span>Name</span></th>
                              <th><span>Surname</span></th>
                              <th><span>Username</span></th>
                              <th><span>Role</span></th>
                              <th><span>User type</span></th>
                              <th><span>Points</span></th>
                              <th><span>Blocked</span></th>
                              <th><span>Trol</span></th>
                              <th>&nbsp;</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr v-if="pom.user.deleted === false" v-for="pom in filteredUsers" :style="{ background: pom.trol == true ? '#ff6b6b' : 'white' }">
                                 
                             
                                  <td>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                </svg>
                                      
                                      <span class="user-subhead">{{pom.user.name}}</span>
                                  </td>

                                  <td>
                                  <span class="label label-default">{{pom.user.surname}}</span>
                                 </td>

                                 <td>
                                 <span class="label label-default">{{pom.user.username}}</span>
                                 </td>

                                  <td>{{pom.user.role}}</td>
                                
                                  <td>
                                
                                  <span v-if="pom.user.role === 'BUYER'" class="label label-default">{{pom.title}}</span>
                             
                                  <span  v-else class="label label-default">-</span>
                                  
                                 </td>

                                <td>
                               
                                 <span v-if="pom.user.role === 'BUYER'" class="label label-default">{{pom.points}}</span>
                                 
                                 <span v-else class="label label-default">-</span>
                            
                                 
                                </td>
                                <td>
                                <span v-if="pom.user.blocked == true" class="label label-default">YES</span>
                                <span v-else class="label label-default">NO</span>
                                </td>

                                <td>
                               
                                 <span v-if="pom.user.role === 'BUYER' && pom.trol == true" class="label label-default">YES</span>
                                 <span v-else-if="pom.user.role === 'BUYER' && pom.trol == false" class="label label-default">NO</span>
                                 <span v-else class="label label-default">-</span>
                            
                                 
                                </td>
                          
                              
                                  <td>
                                    <button @click="blockUser(pom.user)" v-if="pom.user.role != 'ADMINISTRATOR' && pom.user.blocked === false"  type="button" class="btn btn-outline-success">BLOCK</button>
                                    <button v-else  type="button" class="btn btn-outline-danger" disabled>BLOCK</button>
                                    <button @click="deleteUser(pom.user)" v-if="pom.user.role != 'ADMINISTRATOR' && pom.user.role != 'BUYER' && pom.user.deleted === false"  type="button" class="btn btn-outline-success">DELETE USER</button>
                                    <button v-else  type="button" class="btn btn-outline-danger" disabled>DELETE USER</button>
                                  </td>
                                  
                              </tr>
                              
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>





         
    
</div>
        `,
        mounted(){
          this.loadData();
          
        },
        methods: {

          loadData: function(){
             axios
             .get('/WebShopREST/rest/buyers/getAllUser')
             .then(response=> this.userDto=response.data)

          },
          redirect: function(){
            this.$router.push("/profile/"+this.id)
          },
          
          goToAllUsers: function(){
           location.reload();
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
            },
            blockUser: function(user){
              user.blocked=true
              axios
              .post('/WebShopREST/rest/users/blockUser',user)
              .then(response=> {
                
                alert("User "+user.username + " blocked!")
                location.reload()
              })
            },
            deleteUser: function(user){
              user.deleted=true
              axios
              .post('/WebShopREST/rest/users/deleteUser',user)
              .then(response=> {
                if(user.role === 'DELIVERER'){
                  axios
                  .post('/WebShopREST/rest/deliverers/deleteDeliverer',user)
                  .then(response=>{})
                }else if(user.role === 'MANAGER'){
                  axios
                  .post('/WebShopREST/rest/managers/deleteManager',user)
                  .then(response=>{})
                }
                alert("User "+user.username + " deleted!")
                location.reload()
              })

            
            },
            resetSearch: function(){
              this.nameSearch= ''
              this.surnameSearch= ''
              this.usernameSearch=''
              this.pointsSearch= ''
              this.filterRole= ''
              this.filterType= ''
              this.sort=''

            },
            sortNA :function(){
                this.sort='NA'
            },
            sortND :function(){
                this.sort='ND'
            },
            sortSA :function(){
                this.sort='SA'
            },
            sortSD :function(){
              this.sort='SD'
            },
            sortUA :function(){
              this.sort='UA'
            },
            sortUD :function(){
              this.sort='UD'
            },
            sortPA :function(){
              this.sort='PA'
            },
            sortPD :function(){
              this.sort='PD'
            },

        },

        computed: {
          filteredUsers: function(){
        
            temp = this.userDto.filter((MyUser)=>{
                  if(MyUser.user.role !=null && MyUser.title==null){
                      return MyUser.user.name.toUpperCase().match(this.nameSearch) && MyUser.user.surname.toUpperCase().match(this.surnameSearch) && MyUser.user.username.toUpperCase().match(this.usernameSearch) && MyUser.points.toString().match(this.pointsSearch) && MyUser.user.role.toString().match(this.filterRole)
                  }else if(MyUser.user.role !=null && MyUser.title!=null){
                    return MyUser.user.name.toUpperCase().match(this.nameSearch) && MyUser.user.surname.toUpperCase().match(this.surnameSearch) && MyUser.user.username.toUpperCase().match(this.usernameSearch) && MyUser.points.toString().match(this.pointsSearch) && MyUser.user.role.toString().match(this.filterRole) && MyUser.title.toString().match(this.filterType)

                  }
            });
               
         
            temp = temp.sort((a, b) => {
              if (this.sort == 'PD') {
                  return a.points - b.points
              }else if (this.sort == 'PA') {
                  return (b.points - a.points)
              }else if (this.sort == 'NA') {
                  let fa = a.user.name.toLowerCase(), fb = b.user.name.toLowerCase()
            
                  if (fa < fb) {
                  return -1
                  }
                   if (fa > fb) {
                   return 1 
                   }
                 return 0
              }else if (this.sort == 'ND') {
                 return (b.user.name > a.user.name) ? 1 : -1
              }else if (this.sort == 'SA') {
                let fa = a.user.surname.toLowerCase(), fb = b.user.surname.toLowerCase()
          
                if (fa < fb) {
                return -1
                }
                 if (fa > fb) {
                 return 1 
                 }
               return 0


             }else if (this.sort == 'SD') {
               return (b.user.surname > a.user.surname) ? 1 : -1
             }else if (this.sort == 'UA') {
              let fa = a.user.username.toLowerCase(), fb = b.user.username.toLowerCase()
        
              if (fa < fb) {
              return -1
              }
               if (fa > fb) {
               return 1 
               }
             return 0
             }else if (this.sort == 'UD') {
             return (b.user.username > a.user.username) ? 1 : -1
             }


              })
    
              return temp;
            
          }
        }

        
    
    
});