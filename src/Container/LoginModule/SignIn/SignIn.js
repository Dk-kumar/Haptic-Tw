import { Link } from "react-router-dom";
import { Values } from "../../../Constant/formConst";
import InputField from "../../../Component/Fields";
import GoogleAccount from "../../../Component/GoogleAccount";
import {
  visibilityIcon,
  visibilityOffIcon,
  faceBook,
  gitHub,
} from "../../../Shared/Icons";

const JWTTokan = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`;

const SignInForm = (props) => {
  const { isShowIcon, userInputs, handleError, isSubmit } = props;
  const { handleIcons, handleOnChange, isFormValid, onSubmit } = props;

  let { isEmail, isPhone, isUserName, UserId, Password } = userInputs;

  const renderHeader = () => {
    return (
      <div className="form-header mb-6">
        <h2 className="my-1 text-3xl">{Values.SignIn}</h2>
        <span className="form-link text-lg">
          {Values.SignUpLink}{" "}
          <Link className="no-underline" to="/signup">
            {Values.SignUp}
          </Link>
        </span>
      </div>
    );
  };

  const loginOptions = () => {
    return (
      <div className="login-option">
        <div>
          <p>Select preffered sign in option</p>
        </div>
        <div className="flex flex-col justify-start">
          <InputField
            type="checkbox"
            value="Email"
            checked={isEmail}
            className="flex flex-row-reverse gap-2 items-center justify-end"
            label={Values.Email}
          />
          <InputField
            type="checkbox"
            value="Phone"
            checked={isPhone}
            className="flex flex-row-reverse gap-2 items-center justify-end"
            label={Values.PhoneNumber}
          />
          <InputField
            type="checkbox"
            value="Username"
            checked={isUserName}
            className="flex flex-row-reverse gap-2 items-center justify-end"
            label={Values.UserName}
          />
        </div>
      </div>
    );
  };

  const renderError = (value) => {
    return <span className="p-1 text-red-600">{value}</span>;
  };

  const renderIcons = (fieldType) => {
    return (
      <i onClick={() => handleIcons()}>
        {fieldType ? visibilityOffIcon() : visibilityIcon()}
      </i>
    );
  };

  const rendetSocialSignin = () => {
    return (
      <div className="social-login mt-5 flex justify-evenly">
        <div className="icon">
          <GoogleAccount JWTTokan={JWTTokan} />
        </div>
        <div className="icon">{faceBook()}</div>
        <div className="icon">{gitHub()}</div>
      </div>
    );
  };

  const formBottom = () => {
    return (
      <div className="bottom-links flex justify-between">
        <InputField
          type="checkbox"
          value=""
          className="flex flex-row-reverse gap-2 items-center"
          label={Values.RememberMe}
        />
        <p className="forgot-password">{Values.ForgotPassword}</p>
      </div>
    );
  };
  return (
    <form>
      <div className="signin-wrapper">
        {renderHeader()}
        <div className="flex flex-col gap-4 justify-center">
          <div>{loginOptions()}</div>

          <div>
            <InputField
              type="text"
              value={UserId}
              label={Values.UserId}
              name={Values.UserId_name}
              required={true}
              border={handleError?.UserId}
              onChange={handleOnChange}
              onBlur={() =>
                isFormValid(Values.UserId_name, UserId, Values.U_IdError)
              }
            />
            {renderError(handleError?.UserId)}
          </div>
          <div className="password-wrapper">
            <div className="relative">
              <InputField
                type={isShowIcon ? "text" : "password"}
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
                {renderIcons(isShowIcon)}
              </div>
            </div>
            {renderError(handleError?.Password)}
            {formBottom()}
          </div>
          <div className="submit-btn my-4">
            <button
              type="button"
              className={`w-full py-3.5 rounded-lg border-0 bg-primary text-white ${
                isSubmit ? `opacity-100` : `opacity-25`
              } `}
              disabled={!isSubmit}
              onClick={onSubmit}
            >
              {Values.SignIn}
            </button>
          </div>
        </div>
        <div className="line-wrapper mt-4 flex justify-center items-center gap-2">
          <div className="lines"></div>
          <span>OR</span>
          <div className="lines"></div>
        </div>
        {rendetSocialSignin()}
      </div>
    </form>
  );
};

export default SignInForm;
