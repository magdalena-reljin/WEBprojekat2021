Vue.component("reviewAdmin", {
    data: function () {
      return {
        id: this.$route.params.id,
        reviews: [{
            buyer: {
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
                  },

                  restaurant:
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
                      street: '',
                      number: '',
                     town: '',
                     zipCode: ''
                     },
                 },
                 logo: '',
                 deleted: ''
                 
                 },

                 comment: '',
                 rating: null,
                 deleted: false,
                 status: 'UNREVIEWED',
                 id: '',



        }],
      }
    },
    template: ` 
  <div>
        <nav class="navbar navbar-default navbar-fixed-top" style="background-color: #ffa6c9; list-style: none;">
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
           
        <ul class="nav justify-content-center"  style="background-color: black;" >

        <li class="nav-item">
        <a  style="color: white;" class="nav-link" @click="goToHome()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
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
        <a  style="color: white;" class="nav-link" @click="goToReviews()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
      </svg> REVIEWS</a>
        </li>
         
       </ul>
  
  
      <br>
       <h1 style="text-align:center;">RESTAURANT REVIEWS</h1>



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
                                
                                <th><span>Buyer</span></th>
                                <th><span>Restaurant</span></th>
                                <th><span>Comment</span></th>
                                <th><span>Rating</span></th>
                                <th class="text-center"><span>Status</span></th>
                                <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="review in reviews">
                                    <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>
                                        
                                        <span class="user-subhead">{{review.buyer.username}}</span>
                                    </td>
                                    <td>{{review.restaurant.name}}</td>
                                    <td>{{review.comment}}</td>
                                    <td>
                                    <span class="label label-default">{{review.rating}}</span>
                                    </td>
                                    
                                  
                                    
                                    <td class="text-center">
                                        <span v-if="review.status === 'UNREVIEWED'" style ="color: red;"  class="label label-default">{{review.status}}</span>
                                        <span v-else  class="label label-default">{{review.status}}</span>
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
              .get('/WebShopREST/rest/reviews/getReviewsForAdmin')
              .then(response=> {
                  this.reviews=response.data
                
                
            
            })
            },
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