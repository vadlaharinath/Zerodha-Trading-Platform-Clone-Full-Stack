import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./SendOtp.css";

function SendOtp() {
  const location = useLocation();
  const email = location.state?.email;

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  async function otpsend() {
    try {
      const response = await axios.post(
        "http://localhost:9000/auth/send-otp",
        { email }
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (email) {
      otpsend();
    }
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;

    // Allow only one number
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const verifyOtp = async () => {
    const finalOtp = otp.join("");

    if (finalOtp.length !== 6) {
      return alert("Please enter 6 digit OTP");
    }

    console.log(finalOtp);

    // Backend API
    const response = await axios.post(
      "http://localhost:9000/auth/verify-otp",
      {
        email,
        otp: finalOtp
      }
    );
    console.log("verify-otp-response",response);
  };

  return (
    <div className="otp-main">
      <div className="otp-card">

        <h2>Email Verification</h2>

        <p className="otp-text">
          OTP has been sent to
        </p>

        <input
          type="email"
          value={email}
          readOnly
          className="email-input"
        />

        <div className="otp-boxes">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="otp-input"
            />
          ))}
        </div>

        <button className="verify-btn" onClick={verifyOtp}>
          Verify OTP
        </button>

        <button className="resend-btn" onClick={otpsend}>
          Resend OTP
        </button>

      </div>
    </div>
  );
}

export default SendOtp;


