import { useContext } from "react";
import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import AuthContext from "../../context/authContext";
import ShoppingContext from "../../context/Shopping/shoppingContext";
import {auth} from '../Firebase';


const Header = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user } = shoppingContext;

  // const ctx = useContext(AuthContext);
     const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
     };

  return (
    <header className="header">
      <Link to="/">
        <img
          className="logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
        />
      </Link>

      <div className="header_search">
        <input className="header_input" type="text" />
        <SearchIcon className="search_icon" />
      </div>

      <div className="header_nav">
          <Link to={!user &&"/login"}>  
            <div className="header_option" onClick={handleAuthentication}>
                <span className="header_optionOne">Hello {!user ?
                 'Guests' : user.email}</span>
              <span className="header_optionTwo">{user ? 'Sign Out' : 
              'Sign In'}</span>
            </div> 
          </Link>
        <Link to="/orders">
        <div className="header_option">
          <span className="header_optionOne">Returns</span>
          <span className="header_optionTwo">& Orders</span>
        </div>
        </Link>

          <Link to="/prime">
          <div className="header_option">
          <span className="header_optionOne">Your</span>
          <span className="header_optionTwo">Prime</span>
        </div>
          </Link>
        <Link to="/checkout">
        <div className="header_optionBasket">
          <ShoppingBasketIcon className="basket_icon" />
          <span className="header_optionTwo header_basketCount">
            {basket?.length}
          </span>
        </div>
        </Link>
      </div>
    </header>
  );
};
export default Header;