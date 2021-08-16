
const HomePage = { template: '<homepage></homepage>' }
const LoginPage = { template: '<login></login>' }
const HomeLoggedIn = { template: '<homeLoggedIn></homeLoggedIn>' }
const Profile = { template: '<profile></profile>' }

const router = new VueRouter({
    mode: 'hash',
      routes: [
        { path: '/', name: 'home', component: HomePage},
        { path: '/login', component: LoginPage},
        { path: '/homeLoggedIn/:id', component: HomeLoggedIn},
        { path: '/profile/:id', component: Profile},
      ]
});

var app = new Vue({
    router,
    el: '#app'
})