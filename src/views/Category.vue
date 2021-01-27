<template>
    <div class="add-box">
            <label for="Name">NAME: </label>
            <input type="text" v-model="name">
            <label for="Name">IMAGE: </label>
            <input type="file" @change="fileSelected">
            <button @click="editCategory">Edit</button>
        </div>
</template>

<script>

export default {
    data(){
        return{
            name: this.$router.currentRoute.params.name,
            image: []
        }
    },

    methods: {

    fileSelected(event){
    this.image = event.target.files[0]
    },

    editCategory(){
        const fd = new FormData()
        fd.append('name', this.name);
        fd.append('image', this.image)
        fd.append('categoryId', this.$router.currentRoute.params.id)        
        this.$store.dispatch('editCategory', fd)
    }

    }
}
</script>

<style lang="scss" scoped>

@import '../sass/global.scss';

.add-box{
    min-width: 35vw;
    //height: 55vh;
    background-color: white;
    border: 1px solid black;
    border-radius: 2rem;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 2rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 8px 8px 1rem rgba(0, 0, 0, 0.61) ;

    span{
        position: relative;
        left: 95%;
        top: 3%;
        font-size: 2rem;
        cursor: pointer;

    }

    label{
        font-size: 2.5rem;
    }

    input{
        margin-top: 2rem;
        margin-bottom: 4rem;
    }

    button{
        @include button;
        width: 15rem;
        align-self: center;
        background-color: black;
        color: #fff;
    }
}

</style>