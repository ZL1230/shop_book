import request from "network/request";
// export default function  getHomeAllData(){
//   return  request({
//         url:'/api/index',
//         //这俩参数不需要可以不写
//         // methods:'get',
//         // paramg:{
//         //
//         // }
//     })
// }
export  const getHomeAllData=(params)=>{
    return  request({
        url:'/api/index',
        // methods:'get',
        // params:{
        //
        // }
    })
}
export const getHomeGoods=(type='sales',page=1)=>{
    return request({
        url:'/api/index?'+type+'=1&page='+page
    })
}