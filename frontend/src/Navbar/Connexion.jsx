import React, { useState } from "react";
import "./connextion.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    // Perform login logic here
    try {
      const response = await fetch("http://localhost:5080/candidat/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        if (data.success) {
          // Check if email is verified
          if (data.isEmailVerified) {
            console.warn("Login successful");
            // Redirect or perform any other actions for successful login
          } else {
            console.warn("Email not verified");
            // Handle email verification
          }
        } else {
          console.warn("Invalid username or password");
          // Handle invalid credentials
        }
      } else {
        console.warn("HTTP error:", response.status);
        // Handle HTTP errors
      }
    } catch (error) {
      console.warn("Error during login:", error);
      // Handle error during login
    }
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email:</label>
        </div>
        <div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          />
        </div>
        <div>
          {" "}
          <label htmlFor="password">Password:</label>
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
