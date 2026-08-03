import axios from "axios";
import React, { useState } from "react";
import "./SignUp.css";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate=useNavigate();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [panCard, setPanCard] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignUp() {
    if (!fullname || !email || !panCard || !number || !password) {
      toast.error("All fields are required!");
      return;
    }
    try {
      const res = await axios.post("http://localhost:9000/signUp", {
        fullname,
        email,
        panCard,
        number,
        password,
      });


      toast.success("Signup Successful!");
      console.log("response", res.data);
      navigate("/login")
    } catch (error) {
      console.log("error", error.message);
      toast.error("Signup Failed!");
    }
  }

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h1>Open a Free Demat Account</h1>

        <p className="subtitle">
          Start investing brokerage free and join millions of investors.
        </p>

        <div className="signup-form">
          <input
            type="text"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="PAN Card"
            value={panCard}
            onChange={(e) => setPanCard(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleSignUp}>SIGN UP</button>

          <div className="signup-container">
            <Link id="Sign-up" to="/login">
              Login In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
