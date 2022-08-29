import Login from "./login";
import React from 'react'
export default function UserVerification() {
  return (
    <div className="verification">
      <div className="verification-container">
        <p>* Replace Here with Logo</p>
        <div className="verification-container__selection">
          <button className="">Sign In</button>
          <button className="">Sign Up</button>
        </div>
        <Login />
        <button className="verification-container__submit">Login</button>
        <div className="verification-container__footer">
          <p>Forgot Password ?</p>
        </div>
      </div>
    </div>
  );
}
