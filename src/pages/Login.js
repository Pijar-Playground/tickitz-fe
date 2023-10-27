import "../style/Auth.css";
import "../style/Auth.mobile.css";
import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState(null);

  React.useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("profile")) {
      navigate("/");
    }
  }, []);

  const handleLogin = () => {
    setIsLoading(true);
    setErrMsg(null);

    axios
      .post("https://tickitz-be.onrender.com/v1/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        const token = response?.data?.data?.token;
        const profile = response?.data?.data?.result;

        localStorage.setItem("token", token);
        localStorage.setItem("profile", JSON.stringify(profile));
        setIsSuccess(true);

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        const errEmail = error?.response?.data?.messages?.email?.message;
        const errPassword = error?.response?.data?.messages?.password?.message;

        setIsSuccess(false);
        setErrMsg(
          errEmail ??
            errPassword ??
            error?.response?.data?.messages ??
            "Something wrong in our app"
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div id="page_login" style={{ overflow: "hidden" }}>
      <div className="row">
        {/* Left Content */}
        <div className="col col-md-7">
          <div
            style={{
              width: "100%",
              height: "100vh",
              backgroundImage: "url('/images/background/background-auth.jpg')",
              backgroundSize: "cover",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Link to="/">
              <img src="/images/logo-white.png" width="500px" height="190px" />
            </Link>
            <p style={{ fontSize: "48px", color: "white" }}>
              wait, watch, wow!
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="col col-md-5">
          <div
            className="pe-5 p-4"
            style={{
              display: "flex",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <div style={{ width: "100%" }}>
              <h1 style={{ fontSize: "48px" }}>Sign In</h1>
              <p
                style={{
                  color: "#AAAAAA",
                  fontSize: "18px",
                  marginBottom: "30px",
                }}
              >
                Sign in with your data that you entered during your registration
              </p>

              {isSuccess ? (
                <div class="alert alert-success" role="alert">
                  Login success, please wait for redirect to our app.
                </div>
              ) : null}

              {errMsg ? (
                <div class="alert alert-danger" role="alert">
                  {errMsg}
                </div>
              ) : null}

              <div className="mb-4">
                <label className="form-label">Email</label>
                <input
                  className="form-control form-control-lg"
                  placeholder="Write your email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Password</label>
                <input
                  className="form-control form-control-lg"
                  placeholder="Write your password"
                  type="password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>

              <div className="d-grid mb-4">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={handleLogin}
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Sign In"}
                </button>
              </div>

              <p className="text-center">
                Forgot your password ?
                <Link to="/forgot-account" style={{ color: "#5F2EEA" }}>
                  {" "}
                  Reset now
                </Link>
              </p>

              <p className="text-center">
                Don’t have an account ?
                <Link to="/register" style={{ color: "#5F2EEA" }}>
                  {" "}
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
