<template>
    <div>
        <section class="home" id="home">

            <div class="content">
                <h3>New Product 2021</h3>
                <p>Products Made For You</p>
                <router-link  to="/products"><a href="#" class="btn">View</a></router-link>
            </div>

            <div class="image">
                <img src="../../assets/images/home-img.png" alt="">
            </div>

        </section>
        <a href="#home" class="fas fa-angle-up" id="scroll-top" :class="active_scroll_top"></a>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return{
                windowTop: 0,
                scroll_top : false,
            }
        },
        mounted() {
            window.addEventListener("scroll", this.onScroll);

        },
        beforeDestroy() {
            window.removeEventListener("scroll", this.onScroll)
        },
        computed:{
            active_scroll_top(){
                return { 'active': this.scroll_top };
            }

        },
        methods: {
            onScroll(e) {
                console.log( e );
                this.navbar_active = false;
                //this.windowTop = window.top.scrollY /* or: e.target.documentElement.scrollTop */
                if(window.scrollY > 60){
                    this.scroll_top = true;
                }else{
                    this.scroll_top = false;
                }
            },
        },
    }
</script>

<style scoped>

</style>
