/** @format */

import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartTwoToneIcon from "@mui/icons-material/AddShoppingCartTwoTone";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import UsFlag from "../src/images/usflag.png";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const navigate = useNavigate();
  const [{ cart }, dispatch] = useStateValue();
  const [page, refreshPage] = useState();

  let user = auth.currentUser;
  const handleAuthentication = () => {
    auth.signOut();
    
    //console.log("sign out clicked, ", auth);npm start
    
    refreshPage({});
    navigate("/");

    window.location.reload(false);
  };

  return (
    <>
      <div className='header'>
        <div className='header__nav-left'>
          <Link to='/'>
            <img
              className='header__logo'
              src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
              alt='logo'
            />
          </Link>

          <div className='header__selectLocation'>
            <span className='header__locationIcon'>
              <LocationOnOutlinedIcon className='LocationOnOutlinedIcon' />
            </span>

            <div className='header__option'>
              <span className='header__optionLineOne'>
                {user ? `Deliver to ${user?.email}` : "Hello"}
              </span>
              <span className='header__optionLineTwo'>
                {user ? `Katy Texas` : "Select your address"}
              </span>
            </div>
          </div>
        </div>
        <div className='header__search'>
          <div className='header__searchOption'>
            <select className='header__dropdown'>
              <option value='all-departments'>All</option>
              <option value='amazon-devices'>Amazon Devices</option>
              <option value='amazon-explorations'>Amazon Explore</option>
              <option value='amazon-pharmacy'>Amazon Pharmacy</option>
              <option value='Beauty'>Amazon Warehouse</option>
              <option value='Clothes'>Appliances</option>
              <option value='Beauty'>Cell Phones &amp; Accessories</option>
              <option value='Clothes'>Clothing, Shoes &amp; Jewelry</option>
            </select>
          </div>

          <input className='header__searchInput' />
          <SearchIcon className='header__searchIcon' />
        </div>
        <div className='header__nav-right'>
          <div className='header__flag'>
            <img src={UsFlag} alt='flag' />
            <ArrowDropDownIcon className='ArrowDropDownIcon' />
            <ul className='header__language hide'></ul>
          </div>

          <div className='header__option  header__option_popup'>
            <span className='header__optionLineOne '>
              Hello, {!user ? "Sign in" : user.email}{" "}
            </span>

            <span
              style={{
                marginTop: "-8px",
              }}
              className='header__optionLineTwo'>
              Account &amp; List
              <ArrowDropDownIcon className='ArrowDropDownIcon' />
            </span>
            <div className='header__userAccount'>
              <div className='header__userSignedOut'>
                {!user && (
                  <>
                    <Link to='/login'>
                      <button>Sign in</button>
                    </Link>
                    <p>
                      New customer? &nbsp;
                      <span>
                        <Link className='link' to='/login'>
                          Start here.
                        </Link>
                      </span>
                    </p>
                  </>
                )}
              </div>
              <div className='header__accountList'>
                <div>
                  <ul className='header__accountList1'>
                    <h3>Your Lists</h3>
                    <li>Create a List</li>
                    <li>Find a List or Resgister</li>
                    <li>AmazonSmile Charity Lists</li>
                  </ul>
                </div>
                <div>
                  <ul className='header__accountList2'>
                    <h3> Your Account</h3>
                    <li>Account</li>
                    <li>Orders</li>
                    <li>Recommendations</li>
                    <li>Browsing history</li>
                    <li>Watchlist</li>
                    <li>Kindle Unlimited</li>
                    <li>Contenet &amp; Save Items</li>
                    <li>Prime Membership</li>
                    <li>Music Library</li>
                    <li>Custommer Service</li>
                    <li
                      onClick={handleAuthentication}
                      className='header__accountList2_signout'>
                      Sign out
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Link to='/orders' className='header__clearlink'>
            <div className='header__option'>
              <span className='header__optionReturns'>Returns</span>
              <span className='header__optionOrders'>&amp; Orders</span>
            </div>
          </Link>
          <div
            onClick={() => {
              navigate("/checkout");
            }}
            className='header__option'>
            <span className='header__itemsNumber'>{cart.length}</span>
            <AddShoppingCartTwoToneIcon className='AddShoppingCartTwoToneIcon' />
          </div>
        </div>
      </div>
      <div className='headerBottom'>
        <ul className='headerBottom__nav'>
          <li>Best Sellers</li>
          <li>Amazon Basics</li>
          <li>New Releases</li>
          <li>Today's Deals</li>
          <li>Customer Service</li>
          <li>Prime</li>
          <li>Books</li>
          <li>Music</li>
          <li>Amazon Home</li>
          <li>Link</li>
          <li>Registry</li>
          <li>Kindle Books</li>
          <li> Fashion</li>
          <li> </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
