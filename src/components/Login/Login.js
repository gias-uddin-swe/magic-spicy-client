import React, { useContext } from "react";
import "./Login.css";
import google from "../../icons/Group 573.png";
import firebaseConfig from "./firebase.config";
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";

if (firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}
const Login = () => {
  const [user, setUser] = useContext(UserContext);
  console.log(user);
  const provider = new firebase.auth.GoogleAuthProvider();
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const credential = result.credential;
        const token = credential.accessToken;
        const user = result.user;
        const { displayName, email, imageURL } = user;
        const userInfo = {
          name: displayName,
          email: email,
          userImage: imageURL,
        };
        setUser(userInfo);
        history.replace(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
      });
  };

  return (
    <div className="text-center">
      <h1>This is Login Page</h1>

      <div className="container">
        <div className="login-area">
          <h2 className="mt-5">Login with</h2>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-dark login-btn mt-5"
          >
            <img src={google} alt="" />
            continue with google
          </button>
          <p className="mt-3 text-danger">
            Create account is not available for now
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
