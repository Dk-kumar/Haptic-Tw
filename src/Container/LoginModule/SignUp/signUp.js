import { Link } from "react-router-dom";

import InputField from "../../../Component/Fields";
import { Values } from "../../../Constant/formConst";
import {
  visibilityIcon,
  visibilityOffIcon,
  google,
  faceBook,
  gitHub,
} from "../../../Shared/Icons";

//Meterial UI components
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SignUpForm = (props) => {
  const { inputValue, isShowIcon, handleError, isSubmit } = props;
  const { handleIcons, handleOnChange, isFormValid, onSubmit } = props;

  const {
    Suffix,
    Title,
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

  const { passwordField, confirmPasswordField } = isShowIcon;

  const renderHeader = () => {
    return (
      <div className="form-header mb-8">
        <h2 className="my-1 text-3xl">{Values.SignUp}</h2>
        <span className="form-link text-lg">
          {Values.SignInLink}{" "}
          <Link className="no-underline" to="/signin">
            {Values.SignIn}
          </Link>
        </span>
      </div>
    );
  };

  const renderIcons = (key, value) => {
    return (
      <i onClick={() => handleIcons(key, value)}>
        {value ? visibilityOffIcon() : visibilityIcon()}
      </i>
    );
  };

  const renderError = (value) => {
    return (
      <div className="p-1">
        <span className="text-red-600">{value}</span>
      </div>
    );
  };

  const rendetSocialSignin = () => {
    return (
      <div className="social-login md:hidden mt-5 flex justify-evenly">
        <div className="icon">{google()}</div>
        <div className="icon">{faceBook()}</div>
        <div className="icon">{gitHub()}</div>
      </div>
    );
  };

  return (
    <form>
      <div className="signup-wrapper md:w-31 md:m-auto md:my-8 md:rounded-xl">
        {renderHeader()}
        <div className="form-top hidden md:flex flex-col gap-4 md:flex-row">
          <div className="md:basis-1/2">
            <InputField
              type="text"
              value={Suffix}
              label={Values.Suffix}
              name={Values.Suffix}
              onChange={handleOnChange}
            />
          </div>
          <div className="md:basis-1/2">
            <InputField
              type="text"
              value={Title}
              label={Values.Title}
              name={Values.Title}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="md:basis-1/2">
            <InputField
              type="text"
              value={Firstname}
              label={Values.FirstName}
              name={Values.FirstName}
              required={true}
              border={handleError?.Firstname}
              onChange={handleOnChange}
              onBlur={() =>
                isFormValid(Values.FirstName, Firstname, Values.F_NameError)
              }
            />
            {renderError(handleError?.Firstname)}
          </div>
          <div className="md:basis-1/2">
            <InputField
              type="text"
              value={Lastname}
              label={Values.LastName}
              name={Values.LastName}
              required={true}
              border={handleError?.Lastname}
              onChange={handleOnChange}
              onBlur={() =>
                isFormValid(Values.LastName, Lastname, Values.L_NameError)
              }
            />
            {renderError(handleError?.Lastname)}
          </div>
        </div>
        <div className="form-middle flex flex-col gap-2">
          <div className="email-wrapper">
            <div className="relative">
              <InputField
                type="email"
                value={Email}
                label={Values.Email}
                name={Values.Email}
                required={true}
                border={handleError?.Email}
                onChange={handleOnChange}
                onBlur={() =>
                  isFormValid(Values.Email, Email, Values.EmailError)
                }
              />
              <div className="checkbox absolute right-4 bottom-0">
                <InputField
                  type="checkbox"
                  name={""}
                  checked={isEmailChecked}
                />
              </div>
            </div>
            {renderError(handleError?.Email)}
            <div className="text-xs my-1.5 text-right">
              {Values.EmailDescription}
            </div>
          </div>
          <div>
            <InputField
              type="text"
              value={Username}
              label={Values.UserName}
              name={Values.UserName}
              required={true}
              border={handleError?.Username}
              onChange={handleOnChange}
              onBlur={() =>
                isFormValid(Values.UserName, Username, Values.U_NameError)
              }
            />
            {renderError(handleError?.Username)}
          </div>
        </div>
        <div className="form-bottom flex flex-col md:flex-row gap-4">
          <div className="countrycode-wrapper basis-38">
            <label className="after:content-['*']">Country Code</label>
            <div>
              <Box
                sx={{
                  m: 1,
                  flexBasis: "24%",
                  margin: ".5rem 0rem 0rem 0rem",
                }}
                size="small"
              >
                <FormControl
                  fullWidth
                  error={handleError?.CountryCode && CountryCode === ""}
                  className="p-1"
                >
                  <Select
                    value={CountryCode}
                    name={Values.CountryCode_name}
                    onChange={handleOnChange}
                    onBlur={() =>
                      isFormValid(
                        Values.CountryCode_name,
                        CountryCode,
                        Values.C_CodeError
                      )
                    }
                    className="w-full h-10"
                  >
                    <MenuItem value={+1}>+1(USA)</MenuItem>
                    <MenuItem value={+1}>+1(Canada)</MenuItem>
                    <MenuItem value={+52}>+52(Mexico)</MenuItem>
                  </Select>
                  {renderError(handleError?.CountryCode)}
                </FormControl>
              </Box>
            </div>
          </div>
          <div className="phone-wrapper basis-60">
            <div className="relative">
              <InputField
                type="text"
                value={PhoneNumber}
                label={Values.PhoneNumber}
                name={Values.PhoneNumber_name}
                maxLength="10"
                required={true}
                border={handleError?.PhoneNumber}
                onChange={handleOnChange}
                onBlur={() =>
                  isFormValid(
                    Values.PhoneNumber_name,
                    PhoneNumber,
                    Values.P_NumberError
                  )
                }
              />
              <div className="checkbox absolute right-4 bottom-0">
                <InputField
                  type="checkbox"
                  name={""}
                  checked={isNumberChecked}
                />
              </div>
            </div>
            {renderError(handleError?.PhoneNumber)}
            <div className="text-xs my-1.5 text-right">
              {Values.PhoneDescription}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="password-wrapper basis-1/2">
            <div className="relative">
              <InputField
                type={passwordField ? "text" : "password"}
                value={Password}
                label={Values.Password}
                name={Values.Password}
                required={true}
                border={handleError?.Password}
                onChange={handleOnChange}
                onBlur={() =>
                  isFormValid(Values.Password, Password, Values.PasswordError)
                }
              />
              <div className="absolute right-4 bottom-1">
                {renderIcons("passwordField", passwordField)}
              </div>
            </div>
            {renderError(handleError?.Password)}
          </div>
          <div className="confirm-password-wrapper basis-1/2">
            <div className="relative">
              <InputField
                type={confirmPasswordField ? "text" : "password"}
                value={ConfirmPassword}
                label={Values.ConfirmPassword}
                name={Values.ConfirmPassword_name}
                required={true}
                border={handleError?.ConfirmPassword}
                onChange={handleOnChange}
                onBlur={() =>
                  isFormValid(
                    Values.ConfirmPassword_name,
                    ConfirmPassword,
                    Values.C_PasswordError
                  )
                }
              />
              <div className="absolute right-4 bottom-1">
                {renderIcons("confirmPasswordField", confirmPasswordField)}
              </div>
            </div>
            {renderError(handleError?.ConfirmPassword)}
            {renderError(handleError?.isPasswordMatch)}
          </div>
        </div>
        <div className="submit-btn my-4">
          <button
            disabled={!isSubmit}
            onClick={onSubmit}
            type="button"
            className={`w-full md:w-fit md:py-4 md:px-5 py-3.5 rounded-md border-0 bg-primary text-white ${
              isSubmit ? `opacity-100` : `opacity-25`
            }`}
          >
            {"Create account"}
          </button>
        </div>
        <div className="line-wrapper mt-4 flex justify-center items-center gap-2 md:hidden">
          <div className="lines"></div>
          <span>OR</span>
          <div className="lines"></div>
        </div>
        {rendetSocialSignin()}
      </div>
    </form>
  );
};

export default SignUpForm;
