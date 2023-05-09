/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-05-06 12:00:11
 * @LastEditors: error: git config user.name & please set dead value or install git
 * @LastEditTime: 2023-05-09 16:57:14
 * @Description: file content
 */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// axios
import axios from 'axios'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// 注册axios
app.use(axios)

app.mount('#app')
