import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import './index.css'

const store = createStore({
    state: {
      upvoted: true,
      num: 2
    },
    mutations: {
      toggle (state) {
        state.upvoted = !state.upvoted;
      },
      increment (state) {
          state.num++;
      }
    }
  });

const app = createApp(App);
app.use(store);
app.mount('#app');
