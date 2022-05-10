import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "./signUp";
import { apiEndPoint } from "../../../Constant/apiEndPointConst";
import { postOptions } from "../../../Shared/Http/apiHeader.config";
import { request } from "../../../Shared/Http/request";
import {
  isEmailValid,
  isPhoneNumberValid,
  formButtonEnable,
} from "../../../Shared/Validation";

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
  const [isSubmit, handleSubmit] = useState(false);
  const [handleError, setError] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    handleSubmit(!formButtonEnable(inputValue));
  }, [inputValue]);

  const containerFunctions = {
    handleOnChange: (event) => handleOnChange(event),
    handleIcons: (key, value) => handleIcons(key, value),
    isFormValid: (key, value, error) => isFormValid(key, value, error),
    onSubmit: () => onSubmit(),
  };

  const containerStates = {
    inputValue: inputValue,
    isShowIcon: isShowIcon,
    handleError: handleError,
    isSubmit: isSubmit,
  };

  const {
    Suffix = null,
    Title = null,
    Firstname,
    Lastname,
    Email,
    isEmailChecked,
    Username,
    CountryCode,
    PhoneNumber,
    isNumberChecked,
    Password,
    ConfirmPassword,
  } = inputValue;

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

  const onSubmit = async () => {
    const obj = {
      suffix: Suffix,
      title: Title,
      firstName: Firstname,
      lastName: Lastname,
      username: Username,
      password: Password,
      confirmPassword: ConfirmPassword,
      emails: [{ emailAddress: Email, isLoginCriteria: isEmailChecked }],
      phones: [
        {
          phoneNumber: PhoneNumber,
          countryCode: CountryCode,
          isLoginCriteria: isNumberChecked,
        },
      ],
    };

    if (inputValue.Password !== inputValue.ConfirmPassword) {
      return setError({
        ...handleError,
        ["ConfirmPassword"]: `Password must match`,
      });
    }
    const result = await request(apiEndPoint.signup, postOptions(obj));
    navigate("/signin");
    if (result) {
      alert("success");
    }
    console.log(obj);
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
    } else if (key === "Username" && inputValue.Username.length <= 5) {
      setError({
        ...handleError,
        [key]: `Minimum 6 characters is required`,
      });
    } else if (
      key === "ConfirmPassword" &&
      inputValue.Password !== inputValue.ConfirmPassword
    ) {
      setError({
        ...handleError,
        [key]: `Password must match`,
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
