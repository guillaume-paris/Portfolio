import React, { useState, useContext } from "react";
import axios from 'axios';
import { AuthContext } from '../../../context/AuthContext';
import { AuthService } from '../../../services/AuthService';
import Button from "../../../components/Button";

type LoginFormProps = {
  closeModal: () => void;
};

function LoginForm({ closeModal }: LoginFormProps) {
  
  const authService = new AuthService();
  const { setIsAuthenticated } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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
  
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
  
    if (!isEmailValid || !isPasswordValid) {
      setTouched(true);
      return;
    }
  
    try {
      const response = await authService.login(email, password);
      if (response.status === 200) {
        setIsAuthenticated(true);
        setEmailError("");
        setPasswordError("");
        closeModal();
      } 
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setTouched(true);
        setPasswordError(error.response?.data.message);
      } else {
        console.error(error);
      }
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center" noValidate>
      <div className="mt-8 mb-8 relative">
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
        {(emailError && touched) && <span className="absolute text-red-500 text-sm">{emailError}</span>}
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
      <Button type="submit" color="primary" className="mb-4">
        <span>Sign in</span>
      </Button>
    </form>
  );
}

export default LoginForm;
