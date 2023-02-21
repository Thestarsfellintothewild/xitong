import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/main.vue'
import home from '../views/首页.vue'
import mall from '../views/商品管理.vue'
import user from '../views/用户管理.vue'
import page1 from '../views/页面1.vue'
import page2 from '../views/页面2.vue'
import header from '../components/header.vue'
Vue.use(VueRouter)

const routes = [
  //主路由
  {
    path:'/',
    component:Main,
    redirect:'/home',//重定向
    children:[
      {
        name:'home1',
        path:'home', 
        component:home,
        meta:{title:'首页'}
      },//首页
      {
        name:'shangpin',
        path:'mall',
        component:mall,
        meta:{isAuth:true,title:'商品管理'}
      },//商品管理
      {
        path:'user',
         component:user,
         meta:{title:'用户管理'}
        },//用户管理
      {
        path:'page1',
         component:page1,
         meta:{title:'页面1'}
        },//页面1
      {
        path:'page2',
         component:page2,
         meta:{title:'页面2'}
        },//页面2
    ]
  },
  {
    path:'/login',
    name:'login',
    component:Login
  },
  {
    path:'/header',
    name:'header',
    component:header
  }
]

const router = new VueRouter({
  routes
})
// router.beforeEach((to,from,next)=>{
//   console.log(to,from);
//     if(to.meta.isAuth){
//       if(localStorage.getItem('name')==='shangpin'){
//         next()
//       }else{
//         alert('你不配看')
//       }
//     }else{
//       next()
//     }
// })
// router.afterEach((to,from)=>{
//   document.title=to.meta.title || '后台管理'
// })
export default router
