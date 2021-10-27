<template>
    <div class="content">
        <div class="transform">
            <div class="image1">
                <img src="../../images/mobile/image-transform.jpg" alt="">
            </div>
            <div class="text">
                <h1>Transform your brand</h1>
                <p>We are a full-service creative agency specializing in helping brands grow fast. 
                    Engage your clients through compelling visuals that do most of the marketing for you.
                </p>
                <a href="#">Learn more</a>
            </div>
        </div>
        <div class="stand">
            <div class="image1">
                 <img src="../../images/mobile/image-stand-out.jpg" alt="">
            </div>
            <div class="text">
                 <h1>Stand out to the right audience</h1>
                <p>
                    Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 
                </p>
                <a href="#">Learn more</a>
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
            }
            p{
                font-size: 14px;
                padding: 1rem;
                text-align: center;
                justify-self: center;
                color: #b2b0b5;
                font-weight: bold;
                 @media (min-width:375px) {
                    padding: .5rem;
                    text-align: center;
                    font-size: 10px;
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
            }
            p{
                font-size: 14px;
                padding: 1rem;
                text-align: center;
                justify-self: center;
                color: #b2b0b5;
                font-weight: bold;
                    @media (min-width:375px) {
                    padding: .5rem;
                    text-align: center;
                    font-size: 10px;
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
            }
        }
    }
</style>

