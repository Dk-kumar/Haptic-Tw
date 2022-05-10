import { useGoogleLogin } from "react-google-login";
import { google } from "../../Shared/Icons";

const GoogleAccount = (props) => {
  const clientId =
    "1029915896475-es4lmj1kqptslbqd16ti5s282ou2mj0p.apps.googleusercontent.com";

  const onSuccess = (res) => {
    const { JWTTokan = "" } = props;
    res.profileObj["Jwt"] = JWTTokan;
    console.log(res.profileObj);
  };

  const onFailure = (res) => {
    console.log("login failed:", res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });

  return <div onClick={signIn}>{google()}</div>;
};

export default GoogleAccount;
