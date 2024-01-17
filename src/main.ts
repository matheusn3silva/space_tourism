import { createApp } from 'vue'
import App from './App.vue'
import TitlePage from '@/components/TitlePage.vue'

const app = createApp(App)

app.component('TitlePage', TitlePage)
app.mount('#app')
