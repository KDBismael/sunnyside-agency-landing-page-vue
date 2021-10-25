<template>
  <div class="header">
        <div class="nav-head">
            <div class="logo">
                <img src="../../images/logo.svg" alt=" logo">
            </div>
            <div  v-on:click="toggleNav" class="burger" >
                <img src="../../images/icon-hamburger.svg" alt="">
            </div>
        </div>
        <p class="text">{{navText}}</p>
        <div v-if="burger" class="nav-menu">
           <div v-on:click="toggleNav" class="modalContent">
             <nav>
                <ul>
                    <router-link to="/">About</router-link>
                    <router-link class="service" to="/">Services</router-link>
                    <router-link to="/">Projects</router-link>
                    <router-link class="contact" to="/">Contact</router-link>
                </ul>
            </nav>
           </div>
        </div>
        
        <div class="arrow-down">
            <img src="../../images/icon-arrow-down.svg" alt="">
        </div>
  </div>
</template>

<script>
export default {
    name:'Header',
    data(){
        return{
            navText :"We are creatives",
            burger:false,
        }
    },
    methods:{
        toggleNav:function(){
            this.burger=!this.burger
        }
    }
}
</script>

<style lang="scss" scoped>
    .header{
        background-image: url('../../images/mobile/image-header.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position-y: bottom;
        width: 100%;
        min-height: 20rem;
        display: grid;
        grid-template-columns: 55% 45%;
        position: relative;
        .nav-head{
            align-self: start;
            justify-self: start;
        }
        .logo{
            position: absolute;
            left: 5%;
            top: 3%;
            img{
                height: 70%;
                width: 70%;
                object-fit: cover;
            }
             &:hover{
                cursor: pointer;
            }
        }
        .burger{
            position: absolute;
            right: 5%;
            top: 3%;
            img{
                height: 70%;
                width: 70%;
                object-fit: cover;
            }
            &:hover{
                cursor: pointer;
            }
        }
        .text{
            grid-column: 1/3;
            justify-self:center;
            align-self:start;
            font-weight: bold;
            color: white;
            font-size: 36px;
            text-align: center;
        }
        .arrow-down{
            width: 100%;
            max-height: 100px;
            align-self: start;
            display: grid;
            grid-column: 1/3;
             img{
                 align-self: start;
                justify-self:center;
                height: 50px;
                width: 20px;
                transform: translateY(-15px);
            }
        } /*menu modal part */
        .nav-menu{
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            .modalContent{
                width: 100%;
                height: 100%;
                display: grid;
                nav{
                    width: 80%;
                    height: 200px;
                    justify-self: center;
                    align-self:start;
                    margin-top:24%;
                    position: relative;
                    &::after{
                        content: " ";
                        position: absolute;
                        top: -10%;
                        right:0%;
                        width: 0;
                        height: 0;
                        border-style: solid;
                        border-width: 0 0 20px 20px;
                        border-color: transparent transparent white transparent;
                    }
                    ul{
                        display: grid;
                        grid-template-rows: repeat(4,1fr);
                        grid-row-gap: 10%;
                        width: 100%;
                        height: 100%;
                        background-color: white;
                        .service{
                            align-self: center;
                        }
                        .contact{
                            color: black !important;
                            font-weight:bold;
                            width: 60%;
                            height: 40px;
                            background-color: hsl(51, 100%, 49%);
                            margin-bottom: 1rem;
                            border-radius: 1.5rem;
                            padding-top: 5%;
                            padding-left: 17%;
                            a{
                                color:black;
                            }
                        }
                        .router-link-active{
                            justify-self: center;
                            list-style-type: none;
                            color: #97959d;
                            text-decoration: none;
                            &:first-child{
                                align-self:end;
                            }
                             &:last-child{
                                align-self:start;
                            }
                            a{
                                text-decoration: none;
                                color: #95959e;
                            }
                        }
                    }
                }
            }
        }

    }
     @media (min-width:300) {
        .header{
            min-height: 26rem;
        }
    }
</style>
    
