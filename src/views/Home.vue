<template>
  <div class="container">
    <h1>Home</h1>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  
}
</script>

<style lang="scss" scoped>

@import "../sass/global.scss";


.container{
  @include container;
}

h1{
  color: #fff;
}

</style>