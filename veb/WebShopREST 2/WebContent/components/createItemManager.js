Vue.component("createItemManager", {
    data: function () {
        return {
        id: this.$route.params.id,
          item:{
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
        selectedManager: {
          username: '',
          password: '',
          name: '',
          surname:'',
          gender: 0,
          birthDate: '',
          role: 1,
          deleted: false,
          blocked: false,
          restaurant: 
          {name:'',
           restaurantType: 0,
           items: null,
           status: 0,
           location: 
           {
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
        
    
          },
          err: ''
        }
    },
    template: ` 
    <div>

    <nav class="navbar navbar-default navbar-fixed-top" style="background-color: #ffa6c9; list-style: none;">
    <div class="container-fluid" style="background-color: #ffa6c9;">
    <a class="navbar-brand">
    <img src="components/images/grockLogo4.png" alt="" width="194" height="80" class="d-inline-block align-text-top">
  </a>

    </div>
  
  </nav>
  <br>
  
  <div class="container">
  
  <div class="row justify-content-center">
  <div class="col-md-6">
  <div class="card">
  <header class="card-header">
      <h4 class="card-title mt-2">Create item</h4>
  </header>
  

  <article class="card-body">
  <form @submit="addNewItem" method='post' class="was-validated">
      <div class="form-row">
          <div class="col form-group">
              <label>Name </label>   
                <input v-model="item.name" type="text" class="form-control" required>
                
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
          </div> 
          <div>
          <label for="inputState">Type </label>
          <select v-model="item.itemType" id="inputState" class="form-control" required>
            <option v-bind:value=0>FOOD</option>
            <option v-bind:value=1>DRINK</option>
          </select>
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
          </div>

          <div class="col form-group">
              <label>Price </label>   
                <input v-model="item.price" type="text" class="form-control" required pattern="[0-9]*">
                
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
          </div> 

          <div class="col form-group">
              <label>Quantity [g/ml] </label>   
                <input  v-model="item.quantity" type="text" class="form-control" pattern="[0-9]*">
          </div> 

          <div class="col form-group">
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea v-model="item.description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div> 
          
      </div>
      
      
      <div class="col form-group">
      <label>Image </label>   
      <div class="mb-3">
      <input @click="data" class="form-control" type="file" id="formFile" required>
      
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
      </div>
  </div> 
 
  <br>
  <div style="color:red;">{{err}}</div>
  <br>
      <div class="form-group">
          <button type="submit" class="btn btn-outline-success"> Save  </button>
      </div>                                                
  </form>
 
  </article> 
  </div> 
  </div> 
  
  </div> 
  
  
  </div>
 </div>
     `,
     mounted () {
        this.getManager();
          
    },

    methods: {
        addNewItem: function(event) {
            event.preventDefault();
            this.item.restaurant=this.selectedManager.restaurant
            this.item.image= document.getElementById("formFile").value

       axios
       .post('/WebShopREST/rest/items/add',this.item)
       .then(response=> {
        this.$router.push("/restaurantManager/"+this.id+"/"+this.item.restaurant.name)
      }).catch(err=>this.err='Item name already exists!')
     
    },
    data: function(){
        document.getElementById("formFile").onchange = function () {

          }
      },
      getManager: function(){
        this.selectedManager.username=this.id,
        axios
        .post('/WebShopREST/rest/managers/findData',this.selectedManager)
        .then(response=> (this.selectedManager=response.data))
      },


  }

});