import React, { useState } from "react";
import image from "../assests/mobility.jpg";
import "../styles/register.css";
import { Snackbar } from "@material-ui/core";
// import CircularProgress from "@material-ui/core/CircularProgress";
import validator from "email-validator";
import { useHistory,NavLink } from "react-router-dom";
// import Dialog from "@material-ui/core/Dialog";
// import DialogContent from "@material-ui/core/DialogContent";
const Register = () => {
  const [alert, setAlert] = useState({ showSnackbar: false, message: "" });
  // const [dialog, setDialoag] = useState(false);
  const [userData, setUserdata] = useState({
    username: "",
    mobile: "",
    email: "",
    password: "",
  });

  const closeSnack = () => {
    setAlert({
      showSnackbar: false,
    });
  };
const history = useHistory()
  const registerUser = (e) => {
    e.preventDefault();
    if (userData.username === "") {
      setAlert({
        showSnackbar: true,
        message: "Please enter username",
      });
    } else if (userData.mobile.length > 10) {
      setAlert({
        showSnackbar: true,
        message: "Please enter a valid mobile number",
      });
    } else if (userData.email === "") {
      setAlert({
        showSnackbar: true,
        message: "Please enter a email",
      });
    } else if (!validator.validate(userData.email)) {
      setAlert({
        showSnackbar: true,
        message: "Please enter a valid email",
      });
    } else if (userData.password.length < 8) {
      setAlert({
        showSnackbar: true,
        message: "Password must be 8 character",
      });
    } else {
      localStorage.setItem("credientials", JSON.stringify(userData));
      setAlert({
        showSnackbar: true,
        message: "User created successfully",
      });
      window.location.replace("/")
    }
  
    // setDialoag(false);
  };
  return (
    <div className="register">
      <img src={image} alt="Image" />
      <form className="register_from">
        <input
          type="text"
          className="register_input"
          placeholder="Enter your name"
          value={userData.username}
          onChange={(e) =>
            setUserdata({ ...userData, username: e.target.value })
          }
        />
        <input
          type="text"
          className="register_input"
          placeholder="Enter your mobile number"
          value={userData.mobile}
          onChange={(e) => setUserdata({ ...userData, mobile: e.target.value })}
        />
        <input
          type="email"
          className="register_input"
          placeholder="Enter your email"
          value={userData.email}
          onChange={(e) => setUserdata({ ...userData, email: e.target.value })}
        />
        <input
          type="password"
          className="register_input"
          placeholder="Choose password"
          value={userData.password}
          onChange={(e) =>
            setUserdata({ ...userData, password: e.target.value })
          }
        />
        <input
          type="submit"
          className="register_btn"
          value="Register"
          onClick={registerUser}
        />
        <NavLink to="/login" style={{textDecoration:"none",marginLeft:"5vw"}}><p>Already have an account ?</p></NavLink>
      </form>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        autoHideDuration={3000}
        open={alert.showSnackbar}
        onClose={closeSnack}
        message={alert.message}
      />
      {/* <Dialog open={dialog} onClose={closeDialog}>
        <DialogContent>
          <CircularProgress color="secondary" />
          <p style={{ fontFamily: "cursive", color: "blue" }}>Wait..</p>
        </DialogContent>
      </Dialog> */}
    </div>
  );
};

export default Register;
