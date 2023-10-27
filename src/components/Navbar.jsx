import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [profile, setProfile] = React.useState(
    JSON.parse(localStorage.getItem("profile"))
  );

  return (
    <>
      {/* <!-- navigation --> */}
      <nav className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-5">
          <img className="logo" src="/images/logo.png" alt="logo" />
          <Link className="d-desktop" id="href-1" to="/">
            Home
          </Link>
          <a className="d-desktop" href="/">
            List Movie
          </a>
        </div>

        {profile ? (
          <img
            src={profile?.photo}
            width="50px"
            height="50px"
            style={{ background: "#e1e1e1", borderRadius: "50%" }}
          />
        ) : (
          <Link to="/register">
            <button className="btn btn-primary px-5 d-desktop">Sign Up</button>
          </Link>
        )}

        <button
          className="navbar-toggler d-mobile"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src="/images/icons/menu.png" alt="menu" />
        </button>
      </nav>

      {/* <!-- Navigation Mobile --> */}
      <div className="collapse navbar-collapse mt-4" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item d-flex justify-content-center my-2">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item d-flex justify-content-center my-2">
            <a href="/">List Movie</a>
          </li>
          <li className="nav-item d-flex justify-content-center my-2">
            <Link to="/register">
              <button className="btn btn-primary px-5">Sign Up</button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
