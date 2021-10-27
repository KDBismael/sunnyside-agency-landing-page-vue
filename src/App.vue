 <template>
  <div class="sunnyPage">
    <header-top v-show="!mobile"></header-top>
    <header-mobile-top v-show="mobile"></header-mobile-top>
    <router-view></router-view>
    <footer-bottom></footer-bottom>
  </div>
</template>

<script>
import footer from './components/footer.vue'
import header from './components/header.vue'
import headerMobile from './components/headerMobile.vue'
export default {
  name: 'App',
  components: {
    'header-top':header,
    'header-mobile-top':headerMobile,
    'footer-bottom':footer
  },
  data(){
    return{
      mobile:null,
      width:null
    }
  },
  created(){
    window.addEventListener('resize',this.toggleMobileHeader)
    this.toggleMobileHeader();
  },
  methods:{
    toggleMobileHeader:function(){
        this.width=window.innerWidth;
        if(this.width<=375){
          this.mobile=true;
          return;
        }
        else{
          this.mobile=false;
          return;
        }
    }
  }
}
</script>

<style>
/*global style start */
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box
  }
  @font-face {
    font-family: barlowRegular;
    src: url('./Barlow/Barlow-Regular.ttf');
}
@font-face {
    font-family: barlowBold;
    src: url('./Barlow/Barlow-Bold.ttf');
}
@font-face {
    font-family: barlowThin;
    src: url('./Barlow/Barlow-Thin.ttf');
}
body{
    font-family: "barlowRegular","barlowThin";
}

/*global style end */
</style>
