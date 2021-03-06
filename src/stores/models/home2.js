export default {
    state: 0, // initial state
    reducers: {
        // handle state changes with pure functions
        increment(state, payload) {
            console.log(payload);
            return state + payload
        }
    },
    effects: {
        // handle state changes with impure functions.
        // use async/await for async actions
        async incrementAsync(payload, rootState) {
            // store.dispatch.test.increment(1)
            await new Promise(resolve => setTimeout(resolve, 1000))
            this.increment(payload)
        }
    }
}