import React from "react";
import {
  BrowserRouter,
  Redirect,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignUpFormLogical from "./LoginModule/SignUp/signUpLogic";
import SignInFormLogical from "./LoginModule/SignIn/SignInLogic";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignInFormLogical />} />
      </Routes>
      <Routes>
        <Route path="/signup" element={<SignUpFormLogical />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
