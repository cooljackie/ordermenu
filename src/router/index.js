import Vue from 'vue'
import Router from 'vue-router'
import orderIndex from '@/components/games/orderIndex'
import orderList2 from '@/components/games/orderList2'
import orderList25 from '@/components/games/orderList25'
import foodList from '@/components/games/foodList'
import user from '@/components/user/userIndex'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/order'
    },
     {
      path: '/order',
      name: 'orderIndex',
      redirect: '/order/orderList2',
      component: orderIndex,
      children:[
        {
          path: 'orderList2',
          name: 'orderList2',
          component: orderList2
        },
         {
          path: 'orderList25',
          name: 'orderList25',
          component: orderList25
        }
      ]
    },
    {
      path: '/user',
      name: user,
      component: user
    },
    {
      path: '/foodList/:id',
      name: foodList,
      component: foodList
    }
  ]
})
