<template>
    <div id="nav">
        <router-link to="/" id="logo-url">
            <img :src="logo" :alt="alt" id="logo">
        </router-link>
        <div id="menu">
            <router-link to="/"><p>INÍCIO</p></router-link>
            <router-link to="/about">SOBRE</router-link>
        </div>
    </div>

</template>

<script>
export default {
    name: "Navbar",
    props: {
        logo: String,
        alt: String
    }
}
</script>

<style scoped>
#nav{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 15px 50px 15px 162px;
    margin: 0;

    -webkit-box-shadow: 0 4px 6px -6px #222;
    -moz-box-shadow: 0 4px 6px -6px #222;
    box-shadow: 0 4px 6px -6px #222;
}
#nav #logo-url{
    margin: auto;
    margin-left: 0;
}
#logo{
    width: 83.5px;
    height: 44.5;
}
#nav a{
    text-decoration: none;
    color: #222222;
    margin: 12px;
    font-weight: bold;
    transition: 0.3s;
}
#nav a p{
    color: #00D96F;
    transition: 0.2s;
}
#nav a:hover, #nav a p:hover{
    font-size: 20px;
    
}
#nav #menu{
    display: flex;
    justify-content: space-between;
}
</style>