Vue.component("allUsersAdmin", {
    data: function () {
      return {
        id: this.$route.params.id,
        users: 
        [{
          username: '',
          password: '',
          name: '',
          surname: '',
          gender: 0,
          birthDate: '',
          role: 0,
          deleted: false,
          blocked: false
          }
        ],
        buyers: [
          {
          username: '',
          password: '',
          name: '',
          surname:'',
          gender: null,
          birthDate: '',
          role: 3,
          deleted: false,
          blocked: false,
          orders: [],
          basket: {
            buyer: null,
            items: [],
            totalPrice: null
          },
          points: 0,
          type: {
            title: 2,
            discount: 0,
            points: 0
          },
          num: 0,
          trol:false,
          cancel: '',
          }
        ],
       
      }
    },
    template: ` 
    <div>
    <nav  class="navbar navbar-fixed-top navbar-expand" style="background-color: #ffa6c9; list-style: none;">
<div class="container-fluid" style="background-color: #ffa6c9;">
<a class="navbar-brand" href="#">
<img src="components/images/grockLogo4.png" alt="" width="194" height="80" class="d-inline-block align-text-top">
</a>
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
  
  
  
        
            <button @click="registerDeliverer">Register deliverer</button>
            <button @click="registerManager">Register managers</button>



            
            <h1 style="text-align:center;">All users</h1>



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
                                <th><span>Trol</span></th>
                                <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="user.deleted === false" v-for="user in users">
                                   
                               
                                    <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                  </svg>
                                        
                                        <span class="user-subhead">{{user.name}}</span>
                                    </td>

                                    <td>
                                    <span class="label label-default">{{user.surname}}</span>
                                   </td>

                                   <td>
                                   <span class="label label-default">{{user.username}}</span>
                                   </td>

                                    <td>{{user.role}}</td>
                                  
                                    <td>
                                    <div v-for="buyer in buyers">
                                    <span v-if="user.role === 'BUYER' && user.username === buyer.username" class="label label-default">{{buyer.type.title}}</span>
                                    </div>
                                    <span  v-if="user.role != 'BUYER'" class="label label-default">-</span>
                                    
                                   </td>

                                  <td>
                                  <div v-for="buyer in buyers">
                                   <span v-if="user.role === 'BUYER' && user.username === buyer.username" class="label label-default">{{buyer.points}}</span>
                                   </div>
                                   <span  v-if="user.role != 'BUYER'" class="label label-default">-</span>
                              
                                   
                                  </td>

                                  <td>
                                  <div v-for="buyer in buyers">
                                   <span v-if="user.role === 'BUYER' && user.username === buyer.username" class="label label-default">{{buyer.trol}}</span>
                                   </div>
                                   <span  v-if="user.role != 'BUYER'" class="label label-default">-</span>
                              
                                   
                                  </td>
                            
                                
                                    <td>
                                      <button @click="blockUser(user)" v-if="user.role != 'ADMINISTRATOR' && user.blocked === false"  type="button" class="btn btn-outline-success">BLOCK</button>
                                      <button v-else  type="button" class="btn btn-outline-danger" disabled>BLOCK</button>
                                      <button @click="deleteUser(user)" v-if="user.role != 'ADMINISTRATOR' && user.role != 'BUYER' && user.deleted === false"  type="button" class="btn btn-outline-success">DELETE USER</button>
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
            this.loadBuyers();
          },
          methods: {

            loadData: function(){
              axios
               .get('/WebShopREST/rest/users/findAll')
		        	 .then(response=> this.users=response.data)



            },
            loadBuyers: function(){
                
               axios
               .get('/WebShopREST/rest/buyers/getAll')
		        	 .then(response=> this.buyers=response.data)
            },
            redirect: function(){
              this.$router.push("/profile/"+this.id)
            },
            
            goToAllUsers: function(){
             location.reload();
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
              },
              blockUser: function(user){
                user.blocked=true
                axios
                .post('/WebShopREST/rest/users/blockUser',user)
                .then(response=> (location.reload()))
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
                  location.reload()
                })

              
              }
          }
          
      
      
  });