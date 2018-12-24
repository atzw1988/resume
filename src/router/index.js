import Home from '../components/Home'
import Menu from '../components/Menu'
import Admin from '../components/Admin'
import About from '../components/about/About'
import Login from '../components/Login'
import Register from '../components/Register'

//二级路由
import Contact from '../components/about/Contact'
import Delivery from '../components/about/Delivery'
import History from '../components/about/History'
import OrderingGuide from '../components/about/OrderingGuide'

//三极路由
import Phone from '../components/about/contact/Phone'
import PersonName from '../components/about/contact/PersonName'



export const routes = [
    {path:'/',components:{
      default:Home,
      'orderingGuide':OrderingGuide,
      'delivery':Delivery,
      // 'history':History
    }},
    {path:'/menu',name:'menuLink',component:Menu},
    {path:'/admin',component:Admin,
    // beforeEnter:(to, from, next) =>{
    //   //路由独享守卫
    //   // alert("非登陆状态，不能访问此页面！");
    //   // next(false);
    //   // if (to.path == '/login' || to.path == '/register') {
    //   //   next();
    //   // } else {
    //   //   alert("还没有登录，请先登录！");
    //   //   next('/login')
    //   // }
    // }
    },
    {path:'/about',redirect: '/about/contact',component:About,children:[
      {path:'/about/contact',name:'contactLink',redirect: '/personname',component:Contact,children:[
        {path:'/phone',name:"phoneNumber",component:Phone},
        {path:'/personname',name:"personName",component:PersonName},
      ]},
      {path:'/history',name:'historyLink',component:History},
      {path:'/delivery',name:'deliveryLink',component:Delivery},
      {path:'/orderingGuide',name:'orderingGuideLink',component:OrderingGuide}
    ]},
    {path:'/login',component:Login},
    {path:'/register',component:Register},
    {path:'*',redirect: '/'}
  ]