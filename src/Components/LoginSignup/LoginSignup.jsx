import React from "react";
import "./LoginSignup.css";
import user_icon from "../Assets/person.png";
import mail_icon from "../Assets/images.png";
import password_icon from "../Assets/password.png";

export const LoginSignup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">SignUp</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} style={{height:"40px", width:"40px" }}  alt="UserIcon" />
          <input type="text" />
        </div>
        <div className="input">
          <img src={mail_icon} style={{height:"40px", width:"40px" }} alt="MailIcon" />
          <input type="email" />
        </div>
        <div className="input">
          <img src={password_icon} style={{height:"40px", width:"40px" }} alt="PasswordIcon" />
          <input type="password" />
        </div>
      </div>
    </div>
  );
};