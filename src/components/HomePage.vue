<template>
    <div>
        <!-- header section starts  -->

<!--        <Header></Header>-->

        <!-- header section ends -->

        <!-- home section starts  -->

        <Home></Home>

        <!-- home section ends -->

        <ListProducts></ListProducts>

        <!-- steps section starts  -->

        <div class="step-container" id="services">

            <h1 class="heading">Some <span>Services</span></h1>

            <section class="steps">

                <div class="box">
                    <img src="../assets/images/step-1.jpg" alt="">
                    <h3>Create Product</h3>
                </div>
                <div class="box">
                    <img src="../assets/images/step-2.jpg" alt="">
                    <h3>View Product</h3>
                </div>
                <div class="box">
                    <img src="../assets/images/step-3.jpg" alt="">
                    <h3>Update Product</h3>
                </div>
                <div class="box">
                    <img src="../assets/images/step-4.jpg" alt="">
                    <h3>Delete Product</h3>
                </div>

            </section>

        </div>

        <!-- steps section ends -->

        <!-- footer section  -->

        <!--<section class="footer">-->

<!--        <Footer></Footer>-->

        <!-- scroll top button  -->
        <a href="#home" class="fas fa-angle-up" :class="active_scroll_top" id="scroll-top" ></a>

        <!--</section>-->



        <!-- loader  -->
        <!--        <div class="loader-container">-->
        <!--            <img src="./assets/images/loader.gif" alt="">-->
        <!--        </div>-->
    </div>
</template>

<script>
    import ListProducts from "@/components/products/ListProducts";
    import Home from "@/components/UI/Home";
    export default {
        name: "HomePage",
        components: { ListProducts, Home},
    }
</script>

<style scoped>

</style>
