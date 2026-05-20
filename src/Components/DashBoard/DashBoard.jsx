import React from "react";
import "./DashBoard.css";
import d1 from "../../assets/d1.png";
import LeftSection from "../LeftSection/LeftSection";
import axios from 'axios';
import { useEffect } from "react";
function DashBoard() {
  const token=localStorage.getItem("token");
  console.log("DashBoard_access_token",token);

  async function getDashboard(e){
    console.log("getDashboard",e);
    try {
      const response=await axios.get("http://localhost:9000/DashBoard",{
        headers:{
          method: "GET",
          "Authorization":`${token}`
        }
      });
      console.log("response",response);
      
    } catch (error) {
      console.log("error",error.message);

    }
  }

  async function getOrders(e){
    console.log("getOrders",e);
    try {
      const response=await axios.get("http://localhost:9000/Orders",{
        headers:{
          method: "GET",
          "Authorization":`${token}`
        }
      });
      console.log("response",response);
      
    } catch (error) {
      console.log("error",error.message);

    }
  }

  async function getHoldings(e){
    console.log("getHoldings",e);
    try {
      const response=await axios.get("http://localhost:9000/Holdings",{
        headers:{
          method: "GET",
          "Authorization":`${token}`
        }
      });
      console.log("response",response);
      
    } catch (error) {
      console.log("error",error.message);

    }
  }

  useEffect(()=>{
    getDashboard();
    getOrders();
    getHoldings();
  },[]);
  return (
    <>
      <div className="main-container">
        <div className="left-bar">
          <LeftSection />
        </div>

        <div className="right-bar">
          <div id="name-heading">
            <h2 id="heading">Hi, Hari</h2>
            <div className="horizontal-line"></div>
          </div>
          <div className="equity-commodity">
            <div> equity</div>
            <div>commodity</div>
          </div>

          <div className="Box1-2-3-4">
            <div>
              <h1>450.01</h1>
              <h6>Margin Available</h6>
            </div>
            <div className="divider"></div>
            <div>
              <p>Margin Used:0 </p>
              <p>opening Balance:450.01</p>
            </div>
            <div className="divider"></div>

            <div>
              <h1>0</h1>
              <p>margin Available</p>
            </div>
            <div>
              <p>Margin Used:0</p>
              <p>Opening balance:0</p>
            </div>
          </div>

          <div className="horizontal-line"></div>

          <div className="holdings">
            <h3 id="holdings">Holdings(26)</h3>
          </div>

          <div className="holding-below">
            <div>
              <h1>54.5K</h1>
              <p>P&L</p>
            </div>
            <div>
              <p>Current Value:45.4L</p>
              <p>Investment Value:35.3L</p>
            </div>
          </div>

          <div>
            <img id="mixedcolor" className="d1.png" src={d1} alt="d1" />
          </div>
          <div className="holding_below-below">
            <h3>₹ 45,456.23</h3>
          </div>

          <div className="horizontal-line"></div>
        </div>
        
      </div>
    </>
  );
}
export default DashBoard;
