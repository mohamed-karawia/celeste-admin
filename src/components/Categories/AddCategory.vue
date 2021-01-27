<template>
    <transition name="fade">
        <div class="add-box">
            <span @click="hideCategory">X</span>
            <label for="Name">NAME: </label>
            <input type="text" v-model="name">
            <label for="Name">IMAGE: </label>
            <input type="file" @change="fileSelected">
            <button @click="addCategory">Add</button>
        </div>
    </transition>    
</template>

<script>
export default {
    data(){
        return{
            name: '',
            selectedFile : null,
        }
    },
    methods: {
    
    hideCategory(){
        this.$emit('hide')
    },

    fileSelected(event){
    this.selectedFile = event.target.files[0]
    },

    addCategory(){
        const data = {
            name: this.name,
            selectedFile: this.selectedFile
        }
        this.$emit('addCategory', data)
        this.$emit('hide')
    }

    }
}
</script>

<style lang="scss" scoped>

@import '../../sass/global.scss';

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

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

</style>