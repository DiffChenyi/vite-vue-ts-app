import { createStore } from 'vuex'
import { State } from '@/interface/state'

const store = createStore<State>({
    state() {
        return {
            count: 0
        }
    },
    getters: {
        getCount(state) {
            return state.count;
        }
    },
    mutations: {
        setCount(state, payload) {
            state.count += payload;
        }
    },
    actions: {
        setCountAsync({ commit }, payload) {// 第一个参数为实例上下文对象：context.commit 即 store.commit
            commit('setCount', payload);
        }
    }
})

export default store;