import Vue from 'vue'
import Router from 'vue-router'
import Classify from '@/components/classify/Classify.vue'
import AppLogin from '../components/mine/AppLogin.vue'
import AppMine from '../components/mine/AppMine.vue'
import AppPersonal from '../components/mine/AppPersonal.vue'
import AppRegister from '../components/mine/AppRegister.vue'
import AppPress from '../components/mine/AppPress.vue'
import AppCollect from '../components/mine/AppCollect.vue'

import AppList from '../components/list/AppList.vue'
import AppListFiltrate from '../components/list/AppListFiltrate.vue'

import AppDetailshead from '../components/details/app-detailshead'//详情集合
import AppDetails from '../components/details/app-details.vue' // 详情
import ImageText from '../components/details/imagetext/image-text.vue'//图片详情
import AppEvaluate from '../components/details/evaluate/app-evaluate.vue'
import AppShopping from '../components/shoppingCar/app-shopping.vue'//购物车
import AppMain from '@/components/main/AppMain'

import AppSearch from '@/components/main/AppSearch'
import AppPosition from '@/components/main/AppPosition'
import AppInvition from '@/components/main/AppInvition'


Vue.use(Router)

export default new Router({
  routes: [
    // {path:'',redirect:''},
    {path: '/classify',name: 'classify',component: Classify},
    {path:'/detailshead/:userId',name:'detailshead',component:AppDetailshead},
    {path:'/detail',name:'detail',component:AppDetails},
    {path:'/imagetext',name:'imagetext',component:ImageText},
    {path:'/appevaluate',name:'appevaluate',component:AppEvaluate},
    {path:'/appshopping',name:'appshopping',component:AppShopping},
    {path: '/list',name: 'list',component: AppList},
    {path: '/filtrate',name: 'filtrate',component: AppListFiltrate},
    {path: '/mine',component: AppMine,children:[
      {path:'/',redirect:to => {
        var storage = window.localStorage.date;
        if(storage){
          var storageObj = JSON.parse(storage);
          if(!storageObj[0].username){
            return {name:'login'}
          }else{
            return {name:'personal'}
          }
        }else{
          return {name:'login'}
        } 
      }},
      {path:'login',name:'login',component:AppLogin},
      {path:'personal',name:'personal',component:AppPersonal},
      {path: 'collect', name: 'collect', component: AppCollect},
      {path:'register',name:'register',component:AppRegister},
      {path:'press',name:'press',component:AppPress}
    ]},
    {
      path: '/',
      name: 'AppMain',
      component: AppMain
    },

    {path:'/AppSearch',
    name:'AppSearch',
    component:AppSearch
    },
    {
    	path:'/AppPosition',
    	name:'AppPosition',
    	component:AppPosition
    },
    {
      path:'/AppInvition',
      name:'AppInvition',
      component:AppInvition
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      console.log(savedPosition)
      return savedPosition
      console.log(1)
    } else {
      return { x: 0, y: 0 }
    }
  }
})
