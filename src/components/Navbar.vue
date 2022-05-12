<template>
  <div class="navbar">
      <div class="nav-content">
        <img src="../assets/logo.png" alt="" class="logo">
        <div v-if="!mobile" class="links">
            <a href="#market">Market</a>
            <a href="">Features</a>
            <a href="">White papers</a>
            <a href="">About us</a>
        </div>
       
      </div>
      
       <div class="icons">
            <i @click="toogleMobileNav" class="fa-solid fa-bars" v-show="mobile" :class="{ 'icon-active': mobileNav }"></i>
        </div>
        <div class="button">
        <button class="btn">EN</button>
      </div>
        <transition name="mobile-nav">
            <div v-show="mobileNav" class="dropdown-nav">
                 <a href="#market">Market</a>
                <a href="">Features</a>
                <a href="">White papers</a>
                <a href="">About us</a>
            </div>
        </transition>
      
      
  </div>
</template>

<script>
export default {
 data() {
     return {
         mobile: null,
         mobileNav: null,
         windowWidth: null,
     }
 },
 created() {
     window.addEventListener('resize', this.checkScreen);
     this.checkScreen();
 },
 methods: {
     toogleMobileNav(){
         this.mobileNav = !this.mobileNav
         this.mobileNav
     },
     checkScreen(){
         this.windowWidth = window.innerWidth;
         if(this.windowWidth <= 750){
             return this.mobile = true;
         }
         this.mobile = false;
         this.mobileNav = false;
     }

 },
}
</script>

<style>
    .navbar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }
    .logo{
        height: 30px;
        width: 30px;
    }
    .nav-content{
        display: flex;
        align-items: center;
    }
    .links a{
        color: #fff;
        font-size: 1.6rem;
        margin: 0 1.2rem;
    
    }
    .btn{
        padding: 1rem 3rem;
        background: none;
        border-radius: 5rem;
        border: 1px solid #fff;
        color: #fff;
        outline: none;
    }
    .icons{
        position: absolute;
        right: 10px;
    }
    i{
        color: #fff;
        font-size: 2.5rem;
        cursor: pointer;
    }
    .icon-active{
        transform: rotate(100deg);
    }
    .dropdown-nav{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        position: absolute;
        top:70px;
        width: 80%;
        padding: 1.2rem 1.6rem;
        background-color: #fff;
        
    }
    .dropdown-nav a{
        margin-top: 2rem;
        font-size: 1.6rem;
        color: #000;
     
    }
    .dropdown-nav a:hover{
        width: 100px;
        border-bottom: 1px solid #ff960b;
        
    }

</style>