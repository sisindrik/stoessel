import React, { useContext } from 'react';
import { UserContext } from './App13a';

export default function Login1() {
  const { setFlag } = useContext(UserContext);

  const handleLogin = () => {
    setFlag(1); 
  };

  const handleCreateAccount = () => {
    setFlag(0); 
  };

  return (
    <div>
      <h1>Login1</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleCreateAccount}>Create Account</button>
    </div>
  );
}
