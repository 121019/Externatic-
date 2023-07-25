import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import { useUser } from "../contexts/UserContext";

import "./JobSubmissionForm.css";

function JobSubmissionForm({ toastOptions }) {
  const JobTitleRef = useRef();
  const DescriptionRef = useRef();
  const LocationRef = useRef();
  const UploadDateRef = useRef();
  const ContractTypeRef = useRef();
  const categoryRef = useRef();

  const navigate = useNavigate();
  const { user } = useUser();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the required fields are filled
    if (
      JobTitleRef.current.value === "" ||
      DescriptionRef.current.value === "" ||
      LocationRef.current.value === "" ||
      UploadDateRef.current.value === "" ||
      ContractTypeRef.current.value === "" ||
      categoryRef.current.value === ""
    ) {
      return;
    }

    // Empty dependency array to run this effect only once when the component mounts

    // Retrieve the values from the form fields
    const JobTitle = JobTitleRef.current.value;
    const Description = DescriptionRef.current.value;
    const Location = LocationRef.current.value;
    const UploadDate = UploadDateRef.current.value;
    const ContractType = ContractTypeRef.current.value;
    const category = categoryRef.current.value;

    const EnterpriseId = user.id;

    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/jobs`,
      {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          JobTitle,
          Description,
          Location,
          UploadDate,
          ContractType,
          EnterpriseId,
          category,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          toast.success("Nouvelle annonce postée!", toastOptions);
          navigate("/companypage");
        } else {
          toast.error(
            "Quelque chose ne va pas, contactez un administrateur.",
            toastOptions
          );
        }
      });
  };

  const handleJobTitleChange = () => {
    const { value } = JobTitleRef.current;
    const regex = /^[A-Za-z0-9 ]+$/; // Allow letters (A-Z, a-z) and numbers (0-9)

    if (!regex.test(value)) {
      JobTitleRef.current.setCustomValidity(
        "Only letters (A-Z, a-z) and numbers (0-9) are allowed in the Job Title."
      );
    } else {
      JobTitleRef.current.setCustomValidity("");
    }
  };

  return (
    <div className="JobFormDiv">
      {user && user.role === "company" ? (
        <div id="jobFormComponent" className="jobFormComponent">
          <h1>Nouvelle Annonce :</h1>
          <form id="jobForm" className="jobForm" onSubmit={handleSubmit}>
            <label htmlFor="JobTitle">Job Title:</label>
            <input
              type="text"
              name="JobTitle"
              id="JobTitle"
              required
              ref={JobTitleRef}
              onChange={handleJobTitleChange}
              placeholder="JobTitle"
            />
            <br />
            <label htmlFor="Description">Description :</label>
            <br />
            <textarea
              name="Description"
              id="Description"
              rows="4"
              cols="50"
              required
              ref={DescriptionRef}
              placeholder="Description"
            />
            <br />
            <label htmlFor="location">Lieu :</label>
            <input
              type="text"
              name="location"
              id="location"
              ref={LocationRef}
              placeholder="location"
            />
            <br />
            <label htmlFor="uploadDate">Date de parution :</label>
            <input
              type="date"
              name="uploadDate"
              id="uploadDate"
              ref={UploadDateRef}
              placeholder="uploadDate"
            />
            <br />
            <label htmlFor="contractType">Type de contrat :</label>
            <input
              type="text"
              name="contractType"
              id="contractType"
              ref={ContractTypeRef}
              placeholder="contractType"
            />
            <br />
            <label htmlFor="category">Catégorie :</label>
            <input
              type="text"
              name="category"
              id="category"
              ref={categoryRef}
              placeholder="category"
            />
            <br />
            <input type="submit" value="Submit" id="jobSubmissionForm_submit" />
          </form>
        </div>
      ) : (
        <div className="jobSubmissionForm_unconnect">
          Seules les entreprises connectées peuvent poster des annonces
        </div>
      )}
    </div>
  );
}

export default JobSubmissionForm;

JobSubmissionForm.propTypes = {
  toastOptions: PropTypes.shape({
    position: PropTypes.string,
    autoClose: PropTypes.number,
    hideProgressBar: PropTypes.bool,
    closeOnClick: PropTypes.bool,
    pauseOnHover: PropTypes.bool,
    draggable: PropTypes.bool,
    progress: PropTypes.number,
    theme: PropTypes.string,
  }).isRequired,
};
