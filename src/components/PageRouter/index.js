// 顶部导航
import React from "react";
import {Router} from "@reach/router";
// import Home from '@pages/Home/'
import { Home, Home2 } from '@pages/'

// import styles from './index.less'
export default props => (
    <Router>
        <Home path="/home"/>
        <Home2 path="/home2"/>
    </Router>
);