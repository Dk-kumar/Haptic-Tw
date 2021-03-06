import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUpFormLogical from "./LoginModule/SignUp/signUpLogic";
import SignInFormLogical from "./LoginModule/SignIn/SignInLogic";
import DashbordLogic from "./Dashbord/DashbordLogic";
import Application from './Dashbord/Application/Application';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignInFormLogical />} />
        <Route path="/signup" element={<SignUpFormLogical />} />
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/dashbord" element={<DashbordLogic />} />
        <Route path={`/dashbord/:application`} element={<Application />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
