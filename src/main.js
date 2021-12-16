import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import './index.css'

const store = createStore({
    state: {
      upvoted: true
    },
    mutations: {
      toggle (state) {
        state.upvoted = !state.upvoted;
      }
    }
  });

const app = createApp(App);
app.use(store);
app.mount('#app');
