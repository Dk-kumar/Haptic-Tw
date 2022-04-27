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

  const [inputValue, setInputValue] = useState(initialState);
  const [isShowIcon, setShowIcon] = useState(false) 

  const containerFunctions = {
    handleOnChange: (event) => handleOnChange(event),
  };

  const containerStates = {
    inputValue: inputValue,
    isShowIcon: isShowIcon
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  return <SignUpForm {...containerStates} {...containerFunctions} />;
};

export default SignUpFormLogical;
