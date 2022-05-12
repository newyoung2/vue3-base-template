<!--
 * @Author: GeekQiaQia
 * @Date: 2022-02-18 16:13:43
 * @LastEditTime: 2022-04-28 11:14:35
 * @LastEditors: GeekQiaQia
 * @Description:
 * @FilePath: /github/vue3.0-template-admin/src/App.vue
-->
<template>
   <el-config-provider :locale="locale">
    <div id="app">
      <router-view></router-view>
    </div>
   </el-config-provider>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, reactive } from 'vue'
import zhLocale from 'element-plus/lib/locale/lang/zh-cn'
export default {
   setup(){
      const locale = ref(zhLocale)
      return {
        locale
      }
   }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
