<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer/>
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #app {
    font-family: Montserrat, sans-serif;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
