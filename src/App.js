import { Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import { Navigate } from "react-router-dom";


function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/account" element={user?<Account />: <Navigate to="/"/>} />
      </Routes>
    </div>
  );
}

export default App;
