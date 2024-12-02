import React, { useState } from "react";
import axios from "axios";

function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/register", formData);
      console.log("Signup successful:", response.data);
      setSuccess(true);
      setError(null);
    } catch (err) {
      console.error("Signup failed:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Signup failed. Try again.");
      setSuccess(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Welcome 👋</h2>
      <p className="text-sm font-medium mb-7 text-[#313957] leading-tight">
        Today is a new day. It's your day. You shape it. <br />
        Sign up to start ordering
      </p>
      {success && <p className="text-green-500 mb-4">Signup successful!</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label
            className="block text-xs font-normal mb-1 text-[#0C1421]"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="eg. John A"
            value={formData.name}
            onChange={handleChange}
            className="w-96 p-2 pl-3 text-sm border rounded-3xl focus:outline-none "
            required
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-xs font-normal text-[#0C1421] mb-1"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phone"
            placeholder="Enter your 10 digit mobile number"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            title="Enter a 10-digit phone number"
            className="w-full p-2 pl-3 text-sm border rounded-3xl outline-none"
            required
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-xs font-normal mb-1 text-[#0C1421] "
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Example@email.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full pl-3 p-2 border text-sm rounded-3xl focus:outline-none"
            required
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-xs font-normal text-[#0C1421] mb-1"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="At least 8 characters"
            value={formData.password}
            onChange={handleChange}
            minLength="6"
            className="w-full text-sm pl-3 p-2 border mb-4 rounded-3xl focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#FC8A06] text-sm font-semibold text-white p-2 rounded-3xl outline-none"
        >
          Continue
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
