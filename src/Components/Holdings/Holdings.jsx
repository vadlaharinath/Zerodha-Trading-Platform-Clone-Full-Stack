import React, { useEffect } from 'react';
import LeftSection from "../LeftSection/LeftSection";
import { Link } from 'react-router-dom';
import './Holdings.css';
import axios from 'axios';

function Holdings() {
      const token = localStorage.getItem("token");
  console.log("Orders_access_token", token);
      async function getHoldings(e) {
    console.log("getHoldings", e);
    try {
      const response = await axios.get("http://localhost:9000/Holdings", {
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
    getHoldings();
  },[])
    return (
        <div className="main-container">
            <div className="left-bar">
                <LeftSection/>
            </div>
            <div className="right-bar">
                <div className="Nested-holdings">
                    <Link to="/Holdings/All">All</Link>
                    <Link to="/Holdings/Equity">Equity</Link>
                    <Link to="/Holdings/MutualFunds">Mutual Funds</Link>
                </div>
                <div className="holdings-header">
                    <div>
                        <span className="holdings-title">Holdings (26)</span>
                        <select className="holdings-select">
                            <option>All equity</option>
                            <option>Mutual funds</option>
                        </select>
                    </div>
                    <input className="holdings-search" type="text" placeholder="Search" />
                </div>
                <div className="holdings-summary">
                    <div>
                        <span>Total investment</span>
                        <div className="holdings-value">3,96,851.20</div>
                    </div>
                    <div>
                        <span>Current value</span>
                        <div className="holdings-value">4,51,805.75</div>
                    </div>
                    <div>
                        <span>Day's P&amp;L</span>
                        <div className="holdings-value green">3,230.35 <span className="small">+0.72%</span></div>
                    </div>
                    <div>
                        <span>Total P&amp;L</span>
                        <div className="holdings-value green">54,954.55 <span className="small">+13.85%</span></div>
                    </div>
                </div>
                <table className="holdings-table">
                    <thead>
                        <tr>
                            <th>Instrument</th>
                            <th>Qty.</th>
                            <th>Avg. cost</th>
                            <th>LTP</th>
                            <th>Invested</th>
                            <th>Cur. val</th>
                            <th>P&amp;L</th>
                            <th>Net chg.</th>
                            <th>Day chg.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ADANIENT</td><td>20</td><td>2,197.84</td><td>2,648.35</td><td>43,956.75</td><td>52,967.00</td><td className="green">9,010.25</td><td className="green">+20.50%</td><td className="green">+2.41%</td>
                        </tr>
                        <tr>
                            <td>ADANIGREEN</td><td>21</td><td>946.97</td><td>1,015.75</td><td>19,886.45</td><td>21,330.75</td><td className="green">1,444.30</td><td className="green">+7.26%</td><td className="green">+2.38%</td>
                        </tr>
                        <tr>
                            <td>ADANIPORTS</td><td>12</td><td>1,125.83</td><td>1,440.00</td><td>13,509.90</td><td>17,280.00</td><td className="green">3,770.10</td><td className="green">+27.91%</td><td className="green">+0.75%</td>
                        </tr>
                        <tr>
                            <td>ADANIPOWER</td><td>100</td><td>492.90</td><td>584.25</td><td>49,290.00</td><td>58,425.00</td><td className="green">9,135.00</td><td className="green">+18.53%</td><td className="green">+1.06%</td>
                        </tr>
                        <tr>
                            <td>CRISIL</td><td>3</td><td>4,274.53</td><td>6,049.50</td><td>12,823.60</td><td>18,148.50</td><td className="green">5,324.90</td><td className="green">+41.52%</td><td className="green">+1.72%</td>
                        </tr>
                        <tr>
                            <td>DRREDDY</td><td>3</td><td>1,247.10</td><td>1,303.00</td><td>3,741.30</td><td>3,909.00</td><td className="green">167.70</td><td className="green">+4.48%</td><td className="red">-1.38%</td>
                        </tr>
                        <tr>
                            <td>GPIL</td><td>50</td><td>182.19</td><td>190.00</td><td>9,109.50</td><td>9,500.00</td><td className="green">390.50</td><td className="green">+4.29%</td><td className="green">+0.68%</td>
                        </tr>
                        <tr>
                            <td>GREENPOWER</td><td>600</td><td>12.83</td><td>14.16</td><td>7,698.00</td><td>8,496.00</td><td className="green">798.00</td><td className="green">+10.37%</td><td className="red">-0.21%</td>
                        </tr>
                        <tr>
                            <td>HAVELLS</td><td>10</td><td>1,579.60</td><td>1,568.40</td><td>15,796.00</td><td>15,684.00</td><td className="red">-112.00</td><td className="red">-0.71%</td><td className="green">+0.36%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Holdings;