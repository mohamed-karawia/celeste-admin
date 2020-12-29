<template>
    <nav>
       <div class="nav--logo" @click="$router.push('/')" />  
       <ul class="nav--list">
           <li class="nav--list__item"><router-link to="/products">PRODUCTS</router-link></li>
           <li class="nav--list__item"><router-link to="/categories">CATEGORIES</router-link></li>
           <li class="nav--list__item"><router-link to="/addproduct">ADD PRODUCT</router-link></li>
           <li class="nav--list__item"><router-link to="/users">USERS</router-link></li>
       </ul>
       <svg class="menu__icon" @click="showMobileMenu = !showMobileMenu">
            <use xlink:href="../assets/sprite.svg#icon-menu"></use>
        </svg>
        <div class="mobile--menu" v-if="showMobileMenu">
        <ul class="mobile--nav--list">
           <li class="mobile--nav--list__item" @click="showMobileMenu = false"><router-link to="/products">PRODUCTS</router-link></li>
           <li class="mobile--nav--list__item" @click="showMobileMenu = false"><router-link to="/categories">CATEGORIES</router-link></li>
           <li class="mobile--nav--list__item" @click="showMobileMenu = false"><router-link to="/addproduct">ADD PRODUCT</router-link></li>
           <li class="mobile--nav--list__item" @click="showMobileMenu = false"><router-link to="/users">USERS</router-link></li>
       </ul>
        </div>      
    </nav>
</template>

<script>
export default {
    data(){
        return{
            showMobileMenu: false
        }
    }
}
</script>

<style lang="scss" scoped>

@import "../sass/global.scss";

nav{
    width: 100%;
    height: 9vh;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 500px){
        height: 7vh;
        
    }
}

.nav--logo{
    width: 16rem;
    background-image: url(../assets/logo.jpeg);
    background-position: center;
    background-size: cover;
    cursor: pointer;

     @media only screen and (max-width: 500px){
        width: 12rem;
    }
}

.nav--list{
    list-style: none;
    display: flex;
    width: 60%;
    justify-content: space-around;
    align-items: center;

    @media only screen and (max-width: 520px){
        display: none;
    }

    &__item{
        color: black;
        font-size: 1.5rem;
        

        a{
            @include link;
            color: black;
        }
    }
}

.menu__icon{
    width: 3rem;
    height: 3rem;
    fill: black;
    align-self: center;
    margin-right: 1rem;
    cursor: pointer;

    @media only screen and (min-width: 520px){
        display: none;
    }
}

.mobile--menu{
    width: 100vw;
    height: 50vh;
    background-color: black;
    position: absolute;
    top: 9vh;
    display: flex;
    justify-content: center;

     @media only screen and (min-width: 501px){
        display: none;
    }
}

.mobile--nav--list{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    list-style: none;

    &__item{
        color: white;
        font-size: 1.5rem;
        

        a{
            @include link;
            color: white;
        }
    }
}

</style>