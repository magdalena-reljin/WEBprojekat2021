Vue.component("homepage", { 
	data: function () {
	    return {
	     homepage: null
	    }
	},
	    template: ` 
    	<div>
    	<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid" style="background-color: #ffa6c9;">
  <a class="navbar-brand" href="#">
  <img src="components/pictures/grockLogo4.png" alt="" width="194" height="80" class="d-inline-block align-text-top">
</a>

<ul class="navbar-nav me-auto mb-2 mb-lg-0">
<li class="nav-item">
  <a class="nav-link active" aria-current="page" href="#">Login</a>
</li>
<li class="nav-item">
  <a class="nav-link active" href="#">Sign up</a>
</li>
</ul>

<form class="d-flex">
<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
<button class="btn btn-outline-success" type="submit">Search</button>
</form>


  </div>

</nav>
    	</div>		  
    	`,
    mounted () {
        axios
          .get('rest/homepage/')
          .then(response => (this.products = response.data))
    },
    methods: {
    	addProduct : function() {
    		router.push(`/homepage/-1`);
    	}
    }
	
});

