import React from "react"; 
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import { auth } from "./firebase";

function Header() {

  const [{basket,user}] = useStateValue();

  const handleAuthentication = () => {
    if(user)
    {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://i0.wp.com/zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White2.png?resize=561%2C160&ssl=1"
          alt="amazon_logo"
        />
      </Link>
      {/* amazon logo img */}

      <div className="header_search">
        {/* search bar */}
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        {/* navigation */}
        <Link to={!user && "/login"}> 
        {/* above line means if there were no user then push to login page*/}
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_option_one">Hello {!user ? 'Guest' : user.email}</span> 
            {/*ternary operator*/}
            <span className="header_option_two">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_option_one">Returns</span>
          <span className="header_option_two">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_option_one">Your</span>
          <span className="header_option_two">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <AddShoppingCartOutlinedIcon />
            <span className="header_option_two header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

/*imageURL : https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXZuDGFVOe79BjO-8m4YdbdpFQUHUUZNl0Qg&usqp=CAU*/


 