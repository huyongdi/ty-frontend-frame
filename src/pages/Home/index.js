import React, {useState, useEffect} from 'react';
import {store} from '@store'
import {connect, useDispatch, useSelector} from 'react-redux'

// @connect(
//     state => ({
//         home: state.home,
//     }),
//     ({home}) => ({
//         updateKey: home.updateKey,
//     })
// )
// export default class Home extends React.Component {
//     componentDidMount () {
//         console.log(222);
//     }
//     render() {
//         console.log(getState())
//         console.log(this.props.home)
//         const {status} = this.props.home
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <span>{status}</span>
//                 <button onClick={() => this.props.updateKey({status: '123'})}>
//
//                 Click store
//                 </button>
//             </div>
//         );
//     }
// }

export default function (props) {
// 声明一个新的叫做 “count” 的 state 变量
    const [count, setCount] = useState(0);
    const p = useSelector(state => state.home.p);
    const status = useSelector(state => state.home.status);
    const dispatch = useDispatch();
    console.log(status)
    console.log(p)
    return (
        <div>
            {status}
            {p && p.x}
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <button onClick={() => dispatch.home.updateKey({status: '123'})}>
                Click store
            </button>
        </div>
    );
}
