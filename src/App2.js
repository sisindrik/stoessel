// import React from 'react'

// export default function App2(props) {
//     let Username = props.a;
//     let Password = props.b
//   return (
//     <div>App2</div>
//   )
// }
import React from 'react'
import Login from './Login'
import Home from './Home'

export default function App2 (props) {
    return props.user===""?(
        <div>
        <h2>Login Form</h2>
        <p>
            <input type='text' placeholder='Username'></input>
        </p>
        <p>
        <input type='password' placeholder='password'></input>
        </p>
        <button>Login</button>
        </div>

     ):(

        <div>Hello{props.user}</div>
     );

}
