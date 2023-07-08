import React, { useState, useContext } from "react";
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { AuthService } from '../services/AuthService';

type RegisterFormProps = {
  closeModal: () => void;
};

function RegisterForm({ closeModal }: RegisterFormProps) {
  
  const authService = new AuthService();
  const { setIsAuthenticated } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateUsername = () => {
    if (username.length > 3) {
      setUsernameError("");
      return true;
    }
    setUsernameError("Username is not valid.");
    return false;
  };

  const validateEmail = () => {
    const re = /\S+@\S+\.\S+/;
    if (re.test(email)) {
      setEmailError("");
      return true;
    }
    setEmailError("Email is not valid.");
    return false;
  };

  const validatePassword = () => {
    if (password.length > 6) {
      setPasswordError("");
      return true;
    }
    setPasswordError("Password is not strong enough.");
    return false;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
  
    if (!isUsernameValid || !isEmailValid || !isPasswordValid) {
      setTouched(true);
      return;
    }
  
    try {
      const response = await authService.register(username, email, password);
      if (response.status === 201) {
        setIsAuthenticated(true);
        setUsernameError("");
        setEmailError("");
        setPasswordError("");
        closeModal();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setTouched(true);
        setEmailError(error.response?.data.message);
      } else {
        console.error(error);
      }
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center" noValidate>
      <div className="mt-8 mb-8 relative">
        <label className="block mb-2 text-md font-medium text-gray-900">
          Username
          <input
            type="text"
            className="bg-zinc-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              validateUsername();
            }}
          />
        </label>
        {(usernameError && touched) && <span className="absolute text-red-500 text-sm whitespace-nowrap">{usernameError}</span>}
      </div>
      <div className="mb-8 relative">
        <label className="block mb-2 text-md font-medium text-gray-900">
          Email
          <input 
            type="email"
            className="bg-zinc-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail();
            }}
          />
        </label>
        {(emailError && touched) && <span className="absolute text-red-500 text-sm whitespace-nowrap">{emailError}</span>}
      </div>
      <div className="mb-10 relative">
        <label className="block mb-2 text-md font-medium text-gray-900">
          Password
          <input 
            type="password"
            className="bg-zinc-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword();
            }}/>
        </label>
        {(passwordError && touched) && <span className="absolute text-red-500 text-sm whitespace-nowrap">{passwordError}</span>}
      </div>
      <button
        type="submit"
        className="mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Sign up
      </button>
    </form>
  );
}

export default RegisterForm;
