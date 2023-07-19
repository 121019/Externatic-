import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Navbar/connexion.css";
import homeImg from "../assets/home_img_company.jpg";

import { useAuth } from "../contexts/AuthContext";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { setToken } = useAuth();
  const navigate = useNavigate();

  const homeImgRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      if (homeImgRef.current) {
        const screenElement = homeImgRef.current.parentElement.querySelector(
          ".connexion_content_form"
        );
        if (screenElement) {
          const screenRect = screenElement.getBoundingClientRect();
          homeImgRef.current.style.width = `${screenRect.width}px`;
          homeImgRef.current.style.height = `${screenRect.height}px`;
        }
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const backgroundStyle = {
    backgroundImage: `url(${homeImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="connexion_content company">
      <div
        className="connexion_content_img"
        ref={homeImgRef}
        style={backgroundStyle}
      >
        {/* {" "} Intentionally left empty {" "} */}
      </div>
      <div className="connexion_content_form">
        <div className="connexion_content_form_mainDiv">
          <form
            className="connexion_form"
            onSubmit={(event) => {
              event.preventDefault();

              fetch(
                `${
                  import.meta.env.VITE_BACKEND_URL ??
                  "http://localhost:5080/company/login"
                }/company/login`,
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
            <div id="div_input_email">
              <label htmlFor="email">Email Entreprise</label>
              <input ref={emailRef} type="text" id="email" name="email" />
            </div>
            <div id="div_input_email">
              <label htmlFor="password">Password</label>
              <input
                ref={passwordRef}
                type="password"
                id="password"
                name="password"
              />
              <button type="submit">*mot de passe oublié?</button>
            </div>
            <div className="connexion_button">
              <button className="connexion_submitButton" type="submit">
                Go
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
