import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import kite from "../../assets/kite_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  // const [Response , setsucResponse]=useState('');

  function handleusername(e) {
    console.log(e.target.value);
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    console.log(e.target.value);
    setpassword(e.target.value);
  }
  async function handlelogin() {
    if (!email || !password) {
      toast.error("All fields are required!");
      return;
    }
    try {
      const response = await axios.post("http://localhost:9000/login", {
        email,
        password,
      });

      navigate("/send-otp", {
        state: {
          email: response.data.email,
        },
      });
      toast.success("Login successfully");
      console.log("response",response);
      // const token = url.data.access_token;
      // localStorage.setItem("token", token);
      // console.log("Access Token:", token);

      // if(token){
      //     toast.success("Login Successfully!");
      //     Navigate("/dashboard");
      // }
      // if(token){
      //     toast.success("Invalid Credetials!");
      //    return;
      // }
    } catch (error) {
      console.error("There was an error!", error.message);
      toast.error("Invalid credentials");
    }
  }

  return (
    <>
      <div className="body-container">
        <div className="login-container">
          <div className="image-container">
            <img className="kite" src={kite} alt="kite" />
          </div>
          <div className="heading-container">
            <p className="login-heading">Login to Kite</p>
          </div>
          <div className="input-container1">
            <input
              type="text"
              id="input-form"
              value={email}
              placeholder="Email or User ID"
              onChange={handleusername}
            />
            <br />
          </div>
          <div className="input-container2">
            <input
              type="password"
              id="input-form"
              value={password}
              placeholder="Password"
              onChange={handlePassword}
            />
            <br />
          </div>
          <div className="button-container">
            <button className="login-button" onClick={handlelogin}>
              Login
            </button>
            <br />
          </div>
          <div className="forgot-container">
            <a id="forgot-password" href="#">
              Forgot user ID or password?
            </a>
            <br />
          </div>
          <div className="signup-container">
            <Link id="Sign-up" to="/signUp">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
