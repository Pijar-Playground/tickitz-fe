import axios from "axios";
import "../style/Auth.css";
import "../style/Auth.mobile.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [fullname, setFullname] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
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

  const handleRegister = () => {
    setIsLoading(true);
    setErrMsg(null);

    axios
      .post("https://tickitz-be.onrender.com/v1/auth/register", {
        email: email,
        password: password,
        fullname: fullname,
        phone_number: phoneNumber,
      })
      .then(() => {
        setIsSuccess(true);
      })
      .catch((error) => {
        const errFullname = error?.response?.data?.messages?.fullname?.message;
        const errEmail = error?.response?.data?.messages?.email?.message;
        const errPhoneNumber =
          error?.response?.data?.messages?.phone_number?.message;
        const errPassword = error?.response?.data?.messages?.password?.message;

        setIsSuccess(false);
        setErrMsg(
          errFullname ??
            errPhoneNumber ??
            errEmail ??
            errPassword ??
            "Something wrong in our app"
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div id="page_register" style={{ overflow: "hidden" }}>
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
              <h1 style={{ fontSize: "48px" }}>Sign Up</h1>
              <p
                style={{
                  color: "#AAAAAA",
                  fontSize: "18px",
                  marginBottom: "30px",
                }}
              >
                Fill your additional details
              </p>

              {isSuccess ? (
                <div class="alert alert-success" role="alert">
                  Register account success, please check your email.
                </div>
              ) : null}

              {errMsg ? (
                <div class="alert alert-danger" role="alert">
                  {errMsg}
                </div>
              ) : null}

              <div className="mb-4">
                <label className="form-label">Full Name</label>
                <input
                  className="form-control form-control-lg"
                  placeholder="Write your full name"
                  onChange={(event) => {
                    setFullname(event.target.value);
                  }}
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Phone Number</label>
                <input
                  className="form-control form-control-lg"
                  placeholder="Write your phone number"
                  onChange={(event) => {
                    setPhoneNumber(event.target.value);
                  }}
                />
              </div>

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
                  onClick={handleRegister}
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Sign Up"}
                </button>
              </div>

              <p className="text-center">
                Already have account ?{" "}
                <Link to="/login" style={{ color: "#5F2EEA" }}>
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
