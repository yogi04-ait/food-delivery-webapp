import React, { useState } from "react";

function SigninForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple client-side validation
    if (!formData.email || !formData.password) {
      setError("Both fields are required.");
      return;
    }

    try {
      const response = await fetch("api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccess("Signed in successfully!");
        setError(""); // Clear any previous errors
        console.log("Response from server:", result);
        // Redirect or perform further actions here
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
      console.error("Error:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Welcome Back 👋</h2>
      <p className="text-sm font-medium mb-7 text-[#313957] leading-tight">
        Today is a new day. It's your day. You shape it. <br />
        Sign in to start ordering
      </p>
      {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
      {success && <div className="text-green-500 text-sm mb-4">{success}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label
            className="block text-xs font-normal mb-1 text-[#0C1421]"
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
            placeholder="At least 6 characters"
            value={formData.password}
            onChange={handleChange}
            className="w-full text-sm pl-3 p-2 border mb-4 rounded-3xl focus:outline-none"
            minLength="6"
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

export default SigninForm;
