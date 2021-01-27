<template>
    <div class="container">
        <products-nav 
        :categories="categories"
        @changeQuery="changeCategory" />
        <ul>
            <li v-for="product in products" :key="product._id" @click="$router.push({path:'/product',query:{id:product._id}});">
                <product :product="product" />
            </li>
        </ul>
        <paginate
            v-if="products.length > 0"
            :pageCount="numPages"
            :clickHandler="changePage"
            :prevText="'Prev'"
            :nextText="'Next'"
            :container-class="'pages'"
            :page-class="'pages-item'"
            :page-link-class="'pages-link'">
        </paginate>
    </div>
</template>

<script>
import productsNav from '../components/Products/productsNav'
import product from '../components/Products/product'

export default {
    data(){
        return{

        }
    },
    components:{
        productsNav,
        product
    },
    created(){
        this.$store.dispatch('getCategories');
        this.$store.dispatch('getProducts', this.query);
    },
    computed:{
        categories(){
            return this.$store.getters.categories
        },
        products(){
            return this.$store.getters.products
        },
        query(){
            return {
                page : this.$route.query.page,
                sort : this.$route.query.sort,
                order : this.$route.query.order,
                category : this.$route.query.category,
            }
        },
        numPages(){
            return this.$store.getters.pages
        }
        
    },
    methods:{

        changeCategory(id){
            this.$router.push({path:'/products',query:{
                category: id,
                page: this.query.page,
                sort: this.query.sort,
                order: this.query.order,
                }});
            this.$store.dispatch('getProducts', this.query);
        },

        changePage(num){
            this.$router.push({path:'/products',query:{
                category: this.query.category,
                page: num,
                sort: this.query.sort,
                order: this.query.order,
                }});
            this.$store.dispatch('getProducts', this.query);
        }
    }
}
</script>

<style lang="scss" scoped>

@import '../sass/global.scss';

.containter{
    @include container;
}

ul{
    margin-top: 20px;
    list-style: none;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill ,20rem);
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    
}

.pages{

    display: flex;
    justify-content: center;
    color: black;
    margin-top: 4rem;
    font-size: 1.4rem;
    

    a.pages-link{
        border: 1px solid black;
    }
   
}

</style>