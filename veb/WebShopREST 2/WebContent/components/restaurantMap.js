Vue.component("restaurantMap", { 
	data: function () {
	    return {
            idRest: this.$route.params.idRest,
          
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
    
		


		}
	},
	    template: `
      
      <div>
      <nav class="navbar navbar-default navbar-fixed-top" style="background-color: #ffa6c9; list-style: none;">
      <div class="container-fluid" style="background-color: #ffa6c9;">
        <a class="navbar-brand" @click="backHome()">
          <img src="components/images/grockLogo4.png" alt="" width="194" height="80" class="d-inline-block align-text-top"> 
        </a>
    
       
        
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
              
                <div class="mt-6">
                  <h2>{{restaurant.name.toUpperCase()}}</h2>
                  <br>
                  <h2>{{restaurant.location.address.street}} {{restaurant.location.address.number}}</h2>
                  <h5>{{restaurant.location.address.town}} {{restaurant.location.address.zipCode}}</h5>
                  <h5>{{restaurant.location.latitude}} , {{restaurant.location.longitude}}</h5>

                  <br>
                    <div align="center" vertical-align="center" style="border-style:solid; width:50%; height:200px;">
                      <map-container
                      :coordinates="[this.restaurant.location.longitude,this.restaurant.location.latitude]"
                      ></map-container>
                    </div>
                  <br>

              
              </div>
            </div>
          </div>
        </div>

        </div>
        </div>
      </div>

</div>
    	`,
      mounted () {
        this.loadData();
    
          
    },
        methods: {
            
            loadData: function(){
 
              this.restaurant.name=this.idRest,
                axios
                .post('/WebShopREST/rest/restaurants/findRestaurantData',this.restaurant)
                .then(response=> (this.restaurant=response.data))

              
          },
        azuriranjeAdrese : function() {
            
            axios.get("https://nominatim.openstreetmap.org/reverse", {
              params: {
                lat: this.restaurant.location.latitude,
                lon: this.restaurant.location.longitude,
                format: "json",
             },
             })
            .then((response) => {
                    const { address } = response.data;
                    var flag = false;
                    
                })
                
        
        },

        }
	
});