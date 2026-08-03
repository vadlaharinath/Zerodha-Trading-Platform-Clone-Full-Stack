import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import DashBoard from './Components/DashBoard/DashBoard';
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import Orders from './Components/Orders/Orders';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Holdings from './Components/Holdings/Holdings';
import Bits from './Components/Bits/Bits';
import Funds from './Components/Funds/Funds';
import Positions from './Components/Positions/Positions';
import OrdersHome from './Components/OrdersNested/OrdersHome';
import GTT from './Components/OrdersNested/GTT';
import Baskets from './Components/OrdersNested/Baskets';
import SIP from './Components/OrdersNested/SIP';
import Alerts from './Components/OrdersNested/Alerts';
import All from './Components/HoldingsNested/All';
import Equity from './Components/HoldingsNested/Equity';
import MutualFunds from './Components/HoldingsNested/MutualFunds';
import SignUp from './Components/SignUp/SignUp';
import { ToastContainer } from "react-toastify";
import SendOtp from './Components/Otp-section/SendOtp';

// import LeftSection from './Components/LeftSection/LeftSection';

function App() {
  const location = useLocation();


  return (
    <>
      {
        (location.pathname === "/" || location.pathname === "/login" || location.pathname === "/signUp" ||location.pathname === "/send-otp" ? null : <NavBar />)
      }
      {/* {
        (location.pathname === "/Orders/OrdersHome" || location.pathname === "/Orders/GTT" || location.pathname === "/Orders/Baskets" || location.pathname === "/Orders/SIP" || location.pathname === "/Orders/Alerts"? null : <Orders />)
      } */}




      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/send-otp" element={<SendOtp />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/Orders" element={<Orders />}>
          {/* <Route index element={<Orders/>}/> */}
          <Route path="OrdersHome" element={<OrdersHome />} />
          <Route path="GTT" element={<GTT />} />
          <Route path="Baskets" element={<Baskets />} />
          <Route path="SIP" element={<SIP />} />
          <Route path="Alerts" element={<Alerts />} />
        </Route>

        <Route path="Holdings" element={<Holdings />}>
          <Route path="All" element={<All />} />
          <Route path="Equity" element={<Equity />} />
          <Route path="MutualFunds" element={<MutualFunds />} />
        </Route>

        <Route path="/Positions" element={<Positions />} />
        <Route path="/Bits" element={<Bits />} />
        <Route path="/Funds" element={<Funds />} />


      </Routes>
       <ToastContainer />



    </>
  )
}

export default App;
