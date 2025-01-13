import React from "react";

function DetailsPage() {
  const formData = JSON.parse(localStorage.getItem("formData"));

  return (
    <div className="heading">
      <h1>User Details</h1>
      <div className="submit_details">
        <p>
          <strong>Name: </strong>
          {formData.name}
        </p>
        <p>
          <strong>Phone: </strong>
          {formData.phone}
        </p>
        <p>
          <strong>Email: </strong>
          {formData.email}
        </p>
        <p>
          <strong>DOB: </strong>
          {formData.dob}
        </p>
        <p>
          <strong>Address: </strong>
          {formData.address}
        </p>
      </div>
    </div>
  );
}

export default DetailsPage;
