<template>
  <div class="home">
      <learn></learn>
      <client></client>
  </div>
</template>

<script>
import Client from './client.vue'
import learnMore from './learnMore.vue'
export default {
    name:'Home',
    components:{
      'learn':learnMore,
      'client':Client
    }
}
</script>

<style>

</style>