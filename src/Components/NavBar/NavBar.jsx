import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./NavBar.css";
import kite from "../../assets/kite_logo.png";
import shopping from "../../assets/shopping.svg";
import notification from "../../assets/notification.svg";
import userprofile from "../../assets/userprofile.svg";
function NavBar() {
   const navigate = useNavigate();
  function logOut() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <>
      <div className="navbar-container">
        <div className="left-navbar">
          <div className="left">
            <p className="nifty">NIFTY 50 </p>
            <p className="nifty-sub">25195.80</p>
          </div>
          <div className="right">
            <p className="sensex">SENSEX </p>
            <p className="sensex-sub"> 82570.91</p>
          </div>
        </div>
        <div>
          <div className="right-navbar">
            <div className="kite-logo">
              <img className="kite" src={kite} alt="kite" />
            </div>
            <div className="portifolio">
              <Link id="link" to="/DashBoard">
                DashBoard
              </Link>
              <Link id="link" to="/Orders">
                Orders
              </Link>
              <Link id="link" to="/Holdings">
                Holdings
              </Link>
              <Link id="link" to="/Positions">
                Positions
              </Link>
              <Link id="link" to="/Bits">
                Bits
              </Link>
              <Link id="link" to="/Funds">
                Funds
              </Link>
              <Link>
                <img
                  id="icons"
                  className="shopping-cart"
                  src={shopping}
                  alt="shopping_cart"
                />
              </Link>
              <Link>
                <img
                  id="icons"
                  className="notification"
                  src={notification}
                  alt="notification"
                />
              </Link>
              <Link>
                <img
                  id="icons"
                  className="userprofile"
                  src={userprofile}
                  alt="userprofile"
                />
              </Link>
              <p className="account">LQS377</p>
              <button id="button" onClick={logOut}>
                LogOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NavBar;
