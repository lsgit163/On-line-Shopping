import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/containers/layout'
import Details from "@/containers/details"

import GoLife from "@/containers/subpage/golife"
import Heigh from "@/containers/subpage/heigh"
import Logo from "@/containers/subpage/logo"
import OpenProduct from "@/containers/subpage/openproduct"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/details',
      name: 'Details',
      redirect:"/details/openproduct",
      component: Details,
      children:[
        {
          path:"golife",
          component:GoLife
        },
        {
          path:"logo",
          component:Logo
        },
        {
          path:"heigh",
          component:Heigh
        },
        {
          path:"openproduct",
          component:OpenProduct
        }
      ]
    }
  ]
})
