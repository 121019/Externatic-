import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../Navbar/connexion.css";
import homeImg from "../../assets/home_img_company.jpg";

import { useUser } from "../../contexts/UserContext";

function Login() {
  const nameRef = useRef();
  const passwordRef = useRef();

  const { setUser } = useUser();
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

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
      }/company/login`,
      {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          name: nameRef.current.value,
          password: passwordRef.current.value,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setUser(data.user);
        navigate("/companypage");
      });
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
          <form className="connexion_form" onSubmit={handleSubmit}>
            <div id="div_input_email">
              <label htmlFor="email">Nom de l'entreprise</label>
              <input ref={nameRef} type="text" id="email" name="email" />
            </div>
            <div id="div_input_email">
              <label htmlFor="password">Mot de passe</label>
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
