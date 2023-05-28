import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
export interface LoginState {
  email: string;
  password: string;
}

export interface LoginProps {
  formData: LoginState;
  setFormData: React.Dispatch<React.SetStateAction<LoginState>>;
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ formData, setFormData, onLogin }) => {
  const [error, setError] = useState<string>('');

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
      const response = await fetch("http://localhost:5182/api/Registrations");
      const registrations = await response.json();

      const matchingRegistration = registrations.find(
        (registration: any) =>
          registration.email === formData.email &&
          registration.password === formData.password
      );

      if (matchingRegistration) {
        // Login successful
        setFormData({
          email: "",
          password: "",
        });
        setError("");
        console.log("Login successful!");
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error: any) {
      setError(error.message || 'Failed to connect with the server. Please try again later.');
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              {error && <p className="text-danger">{error}</p>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
