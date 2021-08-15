
const HomePage = { template: '<homepage></homepage>' }

const router = new VueRouter({
    mode: 'hash',
      routes: [
        { path: '/', name: 'home', component: HomePage},

      ]
});

var app = new Vue({
    router,
    el: '#homepage'
})