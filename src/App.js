import { Button, Flex, Heading, Input, Text } from '@chakra-ui/react'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/> 
        <Route path='/signup' element={<Signup/>}/> 
        <Route path='/account' element={<Account/>}/> 
      </Routes>
    </div>
  );
}

export default App;
