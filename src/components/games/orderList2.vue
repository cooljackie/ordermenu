<template>
  <ol class="order-list">
    <li class="flex" v-for="item in hotOrderData">
      <img class="r5" :src="item.orderIconUrl">
      <div class="flex flex-item flex-v" >
        <p class="title"><span>{{item.orderName}}</span></p>
        <p>{{item.subText}}</p>
      </div>
      <router-link :to="'/foodList/'+item.id" class="btn r3">进入点餐</router-link>
    </li>
  </ol>
</template>

<script>
  export default{
    props: {
      hotOrderData: {
         type: Array
      }
    }
  }
</script>

<style scoped lang='less'>
.order-list{
  padding:0 1rem 0 1.5rem;
}
.order-list li{
  padding: 0.8rem 0;
  border-bottom: .1rem solid #f5f5fa;
}
  .flex{
    display: flex;
  }
  .flex-v{
    flex-direction: column;
  }
  .flex-item{
    flex: 1;
  }
  .order-list li img{
    width: 3.2rem;
    height: 3.2rem;
  }
  .order-list li>a {
    line-height: 1;
    padding: .35rem .6rem;
  }
  .btn {
    margin: auto 0;
    display: inline-block;
    font-size: .8rem;
    padding: .3rem .55rem;
    color: #1381f1;
    border: .1rem solid currentColor;
    white-space: nowrap;
    border-radius: .25rem;
  }
  .r3 {
    border-radius: .15rem;
  }
  .r5 {
    border-radius: .25rem;
}
.tags-coupon {
    color: #79bcf7;
    border-radius: .1rem;
    font-size: .4rem;
    margin-left: .25rem;
    padding: 0 .2rem;
    white-space: nowrap;
    position: relative;
    top: -.1rem;
    border: .1rem solid currentColor;
  }
.tags-new{
  color: #f0a49f;
   border-radius: .1rem;
    font-size: .4rem;
    margin-left: .2rem;
    padding: 0 .2rem;
    white-space: nowrap;
    position: relative;
    top: -.1rem;
    border: .1rem solid currentColor;
}
p.title{
  font-size: 14px;
  margin-top: 0.5rem;
}
p{
  font-size: 12px;
  text-align: left;
  padding: 0;
  margin: 0.2rem 0.8rem;
}
.order-list li:last-child{
  margin-bottom: 2.5rem;
}
</style>
