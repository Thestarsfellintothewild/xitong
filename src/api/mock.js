import Mock from 'mockjs'
import homeApi from './mockSeverData/home'
import permission from './mockSeverData/permission'
//定义mock请求拦截
Mock.mock('/api/home/getData',homeApi.getStatisticalData)







Mock.mock(/api\/permission\/getMenu/,'post',permission.getMenu)