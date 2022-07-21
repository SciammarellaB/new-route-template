import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { RouteService } from '@/core/service';

Vue.use(VueRouter)

let coisa: any[] = [
  { path: "/", redirect: "/home" },
];

new RouteService().routes.forEach(group => {
  if(group.child){
    group.child.forEach(child => {
      if(child.use){
        coisa.push({
          path: `/${group.route}/${child.route}`,
          name: child.route,
          component: child.component
        })
      }
    });
  }
  else{
    if(group.use){
      coisa.push({
        path: `/${group.route}`,
        name: group.route,
        component: group.component
      })
    }
  }
});

const routes: Array<RouteConfig> = coisa

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
