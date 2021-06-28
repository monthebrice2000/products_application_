<template>
    <div class="box">
        <span class="price"> ${{ min_price }} - ${{ max_price }} </span>
        <img src="../../assets/images/p-1.jpg" alt="">
        <h3>{{ name }}</h3>
        <div class="stars">
            <Star v-for="star in numbers_stars"
                  :id="id"
                  mode="fas"
                  :key="star"></Star>
            <Star v-for="star in 5-numbers_stars"
                  :id="id"
                  mode="far"
                  :key="star"></Star>
        </div>
        <router-link :to="view_product_t" class="btn">View</router-link>
    </div>
</template>

<script>
    import Star from "@/components/products/Star";
    export default {
        name: "ProductItem",
        components: {Star},
        props: ['id', 'name', 'min_price', 'max_price', 'image_url', 'description', 'numbers_stars'],
        computed: {
            view_product_t(){
                return '/view-product/'+ this.id;
            }
        }
    }
</script>

<style scoped>

</style>
