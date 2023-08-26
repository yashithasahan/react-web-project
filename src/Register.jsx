import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !birthdate || !email || !password) {
      setErrorMessage("All fields are required");
      return;
    }

    console.log("Registration successful:", {
      firstName,
      lastName,
      birthdate,
      email,
      password
    });
    
    // Reset error message
    setErrorMessage("");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="form-container p-8 bg-white rounded-lg shadow-lg w-full sm:max-w-md">
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="firstName" className="block font-medium mb-1">First Name</label>
          <input
            value={firstName}
            type="text"
            placeholder="Enter your first name"
            id="firstName"
            name="firstName"
            className="w-full mb-3 px-3 py-2 border rounded"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastName" className="block font-medium mb-1">Last Name</label>
          <input
            value={lastName}
            type="text"
            placeholder="Enter your last name"
            id="lastName"
            name="lastName"
            className="w-full mb-3 px-3 py-2 border rounded"
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="birthdate" className="block font-medium mb-1">Birthdate</label>
          <input
            value={birthdate}
            type="date"
            id="birthdate"
            name="birthdate"
            className="w-full mb-3 px-3 py-2 border rounded"
            onChange={(e) => setBirthdate(e.target.value)}
          />
          <label htmlFor="email" className="block font-medium mb-1">E-mail</label>
          <input
            value={email}
            type="email"
            placeholder="Enter your email"
            id="email"
            name="email"
            className="w-full mb-3 px-3 py-2 border rounded"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="block font-medium mb-1">Password</label>
          <input
            value={password}
            type="password"
            placeholder="Enter your password"
            id="password"
            name="password"
            className="w-full mb-4 px-3 py-2 border rounded"
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && <p className="text-red-500 mb-3">{errorMessage}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </form>
        <button
          onClick={() => props.onFormChange('logIn')}
          className="mt-4 text-blue-500 hover:underline focus:outline-none"
        >
          Already have an account? Login
        </button>
      </div>
    </div>
  );
};
