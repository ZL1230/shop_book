import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//引入vant的样式
import 'vant/lib/index.css';
import { Swipe, SwipeItem,Lazyload,Badge} from 'vant';
const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(Swipe).use(SwipeItem).use(Lazyload,{
    //使用一个默认加载的图片
    loading:require('./assets/images/default.png')
}).use(Badge)
