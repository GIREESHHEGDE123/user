import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length > 15 || /\d/.test(formData.name))
      newErrors.name = "Name must be text only and less than 15 characters.";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be exactly 10 digits.";
    if (!formData.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email))
      newErrors.email = "Email is invalid.";
    if (!formData.dob) newErrors.dob = "Date of Birth is required.";
    if (!formData.address) newErrors.address = "Address is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem("formData", JSON.stringify(formData));
      navigate("/details");
    }
  };

  return (
    <div>
      <h1>User details</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="info"> Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <span>{errors.name}</span>
        </div>
        <div>
          <label className="info"> Phone: </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <span>{errors.phone}</span>
        </div>
        <div>
          <label className="info"> Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <span>{errors.email}</span>
        </div>
        <div>
          <label className="info"> Date Of Birth: </label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
          <span>{errors.dob}</span>
        </div>
        <div>
          <label className="info"> Address: </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <span>{errors.address}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormPage;
