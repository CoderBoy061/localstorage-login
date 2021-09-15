import React, { useEffect, useState } from "react";
import image from "../assests/mobility.jpg";
import "../styles/login.css";
import { Snackbar } from "@material-ui/core";
import validator from "email-validator";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [data, setData] = useState({});
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({ showSnackbar: false, message: "" });
  const closeSnack = () => {
    setAlert({
      showSnackbar: false,
    });
  };
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("credientials")));
    console.log(data);
  }, []);
  const history = useHistory();
  const loginUser = (e) => {
    e.preventDefault();
    if (username === "") {
      setAlert({
        showSnackbar: true,
        message: "Please enter your email",
      });
    } else if (password === "") {
      setAlert({
        showSnackbar: true,
        message: "Please enter your password",
      });
    } else if (!validator.validate(username)) {
      setAlert({
        showSnackbar: true,
        message: "Please enter a valid email",
      });
    } else if (password.length > 8) {
      setAlert({
        showSnackbar: true,
        message: "Password should be 8 character",
      })
    } else{
      if (username !== data.email) {
        setAlert({
          showSnackbar: true,
          message: "Invalid Credientials",
        });
      } else if (password !== data.password) {
        setAlert({
          showSnackbar: true,
          message: "Invalid Credientials",
        });
      } else {
        setAlert({
          showSnackbar: true,
          message: "Successfully login",
        });
        history.push("/list");
      }
    }
  };
  return (
    <div className="login">
      <img src={image} alt="Image" />
      <form className="login_form">
        <input
          type="email"
          className="login_input"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="login_input"
          placeholder="Enter Password "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          className="login_btn"
          value="Login"
          onClick={loginUser}
        />
        <NavLink to="/register"style={{textDecoration:"none",marginLeft:"5vw"}}><p>Don't have an account?</p></NavLink>
      </form>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        autoHideDuration={3000}
        open={alert.showSnackbar}
        onClose={closeSnack}
        message={alert.message}
      />
    </div>
  );
};

export default Login;
