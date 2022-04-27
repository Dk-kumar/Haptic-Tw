import { Link } from "react-router-dom";
import { Values } from "../../../Constant/formConst";
import InputField from "../../../Component/Fields";
import { visibilityIcon, visibilityOffIcon } from "../../../Shared/Icons";

const SignInForm = (props) => {
  const { isShowIcon } = props;
  const { handleIcons } = props;

  const renderHeader = () => {
    return (
      <div className="form-header mb-6">
        <h2 className="my-1 text-3xl">{Values.SignIn}</h2>
        <span className="form-link text-lg">
          {Values.SignUpLink}{" "}
          <Link className="no-underline" to="/">
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
            className="flex flex-row-reverse gap-2 items-center justify-end"
            label={Values.Email}
          />
          <InputField
            type="checkbox"
            value="Phone"
            className="flex flex-row-reverse gap-2 items-center justify-end"
            label={Values.PhoneNumber}
          />
          <InputField
            type="checkbox"
            value="Username"
            className="flex flex-row-reverse gap-2 items-center justify-end"
            label={Values.UserName}
          />
        </div>
      </div>
    );
  };

  const renderIcons = (fieldType) => {
    return (
      <i onClick={() => handleIcons()}>
        {fieldType ? visibilityOffIcon() : visibilityIcon()}
      </i>
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
        <div className="form-middle flex flex-col gap-4 justify-center">
          {loginOptions()}
          <div className="user-wrapper">
            <InputField
              type="text"
              // value={Email}
              label={Values.UserId}
              name={Values.UserId}
              required={true}

              // onChange={handleOnChange}
            />
          </div>
          <div className="password-wrapper">
            <div className="relative">
              <InputField
                type={isShowIcon ? "text" : "password"}
                // value={Password}
                label={Values.Password}
                name={Values.Password}
                required={true}
                // onChange={handleOnChange}
              />
              <div className="absolute right-4 bottom-0">
                {renderIcons(isShowIcon)}
              </div>
            </div>
          </div>
          {formBottom()}
          <div className="submit-btn my-4">
            <button className="w-full py-3.5 rounded-md border-0 bg-primary text-white">
              {Values.SignIn}
            </button>
          </div>
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

export default SignInForm;
