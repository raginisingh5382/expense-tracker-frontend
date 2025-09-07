import React from 'react'

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Income from "./pages/dashboard/Income";
import Home from "./pages/dashboard/Home";
import Expense from "./pages/dashboard/Expense";
import UserProvider from './context/UserContext';
import {Toaster} from "react-hot-toast";

function App() {
  return (
    <UserProvider>
     <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root/>} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/SignUp" exact element={<SignUp/>} />
          <Route path="/dashboard" exact element={<Home/>} />
          <Route path="/income" exact element={<Income />} />
          <Route path="/Expense" exact element={<Expense />} />
        </Routes>
      </Router>
     </div>

     <Toaster
         toastOptions={{
          className:"",
          style:{
            fontSize:'13px'
          },
         }}
      />
    </UserProvider>
  )
}

export default App;

const Root=()=>{

  const isAuthenticated=!!localStorage.getItem("token");

  return isAuthenticated?(
    <Navigate to="/dashboard"/>
  ):(
    <Navigate to="/login"/>
  )
}


 