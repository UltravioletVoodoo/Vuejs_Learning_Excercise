import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import './index.css'

const store = createStore({
    state: {
        firstSection: {
            upvoted: false,
            num: 3
        },
        secondSection: {
            upvoted: false,
            num: 3
        },
        thirdSection: {
            upvoted: false,
            num: 3
        }
    },
    mutations: {
      toggle_firstSection (state) {
        state.firstSection.upvoted = !state.firstSection.upvoted;
      },
      increment_firstSection (state) {
          state.firstSection.num++;
      },
      toggle_secondSection (state) {
        state.secondSection.upvoted = !state.secondSection.upvoted;
      },
      increment_secondSection (state) {
          state.secondSection.num++;
      },
      toggle_thirdSection (state) {
        state.thirdSection.upvoted = !state.thirdSection.upvoted;
      },
      increment_thirdSection (state) {
          state.thirdSection.num++;
      }
    }
  });

const app = createApp(App);
app.use(store);
app.mount('#app');
