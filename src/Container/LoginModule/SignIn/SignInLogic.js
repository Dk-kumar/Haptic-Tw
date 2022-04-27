import { useState } from "react";
import SignInForm from "./SignIn";

const SignInFormLogical = () => {
  const [isShowIcon, setShowIcon] = useState(false);

  const containerFunctions = {
    handleIcons: (toggleType, fieldType) => handleIcons(toggleType, fieldType),
  };

  const containerStates = {
    isShowIcon: isShowIcon,
  };

  const handleIcons = () => {
    setShowIcon(!isShowIcon);
  };

    return (
        <SignInForm {...containerFunctions} {...containerStates}/>
    )
}

export default SignInFormLogical