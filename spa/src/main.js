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
    request.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjNmM2FjZjVmZjIzMmYxMDMwMTQxYjgzYTEwNjEwYTE4MzE0ZGM3ZDI2ZWRjOTEzZGVmMzg1Y2MxZDIzZTMxY2NmM2M5ZjljZDhhOTA4MTcyIn0.eyJhdWQiOiIyIiwianRpIjoiM2YzYWNmNWZmMjMyZjEwMzAxNDFiODNhMTA2MTBhMTgzMTRkYzdkMjZlZGM5MTNkZWYzODVjYzFkMjNlMzFjY2YzYzlmOWNkOGE5MDgxNzIiLCJpYXQiOjE1MTg4NjQ2OTEsIm5iZiI6MTUxODg2NDY5MSwiZXhwIjoxNTE4ODY4MjkxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.xHuPxXEWbH0wqMCo1vxDBzwj_WWgeXOYVxSwl774giTuWliopsFyx6zpMYU701TNmfoM3urfEWahQXzkg6cIxH0D7cKoc8WyCwdjtWnrX6edyjXOw5kQdS3J-Y3wsmnrhm8kdvkUvJsyO0DmNOJooovGjJCn9hMGvNAIN0z27yDh68ET1yhU7lrjbaIBytXy7ZD-ulz0E3SW9KymB8u-LIexUJ_9xqOSA3tAWCiKOMnUT1hFLVwUK2lhQ1rvVE6NyoHbgWKIUWcsM6yYADJRnqMis-xK3EvqXU1nZc2DVhifN2-Gb4W05Si-HrZolmcBo3BnMRNYbjZiWbI3AQGk3kAMkVhIykcs8habM8L3ThW7Xg26RjlTdy5kYLD10pQS9vrlAGMAXuaZnKEXzvhSYjP-aMDctiEm3axK1BoBuhR2ApCuTAeKWFtJIrHGzwGtmzCwJ6C0RRSmpSAyA2X6lI7ttmBaifbsVYskVV03mJXOpaQp3aQQ4vsyXzRkvW3R0eoj-K1xOxrtcTF63tq6Z8-PPgY7ltIBAevK6D4JO2--r-bBj8Lj5MZA2ZYv9x84ClTDeQLLvpf9SycK8Zdo8uFbm7yjj9uVw067w_6InjtdlCyWgFCFvI74S0BTfkj1sSToW4gVVb_d7EgJVuZUSoXU9-GG03lQOpb7Hn0JC_c')
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
