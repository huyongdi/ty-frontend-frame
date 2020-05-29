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
const {dispatch, getState} = store
export {
    store,
    dispatch,
    getState
}