import {init} from '@rematch/core'
import * as models from './models'
import createRematchPersist from '@rematch/persist'

const persistPlugin = createRematchPersist({
    key: 'af',
    keyPrefix: 'ty-',
    // whitelist: ['test2','test'],
    blacklist: ['abc'],
    throttle: 1
})
const store = init({
    models,
    plugins: [persistPlugin]
})

if (module.hot) {
    console.log(555);
    module.hot.accept('./models', () => {
        store.replaceReducer(require('./models/index'))
    })
}

const {dispatch, getState} = store
export {
    store,
    dispatch,
    getState
}
