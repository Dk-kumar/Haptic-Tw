import { useEffect, useState } from "react";
import SignInForm from "./SignIn";
import { isEmailValid, formButtonEnable } from "../../../Shared/Validation";

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
  const [handleError, setError] = useState({});
  const [isSubmit, handleSubmit] = useState(false);

  useEffect(() => {
    handleSubmit(!formButtonEnable(userInputs));
  }, [userInputs]);

  const containerFunctions = {
    handleOnChange: (event) => handleOnChange(event),
    handleIcons: (toggleType, fieldType) => handleIcons(toggleType, fieldType),
    isFormValid: (key, value, error) => isFormValid(key, value, error),
  };

  const containerStates = {
    userInputs: userInputs,
    isShowIcon: isShowIcon,
    handleError: handleError,
    isSubmit: isSubmit,
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

  const isFormValid = (key, value, error) => {
    if (!value) {
      setError({
        ...handleError,
        [key]: error,
      });
    } else if (key === "UserId" && !isEmailValid(value)) {
      setError({
        ...handleError,
        [key]: `Make sure your ${key.toLowerCase()} is valid`,
      });
    } else {
      setError({
        ...handleError,
        [key]: null,
      });
    }
  };

  return <SignInForm {...containerFunctions} {...containerStates} />;
};

export default SignInFormLogical;
