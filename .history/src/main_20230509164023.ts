import { axios } from 'axios';
/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-05-06 12:00:11
 * @LastEditors: error: git config user.name & please set dead value or install git
 * @LastEditTime: 2023-05-09 16:40:23
 * @Description: file content
 */
import './assets/main.css'

import { createApp, Vue } from 'vue'
import { createPinia } from 'pinia'
import { axios } from 'axios'
import { vueAxios } from 'vue-axios'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
Vue.use(axios,vueAxios)

app.mount('#app')
