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
        name: "Header"
    }
</script>

<style scoped>

</style>
