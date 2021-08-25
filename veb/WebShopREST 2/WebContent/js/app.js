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
const RestaurantInfoPage = { template: '<restaurantInfo></restaurantInfo>' }
const RestaurantManagerPage = { template: '<restaurantManager></restaurantManager>' }
const OrdersManagerPage = { template: '<ordersManager></ordersManager>' }
const CreateItemPage = { template: '<createItemManager></createItemManager>' }
const EditItemManagerPage = { template: '<editItemManager></editItemManager>' }
const RestaurantInfoBuyerPage = { template: '<restaurantInfoBuyers></restaurantInfoBuyers>' }
const Basket = { template: '<basket></basket>' }
const OrdersBuyerPage = { template: '<ordersBuyer></ordersBuyer>' }
const BuyerCardPage = { template: '<buyerCard></buyerCard>' }
const AllOrdersDelivererPage= { template: '<allOrdersDeliverer></allOrdersDeliverer>' }
const OrdersDelivererPage = { template: '<ordersDeliverer></ordersDeliverer>' }
const DeliveryRequests = { template: '<deliveryRequestsManager></deliveryRequestsManager>' }



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
    { path: '/restaurantInfo/:id', component: RestaurantInfoPage},
    { path: '/restaurantManager/:id/:idRest', component: RestaurantManagerPage},
    { path: '/ordersManager/:id', component: OrdersManagerPage},
    { path: '/createItemManager/:id', component: CreateItemPage},
    { path: '/createItemManager/:id', component: CreateItemPage},
    { path: '/editItemManager/:id', component: EditItemManagerPage},
    { path: '/restaurantInfoBuyers/:idRest/:id', component: RestaurantInfoBuyerPage},
    { path: '/basket/:idRest/:id', component: Basket},
    { path: '/ordersBuyer/:id', component: OrdersBuyerPage},
    { path: '/buyerCard/:id', component: BuyerCardPage},
    { path: '/allOrdersDeliverer/:id', component: AllOrdersDelivererPage},
    { path: '/ordersDeliverer/:id', component: OrdersDelivererPage},
    { path: '/deliveryRequestsManager/:id', component: DeliveryRequests},

      ]
});

var app = new Vue({
    router,
    el: '#app'
})