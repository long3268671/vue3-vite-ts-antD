import { createStore } from 'vuex'
interface State{
    count:number
}
const store = createStore({
    state ():count {
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
