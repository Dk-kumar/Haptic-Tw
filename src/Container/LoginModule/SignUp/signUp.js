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
  const { inputValue, isShowIcon } = props;
  const { handleIcons, handleOnChange } = props;

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

  const renderIcons = (fieldType, textField) => {
    return (
      <i onClick={() => handleIcons(textField, fieldType)}>
        {fieldType ? visibilityOffIcon() : visibilityIcon()}
      </i>
    );
  };

  return (
    <form>
      <div className="signup-wrapper">
        {renderHeader()}
        <div className="form-top flex flex-col gap-4">
          <div className="hidden">
            <InputField
              type="text"
              value={Suffix}
              label={Values.Suffix}
              name={Values.Suffix}
              onChange={handleOnChange}
            />
            <InputField
              type="text"
              value={Title}
              label={Values.Title}
              name={Values.Title}
              onChange={handleOnChange}
            />
          </div>
          <InputField
            type="text"
            value={Firstname}
            label={Values.FirstName}
            name={Values.FirstName}
            required={true}
            onChange={handleOnChange}
          />
          <InputField
            type="text"
            value={Lastname}
            label={Values.LastName}
            name={Values.LastName}
            required={true}
            onChange={handleOnChange}
          />
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
              />
              <div className="checkbox absolute right-4 bottom-0">
                <InputField
                  type="checkbox"
                  name={""}
                  checked={isEmailChecked}
                />
              </div>
            </div>
            <div className="text-xs my-1.5 text-right">
              {Values.EmailDescription}
            </div>
          </div>
          <InputField
            type="text"
            value={Username}
            label={Values.UserName}
            name={Values.UserName}
            required={true}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-bottom flex flex-col gap-4 ">
          <div className="countrycode-wrapper">
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
                {/* <FormControl fullWidth error={validation.CountryCode && CountryCode === ""}> */}
                <Select
                  value={CountryCode}
                  name={Values.NameCountryCode}
                  onChange={handleOnChange}
                  className="w-full h-9"
                >
                  <MenuItem value={+1}>+1(USA)</MenuItem>
                  <MenuItem value={+1}>+1(Canada)</MenuItem>
                  <MenuItem value={+52}>+52(Mexico)</MenuItem>
                </Select>
                {/* {validation.CountryCode && CountryCode === "" && <FormHelperText>{Values.CountryCodeError}</FormHelperText>} */}
                {/* </FormControl> */}
              </Box>
            </div>
          </div>
          <div className="phone-wrapper">
            <div className="relative">
              <InputField
                type="text"
                value={PhoneNumber}
                label={Values.PhoneNumber}
                name={Values.PhoneNumber}
                required={true}
                onChange={handleOnChange}
              />
              <div className="checkbox absolute right-4 bottom-0">
                <InputField
                  type="checkbox"
                  name={""}
                  checked={isNumberChecked}
                />
              </div>
            </div>
            <div className="text-xs my-1.5 text-right">
              {Values.PhoneDescription}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="password-wrapper">
            <div className="relative">
              <InputField
                type={passwordField ? "text" : "password"}
                value={Password}
                label={Values.Password}
                name={Values.Password}
                required={true}
                onChange={handleOnChange}
              />
              <div className="absolute right-4 bottom-0">
                {renderIcons(passwordField, "passwordField")}
              </div>
            </div>
          </div>
          <div className="confirm-password-wrapper">
            <div className="relative">
              <InputField
                type={confirmPasswordField ? "text" : "password"}
                value={ConfirmPassword}
                label={Values.ConfirmPassword}
                name={"ConfirmPassword"}
                required={true}
                onChange={handleOnChange}
              />
              <div className="absolute right-4 bottom-0">
                {renderIcons(confirmPasswordField, "confirmPasswordField")}
              </div>
            </div>
          </div>
        </div>
        <div className="submit-btn my-4">
          <button className="w-full py-3.5 rounded-md border-0 bg-primary text-white">
            {Values.SignUp}
          </button>
        </div>
        <div className="line-wrapper mt-4 flex justify-center items-center gap-2">
          <div className="lines"></div>
          <span>OR</span>
          <div className="lines"></div>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
