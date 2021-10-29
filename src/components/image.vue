<template>
  <div class="gallery">
      <img v-if="mobile" src="../../images/mobile/image-gallery-milkbottles.jpg" alt="">
      <img v-if="!mobile" src="../../images/desktop/image-gallery-milkbottles.jpg" alt="">
      <img v-if="mobile" src="../../images/mobile/image-gallery-orange.jpg" alt="">
      <img v-if="!mobile" src="../../images/desktop/image-gallery-orange.jpg" alt="">
      <img v-if="mobile" src="../../images/mobile/image-gallery-cone.jpg" alt="">
      <img v-if="!mobile" src="../../images/desktop/image-gallery-cone.jpg" alt="">
      <img v-if="mobile" src="../../images/mobile/image-gallery-sugar-cubes.jpg" alt="">
      <img v-if="!mobile" src="../../images/desktop/image-gallery-sugarcubes.jpg" alt="">
  </div>
</template>

<script>
export default {
    name:'image',
    props:{
        mobile:Boolean
    }
}
</script>


<style lang="scss" scoped>
    .gallery{
        display:grid;
        grid-template-columns: repeat(2,1fr);
        @media (min-width:375px) {
            grid-template-columns: repeat(4,1fr);
        }
        img{
            width: 100%;
            height: auto;
            object-position: center;
            object-fit: cover;
            &:first-child{
                object-position: bottom !important;
            }
        }
    }
</style>