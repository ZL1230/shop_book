import axios from 'axios'
function request(config){
    const instance=axios.create({
        baseURL:'https://api.shop.eduwork.cn',
        timeout:3000
    })
    //1.请求拦截
    instance.interceptors.request.use(config=>{
        //如果接口需要认证才可以访问，在这里统一设置

        //直接放行
        return config
    },err=>{
        //一般错误不做处理
    })
    //2.响应拦截
    instance.interceptors.response.use(res=>{
        //直接放行（数据正确，不做处理）

        //如果数据格式包含data就返回res.data
        return res.data?res.data:res
    },err=>{
        //如果这里有需要授权才可以访问的接口，统一去登录 login授权

        //数据错误，就需要处理
        //显示错误信息
    })
    return instance(config)
}
export  default  request