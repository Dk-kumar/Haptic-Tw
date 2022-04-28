import { useState } from "react";
import SignUpForm from "./signUp";

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

  let initialErrorState = {
    Firstname: false,
    Lastname: false,
    Email: false,
    isEmailChecked: false,
    Username: false,
    CountryCode: false,
    PhoneNumber: false,
    isNumberChecked: false,
    Password: false,
    ConfirmPassword: false,
  };

  let showHideIcons = {
    passwordField: false,
    confirmPasswordField: false,
  };

  const [inputValue, setInputValue] = useState(initialState);
  const [isShowIcon, setShowIcon] = useState(showHideIcons);
  const [validation, setValidation] = useState(initialErrorState);

  const containerFunctions = {
    handleOnChange: (event) => handleOnChange(event),
    handleIcons: (key, value) => handleIcons(key, value),
    isFormValid: (key, value) => isFormValid(key, value),
  };

  const containerStates = {
    inputValue: inputValue,
    isShowIcon: isShowIcon,
    validation: validation,
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

  const isFormValid = (key, value) => {
    if (!value) {
      setValidation({
        ...validation,
        [key]: true,
      });
    } else {
      setValidation({
        ...validation,
        [key]: false,
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
