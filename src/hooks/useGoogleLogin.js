import { useState } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";

export const useGoogleLogin =() => {
  const navigate = useNavigate();

  const [errorGoogle, setErrorGoogle] = useState(null);
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(null);

  const googleLogin = async () => {
    setIsLoadingGoogle(true);
    setErrorGoogle(null);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      setIsLoadingGoogle(false);
      setErrorGoogle(error.message);
    }
  };

  return { googleLogin, isLoadingGoogle, errorGoogle };
};
