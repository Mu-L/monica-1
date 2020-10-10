import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router'
import GoEnv from './views/GoEnv.vue'
import Instances from './views/Instances.vue'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: GoEnv },
        { path: "/instances", component: Instances }
    ]
})
import fastrx from "fastrx";
fastrx.rx.fetch = (input, opt) => fastrx.rx.fromPromise(fetch(input, opt));
const app = createApp(App)
app.use(router)
app.use(Antd)
app.mount('#app')