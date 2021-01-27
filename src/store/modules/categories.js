import axios from 'axios';
import router from '../../router/index';

const state = {
    categories: []
};

const getters = {
    categories(state){
        return state.categories
    }
};

const mutations = {
   pushCategories(state, categories){
       state.categories = categories.filter(category => {
           return !category.hide
       })
   },

   addCategory(state, category){
       state.categories.push(category)
   },

   deleteCategory(state, id){
      var index = state.categories.map(category => {
          return category._id
      }).indexOf(id)
      state.categories.splice(index, 1)
   }
};

const actions = {

    getCategories({commit}){ 
        console.log(`Basic ${this.state.idToken}`)
        axios.get('/admin/shop/category')
        .then ( res => {
            console.log(res)
            commit('pushCategories', res.data.data)
        })
        .catch(err => {
            console.log(err.response)
        })
    },

    addCategory({commit}, fd){
        axios.put('/admin/shop/addCategory', fd)
        .then(res => {
            commit('addCategory', res.data.data)
        })
        .catch(err => console.log(err))
    },

    editCategory(store, fd){
        axios.post('/admin/shop/edit/category', fd)
        .then(res => {
            console.log(res)
            router.push('/categories')
        })
        .catch(err => console.log(err))
    },

    hideCategory({commit}, id){
        axios.post('/admin/shop/hide/category', {
            categoryId : id
        })
        .then(res => {
            console.log(res)
            commit('deleteCategory', id)
        })
        .catch(err => console.log(err))
    }

};

export default {
    state,
    mutations,
    actions,
    getters
}