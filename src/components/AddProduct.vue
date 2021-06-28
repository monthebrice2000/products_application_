<template>
    <div class="box">
        <router-link to="/add-product" class="btn"><i class="fas fa-plus"></i>Add Product</router-link>
    </div>
</template>

<script>
    export default {
        name: "AddProduct",
    }
</script>

<style scoped>
    .popular .box-container .box {
        padding: 2rem;
        background: #999;
        box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 10%);
        border: .1rem solid rgba(0,0,0,.3);
        border-radius: .5rem;
        text-align: center;
        flex: 1 1 30rem;
        position: relative;
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .box .btn i {
        display: block;
        margin-bottom: 1rem;
    }

</style>
