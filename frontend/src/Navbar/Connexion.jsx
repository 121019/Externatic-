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
    <div className="connexion_content">
      <div className="connexion_content_img">
        <img
          src="https://images.unsplash.com/photo-1536412597336-ade7b523ecfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
          alt="espace acceuil externatic"
        />
      </div>
      <div className="connexion_content_form">
        <form
          className="connexion_form"
          onSubmit={(event) => {
            event.preventDefault();

            console.error("Submitting login form...");

            fetch(
              `${
                import.meta.env.VITE_BACKEND_URL ??
                "http://localhost:5080/login"
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
          <button className="connexion_submitButton" type="submit">
            Go
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
