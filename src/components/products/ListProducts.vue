<template>
    <!-- popular section starts  -->

    <section class="popular" id="popular">

        <h1 class="heading"> All <span>Products</span> </h1>

        <div class="box-container">
            <AddProduct></AddProduct>
            <ProductItem v-for="product in $store.getters.getProduct"
                         :key="product.id"
                         :id="product.id"
                         :name="product.name"
                         :min_price="product.min_price"
                         :max_price="product.max_price"
                         :image_url="product.image_url"
                         :description="product.description"
                         :numbers_stars="product.numbers_stars"></ProductItem>
        </div>

    </section>

    <!-- popular section ends -->
</template>

<script>
    import ProductItem from "@/components/products/ProductItem";
    import AddProduct from "@/components/AddProduct";
    export default {
        name: "ListProducts",
        components: {AddProduct, ProductItem},
        created(){
            console.log( this.$store.getters.getProduct );
        }
    }
</script>

<style scoped>

</style>
