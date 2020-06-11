// 顶部导航
import React from "react";
import {Link} from "@reach/router";
import styles from './index.less'
export default props => (
    <div className={styles.header}>
        <Link to="home">首页</Link>
        <Link to="home2">预警</Link>
        <Link to="dashboard">统计</Link>
        <Link to="set">设置</Link>
    </div>
);