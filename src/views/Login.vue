<template>
    <div>
        <el-form ref="form" label-width="70px" class="login-container" :model="form" :rules="rules" :inline="true">
            <h3 class="login-title">系统登陆</h3>
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="form.password" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="submit" type="primary" style="margin-left:105px;margin-top:10px;">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import Mock from 'mockjs'
import cookie from 'js-cookie'
import { getMenu } from '../api'
export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    {
                        required: true, trigger: 'blur', message: '请输入用户名'
                    }
                ],
                password: [
                    {
                        required: true, trigger: 'blur', message: '请输入密码'
                    }
                ]
            }
        }
    },
    methods: {
        //登录
        submit() {
            localStorage.setItem('token', 'bearer xxxx')
            //   cookie.set('token',token)
            this.$refs.form.validate((valid) => {
                if (valid) {
                    getMenu(this.form).then(({ data }) => {
                        console.log(data);
                        if (data.code === 20000) {
                            cookie.set('token', data.data.token)
                            this.$router.push('/home')
                        } else {
                            this.$message.error(data.data.message)
                        }
                    })
                }
            })
            //   this.$router.push('/home')
        }
    }
}
</script>

<style lang="less" scoped>
.login-container {
    width: 350px;
    margin: 180px auto;
    border: 1px solid #eaeaea;
    padding: 35px 35px 15px 35px;
    background-color: #fff;
    box-shadow: 0 0 25px #cac6c6;
    border-radius: 15px;
    box-sizing: border-box;

    .login-title {
        text-align: center;
        margin-bottom: 40px;
        color: #505458;
    }

    .el-input {
        width: 198px;
    }

}
</style>