<template>
  <div class="home">
      <learn></learn>
      <div class="art">
        <art :artG="artG"></art>
        <art :artP="artP"></art>
      </div>
      <client></client>
      <image-gallery></image-gallery>

  </div>
</template>

<script>

import art from './art.vue'
import Client from './client.vue'
import learnMore from './learnMore.vue'
import image from './image.vue'

export default {
    name:'Home',
    components:{
      'learn':learnMore,
      'client':Client,
      'art':art,
      'image-gallery':image,
    },
    data(){
      return{
        artG:"graphic",
        artP:"photography"
      }
    },
    props:{
      mobile:Boolean,
    }

}
</script>

<style lang="scss" scoped>
  .art{
     @media (min-width:375px) {
       display: grid;
       grid-template-columns: repeat(2,1fr);
     }
  }

</style>