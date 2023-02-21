<template>
  <div class="header-container">
    <div class="l-conten">
        <el-button @click="handleMenu" icon="el-icon-menu" size="mini"></el-button>
        <span class="text">首页</span>
    </div>
    
    <div class="r-conten">
        <el-dropdown @command="handleClick">
            <el-col :span="12">
      <div class="demo-basic--circle">
        <div class="block"><el-avatar :size="40" :src="circleUrl">
        <img src="../assets/img/微信图片_20221028150201.jpg" alt="">
      </el-avatar></div>
        <div class="block" v-for="size in sizeList" :key="size">
          <el-avatar :size="size" :src="circleUrl"></el-avatar>
        </div>
      </div>
    </el-col>  
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>个人中心</el-dropdown-item>
    <el-dropdown-item command="tuichu">退出</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
    </div>
  </div>
</template>

<script>

import Mock from 'mockjs'
import cookie from 'js-cookie'

export default {
    data() {
        return {
          circleUrl:'',
          sizeList:'',
        }
    },
    methods:{
            handleMenu(){
               return this.$store.commit('collapseMenu')
            },
            handleClick(command){
              if(command==='tuichu'){
                cookie.remove('token')
                this.$router.push('/login')
              }
             
            }
        },
}
</script>

<style lang="less" scoped>
.header-container{
    padding: 0 20px;
    background-color: #333;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text{
        color: #fff;
        font-size: 14px;
        margin-left: 15px;
    }
}
</style>