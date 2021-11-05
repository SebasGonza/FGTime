<template>
  <div class="home-view">
    <navbar/>
    <h1 class="title">Bienvenido a veterinaria</h1>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },
    name: 'HomeView'
}
</script>

<style>

.title{
    margin: 30px;
    text-align: center;
}
</style>