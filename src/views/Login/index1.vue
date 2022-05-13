<template>
    <el-button @click="login">登录</el-button>
</template>

<script lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
   setup(){
       const router = useRouter()
       const route = useRoute()
       const store = useStore()

       const login  = ()=>{
           sessionStorage.setItem('auth','true')
           store.dispatch('permissionModule/getAllMenu')
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