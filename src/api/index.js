import http from '../utils/request'


//请求首页数据接口
export const getData = () =>{
    return http.get('/home/getData')
}
export const getMenu = (data) =>{
    return http.post('/permission/getMenu',data)
}