import React from 'react'
export default function Login() {
  return (
    <div className="login">
      <div className="login-container">
        <div className="input-container">
          <input
            id="userNameInput"
            className="inputTextBox"
            type="text"
            placeholder=" "
            autocomplete = "off"
          ></input>
          <label
            id="userName-placeholder"
            className="floating-placeholder"
            for="userNameInput"
          >
            Username
          </label>
        </div>
        <div className="input-container">
          <input
            id="passWord"
            className="inputTextBox"
            type="password"
            placeholder=" "
            autocomplete = "off"
          ></input>
          <label
            id="passWord-placeholder"
            className="floating-placeholder"
            for="passWord"
          >
            Password
          </label>
        </div>
      </div>
    </div>
  );
}
