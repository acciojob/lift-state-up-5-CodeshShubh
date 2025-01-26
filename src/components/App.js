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
      {/* Conditionally render content based on login status */}
      {isLoggedIn ? (
        <h2>You are logged in!</h2>
      ) : (
        <LoginForm onLogin={handleLogin} /> // Pass handleLogin to child as prop
      )}
    </div>
  );
};

export default App;
