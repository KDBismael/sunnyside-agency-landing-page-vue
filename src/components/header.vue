<template>
  <div class="header">
        <div class="nav-head">
            <div class="logo">
                <img src="../../images/logo.svg" alt=" logo">
            </div>
        </div>
        <p class="text">{{navText}}</p>
        <div class="nav-menu">
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
    name:'header',
}
</script>

<style scoped>

</style>