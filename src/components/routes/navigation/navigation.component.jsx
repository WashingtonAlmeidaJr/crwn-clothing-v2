import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { UserContext } from "../../../context/user.context";
import { CartContext } from "../../../context/cart.context";
import "./navigation.styles.scss";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";


const Navigation = () => {

  const { isCartOpen,setIsCartOpen } = useContext(CartContext);
   console.log(UserContext)

  const toggleIsCartOpen=()=>setIsCartOpen(!isCartOpen)


  const signOutHandler= async()=>{
    await signOutUser()
    // setCurrentUser(null)
  }


  return (
    <>
      <div className="navigation" onClick={toggleIsCartOpen}>
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="links-container">
          <Link to="/shop">Shop</Link>
          {UserContext.value ? (
            <span className="nav-link" onClick={signOutHandler}>Sign out</span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          <CartIcon/>
        </div>
        {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
