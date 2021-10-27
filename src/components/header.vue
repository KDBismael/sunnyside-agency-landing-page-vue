<template>
  <div class="header">
      <div class="image">
          <img src="../../images/desktop/image-header.jpg" alt="">
      </div>
        <div class="nav-head">
            <div class="logo">
                <img src="../../images/logo.svg" alt=" logo">
            </div>
        </div>
        <p class="text">{{navText}}</p>
        <div class="modalContent">
            <nav>
                <ul>
                    <router-link to="/">About</router-link>
                    <router-link class="service" to="/">Services</router-link>
                    <router-link to="/">Projects</router-link>
                    <router-link class="contact" to="/">Contact</router-link>
                </ul>
             </nav>
        </div>
        
        <div class="arrow-down">
            <img src="../../images/icon-arrow-down.svg" alt="">
        </div>
  </div>
</template>

<script>
export default {
    name:'header',
    data(){
        return{
            navText :"We are creatives",
        }
    }
}
</script>

<style lang="scss" scoped>
    .header{
        display: grid;
        position: relative;
        .image{
            display: grid;
            width: 100%;
            height: 100%;
            img{
                width: 100%;
                height: auto;
                object-fit: cover;
                object-position: center;
            }
        }
        .nav-head{
            position: absolute;
            top: 3%;
            .logo{
                padding-left: 1rem;
               img{
                   object-fit: cover;
                   width: 70%;
               }
            }
        }
        .text{
            position: absolute;
            top: 20%;
            width: 100%;
            text-align: center;
            color: white;
            font-family: "barlowBold";
            font-size:25px ;
            @media (min-width:450px) {
                top: 25%;
                font-size:35px ;
                word-spacing: 15px;
            }
             @media (min-width:500px) {
                 font-size:45px ;
             }
        }
        .modalContent{
            position: absolute;
            top: 3%;
            right: 3%;
            nav ul{
                margin-left: .5rem;
                display: grid;
                grid-template-columns:repeat(4,1fr) ;
                grid-column-gap: .5rem;
                 @media (min-width:500px) {
                     grid-column-gap: 2rem;
                 }
                a{
                    &:first-child{
                        justify-self: end;
                    }
                    text-decoration: none;
                    font-size: 10px;
                    @media (min-width:450px) {
                        font-size: 15px;
                    }
                    color: white;
                    font-weight: bold;
                }
                .contact{
                    @media (min-width:450px) {
                        margin: .2rem;
                        height: 1.3rem;
                        font-size: 12px;
                    }
                    height: 1rem;
                    min-width:3rem;
                    width: auto;
                    background-color: white;
                    color: black !important;
                    font-size: 9px;
                    border-radius: 1rem;
                    text-align: center;
                    display: grid;
                    &:hover{
                        background-color: #70cefe;
                        color: white !important;
                    }
                }
            }
        }
        .arrow-down{
            position: absolute;
            bottom: 29%;
            @media (min-width:750px) {
                bottom: 32%;
            }
            width: 100%;
            display: grid;
            img{
                justify-self: center;
                object-fit: cover;
                width: 15px;
                @media (min-width:750px) {
                    width: 20px;
                }
                @media (min-width:1150px) {
                    width: 30px;
                }
            }  
        }
    }
</style>