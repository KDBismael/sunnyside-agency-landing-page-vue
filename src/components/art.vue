<template>
  <div class="artcontent ">
      <div v-if="artG" :class="artG">
        <div class="image">
        <img src="../../images/mobile/image-graphic-design.jpg" alt="">
        </div>
        <h1>Graphic design</h1>
        <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
    </div>
    <div v-if="artP" :class="artP">
      <div class="image">
        <img src="../../images/mobile/image-photography.jpg" alt="">
      </div>
      <h1>Photography</h1>
      <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'art',
  props:{
    artG:String,
    artP:String
  }

}
</script>

<style lang="scss" scoped>
 .graphic{
    .image{
      width: 100%;
      display: grid;
      img{
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
    position: relative;
    p{
      position: absolute;
      bottom: 5%;
      font-size: 12px;
      padding: 2rem;
      text-align: center;
      color: #3c7668;
      font-weight: bold;
      @media (max-width:268px) {
        padding: 1rem;
      }
      @media (max-width:234px) {
        bottom: 2%;
      }
    }
     h1{
      width: 100%;
      padding-bottom: 1rem;
      position: absolute;
      bottom: 25%;
      text-align: center;
      font-size: 25px;
      font-family: "barlowBold";
      color: #3c7668;
    }
  }
  .photography{
    .image{
      width: 100%;
      display: grid;
      img{
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
    position: relative;
    p{
      position: absolute;
      bottom: 10%;
      font-size: 12px;
      padding: 2rem;
      text-align: center;
      color: #2a78a2;
      font-weight: bold;
      @media (max-width:268px) {
        padding: 1rem;
      }
      @media (max-width:234px) {
        bottom: 5%;
      }
    }
     h1{
      width: 100%;
      padding-bottom: 1rem;
      position: absolute;
      bottom: 25%;
      text-align: center;
      font-size: 25px;
      font-family: "barlowBold";
      color: #2a78a2;
    }
  }
</style>