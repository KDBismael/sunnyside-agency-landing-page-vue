 <template>
  <div class="sunnyPage">
    <header-mobile-top></header-mobile-top>
    <router-view/>
  </div>
</template>

<script>
import headerMobile from './components/headerMobile.vue'
export default {
  name: 'App',
  components: {
    'header-mobile-top':headerMobile,
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
