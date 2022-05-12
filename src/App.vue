<template>
  <div class="container">
    <Navbar />
    <router-view/>
  </div>
  
</template>
<script>
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar },
  
}
</script>

<style>
.container{
  width: 100%;
  height: 100vh;
  background: url('./assets/background.png') no-repeat;
  background-size: cover;
  padding: 2rem 9%;

}

</style>
