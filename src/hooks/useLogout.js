import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const logout = async () => {
    setIsLoading(true);
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  return { logout, error, isLoading };
};
