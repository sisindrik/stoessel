import React, { useState } from 'react';

export default function Login() {
  const [loginCredentials, setLoginCredentials] = useState({ username: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginAttempted, setLoginAttempted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // Added for error handling

  // Simulate backend API for demonstration (replace with actual API call)
  const simulatedCredentials = {
    username: 'realUsername',
    password: 'realPassword',
  };

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginAttempted(true); // Set flag on submission

    try {
      const response = await simulateLogin(loginCredentials); // Simulate API call
      if (response.status === 200) { // Check for successful login response
        setIsLoggedIn(true);
        setErrorMessage(''); // Clear any previous errors
      } else {
        setErrorMessage('Invalid username or password'); // Set error message
      }
    } catch (error) {
      console.error('Login error:', error); // Log errors for debugging
      setErrorMessage('An unexpected error occurred. Please try again later.');
    }
  };

  const simulateLogin = async (credentials) => {
    // Replace with actual backend API call
    // This function should handle authentication logic and return a Promise
    // with appropriate status code and potentially user data

    // Example using simulated credentials:
    return new Promise((resolve) => {
      setTimeout(() => {
        if (credentials.username === simulatedCredentials.username && credentials.password === simulatedCredentials.password) {
          resolve({ status: 200 }); // Simulate successful login
        } else {
          resolve({ status: 401 }); // Simulate failed login (unauthorized)
        }
      }, 1000); // Simulate network delay (optional)
    });
  };

  return (
    <div>
      {!isLoggedIn && (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <p>
              <input
                type="text"
                name="username"
                value={loginCredentials.username}
                onChange={handleLoginInputChange}
                placeholder="Enter Username"
              />
            </p>
            <p>
              <input
                type="password"
                name="password"
                value={loginCredentials.password}
                onChange={handleLoginInputChange}
                placeholder="Enter Password"
              />
            </p>
            <p>
              <button type="submit">Login</button>
            </p>
            {loginAttempted && errorMessage && (
              <div style={{ color: 'red' }}>{errorMessage}</div>
            )}
          </form>
        </div>
      )}
      {isLoggedIn && (
        <div style={{ color: 'green' }}>Access Granted</div>
      )}
    </div>
  );
}
