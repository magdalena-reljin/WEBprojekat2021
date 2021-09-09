Vue.component("writeAReview", {
    data: function () {
      return {
        id: this.$route.params.id,
        idRest: this.$route.params.idRest,
        idOrd: this.$route.params.idOrd,
        order123: 
            {
             id: '',
             items: [
 
             ],
           restaurant:{
               name: ''
 
           } ,
           dateAndTime: null,
            cena: 0,
            buyer: {
                username: '',
                points: 0
            },
            status: 0
 
        },
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
        orders: [
            {
             id: '',
             items: [
 
             ],
           restaurant:{
               name: ''
 
           } ,
           dateAndTime: null,
            cena: 0,
            buyer: {
                username: '',
                points: 0
            },
            status: 0
 
        }]
       ,
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
        restPom: {
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
          deleted: '',
          avg: 0
          
          },

        review:{
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
            }
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
                 deleted: '',
                 avg: 0
                 },

                 comment: '',
                 rating: null,
                 deleted: false,
                 status: 'UNREVIEWED',
                 id: '',
              



        },
        err: ''
        
        
        ,
        
        
       
      }
    },
    template: ` 
  <div>
        <nav class="navbar navbar-default navbar-fixed-top" style="background-color: #ffa6c9; list-style: none;">
          <div class="container-fluid" style="background-color: #ffa6c9;">
            <a class="navbar-brand">
              <img src="components/images/grockLogo4.png" alt="" width="194" height="80" class="d-inline-block align-text-top"> 
            </a>
  
              
  
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
  
  
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
              
       
        <br>
            <br>
            <div class="container col-lg-12 col-md-12">
            <div class="main-body">
          
            
                  <div class="row gutters-sm">
                    <div class="col-md-12 mb-12">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex flex-column align-items-center text-center">
                            <div class="mt-3">
                              <h2>Write a review</h2>
                              <h4 style="color: #ffc6a9;">{{review.restaurant.name}}</h4>
                              <h6>Rate</h6>

                              <div class="form-check form-check-inline">
                                 <input v-model="review.rating" value="5" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" required>
                                 <label class="form-check-label" for="inlineRadio1">5</label>
                              </div>
                              <div class="form-check form-check-inline">
                                 <input v-model="review.rating" value="4" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" required >
                                 <label class="form-check-label" for="inlineRadio1">4</label>
                              </div>
                              
                              <div class="form-check form-check-inline">
                                 <input v-model="review.rating" value="3" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" required >
                                 <label class="form-check-label" for="inlineRadio2">3</label>
                              </div>
                              <div class="form-check form-check-inline">
                                 <input v-model="review.rating" value="2" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"  required>
                                 <label class="form-check-label" for="inlineRadio2">2</label>
                              </div>
                              <div class="form-check form-check-inline">
                                 <input v-model="review.rating" value="1" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"  required>
                                 <label class="form-check-label" for="inlineRadio2">1</label>
                              </div>

                            
                            
                              <textarea v-model="review.comment" class="form-control" id="exampleFormControlTextarea1" ></textarea>
                              <br>
                              <div style="color:red;">{{err}}</div>
                              <br>
                              <button @click="write(review)"  type="button" class="btn btn-outline-dark" >SAVE</button>
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
          mounted(){
            this.loadData();
          },
          methods: {
            redirect: function(){
              this.$router.push("/profile/"+this.id);
            },

            loadData: function(){
                this.buyer.username=this.id
                this.restPom.name=this.idRest
               
                axios
                .post('/WebShopREST/rest/buyers/findData',this.buyer)
                .then(response=> (this.review.buyer=response.data))


                axios
                .post('/WebShopREST/rest/restaurants/findRestaurantData',this.restPom)
                .then(response=> (this.review.restaurant=response.data))


            },
            write: function(review) {

              if(review.rating != 0 && review.rating != null){
                this.review.id= Math.floor(Math.random() * (100000 - 1 + 1)) + 1;
                axios
                .post('/WebShopREST/rest/reviews/addReview',this.review)
                .then(response=> {

                    this.order123.id=this.idOrd
                    
                axios
                .post('/WebShopREST/rest/orders/findData',this.order123)
                .then(response=> (this.order123=response.data))

                 
                    axios
                    .post('/WebShopREST/rest/orders/delete',this.order123)
                    .then(response=> { console.log("obrisao");
                
                    this.$router.push("/deliveredOrders/"+this.buyer.username);
                
                
                    })

                   

                    
                }

                )
              }else {
                this.err='Please rate the restaurant!'
              }
            }
            
          },
         
          
      
      
  });