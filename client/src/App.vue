<template>
    <div id="app">
        <Navbar/>

        <div class="container">
            <router-view></router-view>
        </div>

        <Footer/>
    </div>
</template>

<script>
    import Footer from "./components/Footer"
    import Navbar from "./components/Navbar"

    export default {
        components: {
            Footer,
            Navbar
        }
    }
</script>

<style>
    * {
        font-family: 'MyWebFont', Quicksand, sans-serif;
        margin: 0;
    }

    #app {
        height: 100%;
        margin: auto;
    }

    .container {
        height: 100%;
    }

</style>
