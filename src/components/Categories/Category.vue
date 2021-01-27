<template>
    <div class="category">
        <div class="category__image" 
        :style="{ 'background-image': 'url(https://celeste-api.herokuapp.com/'+ image + ')' }"></div>
        <span @click="deleteCategory">&#10008;</span>
        

        <h2 class="category__name" @click="$router.push(`/category/${name}/${id}`)">
            {{ name }}
        </h2>
    </div>
</template>

<script>
export default {
     props: {
        id: String,
        name: String,
        image: String
    },

    methods: {
        deleteCategory(){
            this.$emit('deleteCategory')
        }
    }
}
</script>

<style lang="scss" scoped>
    
.category{
    min-width: 20rem;
    height: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    &__image{
        background-image: url('../../assets/backtry.jpeg');
        height: 90%;
        border-radius: 10px;
        background-position: center;
        background-size: cover;
    }

    span{
        background-color: rgb(224, 221, 221);
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 100%;
        position: absolute;
        top: -6px;
        left: 90%;
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    &__name{
        text-transform: uppercase;
        align-self: center;
        cursor: pointer;
    }
}

</style>