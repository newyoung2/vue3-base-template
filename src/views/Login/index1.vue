<template>
    <el-button @click="login">登录</el-button>
</template>

<script lang="ts">
import { useRouter, useRoute } from 'vue-router'
export default {
   setup(){
       const router = useRouter()
       const route = useRoute()

       const login  = ()=>{
           sessionStorage.setItem('auth','true')
           router.push('/')
       }
       return {
           login
       }

   }
}
</script>

<style>

</style>