import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useUser } from "../contexts/UserContext";
import "./connexion.css";
import homeImg from "../assets/home_img.jpg";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const { setUser } = useUser();

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

  const handlechange = () => {
    navigate("/companylogin");
  };

  return (
    <div className="connexion_content">
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
                  setUser(data.user);
                  setToken(data.token);
                  console.error("Token set:", data.token);

                  navigate("/");
                  console.error("Navigating to home page...");
                });
            }}
          >
            <div id="div_input_email">
              <label htmlFor="email">Email</label>
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
              <button
                className="connexion_submitButton"
                type="submit"
                id="connexion_entreprise_button"
                onClick={handlechange}
              >
                Entreprise ?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
