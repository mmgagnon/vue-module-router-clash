export default {
	name: 'myComponentStore',
	namespaced: true,
	state: {
		counter: 0
	},
	mutations: {
		setCounter(state, counter) {
            state.counter = counter;
        }
	},
	actions: {
		increment({ state, commit }, delta) {
			commit('setCounter', state.counter + delta);
		}
	},
	getters: {
		counter: state => state.isLoading
	}
};
