Vue.component("basket", {
    data: function () {
        return {
            idRest: this.$route.params.idRest,
            id: this.$route.params.id,
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
                                  streetAndNumber: '',
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
                       deleted: false
                
                      }
        
                ],
                totalPrice: 0
              },
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
                                <input  v-model="item.numberInOrder" type="number" value="1" min="1" max="1000" step="1"/>
                                <td>
                                    <div class="price-wrap"> <var class="price">{{item.price}} $</var> </div>
                                </td>
                                <td >
                                 <a  class="btn btn-light" data-abc="true"> Remove</a> </td>
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
                        <dd class="text-right ml-3">$69.97</dd>
                    </dl>
                    <dl class="dlist-align">
                        <dt>Discount:</dt>
                        <dd class="text-right text-danger ml-3">- $10.00</dd>
                    </dl>
                    <dl class="dlist-align">
                        <dt>Total:</dt>
                        <dd class="text-right text-dark b ml-3"><strong>$59.97</strong></dd>
                    </dl>
                    <hr> <a href="#" class="btn btn-out btn-primary btn-square btn-main" data-abc="true"> Make Purchase </a> <a href="#" class="btn btn-out btn-success btn-square btn-main mt-2" data-abc="true">Continue Shopping</a>
                </div>
            </div>
        </aside>
    </div>
</div>
     </div>
     `,
     mounted(){
        this.loadData();
     },
    methods: {
      
        loadData: function(){
 
            this.basket.buyer.username=this.id
              axios
              .post('/WebShopREST/rest/buyers/findBasket',this.basket.buyer)
              .then(response=> (  this.basket=response.data))
        },

  }

});