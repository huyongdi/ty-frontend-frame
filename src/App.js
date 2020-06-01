import React from 'react';
import styles from './App.less';
import {store} from '@store'
import {getPersistor} from '@rematch/persist'
import { Button } from 'antd'
import { Input } from '@alifd/next';

import {PersistGate} from 'redux-persist/es/integration/react'
const persistor = getPersistor()

function App() {
    return (
        <PersistGate persistor={persistor}>
            <div className={styles.abc}>
                <Button type="primary">123</Button>
                <Input state="success"
                       size="small"
                       value="success"
                       aria-live="assertive"
                       aria-label="success"/><br/><br/>
            </div>
        </PersistGate>
    );
}

export default App;
