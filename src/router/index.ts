import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import layout from '../layout/index.vue'
// 静态路由
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: layout,
    // redirect: '/home',
    meta: {
      title: {
        '/zh-CN': '首页',
        '/en-US': 'Home Page'
      },
      icon: 'ic ic-homepage-fill'
    },
    children: [
      // {
      //   path: '/home',
      //   name: 'home',
      //   component: () => import(/* webpackChunkName: "home" */ '@/views/Home/home.vue'),
      //   meta: {
      //     title: {
      //       '/zh-CN': '首页',
      //       '/en-US': 'Home Page'
      //     },
      //     icon: 'ic ic-homepage-fill'
      //   }
      // }
    ]
  },
  {
    path: '/login',
    name: '登录',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login/index.vue'),
    meta: {
      title: {
        '/zh-CN': '登录',
        '/en-US': 'Login'
      },
      hidden: true,
      hiddenTab: true
    }
  },
  {
    path: '/noFound',
    name: 'NoFound',
    component: () => import(/* webpackChunkName: "noFound" */ '@/views/noFound.vue'),
    meta: {
      title: {
        '/zh-CN': '404',
        '/en-US': '404'
      },
      hidden: true,
      hiddenTab: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import(/* webpackChunkName: "noFound" */ '@/views/noFound.vue'),
    meta: {
      title: {
        '/zh-CN': '未找到',
        '/en-US': 'NOT FOUND'
      },
      hidden: true,
      hiddenTab: true
    }
  }
]

// 异步路由
// 异步路由
export const asyncRoutes: Array<RouteRecordRaw> = [
  // {
  //   path: '/guide',
  //   component: layout,
  //   redirect: '/guide/guide',
  //   meta: {
  //     title: {
  //       '/zh-CN': '引导页',
  //       '/en-US': 'Guide Page'
  //     },
  //     icon: 'ic ic-coordinates-fill'
  //   },
  //   children: [
  //     {
  //       path: '/guide/guide',
  //       name: 'guide',
  //       component: () => import('@/views/Guide/index.vue'),
  //       meta: {
  //         title: {
  //           '/zh-CN': '引导',
  //           '/en-US': 'Guide'
  //         },
  //         icon: 'ic ic-coordinates-fill'
  //       }
  //     }
  //   ]
  // },
 
]


const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  scrollBehavior: () => ({
    top: 0
  }),
  routes: constantRoutes
})
router.beforeEach((to, from, next) => {
  console.log(sessionStorage.getItem('auth'))
  if (sessionStorage.getItem('auth')) {
    next()
  } else if (to.path === '/login') {
    console.log('/login')
    next()
  } else {
    console.log('unauthed into login')
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }
})

export default router
