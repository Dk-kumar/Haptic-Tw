import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import SignUpFormLogical from "./LoginModule/SignUp/signUpLogic";
import SignInFormLogical from "./LoginModule/SignIn/SignInLogic";

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/signin' element={<SignInFormLogical />} />
      </Routes>
      <Routes>
        <Route path='/' element={<SignUpFormLogical />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter