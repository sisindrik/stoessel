// import { useState, createContext, useContext } from "react";
// import Childa from "./Childa";
// export const UserContext = createContext();
// export default function App13a() {
//   const [user, setUser] = useState("John");
//   const[flag,Setflag]=useState(0)
//   return (
//     <>
//       <UserContext.Provider value={{ user, setUser }}>
//         <h2>Hello {user} from App13a component</h2>
//         <Childa />
//       </UserContext.Provider>
//     </>
//   );
// }

import React, { useState } from 'react';
import Login1 from './Login1';
import Register from './Register';
import Home1 from './Home1';

export const UserContext = React.createContext();

export default function App13a() {
  const [flag, setFlag] = useState(0);

  return (
    <UserContext.Provider value={{ flag, setFlag }}>
      {flag === 0 && <Login1 />}
      {flag === 1 && <Home1 />}
    </UserContext.Provider>
  );
}
