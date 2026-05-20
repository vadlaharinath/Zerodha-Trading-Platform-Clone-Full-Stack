import React, { useEffect } from "react";
import "./Orders.css";
import { Outlet } from "react-router-dom";
import LeftSection from "../LeftSection/LeftSection";
import { Link } from "react-router-dom";
import axios from "axios";

function Orders() {
      const token = localStorage.getItem("token");
  console.log("Orders_access_token", token);

  async function getOrders(e) {
    console.log("getOrders", e);
    try {
      const response = await axios.get("http://localhost:9000/Orders", {
        headers: {
          method: "GET",
          Authorization: `${token}`,
        },
      });
      console.log("response", response);
    } catch (error) {
      console.log("error", error.message);
    }
  }
  useEffect(()=>{
    getOrders();
  },[])
  return (
    <div className="main-container">
      <div className="left-bar">
        <LeftSection />
      </div>
      <div className="Orders-right-bar">
        <div className="Nested-orders">
          <div>
            <Link to="/Orders/OrdersHome">OrdersHome</Link>
          </div>
          <div>
            <Link to="/Orders/GTT">GTT</Link>
          </div>
          <div>
            <Link to="/Orders/Baskets">Baskets</Link>
          </div>
          <div>
            <Link to="/Orders/SIP">SIP</Link>
          </div>
          <div>
            <Link to="/Orders/Alerts">Alerts</Link>
          </div>
        </div>
        <hr />
        <div>
          <Outlet />
        </div>

        <div className="orders-content">
          <h2 className="orders-title">Executed orders (3)</h2>
          <div className="orders-actions">
            <input className="orders-search" type="text" placeholder="Search" />
            <span className="orders-links">
              <a href="#">Contract note</a>
              <a href="#">View history</a>
              <a href="#">Download</a>
            </span>
          </div>
          <table className="orders-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Type</th>
                <th>Instrument</th>
                <th>Product</th>
                <th>Qty.</th>
                <th>Avg. price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12:24:27</td>
                <td>
                  <span className="order-type buy">BUY</span>
                </td>
                <td>
                  MAXHEALTH <span className="order-exchange">NSE</span>
                </td>
                <td>CNC</td>
                <td>0 / 1</td>
                <td>1,275.10</td>
                <td>
                  <span className="order-status cancelled">CANCELLED AMO</span>
                </td>
              </tr>
              <tr>
                <td>10:15:03</td>
                <td>
                  <span className="order-type sell">SELL</span>
                </td>
                <td>
                  RELIANCE <span className="order-exchange">NSE</span>
                </td>
                <td>CNC</td>
                <td>5 / 5</td>
                <td>2,500.00</td>
                <td>
                  <span className="order-status executed">EXECUTED</span>
                </td>
              </tr>
              <tr>
                <td>09:45:12</td>
                <td>
                  <span className="order-type buy">BUY</span>
                </td>
                <td>
                  TCS <span className="order-exchange">NSE</span>
                </td>
                <td>CNC</td>
                <td>2 / 2</td>
                <td>3,600.00</td>
                <td>
                  <span className="order-status executed">EXECUTED</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="orders-trades">
            <span>Trades ▼</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Orders;
