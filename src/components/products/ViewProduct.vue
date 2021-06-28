<template>
    <section class="order" id="order">

        <h1 class="heading"> <span>View</span> Product </h1>

        <div class="row">

            <div class="image">
                <img src="../../assets/images/order-img.jpg" alt="">
            </div>

            <form >

                <div class="inputBox">
                    <input type="text" placeholder="Product Name" v-model="product_name" disabled>
                </div>
                <p class="error" v-if="error">Please Enter a valid Product Name</p>
                <div class="inputBox">
                    <input type="number" placeholder="Min Price" min="5" max="2000" :value="min_price" ref="min_price" disabled>
                    <input type="number" placeholder="Max Price" min="5" max="2000" :value="max_price" ref="max_price" disabled>
                </div>
                <p class="error" v-if="error_price">Please Enter a max or/and min Price</p>


                <textarea placeholder="Product Description" name="" id="" cols="30" rows="10" v-model="description" disabled></textarea>

                <router-link :to="update_id_product"><button class="btn">Update</button></router-link>
                <button class="btn">Delete</button>
                <router-link to="/products"><button class="btn">Back</button></router-link>

            </form>

        </div>

    </section>
</template>

<script>
    export default {
        name: "AddFormProduct",
        computed:{
            update_id_product(){
                console.log( 'update id' + this.id );
                return './update-product/'+ this.id;
            }
        },
        data(){
            return {
                id: '',
                product_name: '',
                max_price: '',
                min_price: '',
                description: ''
            }
        },
        watch:{
            // $route( newRoute ){
            //     this.load( newRoute );
            // }
        },
        methods: {
            load( route ){
                const id = route.params.id ;
                const products = this.$store.getters.getProduct;
                const product = products.find( product => product.id === id );
                console.log( product );
                this.id = id;
                this.product_name = product.name;
                this.description =  product.description;
                this.max_price = product.max_price;
                this.min_price = product.min_price;
            }

        },
        created(){
            this.load( this.$route);
        }
    }
</script>

<style scoped>
    .error{
        color: red;
    }
    .btn{
        margin-right: 1rem;
    }

</style>
