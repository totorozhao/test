
import Vue from 'vue'
import VueRouter from 'vue-router'
import RouteList from '@/views/route/RouteList.vue'
import RouteInfo from '@/views/route/RouteInfo.vue'
import Dict from '@/views/dict/Dict.vue'
import DictInfo from '@/views/dict/Info.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/route'
  },
  {
    path: '/route',
    name: 'Route',
    component: RouteList
  },
  {
    path: '/route/info',
    name: 'RouteInfo',
    component: RouteInfo
  },
  {
    path: '/route/infoname/:id',
    name: 'RouteInfoname',
    component: RouteInfo
  },
  {
    path: '/dict',
    name: 'Dict',
    component: Dict
  },
  {
    path: '/dict/info',
    name: 'DictInfo',
    component: DictInfo
  }
]

// router.beforeEach((to, from, next) => {
//   if (_.isEmpty(history.state.current)) {
//     _.assign(history.state, { current: from.fullPath });
//   }
//   next();
// });

export default routes
