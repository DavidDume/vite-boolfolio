<script>
 import Header from './components/Header.vue';
 export default {
  components: {
    Header
  }
 } 
</script>

<template>
  <Header></Header>
  <router-view></router-view>
</template>

<style lang="scss">
    @use './styles/style.scss';

    
</style>
