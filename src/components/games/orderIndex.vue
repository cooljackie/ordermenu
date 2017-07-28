<template>
  <div class="order-box">
    <div class="swiper-box">
      <swiper></swiper>
    </div>
    <div class="order-tab">
       <div class="order-tab-item"><router-link to="/order/orderList2">二楼菜单</router-link></div>
       <div class="order-tab-item"><router-link to="/order/orderList25">二十五楼菜单</router-link></div>
    </div>
    <router-view :hotOrderData="hotOrderData" :newOrderData="newOrderData"></router-view>
  </div>
</template>

<script type="text/javascript">
import swiper from '../common/swiper/swiper'
  export default{
    data () {
      return {
        hotOrderData: [],
        newOrderData: []
      }
    },
    mounted () {
      this.axios.get('/api/orders').then(res => {
        console.log(res.data.data)
        this.hotOrderData = res.data.data.hot
        this.newOrderData = res.data.data.newOrder
      })
    },
    components: {
      swiper
    }
  }
</script>

<style scoped lang='less'>
  .order-tab{
    display: flex;
    background: #ffffff;
    width: 100%;
    max-width: 37.5rem;
    height: 40px;
    line-height: 40px;
    .order-tab-item{
      flex: 1;
      border-bottom: .1rem solid #f5f5fa;
      color: #333;
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
      }
    }
    .router-link-active{
      border-bottom: .1rem solid #2697fc;
      color: #2697fc;
    }
  }
</style>
