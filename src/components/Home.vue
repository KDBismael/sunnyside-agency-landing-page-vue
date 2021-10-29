<template>
  <div class="home">
      <learn v-bind:mobile="mobile"></learn>
      <div class="art">
        <art :artG="artG" :mobile="mobile"></art>
        <art :artP="artP" :mobile="mobile"></art>
      </div>
      <client></client>
      <image-gallery :mobile="mobile"></image-gallery>

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
        artP:"photography",
        mobile:null,
        width:null
      }
    },
    methods:{
      toggleMobileHeader:function(){
        this.width=window.innerWidth;
        if(this.width<=375){
          this.mobile=true;
          return;
        }
        else{
          this.mobile=false;
          return;
        }
      }
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