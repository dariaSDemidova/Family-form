import { createStore } from 'vuex';

export default createStore({
    state: {
        userData: {
        name: '',
        age: '',
        children: [],
        },
    },
    mutations: {
        setUserData(state, data) {
        state.userData = data;
        },
    },
    actions: {
        updateUserData({ commit }, data) {
        commit('setUserData', data);
        },
    },
    getters: {
        userData: (state) => state.userData,
    },
});
