<template>
    <header>

        <a href="#" class="logo"><i class="fas fa-globe"></i>Bridge Africa</a>

        <div id="menu-bar" class="fas fa-bars" :class="add_fa_time" @click="open_menu"></div>

        <nav class="navbar" :class="open_all_menu">
            <a href="#home">Home</a>
            <a href="#popular">Product</a>
            <a href="#services">Services</a>
            <a href="#footer">Contact</a>
            <a href="#">Login</a>
        </nav>

    </header>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return{
                navbar_active : false,
            }
        },
        mounted() {
            window.addEventListener("scroll", this.onScroll);
        },
        beforeDestroy() {
            window.removeEventListener("scroll", this.onScroll)
        },
        computed:{
            open_all_menu(){
                console.log( 'open navbar');
                return { 'active' : this.navbar_active };

            },
            add_fa_time(){
                return { 'fa-times': this.navbar_active }
            },
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
            open_menu(){
                this.navbar_active = !this.navbar_active;
                console.log('Open menu');
            }
        },
    }
</script>

<style scoped>

</style>
