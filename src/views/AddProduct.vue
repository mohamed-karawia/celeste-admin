<template>
    <div class="container">
        <div class="add--box">
            <form @submit.prevent class="input--form">
              <label>name :  </label>
              <input type="text" v-model="name" />

              <label>description :  </label>
              <input type="text" v-model="desc" />

              <label>price :  </label>
              <input type="text" v-model="price"  />

              <label>size :  </label>

              <ul>
                <li v-for="(x, index) in sizes" :key="index">-{{ x }}</li>
              </ul>

              <input type="text" v-model="size" />
              <button class="add" @click="addSize">Add</button>

              <label>stock :  </label>
              <input type="text" v-model="stock"  />

              <label>category :  </label>
              <select name="categories" v-model="category">
                <option 
                v-for="cat in categories" 
                :key="cat._id" 
                :value="cat._id"
                >{{ cat.name }}</option>
              </select>

              <label>image :  </label>
              <input type="file" @change="fileSelected" v-for="(img, index) in (selectedFiles.length + 1)" :key="index">

              <button class="submit" type="submit" @click="addProduct">Add Product</button>

          </form>
        </div>
    </div>  
</template>

<script>

export default {
  name: "App",

  data() {
    return {
      name: '',
      desc: '',
      price: '',
      size: '',
      sizes: [],
      stock: '',
      category: '',
      selectedFiles : [],

    }
  },

  methods: {
    addSize(){
      const size = this.size;
      this.sizes.push(size);
      this.size = '';
    },

    fileSelected(event){
    this.selectedFiles.push(event.target.files[0])
    },

    addProduct(){
     const name = this.name;
     const desc = this.desc;
     const price = this.price;
     const size = this.sizes;
     const stock = this.stock;
     const category = this.category
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
     fd.append('category', category);

     this.$store.dispatch('addProduct', fd)

     this.name = '';
     this.desc = '';
     this.price = '';
     this.size = [];
     this.stock = '';
     this.category = '';
     this.selectedFiles = []

    }

  },

  created(){
    this.$store.dispatch('getCategories')
  },

  computed: {
    categories(){
      return this.$store.getters.categories
    }
  }

};
</script>

<style lang="scss" scoped>
@import '../sass/global.scss';

.container{
    @include container;
}

.add--box{
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

    .input--form{
        display: flex;
        flex-direction: column;
    }

    ul{
      list-style: none;

      li{
        font-size: 1.5rem;
      }
    }


    label{
        font-size: 2.5rem;
        text-transform: uppercase;
    }

    input{
        margin-top: 2rem;
        margin-bottom: 4rem;
    }

    select{
        margin-bottom: 4rem;
    }

    button.add{
      @include button;
      width: 10rem;
      background-color: black;
      color: #fff;
      margin-bottom: 2rem
    }

    button.submit{
        @include button;
        width: 20rem;
        align-self: center;
        background-color: black;
        color: #fff;
        justify-self: center;
    }
}


</style>