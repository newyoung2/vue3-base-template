<!--
 * @Author: GeekQiaQia
 * @Date: 2022-02-21 13:45:30
 * @LastEditTime: 2022-02-21 15:24:34
 * @LastEditors: GeekQiaQia
 * @Description: 
 * @FilePath: /test-vue3/src/layout/index.vue
-->
<template>
  <div :class="classObj" class="app-wrapper">
 
    <Sidebar class="sidebar-container" />
    <div class="main-container">
        <div :class="{ 'fixed-header': fixedHeader, 'hide-header': hideHeader }">
        <navbar />
       </div>
      <AppMain />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, toRefs, ref, watchEffect } from 'vue'
import { useStore } from '../store/index'
import Sidebar from './components/Sidebar/index.vue'
import AppMain from './components/AppMain.vue'
import Navbar from './components/Navbar.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    Sidebar,
    AppMain,
    Navbar
  },
  setup() {
    const store = useStore()
    const opened = computed(() => store.getters['appModule/getSidebarState'])
    const hideHeader = computed(() => store.getters['settingsModule/getHideHeaderState'])
    const fixedHeader = computed(() => store.getters['settingsModule/getFixedHeaderState'])
    const withoutAnimation = computed(() => store.getters['appModule/getSidebarAnimation'])
    const device = computed(() => store.getters['appModule/getDeviceState'])
    const classObj = computed(() => ({
      hideSidebar: !opened.value,
      openSidebar: opened.value,
      withoutAnimation: withoutAnimation.value,
      mobile: device.value === 'mobile'
    }))

    /**
     * @description 监听device && opend
     * */
    watchEffect(() => {
      if (device.value === 'mobile') {
        store.dispatch('appModule/closeSideBar', { withoutAnimation: false })
      }
    })

    return {
      hideHeader,
      fixedHeader,
      classObj
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
@import '@/styles/variables.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: scroll;
}

</style>
