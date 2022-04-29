import { useState } from "react";
import SignUpForm from "./signUp";
import { isEmailValid, isPhoneNumberValid } from "../../../Shared/Validation";

const SignUpFormLogical = () => {
  const handelFields = () => {
    if (window.innerWidth > 776) {
      return {
        Suffix: "",
        Title: "",
      };
    }
  };

  let initialState = {
    ...handelFields(),
    Firstname: "",
    Lastname: "",
    Email: "",
    isEmailChecked: false,
    Username: "",
    CountryCode: "",
    PhoneNumber: "",
    isNumberChecked: false,
    Password: "",
    ConfirmPassword: "",
  };

  let showHideIcons = {
    passwordField: false,
    confirmPasswordField: false,
  };

  const [inputValue, setInputValue] = useState(initialState);
  const [isShowIcon, setShowIcon] = useState(showHideIcons);
  const [handleError, setError] = useState({});

  const containerFunctions = {
    handleOnChange: (event) => handleOnChange(event),
    handleIcons: (key, value) => handleIcons(key, value),
    isFormValid: (key, value, error) => isFormValid(key, value, error),
  };

  const containerStates = {
    inputValue: inputValue,
    isShowIcon: isShowIcon,
    handleError: handleError,
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    if (name === "PhoneNumber") {
      if (isNaN(value)) return false;
    }
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const isFormValid = (key, value, error) => {
    if (!value) {
      setError({
        ...handleError,
        [key]: error,
      });
    } else if (
      (key === "Email" && !isEmailValid(value)) ||
      (key === "PhoneNumber" && !isPhoneNumberValid(value))
    ) {
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

  const handleIcons = (key, value) => {
    setShowIcon({
      ...isShowIcon,
      [key]: !value,
    });
  };

  return <SignUpForm {...containerStates} {...containerFunctions} />;
};

export default SignUpFormLogical;
