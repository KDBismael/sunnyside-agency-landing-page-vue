<template>
    <div class="content">
        <div class="transform">
            <div class="image">

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
            <div class="image"> </div>
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
            dp:null
           }
     }
}
</script>

<style lang="scss" scoped>
    $data:'../../images/mobile/image-transform.jpg';
    .transform{
        display: grid;
        .image{
            background-image: url($data);
            background-repeat: no-repeat;
            background-size: cover;
            width:100%;
            min-height:200px;
        }
        .text{
            display: grid;
            place-content: center;
            h1{
                padding: 2rem;
                text-align: center;
                padding-bottom: 0;
                font-size: 25px;
            }
            p{
                font-size: 14px;
                padding: 1rem;
                text-align: center;
                justify-self: center;
            }
            a{
                text-decoration: none;
                margin-bottom: 2rem;
                justify-self: center;
                font-weight: bold;
                color: black;
            }
        }
    }
    .stand{
        display: grid;
        .image{
            background-image: url('../../images/mobile/image-stand-out.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            width:100%;
            min-height:200px;
        }
        .text{
            display: grid;
            place-content: center;
            h1{
                padding: 2rem;
                text-align: center;
                padding-bottom: 0;
                font-size: 25px;
            }
            p{
                font-size: 14px;
                padding: 1rem;
                text-align: center;
                justify-self: center;
            }
            a{
                text-decoration: none;
                margin-bottom: 2rem;
                justify-self: center;
                font-weight: bold;
                color: black;
            }
        }
    }
</style>

