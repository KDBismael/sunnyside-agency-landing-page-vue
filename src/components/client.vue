<template>
  <div class="cli">
    <h1>Client testimonials</h1>
    <div class="emily">
      <div>
        <img src="../../images/image-emily.jpg" alt="">
      </div>
      <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
      <h1>Emily R.</h1>
      <p class="work">Marketing Director</p>
    </div>
    <div class="emily">
      <div>
        <img src="../../images/image-thomas.jpg" alt="">
      </div>
      <p>
        Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
      </p>
      <h1>Thomas S..</h1>
      <p class="work">Chief Operating Officer</p>
    </div>
    <div class="emily">
      <div>
        <img src="../../images/image-jennie.jpg" alt="">
      </div>
      <p>
        Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
      </p>          
      <h1>Jennie F.</h1>
      <p class="work">Business Owner</p>
    </div>
</div>
</template>

<script>
export default {
    name:'client'

}
</script>

<style scoped>

.cli h1:first-child{
    font-size: 20px;
    font-family: "barlowBold";
    text-align: center;
    margin-top: 3rem;
    color: #a8a9ab;
}
.emily{
    margin-top: 2rem;
    display: grid;
    justify-content: center;
}
.emily div:first-child{
    justify-self: center;
    border-radius: 30px;
    width: 60px;
    height: 60px;
}
.emily img{
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 30px;
}
.emily p{
    justify-self: center;
    margin: 1rem;
    font-size:14px;
    text-align: center;
    color: #6a696e;
    font-weight: bold;
}
.emily h1{
    font-size: 17px;
    justify-self: center;
    font-family: "barlowBold";
}
.emily .work{
    font-size: 11px;
    margin-top: .3rem;
    color: #b0aeae;
}
</style>