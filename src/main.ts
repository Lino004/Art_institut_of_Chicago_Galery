import './assets/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import AppButton from '@/components/AppButton.vue';
import AppPagination from '@/components/AppPagination.vue';
import AppImg from '@/components/AppImg.vue';
import App from './App.vue';
import router from './router';
import loading from './plugins/loading';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(loading);

app.component('app-button', AppButton);
app.component('app-pagination', AppPagination);
app.component('app-img', AppImg);

app.mount('#app');
