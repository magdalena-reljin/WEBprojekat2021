const HomePage = { template: '<homepage></homepage>' }
const LoginPage = { template: '<login></login>' }
const SignUpPage = { template: '<signup></signup>' }
const HomeLoggedInPage = { template: '<homeLoggedIn></homeLoggedIn>' }
const ProfilePage = { template: '<profile></profile>' }
const HomeLoggedInBuyerPage = { template: '<homeLoggedInBuyer></homeLoggedInBuyer>' }
const AllUsersAdminPage = { template: '<allUsersAdmin></allUsersAdmin>' }
const RestaurantsAdminPage = { template: '<restaurantsAdmin></restaurantsAdmin>' }
const newManagerPage = { template: '<newManager></newManager>' }
const newDelivererPage = { template: '<newDeliverer></newDeliverer>' }
const newRestaurantPage = { template: '<newRestaurant></newRestaurant>' }
const HomeLoggedInManager = { template: '<homeLoggedInManager></homeLoggedInManager>' }
const HomeLoggedInDeliverer = { template: '<homeLoggedInDeliverer></homeLoggedInDeliverer>' }


const router = new VueRouter({
    mode: 'hash',
      routes: [
        { path: '/', name: 'home', component: HomePage},
        { path: '/login', component: LoginPage},
        { path: '/signup', component: SignUpPage},
		{ path: '/homeLoggedIn/:id', component: HomeLoggedInPage},
		{ path: '/profile/:id', component: ProfilePage},
		{ path: '/homeLoggedInBuyer/:id', component: HomeLoggedInBuyerPage},
		{ path: '/allUsersAdmin/:id', component: AllUsersAdminPage},
		{ path: '/restaurantsAdmin/:id', component: RestaurantsAdminPage},
    { path: '/newManager/:id', component: newManagerPage},
    { path: '/newRestaurant/:id', component: newRestaurantPage},
    { path: '/newDeliverer/:id', component: newDelivererPage},
    { path: '/homeLoggedInManager/:id', component: HomeLoggedInManager},
    { path: '/homeLoggedInDeliverer/:id', component: HomeLoggedInDeliverer},

      ]
});

var app = new Vue({
    router,
    el: '#app'
})