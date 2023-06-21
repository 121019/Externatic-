import React, { useState } from "react";
import bcrypt from "bcryptjs";
import "./connextion.css";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Perform login logic here
    try {
      const response = await axios.post("/api/login", {
        username,
        password: hashedPassword,
      });

      if (response.data.success) {
        // Check if email is verified
        if (response.data.isEmailVerified) {
          console.error("Login successful");
          // Redirect or perform any other actions for successful login
        } else {
          console.error("Email not verified");
          // Handle email verification
        }
      } else {
        console.error("Invalid username or password");
        // Handle invalid credentials
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle error during login
    }
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
