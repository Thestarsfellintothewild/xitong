<template>
  <div>
    <el-container>
  <el-aside width="auto"><caidan/></el-aside>
  <el-container>
    <el-header>
      <comheader/>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
import caidan from '../components/caidan.vue'
import comheader from '../components/header.vue'
export default {
  components:{
    caidan,
    comheader
  }
}
</script>

<style scoped>
.el-header{
  padding: 0;
}
</style>