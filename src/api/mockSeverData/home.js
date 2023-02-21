import Mock from 'mockjs'

let List=[]
export default{
    getStatisticalData: () =>{
        for(let i=0;i<7;i++){
            List.push(
                Mock.mock({
                    oppo:Mock.Random.float(100,8000,0,0),
                    vivo:Mock.Random.float(100,8000,0,0),
                    华为:Mock.Random.float(100,8000,0,0),
                    小米:Mock.Random.float(100,8000,0,0),
                    魅族:Mock.Random.float(100,8000,0,0),
                })
            )
        }
        return{
            code:20000,
            data:{
                //饼图
                videoData:[
                    {
                        name:'oppo',
                        value:2999
                    },
                    {
                        name:'vivo',
                        value:2999
                    },
                    {
                        name:'华为',
                        value:9999
                    },
                    {
                        name:'小米',
                        value:2999
                    },
                    {
                        name:'魅族',
                        value:2999
                    }
                ],
                //柱状图
                userData:[
                    {
                       data:'周一' ,
                       new: 50,
                       active:262
                    },
                    {
                        data:'周二' ,
                        new:56,
                        active:236
                     },
                     {
                        data:'周三' ,
                        new: 45,
                        active:248
                     },
                     {
                        data:'周四' ,
                        new: 89 ,
                        active:226
                     },
                     {
                        data:'周五' ,
                        new: 66 ,
                        active:232
                     },
                ],
                //折线图
                orderData:{
                    data:['20221031','20221101','20221102','20221103','20221104',],
                    data:List
                },
                tableData:[
                    {
                        name:'oppo',
                        todayBuy:500,
                        monthBuy:3500,
                        totalBuy:22
                    },
                    {
                        name:'vivo',
                        todayBuy:500,
                        monthBuy:3500,
                        totalBuy:22000
                    },
                    {
                        name:'华为',
                        todayBuy:500,
                        monthBuy:3500,
                        totalBuy:22000
                    },
                    {
                        name:'小米',
                        todayBuy:50,
                        monthBuy:350,
                        totalBuy:2200
                    },
                    {
                        name:'魅族',
                        todayBuy:500,
                        monthBuy:350,
                        totalBuy:2200
                    },
                ]
            }
        }
    }
}