<template>
    <div class="content">
        <div class="transform">
            <div class="image1">
                <img v-if="mobile" src="../../images/mobile/image-transform.jpg" alt="">
                <img v-if="!mobile" src="../../images/desktop/image-transform.jpg" alt="">
            </div>
            <div class="text">
                <h1>Transform your brand</h1>
                <p>We are a full-service creative agency specializing in helping brands grow fast. 
                    Engage your clients through compelling visuals that do most of the marketing for you.
                </p>
                <a class="link" href="#">Learn more</a>
            </div>
        </div>
        <div class="stand">
            <div class="image1">
                 <img v-if="mobile" src="../../images/mobile/image-stand-out.jpg" alt="">
                 <img v-if="!mobile" src="../../images/desktop/image-stand-out.jpg" alt="">
            </div>
            <div class="text">
                 <h1>Stand out to the right audience</h1>
                <p>
                    Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 
                </p>
                <a class="link" href="#">Learn more</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'learnMore',
    data(){
        return{
            image:'../../images/mobile/image-transform.jpg',
        }
     },
     props:{
         mobile:Boolean
     }
}
</script>

<style lang="scss" scoped>
    .transform{
        display: grid;
        @media (min-width:375px) {
            grid-template-columns: repeat(2,1fr);
        }
        .image1{
            display: grid;
            img{
                width: 100%;
                height: auto;
                object-position: center;
                object-fit: cover;
            }
            @media (min-width:375px) {
                grid-column: 1/3;
                grid-row: 1/3;
                justify-self: end;
                align-self: start;
                width: 50%;
            }
        }
        .text{
             @media (min-width:375px) {
                grid-column: 1/3;
                grid-row: 1/3;
                justify-self: start;
                align-self: start;
                width: 50%;
            }
            display: grid;
            place-content: center;
            h1{
                padding: 2rem;
                text-align: center;
                padding-bottom: 0;
                font-size: 25px;
                font-family: "barlowBold";
                color: #4d535c;
                @media (min-width:375px) {
                    padding: 1.5rem;
                    text-align: center;
                    padding-bottom: 0;
                    font-size: 15px;
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
            p{
                font-size: 14px;
                padding: 1rem;
                text-align: center;
                justify-self: center;
                color: #b2b0b5;
                font-weight: bold;
                @media (min-width:514px) and (max-width:540) {
                    font-size: 12px;
                }
                 @media (min-width:375px) {
                    padding: .5rem;
                    text-align: center;
                    font-size: 10px;
                }
                @media (min-width:450px) {
                    font-size: 12px;
                }
                @media (min-width:695px) {
                     font-size: 20px;
                 }
                  @media (min-width:835px) {
                    width: 100%;
                    font-size: 150%;
                }
                 @media (min-width:1003px) {
                    font-size: 160%;
                }
                 @media (min-width:1121px) {
                    font-size:170%;
                }
                 @media (min-width:1225px) {
                    font-size: 190%;
                }
            }
            a{
                text-decoration: none;
                margin-bottom: 2rem;
                justify-self: center;
                font-family: "barlowBold";
                color: #4d535c;
                @media (min-width:375px) {
                    margin-bottom: 0rem;
                }
                @media (min-width:400px) {
                    padding-top: 1rem;
                }
                @media (min-width:450px) {
                    padding-top: 1.2rem;
                }
                 @media (min-width:515px) {
                     padding-top: .5rem;
                 }
                 @media (min-width:651px) {
                     padding-top: 1.5rem;
                 }
                   @media (min-width:835px) {
                    width: 100%;
                    font-size: 150%;
                    text-align: center;
                }
                 @media (min-width:1003px) {
                    font-size: 160%;
                    padding-top: 2rem;
                }
                 @media (min-width:1121px) {
                    font-size:170%;
                    padding-top: 3rem;
                }
                 @media (min-width:1225px) {
                    font-size: 190%;
                    padding-top: 4.5rem;
                }
            }
            .link{
                position: relative;
                &::after{
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: -10%;
                    right: 0;
                    background-color:#fcf3b7;
                    width:120%;
                    height:25%;
                    @media (min-width:1105px) {
                        height:15%;
                    }
                    border-radius: .5rem;
                    z-index: -1;
                }
                &:hover{
                    &::after{
                        content: '';
                        background-color: #fbd005;
                    }
                }
                 @media (min-width:835px) {
                     width:auto;
                }
            }   
        }
    }
    .stand{
        display: grid;
        @media (min-width:375px) {
            grid-template-columns: repeat(2,1fr);
        }
        .image1{
            display: grid;
            img{
                width: 100%;
                height: auto;
                object-position: center;
                object-fit: cover;
            }
            @media (min-width:375px) {
                grid-column: 1/3;
                grid-row: 1/3;
                justify-self:start;
                align-self: start;
                width: 50%;
            }
        }
        .text{
            @media (min-width:375px) {
                grid-column: 1/3;
                grid-row: 1/3;
                justify-self:end;
                align-self: start;
                width: 50%;
            }
            display: grid;
            place-content: center;
            h1{
                padding: 2rem;
                text-align: center;
                padding-bottom: 0;
                font-size: 25px;
                font-family: "barlowBold";
                color: #4d535c;
                @media (min-width:375px) {
                    padding: 1.5rem;
                    text-align: center;
                    padding-bottom: 0;
                    font-size: 15px;
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
            p{
                font-size: 14px;
                padding: 1rem;
                text-align: center;
                justify-self: center;
                color: #b2b0b5;
                font-weight: bold;
                @media (min-width:514px) and (max-width:540) {
                    font-size: 12px;
                }
                    @media (min-width:375px) {
                    padding: .5rem;
                    text-align: center;
                    font-size: 10px;
                }
                @media (min-width:450px) {
                    font-size: 12px;
                }
                 @media (min-width:695px) {
                     font-size: 20px;
                 }
                   @media (min-width:835px) {
                    width: 100%;
                    font-size: 150%;
                }
                 @media (min-width:1003px) {
                    font-size: 160%;
                }
                 @media (min-width:1121px) {
                    font-size:170%;
                }
                 @media (min-width:1225px) {
                    font-size: 190%;
                }
            }
            a{
                text-decoration: none;
                margin-bottom: 2rem;
                justify-self: center;
                font-family: "barlowBold";
                color: #4d535c;
                @media (min-width:375px) {
                    margin-bottom: 0rem;
                }
                @media (min-width:418px) {
                    padding-top: 1rem;
                }
                @media (min-width:450px) {
                    padding-top: .4rem;
                }
                @media (min-width:651px) {
                     padding-top: 1.5rem;
                 }
                  @media (min-width:835px) {
                    width: 100%;
                    font-size: 150%;
                    text-align: center;
                }
                   @media (min-width:1003px) {
                    font-size: 160%;
                    padding-top: 2rem;
                }
                 @media (min-width:1121px) {
                    font-size:170%;
                    padding-top: 3rem;
                }
                 @media (min-width:1225px) {
                    font-size: 190%;
                    padding-top: 4.5rem;
                }
            }
             .link{
                position: relative;
                &::after{
                    content: '';
                    position: absolute;
                     @media (min-width:375px) and (max-width: 404px) {
                        bottom: 0px;
                    }
                    bottom: -2px;
                    left: -10%;
                    right: 0;
                    background-color:#fedbd3;
                    width:120%;
                    height:25%;
                     @media (min-width:1105px) {
                        height:15%;
                    }
                    border-radius: .5rem;
                    z-index: -1;
                }
                &:hover{
                    &::after{
                        content: '';
                        background-color: #fd7663;
                    }
                }
                @media (min-width:835px) {
                     width:auto;
                }
            } 
            
        }
    }
</style>

