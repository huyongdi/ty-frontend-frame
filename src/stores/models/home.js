import produce from "immer"

const initState = {
    p: {
        x: 0
    }
}
export default {
    state: initState,
    reducers: {
        updateKey(state, data) {
            // let nextState  = produce(state, draft => {
            //     console.log(state);
            //     console.log(draft);
            //     draft.p.x = 1;
            // })
            // console.log(nextState);
            console.log(2222222);
            return {status:1}
        }
    },
    effects: {
        // handle state changes with impure functions.
        // use async/await for async actions
        async incrementAsync(payload, rootState) {
            await new Promise(resolve => setTimeout(resolve, 1000))
            this.increment(payload)
        }
    }
}
