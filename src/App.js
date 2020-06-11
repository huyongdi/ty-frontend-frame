import React from 'react';
import styles from './App.less';
import {store} from '@store'
import {getPersistor} from '@rematch/persist'
import {PersistGate} from 'redux-persist/es/integration/react'
// import { Button } from 'antd'
// import { Input } from '@alifd/next';
import {Router, Link} from "@reach/router";
import Header from "./components/Header/";
import PageRouter from './components/PageRouter'
import {Provider} from 'react-redux'

const persistor = getPersistor()

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Header/>
                <PageRouter/>
            </PersistGate>
        </Provider>
    );
}

export default App;
