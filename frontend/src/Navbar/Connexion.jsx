import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { setToken } = useAuth();
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        fetch(
          `${
            import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
          }/candidat/login`,
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
            if (data.success) {
              setToken(data.token);
              navigate("/");
            } else {
              // Handle error here
              console.error(data.message);
            }
          })
          .catch((error) => {
            // Handle fetch error here
            console.error(error);
          });
      }}
    >
      <div>
        <label htmlFor="email">Email</label>
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
