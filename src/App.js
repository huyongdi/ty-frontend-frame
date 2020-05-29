import React from 'react';
import './App.css';
import {store} from '@store'
import {getPersistor} from '@rematch/persist'
import {PersistGate} from 'redux-persist/es/integration/react'
const persistor = getPersistor()

function App() {
    return (
        <PersistGate persistor={persistor}>
            <div className="App">
                123
            </div>
        </PersistGate>
    );
}

export default App;
