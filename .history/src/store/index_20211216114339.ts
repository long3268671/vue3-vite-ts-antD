import { createStore } from 'vuex'
interface State{
    count:number
}
const store = createStore({
    state ():State {
      return {
        count: 0
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })
