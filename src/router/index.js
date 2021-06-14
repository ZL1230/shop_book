
import { createRouter, createWebHistory } from 'vue-router'
const Home=()=>import('views/home/Home')
const Category=()=>import('views/category/Category')
const ShopCart=()=>import('views/shopcart/ShopCart')
const Detail=()=>import('views/detail/Detail')
const Profile=()=>import('views/profile/Profile')
const routes=[
    {
        path:'',
        name:'DefaultHome',
        component:Home,
        meta:{
            title:'图书兄弟'
        }
    },
    {
      path:'/home',
        name:'Home',
      component:Home,
        meta:{
            title:'图书兄弟'
        }
    },
    {
        path:'/category',
        name:'Category',
        component:Category,
        meta:{
            title:'商品分类'
        }
    },
    {
        path:'/shopcart',
        name:'ShopCart',
        component:ShopCart,
        meta:{
            title:'购物车'
        }
    },
    {
        path:'/profile',
        name:'Profile',
        component:Profile,
        meta:{
            title:'个人中心'
        }
    },
    {
        path:'/detail',
        name:'Detail',
        component:Detail,
        meta:{
            title:'商品详情'
        }
    }
]
const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})
router.beforeEach((to,from,next)=>{
    //如果没有登录，在这里到login
    next()
    //to是将要去的路由 from 是当前的路由
    document.title=to.meta.title
})
export default  router