/** @format */

import React from "react";
import "./Footer.css";
import LanguageIcon from "@mui/icons-material/Language";
import UsFlag from "../src/images/usflag.png";

function Footer() {
  return (
    <div className='footer'>
      <div className='top'>
        <p>Back to top</p>
      </div>
      <div className='bottom'>
        <div className='middle'>
          <div>
            <h3>Get to Know Us</h3>
            <div>Careers</div>
            <div>Amazon Newsletter</div>
            <div>About Amazon</div>
            <div>Sustainability</div>
            <div>Press Center</div>
            <div>Investor Relations</div>
            <div>Amazon Devices</div>
            <div>Amazon Science</div>
          </div>
          <div>
            <h3>Make Money with Us</h3>
            <div>Sell products on Amazon</div>
            <div>Sell apps on Amazon</div>
            <div>Supply to Amazon</div>
            <div>Become an Affiliate</div>
            <div>Become a Delivery Driver</div>
            <div>Start a package delivery business</div>
            <div>Advertise Your Products</div>
            <div>Self-Publish with Us</div>
            <div>Host an Amazon Hub</div>
            <div>See More Ways to Make Money</div>
          </div>
          <div>
            <h3>Amazon Payment Products</h3>
            <div>Amazon Rewards Visa Signature Cards</div>
            <div>Amazon Store Card</div>
            <div>Amazon Secured Card</div>
            <div>Amazon Business Card</div>
            <div>Shop with Points</div>
            <div>Credit Card Marketplace</div>
            <div>Reload Your Balance</div>
            <div>Amazon Currency Converter</div>
          </div>
          <div>
            <h3>Let Us Help You</h3>
            <div>Amazon and COVID-19</div>
            <div>Your Account</div>
            <div>Your Orders</div>
            <div>Shipping Rates &amp; Policies</div>
            <div>Amazon Prime</div>
            <div>Returns &amp; Replacements</div>
            <div>Manage Your Content and Devices</div>
            <div>Amazon Assistant</div>
            <div>Help</div>
          </div>
        </div>
        <hr />
        <div className='last-section'>
          <div>
            <img
              className='header__logo'
              src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            />
          </div>
          <div className='lan-button'>
            <button>
              <LanguageIcon className='languageIcon' style={{ fontSize: 15 }} />
              English
            </button>
          </div>
          <div>
            <button>
              <img src={UsFlag} alt='' /> United States
            </button>
          </div>
        </div>
        <hr />
        <div className='tigi'>
          <center>Built by: Tigist Tsega</center>
        </div>
      </div>
    </div>
  );
}

export default Footer;
