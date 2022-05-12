<template>
  <div :class="{ 'has-logo': true }">
    <logo  :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :router="true"
        :unique-opened="false"
        :default-active="activeMenu"
        class="el-menu-vertical"
        :collapse="isCollapse"
        background-color="#545c64"
        text-color="#fff">
        <!--递归路由对象-->
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
} from 'vue'
import { useRoute } from 'vue-router'
import sidebarItem from '@/layout/components/Sidebar/sidebarItem.vue'
import logo from './Logo.vue'
import { useStore } from '../../../store/index'

export default defineComponent({
  components: {
    logo,
    sidebarItem
  },
  setup() {
    const route = useRoute()

    const store = useStore()
    const isCollapse = computed(() => !store.getters['appModule/getSidebarState'])
    const routes = computed(() => store.state.permissionModule.accessRoutes)
    const activeMenu = computed(() => store.getters['tabModule/getCurrentIndex'])

    onMounted(() => {
      const routePath = route.path

      store.commit('tabModule/SET_TAB',routePath)
    })

   
    return {
      activeMenu,
      isCollapse,
      routes
    }
  }
})
</script>
<style lang="scss" scoped>
.el-menu-vertical:not(.el-menu--collapse){
     width:200px;
     min-height: 400px;
     text-align: left;
}
 
</style>
