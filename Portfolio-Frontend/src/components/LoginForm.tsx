import React, { useState, useContext } from "react";
import axios from 'axios';
import { AuthContext } from '../context/AuthContext'; 

type LoginFormProps = {
  closeModal: () => void;
};

function LoginForm({ closeModal }: LoginFormProps) {
  
  const { setIsAuthenticated } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = () => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = () => {
    return password.length > 8;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    if (!validateEmail()) {
      setEmailError("Invalid email address.");
      return;
    }

    if (!validatePassword()) {
      setPasswordError("Your password is not strong enough.");
      return;
    }

    setEmailError("");
    setPasswordError("");

    const API_URL = process.env.REACT_APP_API_URL;
    const response = await axios.post(`${API_URL}/api/auth/signin`, { email, password });
    if (response.status === 200) {
      localStorage.setItem("name", response.data.name);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("token_expiration", response.data.expiresIn);
      setIsAuthenticated(true);
      closeModal();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div className="mt-8 mb-4">
        <label className="block mb-2 text-md font-medium text-gray-900">
          Email
          <input 
            type="text" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/>
        </label>
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Password
          <input 
            type="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required/>
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
      </button>
    </form>
  );
}

export default LoginForm;
