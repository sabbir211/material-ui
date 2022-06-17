import logo from './logo.svg';
import './App.css';
import Register from './Components/Register/Register';
import { Routes, Route } from "react-router-dom"
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';

import RequireAuth from './Components/Shared/RequireAuth';
import Countries from './Components/Project/Countries';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={
          <RequireAuth>
            <Countries></Countries>
          </RequireAuth>
        }></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>     
        <Route path="/countries" element={
          <RequireAuth>
          <Countries></Countries>
        </RequireAuth>
        }></Route>
        
      </Routes>
    </div>
  );
}

export default App;
