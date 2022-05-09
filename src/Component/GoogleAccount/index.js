import { useGoogleLogin } from "react-google-login";
import { TokenGenerator } from "../../Shared/Token";
import { google } from "../../Shared/Icons";

const GoogleAccount = () => {
  const clientId =
    "1029915896475-es4lmj1kqptslbqd16ti5s282ou2mj0p.apps.googleusercontent.com";

  const onSuccess = (res) => {
    console.log(res.profileObj);
    TokenGenerator(res);
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
