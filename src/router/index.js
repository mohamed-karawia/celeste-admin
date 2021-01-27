import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store/index'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Products from '../views/Products.vue'
import Categories from '../views/Categories.vue'
import Category from '../views/Category.vue'
import AddProduct from '../views/AddProduct.vue'
import Users from '../views/Users.vue'
import Product from '../views/Product.vue'




Vue.use(VueRouter)


const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home,
    
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/products',
    name: 'Products',
    component: Products,
  },

  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },

  {
    path: '/addproduct',
    name: 'AddProduct',
    component: AddProduct
  },

  {
    path: '/users',
    name: 'Users',
    component: Users
  },

  {
    path: '/category/:name/:id',
    name: 'Category',
    component: Category
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
]





const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/*router.beforeEach((to, from, next) => {
  if(to.name !== 'Login'){
    if(store.state.adminLogged){
      next()
    }else{
      next('/login')
    }
  }else{
    next
  }
  
})*/

router.beforeEach(function (to, from, next) {
  if(to.name === 'Login'){
    next()
  }else{
    if(store.state.adminLogged){
      next()
    }else{
      next('login')
    }
  }
  
})

export default router