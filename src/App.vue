<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <nav-bar v-if="this.$router.currentRoute.name !== 'Login'" />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: {
    navBar: Navbar
  },

  mounted(){
    console.log(this.$router.currentRoute)
  }
}
</script>

<style lang="scss">

html{
    font-size: 62.5%; //1rem = 10px

    @media only screen and (max-width: 500px){
        font-size: 80%;
    }
}

body{
  padding: 1.3rem 2rem;

  @media only screen and (max-width: 500px){
    padding: 5px 0;
  }
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Gilroy', sans-serif;
}

</style>
