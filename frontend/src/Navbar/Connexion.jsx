import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./connexion.css";

import { useAuth } from "../../contexts/AuthContext";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { setToken } = useAuth();
  const navigate = useNavigate();

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();

        console.error("Submitting login form...");

        fetch(
          `${
            import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5080/login"
          }/login`,
          {
            method: "post",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              email: emailRef.current.value,
              password: passwordRef.current.value,
            }),
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.error("Login response data:", data);

            setToken(data.token);
            console.error("Token set:", data.token);

            navigate("/");
            console.error("Navigating to home page...");
          });
      }}
    >
      <div>
        <label htmlFor="email">email</label>
        <input ref={emailRef} type="text" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          ref={passwordRef}
          type="password"
          id="password"
          name="password"
        />
      </div>
      <button type="submit">Go</button>
    </form>
  );
}

export default Login;
