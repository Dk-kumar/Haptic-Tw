import { Link } from "react-router-dom";

import InputField from "../../../Component/Fields";
import { Values } from "../../../Constant/formConst";
import { visibilityIcon, visibilityOffIcon } from "../../../Shared/Icons";

//Meterial UI components
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";

const SignUpForm = (props) => {
  const { inputValue, isShowIcon, validation } = props;
  const { handleIcons, handleOnChange, isFormValid } = props;

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

  const renderError = (value, error) => {
    return <span className="text-red-600">{value && error}</span>;
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
              onChange={handleOnChange}
              onBlur={() => isFormValid(Values.FirstName, Firstname)}
            />
            {renderError(validation.Firstname, Values.F_NameError)}
          </div>
          <div className="md:basis-1/2">
            <InputField
              type="text"
              value={Lastname}
              label={Values.LastName}
              name={Values.LastName}
              required={true}
              onChange={handleOnChange}
              onBlur={() => isFormValid(Values.LastName, Lastname)}
            />
            {renderError(validation.Lastname, Values.L_NameError)}
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
                onChange={handleOnChange}
                onBlur={() => isFormValid(Values.Email, Email)}
              />
              <div className="checkbox absolute right-4 bottom-0">
                <InputField
                  type="checkbox"
                  name={""}
                  checked={isEmailChecked}
                />
              </div>
            </div>
            {renderError(validation.Email, Values.EmailError)}
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
              onChange={handleOnChange}
              onBlur={() => isFormValid(Values.UserName, Username)}
            />
            {renderError(validation.Username, Values.U_NameError)}
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
                  error={validation.CountryCode && !CountryCode}
                >
                  <Select
                    value={CountryCode}
                    name={Values.CountryCode_name}
                    onChange={handleOnChange}
                    className="w-full h-10"
                  >
                    <MenuItem value={+1}>+1(USA)</MenuItem>
                    <MenuItem value={+1}>+1(Canada)</MenuItem>
                    <MenuItem value={+52}>+52(Mexico)</MenuItem>
                  </Select>
                  {validation.CountryCode && !CountryCode && (
                    <FormHelperText>{Values.C_CodeError}</FormHelperText>
                  )}
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
                required={true}
                onChange={handleOnChange}
                onBlur={() => isFormValid(Values.PhoneNumber_name, PhoneNumber)}
              />
              <div className="checkbox absolute right-4 bottom-0">
                <InputField
                  type="checkbox"
                  name={""}
                  checked={isNumberChecked}
                />
              </div>
            </div>
            {renderError(validation.PhoneNumber, Values.P_NumberError)}
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
                onChange={handleOnChange}
                onBlur={() => isFormValid(Values.Password, Password)}
              />
              <div className="absolute right-4 bottom-1">
                {renderIcons("passwordField", passwordField)}
              </div>
            </div>
            {renderError(validation.Password, Values.PasswordError)}
          </div>
          <div className="confirm-password-wrapper basis-1/2">
            <div className="relative">
              <InputField
                type={confirmPasswordField ? "text" : "password"}
                value={ConfirmPassword}
                label={Values.ConfirmPassword}
                name={Values.ConfirmPassword_name}
                required={true}
                onChange={handleOnChange}
                onBlur={() =>
                  isFormValid(Values.ConfirmPassword_name, ConfirmPassword)
                }
              />
              <div className="absolute right-4 bottom-1">
                {renderIcons("confirmPasswordField", confirmPasswordField)}
              </div>
            </div>
            {renderError(validation.ConfirmPassword, Values.C_PasswordError)}
          </div>
        </div>
        <div className="submit-btn my-4">
          <button
            type="button"
            className="w-full md:w-fit md:py-4 md:px-5 py-3.5 rounded-md border-0 bg-primary text-white"
          >
            {"Create account"}
          </button>
        </div>
        <div className="line-wrapper mt-4 flex justify-center items-center gap-2 md:hidden">
          <div className="lines"></div>
          <span>OR</span>
          <div className="lines"></div>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
