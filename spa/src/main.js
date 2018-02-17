// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import {sync} from 'vuex-router-sync'

import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router'
import VuexStore from './vuex/store'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)

Vue.http.options.root = process.env.SERVER
Vue.http.interceptors.push((request, next) => {
    request.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg1MWJkMjc3N2JhYmQxODkzZGJlN2I2MWY2YmI2NjZkOWEzNjBiNDIxNTI0N2E0Njk3MjhkMGQ1NWVmZjJhODc0MWRiZDYxNGJhZjgxODBjIn0.eyJhdWQiOiIyIiwianRpIjoiODUxYmQyNzc3YmFiZDE4OTNkYmU3YjYxZjZiYjY2NmQ5YTM2MGI0MjE1MjQ3YTQ2OTcyOGQwZDU1ZWZmMmE4NzQxZGJkNjE0YmFmODE4MGMiLCJpYXQiOjE1MTg4NjA5MTIsIm5iZiI6MTUxODg2MDkxMiwiZXhwIjoxNTE4ODY0NTEyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.CVci0iJM7yGFG4AVVWYJYVf4l-dQV3WjF_yxqMWLTcM1a66bj0zJQcPTo9CCtga0LZr9YW2mtrb-xQzRhccCECYWy3SHGzlT9724bj1nvQBYX597ul7tkDuEuWTr9RA2XTZsYCaGz17CmDCHDUPPeAtpc8kGqqwktZPIWFkBu8Y0GvKaGBgHJVH6wRtEHA9tVJZ-aEXJ2PwKcYWiijM6Spr80bseSt4gBeknvqtulDGaq-gxUIKJSjMRnH7oP0pyca3hVcwefLi3G0xNYYzbMjD1uMVkXfsLnLfwLqbDTwIWVKpqvQFyweObLukTiBOvEBzZhMGFKk3iOI76AXJ00awup-9urzooJzbOpWReBVFnANV416TsXlJvs7NXr6USqZJk8eoBQBSo2xRCUQj9gHDj5Pob3XhGiSiWJQ3nQEkfWQrSQ-mMOQaTA24urX_77LhSjsvvfiw61yUWg9xGXQZAjkyCNTsgYhrlwmMIbIPnhHBF_C0RmDws_SC2KjjOsGhNcWiTACpvItCaqI8BX_MQT9IX0N2tDvLD1xyEoPSCse290DE2XwllZ1jj0PP3JiqvA-oqgVzmxXQz2io0P6McYVXOgIUC3G5iNJez9vsbqlvc37jK1QwDa2JDR87RASdwRSqQj1wDoMZNHTBqf7tzIb5lO_DP6oDcRdEO35c')
    next()
})

const store = new Vuex.Store(VuexStore)

const router = new VueRouter({
    routes
})

sync(store, router)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})
