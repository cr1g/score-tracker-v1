<template>
    <nav>
        <ul>
            <li>
                <router-link to="/show-matches" tag="button"> Show<br/>matches</router-link>
            </li>
            <li id="nav-title">
                <h1>Score</h1>
                <h4 class="space">Tracker</h4>
            </li>
            <li>
                <label><router-link to="/add-match" tag="button"> Add<br/>match</router-link></label>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
    nav {
        background-color: #a1c45a;
        margin: 0;
        padding: 0;
        height: 75px;
        border-bottom: 1px #90B051 solid;
    }

    #nav-title {
        text-transform: uppercase;
        padding: 0;
        background-color: #a1c45a;
        color: #E5E0C9;
    }

    .space {
        margin-left: 45px;
        margin-top: -7px;
    }

    ul {
        display: flex;
        justify-content: center;
        text-align: center;
        min-height: 100%;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: auto 10px auto 10px;
    }

    a {
        text-decoration: none;
        color: #50312F;
    }

    nav button {
        background-color: #a1c45a;
        border: none;
        padding: 16px;
        font-size: 17px;
        color: #fff9e0;
        outline: none;
    }

    nav button:hover {
        background-color: #fff9e0;
        color: #90B051;
        cursor: pointer;
    }
</style>
