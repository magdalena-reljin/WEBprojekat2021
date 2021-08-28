Vue.component("basket", {
    data: function () {
        return {
            idRest: this.$route.params.idRest,
            id: this.$route.params.id,
            totalPrice:  0,
            discount: 0,
            totalDiscount: 0,
            total: 0,
            basket: {
                buyer: {
                    username:''
                },
                items: [
                    {
                        name:'',
                        price: 0,
                        itemType: null,
                        restaurant: {
                          name: '',
                          restaurantType: null,
                          items: [],
                          status: 0,
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
                       quantity: '',
                       description: '',
                       image: '',
                       numberInOrder: '',
                       deleted: false
                
                      }
        
                ],
                totalPrice: 0
              },  
              basketDto:{
                idBuyer: '',
                idItem: '',
                numOfOrder: '',
                idRest: '',
                points: ''
  
              },
              order: {
                   id: '',
                   items: [

                   ],
                 restaurant:{
                     name: '',
                     restaurantType: null

                 } ,
                 dateAndTime: null,
                  cena: 0,
                  buyer: {
                      username: '',
                      points: 0
                  },
                  status: 0,
                  deleted: false,

              },
              restaurant:{
                name: '',
	      restaurantType: null,
        items: [
          {
              name:'',
              price: null,
              itemType: null,
              restaurant: {
                name: '',
                restaurantType: null,
                items: [],
                status: 0,
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
             quantity: '',
             description: '',
             image: '',
             numberInOrder: 1,
             deleted: false
  
            },
        ],
        status: 0,
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
        
              }
        }
    },
    template: ` 
        <div>

        <nav class="navbar navbar-default navbar-fixed-top" style="background-color: #ffa6c9; list-style: none;">
        <div class="container-fluid" style="background-color: #ffa6c9;">
          <a class="navbar-brand" href="#">
            <img src="components/images/grockLogo4.png" alt="" width="194" height="80" class="d-inline-block align-text-top"> 
          </a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="http://localhost:8080/WebShopREST/#/login">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active"  @click="goToRegister()">Sign up</a>
      </li>
      </ul>
      
      <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" >
      <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      
      
        </div>
      
      </nav>

  

       <div class="container-fluid">
    <div style="height: 30%;" class="row">
        <aside v-if="item.deleted == false && item.restaurant.name== idRest" v-for="item in basket.items" class="col-lg-9">
            <div class="card">
                <div class="table-responsive">
                    <table class="table table-borderless table-shopping-cart">
                        <thead class="text-muted">
                            <tr class="small text-uppercase">
                                <th scope="col">Product</th>
                                <th scope="col" width="120">Quantity</th>
                                <th scope="col" width="120">Price</th>
                                <th scope="col" class="text-right d-none d-md-block" width="200"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <figure class="itemside align-items-center">
                                        <div class="aside" style="width: 18rem;" ><img style="height: 120px;" v-bind:src="item.image" class="img-sm"></div>
                                        <figcaption class="info"> <a href="#" class="title text-dark" data-abc="true">{{item.name}}</a>
                                            <p class="text-muted small">Type: {{item.itemType}}<br>{{item.description}}</p>
                                        </figcaption>
                                    </figure>
                                </td>
                                <td> 
                                <input  @click="updateNumberInOrder(item)" v-model="item.numberInOrder" type="number" value="1" min="1" max="1000" step="1"/>
                                <td>
                                    <div class="price-wrap"> <var class="price">{{item.price}} $</var> </div>
                                </td>
                                <td >
                                 <a @click="removeFromBasket(item)" class="btn btn-light"> Remove</a> </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </aside>
        <aside class="col-lg-3">
            <div class="card">
                <div class="card-body">
                    <dl class="dlist-align">
                        <dt>Total price:</dt>
                        <dd class="text-right ml-3">{{totalPrice}}$</dd>
                    </dl>
                    <dl class="dlist-align">
                        <dt>Discount:</dt>
                        <dd class="text-right text-danger ml-3">{{totalDiscount}}$</dd>
                    </dl>
                    <dl class="dlist-align">
                        <dt>Total:</dt>
                        <dd class="text-right text-dark b ml-3"><strong>{{total}}$</strong></dd>
                    </dl>
                    <hr> <a @click="createOrder()"  href="#" class="btn btn-out btn-success btn-square btn-main mt-2" data-abc="true">Finish order </a>
                </div>
            </div>
        </aside>
    </div>
</div>
     </div>
     `,
     mounted(){
        this.loadData();
        this.getRestaurant();
     },
    methods: {
      
        loadData: function(){
 
            this.basket.buyer.username=this.id
              axios
              .post('/WebShopREST/rest/buyers/findBasket',this.basket.buyer)
              .then(response=> {this.basket=response.data
                
             this.basketDto.idBuyer=this.id
             this.basketDto.idRest=this.idRest
                axios
                .post('/WebShopREST/rest/buyers/totalPrice',this.basketDto)
                .then(response=> {this.totalPrice=response.data
                
                    axios
                    .post('/WebShopREST/rest/buyers/discount',this.basketDto)
                    .then(response=> {this.discount=response.data
                        this.totalDiscount= this.discount/100*this.totalPrice
                        this.total=this.totalPrice-this.totalDiscount
                
                })

            })
        })

        },  
         removeFromBasket: function(item){
            this.basketDto.idBuyer=this.id
            this.basketDto.idItem=item.name

                axios
                .post('/WebShopREST/rest/buyers/removeFromBasket',this.basketDto)
                .then(response=>{
                  alert("Item removed!")
                 location.reload()
                 
                })
         
  
          },
          updateNumberInOrder: function(item){
            this.basketDto.idBuyer=this.id
            this.basketDto.idItem=item.name
            this.basketDto.numOfOrder=item.numberInOrder
          axios
          .post('/WebShopREST/rest/buyers/updateNumberInOrder',this.basketDto)
          .then(response=>{
            location.reload()
           
          })
        },
        getRestaurant: function(){
            this.restaurant.name=this.idRest
            axios
                .post('/WebShopREST/rest/restaurants/findRestaurantData',this.restaurant)
                .then(response=> {this.restaurant=response.data
                    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaaa")
                })
        },
        createOrder: function(){

                this.basketDto.idBuyer=this.id
                this.basketDto.idRest=this.idRest

                axios
                .post('/WebShopREST/rest/buyers/findItemInBuyerBasket',this.basketDto)
                .then(response=>{
                    console.log("USPEOOOO SAM")
                 
                this.order.id= Math.floor(Math.random() * (100000 - 1 + 1)) + 1;
                this.order.items=response.data
                this.order.restaurant.name=this.idRest
                this.order.restaurant.restaurantType=this.restaurant.restaurantType
                const today = new Date();
                const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                const dateTime = date +' '+ time;
                this.order.dateAndTime= dateTime
                this.order.cena= this.total;
                this.order.buyer.username=this.id
                this.order.buyer.points=this.totalPrice/1000*133
         
                axios
                .post('/WebShopREST/rest/orders/createOrder',this.order)
                .then(response=>{
                    console.log("USPEOOOO SAM")
                
                    axios
                    .post('/WebShopREST/rest/buyers/clearBasketAfterOrdering',this.basketDto)
                    .then(response=>{
                        console.log("USPEOOOO SAM da obrisem posle narucivanja")

                        this.$router.push("/ordersBuyer/"+this.id);
                    })
    

                })

                })

               
        },


  }

});