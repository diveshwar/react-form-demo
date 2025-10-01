import React, { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `✅ Form Submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nAge: ${formData.age}`
    );
  };

  return (
    <section>
      <h2>User Registration Form (Accessible)</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: 420 }}>
        {/* ✅ Name Field */}
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"                      // ✅ has name
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          autoComplete="name"              // ✅ has autocomplete
          required
          style={{ width: "100%", padding: 8 }}
        />

        {/* ✅ Email Field */}
        <label htmlFor="email" style={{ marginTop: 10 }}>Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"             // ✅ has autocomplete
          required
          style={{ width: "100%", padding: 8 }}
        />

        {/* ✅ Age Field */}
        <label htmlFor="age" style={{ marginTop: 10 }}>Age:</label>
        <input
          id="age"
          name="age"
          type="number"
          placeholder="Enter your age"
          value={formData.age}
          onChange={handleChange}
          min="1"
          max="120"
          autoComplete="off"               // ✅ explicitly turn off if not needed
          required
          style={{ width: "100%", padding: 8 }}
        />

        <button
          type="submit"
          style={{ marginTop: 12, padding: "8px 16px" }}
        >
          Submit
        </button>
      </form>

      <div style={{ marginTop: 16, background: "#f9f9f9", padding: 10 }}>
        <h4>Current Form Data:</h4>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </section>
  );
}
