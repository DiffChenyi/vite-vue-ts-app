import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from './api/axios';
const app = createApp(App);
app.config.globalProperties.$axios = Axios;
app.use(router).use(store).mount('#app');
