Vue.component("editItemManager", {
    data: function () {
        return {
        newPic: false,
        managerId: '',
        oldPic: '',
        itemName: this.$route.params.id,
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

          }
        
    
          
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
      <h4 class="card-title mt-2">Edit item</h4>
  </header>
  

  <article class="card-body">
  <form @submit="editItem" method='put'  class="was-validated">
      <div class="form-row">
          <div class="col form-group">
              <label>Name </label>   
                <input v-model="item.name" type="text" class="form-control" disabled>
          </div> 
          
        
          <div class="col form-group">
          <label>Type </label>   
            <input v-model="item.itemType" type="text" class="form-control" disabled>
          </div> 

          <div class="col form-group">
              <label>Price </label>   
                <input v-model="item.price" type="text" class="form-control" pattern="[0-9]*" title="Use numbers only" required>
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
          </div> 

          <div class="col form-group">
              <label>Quantity [g/ml] </label>   
                <input  v-model="item.quantity" type="text" class="form-control" pattern="[0-9]*" title="Use numbers only">
                
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
          </div> 

          <div class="col form-group">
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea v-model="item.description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
          </div> 
          
      </div>
      
      
      <div class="col form-group">
      <label>Select new image </label>   
      <div class="mb-3">
      <input @click="data" class="form-control" type="file" id="formFile">
      </div>
      
      
  </div> 
 
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
        this.getItem();
       
          
    },

    methods: {
        editItem: function(event) {
            event.preventDefault();
            if(this.newPic==true){
            this.item.image= document.getElementById("formFile").value

            }else{
                this.item.image=this.oldPic
            }
            this.getManager();
             axios
            .put('/WebShopREST/rest/items/update',this.item)
            .then(response=> {
               this.$router.push("/restaurantManager/"+this.managerId+ "/"+this.item.restaurant.name)

        })
     
        },
        data: function(){
            this.newPic=true;
            document.getElementById("formFile").onchange = function () {

          }
         },
        getItem: function(){
             this.item.name=this.itemName,
             axios
             .post('/WebShopREST/rest/items/findData',this.item)
             .then(response=> {this.item=response.data
                    this.oldPic=response.data.image
            })
        },
        getManager: function(){
            
            axios
            .post('/WebShopREST/rest/items/findDataManager',this.item)
            .then(response=> 
                {
                this.managerId=response.data 
                console.log("manager dosao "+response.data)
                console.log("anager "+this.managerId)


            }
                         
                
               
            )
       },


  }

});