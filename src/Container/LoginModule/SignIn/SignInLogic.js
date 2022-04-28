import { useState } from "react";
import SignInForm from "./SignIn";

const SignInFormLogical = () => {
  let initialState = {
    isEmail: false,
    isPhone: false,
    isUserName: false,
    UserId: "",
    Password: "",
  };

  const [isShowIcon, setShowIcon] = useState(false);
  const [userInputs, setInputs] = useState(initialState);

  const containerFunctions = {
    handleOnChange: (event) => handleOnChange(event),
    handleIcons: (toggleType, fieldType) => handleIcons(toggleType, fieldType),
  };

  const containerStates = {
    userInputs: userInputs,
    isShowIcon: isShowIcon,
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...userInputs,
      [name]: value,
    });
  };

  const handleIcons = () => {
    setShowIcon(!isShowIcon);
  };

  return <SignInForm {...containerFunctions} {...containerStates} />;
};

export default SignInFormLogical;
