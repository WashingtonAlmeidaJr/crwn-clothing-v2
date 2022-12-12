import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import { AuthenticationContainer } from "./authentication.styles";
const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    //could use the signInWithGoogleRedirect instead
    console.log({ user });
  };

  return (
    <AuthenticationContainer>
      <h1>Sign In Page</h1>
      <div className="forms-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </AuthenticationContainer>
      );
};

export default Authentication;
