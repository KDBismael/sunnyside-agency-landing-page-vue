import { createRouter,createWebHashHistory } from "vue-router"

import Home from './components/Home.vue'

const route=[
    {path:'/',name:'home', component:Home}
]


const router=createRouter({
    routes:route,
    history:createWebHashHistory()
})

export default router;