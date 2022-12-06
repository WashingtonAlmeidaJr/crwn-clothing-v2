import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignInForm from "../../sign-in-form/sign-in-form.component.jsx";
import SignUpForm from "../../sign-up-form/sign-up-form.component.jsx";
import "./authentication.styles.scss";
const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    //could use the signInWithGoogleRedirect instead
    console.log({ user });
  };

  return (
    <>
      <h1>Sign In Page</h1>
      <div className="forms-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </>
  );
};

export default Authentication;
