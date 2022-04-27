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
  const { inputValue, isShowIcon, handleOnChange } = props;

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

  const renderHeader = () => {
    return (
      <div className="form-header mb-8">
        <h2 className="my-1 text-3xl">{Values.SignUp}</h2>
        <span className="form-link text-lg">
          {Values.SignInLink} <a href="#">{Values.SignIn}</a>
        </span>
      </div>
    );
  };

  return (
    <div className="">
      <form>
        <div className="signup-wrapper p-8 flex flex-col gap-4">
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
              onChange={handleOnChange}
            />
            <InputField
              type="text"
              value={Lastname}
              label={Values.LastName}
              name={Values.LastName}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-middle flex flex-col gap-4">
            <div className="email-wrapper">
              <div className="relative">
                <InputField
                  type="email"
                  value={Email}
                  label={Values.Email}
                  name={Values.Email}
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
                  type="password"
                  value={Password}
                  label={Values.Password}
                  name={Values.Password}
                  onChange={handleOnChange}
                />
                <div className="absolute right-4 bottom-0">
                  <i>{visibilityIcon()}</i>
                </div>
              </div>
            </div>
            <div className="confirm-password-wrapper">
              <div className="relative">
                <InputField
                  type="password"
                  value={ConfirmPassword}
                  label={Values.ConfirmPassword}
                  name={Values.ConfirmPassword}
                  onChange={handleOnChange}
                />
                <div className="absolute right-4 bottom-0">
                  <i>{visibilityIcon()}</i>
                </div>
              </div>
            </div>
          </div>
          <div className="submit-btn my-4">
            <button className="w-full py-3.5 rounded-md border-0 bg-[#6757f6] text-white">
              {Values.SignUp}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
