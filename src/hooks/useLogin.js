import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";

export const useLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      await signInWithEmailAndPassword(auth , email, password);
      navigate("/account");
      
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  return { login, isLoading, error };
};
