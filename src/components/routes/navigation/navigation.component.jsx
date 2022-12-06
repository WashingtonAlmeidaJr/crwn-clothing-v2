import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { UserContext } from "../../../context/user.context";
import "./navigation.styles.scss";
import { signOutUser } from "../../utils/firebase/firebase.utils";


const Navigation = () => {
  const { currentUser,setCurrentUser } = useContext(UserContext);
  // console.log(currentUser)

  const signOutHandler= async()=>{
    await signOutUser()
    setCurrentUser(null)
  }


  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="links-container">
          <Link to="/shop">Shop</Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>Sign out</span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
