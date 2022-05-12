<template>
  <div class="home">
    <h1 class="text-header">Buy &<br> Sell <span>Crypto</span></h1>
    <p class="text">World's biggest Crytocurrency exchange available on web as well as mobile phone.</p>
    <button class="btn">EXPLORE MORE</button>
    <div class="cryto-blocks">
      <div class="coin">
        <img src="../assets/bitcoin.png" alt="">
        <div class="value">
          <h4>${{ coins.bitcoin.usd }}</h4>
           <p class="cryto-name">bitcoin</p>

        </div>
      </div>
      <div class="coin">
        <img src="../assets/ethereum.png" alt="">
        <div class="value">
          <h4>${{ coins.ethereum.usd }}</h4>
           <p class="cryto-name">ethereum</p>

        </div>
      </div>
      <div class="coin">
        <img src="../assets/dogecoin.png" alt="">
        <div class="value">
          <h>${{ coins.dogecoin.usd }}</h>
          <p class="cryto-name">doge</p>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
    }
  },
  created() {
    this.$store.dispatch('GetCoin')
  },
  computed:mapState({
    coins: state => state.coins,
  }),
  
  methods: {
  
  },
  
}
</script>
<style scoped>
.home{
  padding-top: 10%;
  color: #fff;
}
.text-header{
  font-size: 9rem;
  color: #fff;
}
 span{
    color: #ff960b;
  }
.text{
  font-size: 1.6rem;
  width:38%;
  line-height: 1.5;
  margin: 1.6rem 0;
}
.home .btn{
  background: #ff960b;
  border: none;
  font-weight: 600;
  font-size: 1.6rem;
}
.cryto-blocks{
  display: flex;
  justify-content: flex-end;
 
}
.coin{
  border: 1px solid #fff;
  background: none;
  color: #fff;
  display: flex;
  align-items: center;
   margin-right: 2rem;
   padding: 1.3rem 3rem;
   border-radius: .5rem;
}
.coin img{
  width: 3rem;
  margin-right: .8rem;
}
.cryto-name{
  color: #ff960b;
}
@media (max-width: 768px){
  .home{
    padding-top: 25%;
  }
  .text-header{
    font-size: 5rem;
  }
  .text{
    width: 100%;
  }
  .cryto-blocks{
    margin: 2.5rem auto;
    text-align: center;

  }
  .coin{
    display: inline-block;
   padding: 1rem 2rem;
  }
  
}
</style>
