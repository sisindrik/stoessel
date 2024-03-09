import React, { useState } from 'react';

function App14() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const UN = (event) => {
    setUsername(event.target.value);
  };

  const UP = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
   
    const EUsername = 'sisi';
    const EPassword = '0000'; 

    if (username === EUsername && password === EPassword) {
      setLoginStatus('Access Granted');
    } else {
      setLoginStatus('Access Denied');
    }
  };

  const loginStatusStyle = {
    color: loginStatus === 'Access Granted' ? 'green' : 'red',
  };

  return (
    <div className="App14">
      <h1>Login</h1>
      <div>
        <label For="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={UN  }
        />
      </div>
      <div>
        <label For="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={UP}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      <p style={loginStatusStyle}>{loginStatus}</p>
    </div>
  );
}

export default App14;
