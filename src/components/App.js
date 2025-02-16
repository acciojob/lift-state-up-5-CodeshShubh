import React, { useState } from "react";
import LoginForm from "./LoginForm"; // Import the child component

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true); // Update state when user clicks the login button
  };

  return (
    <div>
      <h1>Parent Component</h1>
      {/* Conditionally render content based on login status */}
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <LoginForm onLogin={handleLogin} /> // Pass handleLogin to child as prop
      )}
    </div>
  );
};

export default App;
