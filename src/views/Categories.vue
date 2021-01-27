<template>
    <div class="container">
        <ul class="categories--list">
            <li 
            class="categories--list__item" 
            v-for="cat in categories" 
            :key="cat._id" 
            >
            <Category 
            v-if="!cat.hide"
            :image="cat.image" 
            :name="cat.name"
            :id="cat._id"
            v-on:deleteCategory="deleteCategory(cat._id)"/>
             </li>
        </ul>
        
        
        <button @click="showAddCategory = !showAddCategory">Add Category</button>
        <add-category 
        v-if="showAddCategory" 
        v-on:hide="showAddCategory = !showAddCategory"
        v-on:addCategory="addCategory" />
    </div>
</template>

<script>
import AddCategory from '../components/Categories/AddCategory'
import Category from '../components/Categories/Category'

export default {
    data(){
        return{
            showAddCategory: false,
        }
    },
    
    methods:{

        addCategory(data){
            const fd = new FormData();
            fd.append('name', data.name)
            fd.append('image', data.selectedFile)
            this.$store.dispatch('addCategory', fd)
        },

        deleteCategory(id){
            this.$store.dispatch('hideCategory', id)
        },

    },

    components: {
        addCategory: AddCategory,
        Category
    },

    created() {
      this.$store.dispatch('getCategories')
    },

    computed:{
        categories(){
            return this.$store.getters.categories
        }
    }
}
</script>

<style lang="scss" scoped>

@import "../sass/global.scss";

.container{
  @include container;
 

}

button{
    @include button;
    background-color: rgb(204, 204, 204);
    margin-top: 30vh;
}

.categories--list{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style: none;
}

</style>