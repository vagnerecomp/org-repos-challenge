<template>
  <div id="main">
    <Navbar :logo="logo_src" :alt="app_name" />
    <router-view/>
    <Footer />

  </div>
</template>

<script>

import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  data () {
    return {
      logo_src: "https://www.lett.digital/core/assets/4f45a5e11f/img/logo.png",
      app_name: "Lett"
    }
  },
  components: {
    Navbar,
    Footer    
  }
}
</script>

<style>
  *{
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  /* #main{
    position: relative;
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
  } */
  .main-container{
    margin: 50px;
    min-height: 500px;
    
  }
  h1{
    text-align: center;
    font-size: 42px;
    border-bottom: 30px;
    color: #222;
  }
</style>
