import axios from 'axios';
import router from '../../router';



const state = {
    products: [],
    totalProducts: 0,
    product: {
        id: '',
        offer: false,
        category: {
            id: '',
            name: ''
        },
        disc: '',
        hide: false,
        images: [],
        name: '',
        newArrival: false,
        offerPrice: 0,
        price: 0,
        size: [],
        sold: 0,
        stock: 0,
        views: 0,
        offerAvailable: false
    }
};

const getters = {
    products(state){
        return state.products
    },
    pages(state){
        return Math.ceil(state.totalProducts/10)
    },
    productDetails(state){
        return state.product
    }
};

const mutations = {
    addProduct(state, data){
        state.products.push(data)
    },

    pushProducts(state, data){
        state.products = data.products;
        state.totalProducts = data.total
    },

    prorductDetails(state, product){
        state.product.id = product._id;
        state.product.category = product.category;
        state.product.disc = product.desc;
        state.product.hide = product.hide;
        state.product.images = product.images;
        state.product.name = product.name;
        state.product.newArrival = product.bnewArrival;
        state.product.offerPrice = product.offerPrice;
        state.product.price = product.price;
        state.product.size = product.size;
        state.product.sold = product.sold;
        state.product.stock = product.stock;
        state.product.views = product.views;
        state.product.offerAvailable = product.OfferAvilable
       },


};

const actions= {
    
    addProduct({commit}, fd){
        axios.put('/admin/shop/addProduct', fd)
        .then( res => {
            commit('addProduct', res.data.data)
        })
        .catch(err => {
            console.log(err.response)
        })
    },

    getProducts({commit}, query){
        axios.get(`/admin/shop/products?catigory=${query.category}&page=${query.page}&sort=${query.sort}&order=${query.order}`)
        .then(res => {
            console.log(res)
            commit('pushProducts', res.data.data)
        })
        .catch(err => console.log(err))
    },

    getProductDetails({commit}, id){
        axios.get(`/admin/shop/product/${id}`)
        .then(res => {
            console.log(res)
            commit('prorductDetails', res.data.data)
        })
        .catch(err => console.log(err))
    },

    deleteProduct(store, id){
        axios.post('/admin/shop/hide', {
            productId: id
        })
        .then(res => {
            console.log(res)
            router.go(-1)
        })
        .catch(err => console.log(err.response))
    },

    makeNewArrival(store, id){
        axios.post('/admin/shop/product/newArrival', {
            productId: id
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    },

    makeOffer({dispatch}, payload){
        axios.post('/admin/shop/product/addOffer', payload)
        .then(res => {
            console.log(res)
            dispatch('getProductDetails', payload.productId)
        })
        .catch(err => console.log(err.response))
    },

    cancelOffer({dispatch}, id){
        axios.post('/admin/shop/product/cancelOffer', {
            productId : id
        })
        .then(res => {
            console.log(res)
            dispatch('getProductDetails', id)
        })
        .catch(err => console.log(err.response))
    },

    editProduct({dispatch}, fd){
        axios.post('/admin/shop/editProduct', fd)
        .then(res => {
            console.log(res)
            dispatch('getProductDetails')
        })
        .catch(err => console.log(err.response))
    }
};



export default {
    state,
    mutations,
    actions,
    getters
}