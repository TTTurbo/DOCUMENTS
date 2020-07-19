/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "E:\\BLOGNNNNN\\DOCUMENTS\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-4ea1e318",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-4ea1e318").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-0b15fbd8",
    path: "/computer/data-write.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-0b15fbd8").then(next)
    },
  },
  {
    name: "v-7fe20bb0",
    path: "/computer/how-networks-work.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-7fe20bb0").then(next)
    },
  },
  {
    name: "v-85028392",
    path: "/computer/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-85028392").then(next)
    },
  },
  {
    path: "/computer/index.html",
    redirect: "/computer/"
  },
  {
    name: "v-cd6e9620",
    path: "/guide/about-me.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-cd6e9620").then(next)
    },
  },
  {
    name: "v-57c4d407",
    path: "/guide/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-57c4d407").then(next)
    },
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-256ecee2",
    path: "/guide/docs-style.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-256ecee2").then(next)
    },
  },
  {
    path: '*',
    component: GlobalLayout
  }
]