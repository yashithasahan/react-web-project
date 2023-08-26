import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    console.log("Login successful:", {
      email,
      password
    });

    // Reset error message
    setErrorMessage("");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="form-container p-8 bg-white rounded-lg shadow-lg">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-semibold mb-4">Welcome!</h1>
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
          <div className="relative">
            <input
              value={password}
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              id="password"
              name="password"
              className="w-full mb-4 px-3 py-2 border rounded pr-10"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute top-2 right-2 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg
                  className="w-6 h-6 text-gray-500 hover:text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2 12s2-2 2-2m0 0s2-2 2-2m-2 2h2m0 0h2m-2 2h2m0 0h2m-2 2h2m0 0h2M9 21v-2m0 0V5m0 2h6"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-gray-500 hover:text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-5.2-5.2"
                  />
                </svg>
              )}
            </button>
          </div>
          {errorMessage && <p className="text-red-500 mb-3">{errorMessage}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Log In
          </button>
        </form>
        <button
          onClick={() => props.onFormChange('register')}
          className="mt-4 text-blue-500 hover:underline focus:outline-none"
        >
          Don't have an account? Register
        </button>
      </div>
    </div>
  );
};
