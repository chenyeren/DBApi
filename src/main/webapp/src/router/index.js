import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import donate from '../components/about/donate'
import json from '../components/tool/json'
import time from '../components/tool/time'

import datasource from '../components/datasource/datasource'
import api from '../components/api/api'
import apiAdd from '../components/api/add'

Vue.use(VueRouter)

const routes = [
    {
        path: '/', name: 'Home', component: Home,
        children: [
            {path: '/about/donate', name: 'donate', component: donate},
            {path: '/tool/json', name: 'json', component: json},
            {path: '/tool/time', name: 'time', component: time},

            {path: '/datasource', name: 'datasource', component: datasource},
            {path: '/api', name: 'api', component: api},
            {path: '/api/add', name: 'apiAdd', component: apiAdd}
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
