import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Actions from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./loginpage.css";

export default function LoginPage() {
  // Identification du nom
  const [userNameState, setUserName] = useState(false);
  // Mot de passe
  const [passwordState, setPasswordState] = useState(false);
  // Remember
  const [rememberState, setRememberState] = useState(false);
  // Error message identification
  const [errorState, setErrorState] = useState(false);

  const isAuth = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onUsernameChange = (e) => {
    let userNameValue = e.target.value;
    setUserName(userNameValue);
  };

  const onPasswordChange = (e) => {
    let userPasswordValue = e.target.value;
    setPasswordState(userPasswordValue);
    console.log(userPasswordValue);
  };

  const onRememberChange = (e) => {
    let userRememberValue = e.target.checked;
    setRememberState(userRememberValue);
  };
  const onFormSubmitFunction = (e) => {
    e.preventDefault();
    if (userNameState === false || passwordState === false) {
      setErrorState(true);
      setTimeout(function () {
        document.querySelector(".error-message").style.display = "none";
        setErrorState(false)
      }, 3000);
    } else {
      axios
        .post("http://localhost:3001/api/v1/user/login", {
          email: userNameState,
          password: passwordState,
        })
        .then((result) => {
          if (result.data.status === 200) {
            dispatch(
              Actions.userAction.logIn({
                loggedin: true,
                token: result.data.body.token,
                user: result.data.body.user,
              })
            );
            navigate("/profile");
          }
        })
        .catch((error) => {
          setErrorState(true);
          setTimeout(function () {
            document.querySelector(".error-message").style.display = "none";
            setErrorState(false)
          }, 3000);
        });
    }
  };

  return (
    <div>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon1"></i>
          <h1>Sign In</h1>
          {errorState ? (
            <div className="error-message">
              Signin failed
              <br />
              You must cleck your usename and password.
            </div>
          ) : null}
          <form onSubmit={onFormSubmitFunction}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" onChange={onUsernameChange} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={onPasswordChange}
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                onChange={onRememberChange}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button
              type="submit"
              className="sign-in-button"
              style={{ cursor: "pointer" }}
            >
              Sign In
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
