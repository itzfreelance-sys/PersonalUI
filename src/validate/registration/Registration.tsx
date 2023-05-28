import React, { useState } from "react";
import "./Registration.css";
interface RegistrationState {
  fName: string;
  mName: string;
  lName: string;
  email: string;
  phoneNo: string;
  password: string;
  country: string;
}

const Registration: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationState>({
    fName: "",
    mName: "",
    lName: "",
    email: "",
    phoneNo: "",
    password: "",
    country: "",
  });
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5182/api/Registrations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const backendError = await response.text();
        throw new Error(backendError);
      }

      // Registration successful
      // Reset form fields and error state
      setFormData({
        fName: "",
        mName: "",
        lName: "",
        email: "",
        phoneNo: "",
        password: "",
        country: "",
      });
      setError("");
      console.log("Registration successful!");
    } catch (error: any) {
      setError(
        error.message ||
          "Failed to connect with the server. Please try again later."
      );
      console.error(error);
    }
  };

  return (
    <div className="container">
      {error && <p className="error-message">{error}</p>}
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="fName">First Name:</label>
              <input
                type="text"
                id="fName"
                name="fName"
                value={formData.fName}
                onChange={handleChange}
                
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mName">Middle Name:</label>
              <input
                type="text"
                id="mName"
                name="mName"
                value={formData.mName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lName">Last Name:</label>
              <input
                type="text"
                id="lName"
                name="lName"
                value={formData.lName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNo">Phone Number:</label>
              <input
                type="tel"
                id="phoneNo"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="country">Country:</label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
