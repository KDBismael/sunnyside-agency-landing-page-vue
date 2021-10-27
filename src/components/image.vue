<template>
  <div class="gallery">
      <img src="../../images/mobile/image-gallery-milkbottles.jpg" alt="">
      <img src="../../images/mobile/image-gallery-orange.jpg" alt="">
      <img src="../../images/mobile/image-gallery-cone.jpg" alt="">
      <img src="../../images/mobile/image-gallery-sugar-cubes.jpg" alt="">
  </div>
</template>

<script>
export default {
    name:'image',
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