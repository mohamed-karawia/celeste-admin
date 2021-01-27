<template>
    <div class="container">
        <div class="product">
            <div class="product__media">
                <div class="product__media__main--image" :style="{ 'background-image': 'url(https://celeste-api.herokuapp.com/'+ product.images[mainImage] + ')' }"></div>
                <ul class="product__media__image--list">
                    <li 
                    v-for="(img, index) in product.images" 
                    :key="index">
                    <div class="list--image" 
                    :style="{ 'background-image': 'url(https://celeste-api.herokuapp.com/'+ product.images[index] + ')' }"
                    @click="mainImage = index"></div>
                    </li>
                </ul>
            </div>
            <div class="product__details">

                <div class="product__details__category">
                    {{product.category.name}}
                </div>

                <div class="product__details__name">
                    {{product.name}}
                </div>

                <input type="text" placeholder="name" v-model="name" v-if="showEdit">

                <div class="product__details__price">
                    {{product.price}}L.E
                </div>

                <input type="text" placeholder="price" v-model="price" v-if="showEdit">


                <div v-if="product.offerAvailable" class="product__details__price">
                    offer: {{ product.offerPrice }}L.E
                </div>

                <div class="product__details__stock">
                    {{product.disc}}
                </div>

                <input type="text" placeholder="description" v-model="desc" v-if="showEdit">

                <div class="product__details__stock" >
                    {{product.size}}
                </div>

                <div v-if="showEdit">
                    <input type="text" v-model="size" placeholder="size"  />
                    <button class="add" @click="addSize">Add</button>
                    <ul>
                        <li v-for="(x, index) in sizes" :key="index">-{{ x }}</li>
                    </ul>
                </div>
                

                <div class="product__details__stock">
                    {{product.stock}} left in stock
                </div>

                <input type="text" v-model="stock" placeholder="stock" v-if="showEdit">

                <div class="product__details__sold">
                    sold : {{product.sold}}
                </div>

                <div v-if="showEdit">
                    <label style="font-size: 1.6rem">image :  </label><br>
                    <input type="file" @change="fileSelected" v-for="(img, index) in (selectedFiles.length + 1)" :key="index">
                </div>
               

                <div class="product--buttons">
                    <button class="edit" @click="showEdit = !showEdit">Edit product</button>
                    <button class="edit" @click="makeNewArrival">Make New Arrival</button>
                    <button class="hide" @click="deleteProduct">Delete product</button>

                    <div v-if="product.offerAvailable">
                        <button class="hide" @click="cancelOffer">Cancel Offer</button>                        
                    </div>
                    <div v-else>
                        <button class="hide" @click="makeOffer" >Make Offer</button>
                   </div>
                   <button class="hide" @click="confirmEdit" v-if="showEdit">Confirm Edit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {


    data(){
        return{
            productId: this.$route.query.id,
            mainImage: 0,
            showEdit: false,
            size: '',
            sizes: [],
            selectedFiles : [],
            name: '',
            price: '',
            desc: '',
            stock: 0
        }
    },

    created(){
        this.$store.dispatch('getProductDetails', this.productId)
    },
    computed: {
        product(){
            return this.$store.getters.productDetails
        }
    },

    methods:{

        addSize(){
        const size = this.size;
        this.sizes.push(size);
        this.size = '';
        },

        fileSelected(event){
            this.selectedFiles.push(event.target.files[0])
        },

        deleteProduct(){
            if(confirm('Are you sure ?')){
                this.$store.dispatch('deleteProduct', this.productId)
            }
        },

        makeNewArrival(){
            this.$store.dispatch('makeNewArrival', this.productId)
        },
        makeOffer(){
            let newPrice = prompt('Enter the new price', '')
            let payload = {
                productId : this.productId,
                price : newPrice
            }
            this.$store.dispatch('makeOffer', payload)
        },

        cancelOffer(){
            this.$store.dispatch('cancelOffer', this.productId)
        },

        confirmEdit(){
            const name = this.name;
            const desc = this.desc;
            const price = this.price;
            const size = this.sizes;
            const stock = this.stock;
            const fd = new FormData();
            fd.append('name', name);
            fd.append('desc', desc);
            fd.append('price', price);
            fd.append('size', JSON.stringify(size));
            fd.append('stock', stock);
            const len = this.selectedFiles.length;
            console.log(len)
            for(let i=0; i < len; i++ ){
            fd.append('image', this.selectedFiles[i])
            }
            fd.append('productId', this.productId);

            this.$store.dispatch('editProduct', fd)

            this.name = '';
            this.desc = '';
            this.price = '';
            this.size = [];
            this.stock = '';
            this.selectedFiles = []
            this.showEdit = false;
            }
    }
}
</script>

<style lang="scss" scoped>
@import '../sass/global.scss';

.container{
    @include container;
}

.product{
    width: 100%;
    height: 70vh;
    //border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    

    &__media{
        
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 35rem;
        width: 30rem;
        margin-right: 3rem;

        &__main--image{
        
        height: 65%;
        width: 100%;
        background-position: center;
        background-size: cover;
        }

        &__image--list{
            display: flex;
            list-style: none;
            margin-top: 1rem;
            width: 60%;
            justify-content: space-around;

            .list--image{
                width: 4rem;
                height: 4rem;
                background-position: center;
                background-size: cover;
                cursor: pointer;
            }
        }
    }

    &__details{
        display: flex;
        flex-direction: column;

        &__category{
            font-size: 1.8rem;
            text-transform: uppercase;
        }

        &__name{
            font-size: 2.5rem;
            text-transform: capitalize;
        }

        &__price{
            font-size: 2.2rem;
            font-weight: 700;
        }

        &__stock{
            font-size: 1.8rem;
        }

        &__sold{
            font-size: 1.8rem;
        }
    }
}

.product--buttons{

    
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    margin-top: 2rem;
    
    button{
        @include button;
    }

    .edit{
        background-color: white;
        border: 1px solid black;
        margin-right: 5px;
    }

    .hide{
        background-color: white;
        border: 1px solid red
    }
}

</style>