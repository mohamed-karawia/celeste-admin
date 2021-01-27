<template>
    <nav>
        <ul>
            <li 
            :class="$route.query.category == cat._id ? 'active' : ''"
            v-for="cat in categories" 
            :key="cat._id"
            @click="changeQuery(cat._id)">{{ cat.name }}</li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        categories: Array
    },
    methods:{
        changeQuery(id){
            this.$emit('changeQuery', id)
        }
    }
}
</script>

<style lang="scss" scoped>

nav{
    width: 100%;
    height: 7vh;

    ul{
        display: flex;
        list-style: none;
        width: 100%;
        height: 100%;
        justify-content: space-around;
        align-items: center;
        
        li{
            font-size: 1.5rem;
            text-transform: uppercase;
            cursor: pointer;
        }

        li.active{
            border-bottom: 2px solid black;
        }
    }
}

</style>