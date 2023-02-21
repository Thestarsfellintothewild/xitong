import axios from 'axios'


//通用请求地址前缀
const http = axios.create({
    baseURL: '/api',
    timeout: 10000,//超时时间
})

//添加请求拦截器
http.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    //对请求错误做些什么
    return Promise.reject(error);
  });

//添加响应拦截器
http.interceptors.response.use(function (response) {
    //对响应数据做点什么
    return response;
  }, function (error) {
    //对响应错误做点什么
    return Promise.reject(error);
  });



export default http