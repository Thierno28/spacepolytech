import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const [user, setUser] = useState();

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }


    // if (!response.ok) {
    //   setIsLoading(false);
    //   setError(json.error);
    // }
    // if (response.ok) {
    //   // save the user to local storage
    //   localStorage.setItem("user", JSON.stringify(json));

    //   // update the auth context
    //   dispatch({ type: "LOGIN", payload: json });

    //   // update loading state
    //   setIsLoading(false);
    // }
  };

  return { signup, isLoading, error };
};
