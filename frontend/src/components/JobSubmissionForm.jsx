import { useNavigate } from "react-router-dom";

import { useRef } from "react";

import "./JobSubmissionForm.css";

function JobSubmissionForm() {
  const JobTitleRef = useRef();
  const DescriptionRef = useRef();
  const LocationRef = useRef();
  const UploadDateRef = useRef();
  const ContractTypeRef = useRef();
  const EnterpriseIdRef = useRef();
  const categoryRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the required fields are filled
    if (
      JobTitleRef.current.value === "" ||
      DescriptionRef.current.value === "" ||
      LocationRef.current.value === "" ||
      UploadDateRef.current.value === "" ||
      ContractTypeRef.current.value === "" ||
      EnterpriseIdRef.current.value === "" ||
      categoryRef.current.value === ""
    ) {
      return;
    }

    // Retrieve the values from the form fields
    const JobTitle = JobTitleRef.current.value;
    const Description = DescriptionRef.current.value;
    const Location = LocationRef.current.value;
    const UploadDate = UploadDateRef.current.value;
    const ContractType = ContractTypeRef.current.value;
    const EnterpriseId = EnterpriseIdRef.current.value;
    const category = categoryRef.current.value;

    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/jobs`,
      {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
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
      .then(() => {
        navigate("/companypage");
      });
  };
  const handleJobTitleChange = () => {
    const { value } = JobTitleRef;
    const regex = /^[A-Za-z 1-9]+$/;

    if (!regex.test(value)) {
      JobTitleRef.setCustomValidity(
        "Only letters (A-Z, a-z ,1-9) are allowed in the Job Title."
      );
    } else {
      JobTitleRef.setCustomValidity("");
    }
  };
  return (
    <div className="JobFormDiv">
      <div id="jobFormComponent" className="jobFormComponent">
        <h1>Job Submission Form</h1>
        <form id="jobForm" className="jobForm" onSubmit={handleSubmit}>
          <label htmlFor="JobTitle">Job Title:</label>
          <input
            type="text"
            name="JobTitle"
            id="JobTitle"
            required
            ref={JobTitleRef}
            pattern={handleJobTitleChange}
            placeholder="JobTitle"
          />
          <br />
          <label htmlFor="Description">Description:</label>
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
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            name="location"
            id="location"
            ref={LocationRef}
            placeholder="location"
          />
          <br />
          <label htmlFor="uploadDate">Date de submition:</label>
          <input
            type="date"
            name="uploadDate"
            id="uploadDate"
            ref={UploadDateRef}
            placeholder="uploadDate"
          />
          <br />
          <label htmlFor="contractType">Contract Type:</label>
          <input
            type="text"
            name="contractType"
            id="contractType"
            ref={ContractTypeRef}
            placeholder="contractType"
          />
          <br />
          <label htmlFor="enterpriseId">Enterprise ID:</label>
          <input
            type="number"
            name="enterpriseId"
            id="enterpriseId"
            ref={EnterpriseIdRef}
            placeholder="entrepriseId"
          />
          <br />
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            name="category"
            id="category"
            ref={categoryRef}
            placeholder="category"
          />

          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default JobSubmissionForm;
