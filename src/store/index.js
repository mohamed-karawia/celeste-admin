import Vue from 'vue';
import Vuex from 'vuex';

import Categories from './modules/categories';
import Products from './modules/products';

import axios from 'axios';
import router from '../router/index';

import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    adminLogged : false,
    idToken : null,
    expireTime: null,
  },


  mutations: {
    login(state, data){
      state.idToken = data.token;
      state.expireTime = data.expire
      state.adminLogged = true;
      router.push('/')
    },  

    logout(state){
      state.idToken = null
      state.adminLogged = false;
      state.expireTime = null
      //router.push('/login')
    },

  },

  actions: {
    
    login({commit, dispatch}, payload){
      axios({
      method: 'post',
      url: '/admin/login',
      data: {
          email: payload.email,
          password: payload.password
      }
    })
    .then(res => {
      console.log(res)
      const data = {
        token: res.data.data.token,
        expire: res.data.data.expiresIn
      }
      commit('login', data);
      dispatch('setLogoutTimer', data.expire)
    })
    .catch(err => console.log(err.response))
 },

 setLogoutTimer(commit, time){
  setTimeout(() => {
    commit('logout');
  }, time );
},

/****************************************************** */



  },


  modules: {
    Categories,
    Products
  },

  plugins: [createPersistedState()]
})
