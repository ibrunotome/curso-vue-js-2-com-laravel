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
    request.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg5NWQ2ZDllZGEzOGE2Njk2YjIxMTM3YTU4MjViNGE4MzQwY2MwOWJjZjM0OGY0YjA4OWQ2MGFjMTc2ZTRlZGU5NWNlZDM1M2M0NTkwMzQ0In0.eyJhdWQiOiIyIiwianRpIjoiODk1ZDZkOWVkYTM4YTY2OTZiMjExMzdhNTgyNWI0YTgzNDBjYzA5YmNmMzQ4ZjRiMDg5ZDYwYWMxNzZlNGVkZTk1Y2VkMzUzYzQ1OTAzNDQiLCJpYXQiOjE1MTkzMTMxNDUsIm5iZiI6MTUxOTMxMzE0NSwiZXhwIjoxNTE5MzE2NzQ1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.fmNsdkhnfFedQ5iuoU-n5vgusSECb6kwOKSzQ2u7PbES8O4pWm_e1CCSVLFTAE4uJhjkkLZ9ij2USoMIHV-0ZNG92FH0PUHEaO2P5VPCFYmcGFDXcOh-jDO8zQyWj-LAjdjyozcFZtgbdAYk_7LH7vHlgwvEZzK57dcffVXA7gUKdCZAf4MmyMY-CfUv497Ew_E_K7rJpHPvQcwq67S1fnA5CVOUz75C_2ShM5rgGSm1qPri5Bbg-CFUTMrZdgkzIg5_tzkN7fViuWmvOCLr4I9la7m7QJK0dATUrU3rJ_RItUwAf2QLc1nfXTdnPCQd5HZXRfzvX7PqMYbEy3aovSKkqH5y5DzTaocKfefGIl26q7kE8bZnczN--OFHaVP7ZVZt3T8w8XTvdHaIn4FQQdvXej2N02SCZy6h_yNGnTRu0VjZ1b8Ez0cVG9nq-6g2gM-Bwkin-zSTmr7der5qEQH1sPitWdKkqFC1GFnXmuUVhB8X6WnzjFJW37avQY3yIZTuOy2g32hZ4hQmdh2AHp5cHgVQ2lONuIhjT4_qWV314xNxABZKMx-qcpzc8nK_JI8t2awr2uhUblZJ4hyLUdJPpjy8-SHVc6KuuLtVh3CHZmUwIqRR9GUQUjlREnnSYBExLMv9CxKCYnrcBjcn2Z7NrgDPjo5DCuHr8HuH85Y')
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
