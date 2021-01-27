<template>
    <div class="product">
        <div 
        class="product__image" 
        :style="{ 'background-image': 'url(https://celeste-api.herokuapp.com/'+ product.images[0] + ')' }"></div>
        <div class="product__details">
            <p class="product__details__name">{{ product.name }}</p>
            <p class="product__details__price">{{ product.price }}L.E</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: Object
    }
}
</script>

<style lang="scss" scoped>

.product{
    width: 100%;
    height: 22rem;
    cursor: pointer;

    &__image{
        height: 80%;
        border-radius: 10px;
        background-position: center;
        background-size: cover;
    }

    &__details{
        width: 100%;
        height: 20%;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-transform: uppercase;

        &__name{
            font-size: 2rem;
        }

        &__price{
            font-size: 1.8rem;
        }
    }
}

</style>

