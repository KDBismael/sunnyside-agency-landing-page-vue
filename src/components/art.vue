<template>
  <div class="artcontent ">
      <div v-if="artG" :class="artG">
        <div class="image">
        <img v-if="mobile" src="../../images/mobile/image-graphic-design.jpg" alt="">
        <img v-if="!mobile" src="../../images/desktop/image-graphic-design.jpg" alt="">
        </div>
        <h1>Graphic design</h1>
        <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
    </div>
    <div v-if="artP" :class="artP">
      <div class="image">
        <img v-if="mobile" src="../../images/mobile/image-photography.jpg" alt="">
        <img v-if="!mobile" src="../../images/desktop/image-photography.jpg" alt="">
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
    artP:String,
    mobile:Boolean
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
        padding: 0;
        font-size: 10px;
      }
       @media (min-width:375px) {
        font-size: 10px;
        padding: 0rem;
        bottom: 5%;
      }
      @media (min-width:489px) {
        font-size:12px ;
      }
       @media (min-width:600px) {
        padding:.5rem;
        font-size:13px ;
      }
       @media (min-width:800px) {
         padding: 1rem;
         font-size:15px ;
       }
        @media (min-width:900px) {
        font-size:19px ;
      }
      @media (min-width:1100px) {
        font-size:24px ;
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
      @media (min-width:375px) {
        font-size: 20px;
        padding-bottom: 1rem;
      }
      @media (min-width:515px) {
          font-size: 28px;
      }
      @media (min-width:651px) {
          font-size: 30px;
      }
      @media (min-width:695px) {
            font-size: 32px;
        }
      @media (min-width:731px) {
              font-size: 35px;
      }
        @media (min-width:788px) {
              font-size: 40px;
      }
      @media (min-width:885px) {
          font-size: 45px;
      }
        @media (min-width:985px) {
          font-size: 50px;
      }
        @media (min-width:1081px) {
          font-size: 55px;
      }
        @media (min-width:1180px) {
          font-size: 60px;
      }
        @media (min-width:1282px) {
          font-size: 65px;
      }
        @media (min-width:1385px) {
          font-size: 70px;
      }
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
        padding: 0;
        font-size: 10px;
      }
      @media (min-width:375px) {
        font-size: 10px;
        padding: 0rem;
        bottom: 5%;
      }
      @media (min-width:489px) {
        font-size: 12px;
      }
        @media (min-width:600px) {
        padding:.5rem;
        font-size:15px ;
      }
       @media (min-width:800px) {
         padding: 1rem;
       }
      @media (min-width:900px) {
        font-size:19px ;
      }
       @media (min-width:1100px) {
        font-size:25px ;
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
      @media (min-width:375px) {
        font-size: 20px;
        padding-bottom: 1rem;
      }
      @media (min-width:515px) {
          font-size: 28px;
      }
      @media (min-width:651px) {
          font-size: 30px;
      }
      @media (min-width:695px) {
            font-size: 32px;
        }
      @media (min-width:731px) {
              font-size: 35px;
      }
        @media (min-width:788px) {
              font-size: 40px;
      }
      @media (min-width:885px) {
          font-size: 45px;
      }
        @media (min-width:985px) {
          font-size: 50px;
      }
        @media (min-width:1081px) {
          font-size: 55px;
      }
        @media (min-width:1180px) {
          font-size: 60px;
      }
        @media (min-width:1282px) {
          font-size: 65px;
      }
        @media (min-width:1385px) {
          font-size: 70px;
      }
    }
  }
</style>