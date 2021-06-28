<template>
    <section class="order" id="order">

        <h1 class="heading"> <span>Update</span> Product </h1>

        <div class="row">

            <div class="image">
                <img src="../../assets/images/order-img.jpg" alt="">
            </div>

            <form @submit.prevent="updateProduct">

                <div class="inputBox">
                    <input type="text" placeholder="Product Name" v-model="product_name">
                </div>
                <p class="error" v-if="error">Please Enter a valid Product Name</p>
                <div class="inputBox">
                    <input type="number" placeholder="Min Price" min="5" max="2000" :value="min_price" ref="min_price">
                    <input type="number" placeholder="Max Price" min="5" max="2000" :value="max_price" ref="max_price">
                </div>
                <p class="error" v-if="error_price">Please Enter a max or/and min Price</p>


                <textarea placeholder="Product Description" name="" id="" cols="30" rows="10" v-model="description"></textarea>

                <button class="btn">Update</button>

            </form>

        </div>

    </section>
</template>

<script>
    export default {
        name: "UpdateFormProduct",
        computed:{
        },
        data(){
            return {
                id: '',
                product_name : '',
                description: '',
                error: null,
                error_price: null,
                max_price: '',
                min_price: '',
            }
        },
        watch:{
          product_name(){
              if( this.product_name.trim() !== '' ){
                  this.error = null;
              }
          },
            error_price() {
                if( this.$refs.max_price.value !== '' || this.$refs.min_price.value !== '' ){
                    this.error_price = null;
                }
            }
        },
        methods: {
            async updateProduct(){
                console.log( this.$refs.min_price.value === '' )
                if (this.product_name === '' || this.product_name.length < 5 ){
                    this.error = "Enter a valid Product Name";
                    return;
                }
                if( this.$refs.max_price === '' || this.$refs.min_price.value === '' ){
                    this.error_price = "enter a valid Price number";
                    return;
                }
                await this.$store.dispatch({
                    type: 'addProduct',
                    product_name: this.product_name,
                    description: this.description,
                    min_price: this.$refs.min_price.value,
                    max_price: this.$refs.max_price.value,
                    image_url: '',
                }).then( response => {
                    console.log( response );
                    this.$router.push('/products')
                } );

            }
        },
        created(){
            console.log( 'update component product ' );
            this.id = this.$route.params.id ;
            const products = this.$store.getters.getProduct;
            const product = products.find( product => product.id === this.id );
            this.product_name = product.name;
            this.description =  product.description;
            this.max_price = product.max_price;
            this.min_price = product.min_price;
        }
    }
</script>

<style scoped>
    .error{
        color: red;
    }

</style>
