<template>
    <footer>
        <span>&copy; 2019 Made by <a href="https://www.github.com/cr1g">Gira Cristian</a>.</span>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    footer {
        background-color: #E5E0C9;
        height: 65px;
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    span {
        display: flex;
        justify-content: center;
        text-align: center;
        margin-top: 23px;
    }

    a {
        margin-left: 5px;
        text-decoration: none;
    }
</style>
