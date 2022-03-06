<template>
  <Navbar :logo="logo_src" :alt="app_name" />
  <router-view/>
  <Footer />
</template>

<script>

import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  data () {
    return {
      logo_src: "/img/logo.png",
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
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .main-container{
    margin: 50px;
    min-height: 350px;
  }
  h1{
    text-align: center;
    font-size: 42px;
    border-bottom: 30px;
    color: #222;
  }
</style>
