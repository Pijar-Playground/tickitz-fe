import "./style/App.css";
import "./style/App.mobile.css";

import MovieComp from "./components/Movie";
import IconText from "./components/IconText";

function App() {
  return (
    <div className="App">
      {/* <!-- Start Header --> */}
      <header className="container pt-4 mb-5">
        {/* <!-- navigation --> */}
        <nav className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-5">
            <img className="logo" src="/images/logo.png" alt="logo" />
            <a className="d-desktop" id="href-1" href="/">
              Home
            </a>
            <a className="d-desktop" href="/">
              List Movie
            </a>
          </div>

          <button className="btn btn-primary px-5 d-desktop">Sign Up</button>
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
              <a href="/">Home</a>
            </li>
            <li className="nav-item d-flex justify-content-center my-2">
              <a href="/">List Movie</a>
            </li>
            <li className="nav-item d-flex justify-content-center my-2">
              <button className="btn btn-primary px-5">Sign Up</button>
            </li>
          </ul>
        </div>

        {/* <!-- content --> */}
        <section className="mt-10">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12">
              <span className="text-muted">Nearest Cinema, Newest Movie,</span>
              <h1 className="text-primary">Find out now!</h1>
            </div>
            <div className="col-sm-6 col-xs-12">
              <img src="/images/home_banner.png" width="100%" alt="banner" />
            </div>
          </div>
        </section>
      </header>
      {/* <!-- End Header --> */}

      {/* <!-- Now Showing --> */}
      <section id="now-showing">
        <div className="container py-5">
          {/* <!-- Header Title --> */}
          <div className="d-flex justify-content-between absolute-mobile">
            <h2 className="text-primary">Now Showing</h2>
            <a className="text-primary" href="/#">
              View All
            </a>
          </div>

          {/* <!-- Content --> */}
          <div className="d-flex gap-3 justify-content-around mt-5 content">
            <MovieComp />
            <MovieComp />
            <MovieComp />
            <MovieComp />
            <MovieComp />
          </div>
        </div>
      </section>
      {/* <!-- End Now Showing --> */}

      {/* <!-- Upcoming Movie --> */}
      <section id="upcoming-movie" className="mt-5">
        <div className="container py-5">
          {/* <!-- Header Title --> */}
          <div className="d-flex justify-content-between absolute-mobile">
            <h2>Upcoming Movies</h2>
            <a className="text-primary" href="/#">
              View All
            </a>
          </div>

          {/* <!-- Month List --> */}
          <div className="absolute-mobile">
            <div className="d-flex mt-4 justify-content-around content-scroll">
              {[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ].map((item) => (
                <button className="btn btn-outline-primary px-4">{item}</button>
              ))}
            </div>
          </div>

          {/* <!-- Content --> */}
          <div className="d-flex gap-3 justify-content-around mt-5 mt-10-mobile">
            <MovieComp />
            <MovieComp />
            <MovieComp />
            <MovieComp />
            <MovieComp />
          </div>
        </div>
      </section>
      {/* <!-- End Upcoming Movie --> */}

      {/* <!-- CTA --> */}
      <section id="cta" className="mt-10">
        <div className="container">
          <span className="text-muted text-center">Be the vanguard of the</span>
          <h1 className="text-primary text-center">Moviegoers</h1>

          <div className="d-flex gap-2 justify-content-center mt-5 mb-4">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Type your email"
              style={{ width: "300px" }}
            />
            <button className="btn btn-primary">Join now</button>
          </div>

          <p className="text-center" style={{ color: "#6e7191" }}>
            By joining you as a Tickitz member, <br />
            we will always send you the latest updates via email .
          </p>
        </div>
      </section>
      {/* <!-- End CTA --> */}

      {/* <!-- Footer --> */}
      <footer className="container pb-3 pt-5 mt-10">
        <div className="row">
          <div className="col-sm-3 col-xs-12">
            <div className="d-flex justify-content-center-mobile">
              <img className="mb-4" src="/images/logo.png" alt="logo" />
            </div>
            <p className="text-center-mobile" style={{ color: "#6e7191" }}>
              Stop waiting in line. Buy tickets <br />
              conveniently, watch movies quietly.
            </p>
          </div>
          <div className="col-sm-3 col-xs-12">
            <h6 className="mb-4 text-center-mobile">Explore</h6>
            <a
              className="text-center-mobile"
              style={{ display: "block", fontWeight: 300 }}
              href="/#"
            >
              Home
            </a>
            <a
              className="text-center-mobile"
              style={{ display: "block", fontWeight: 300 }}
              href="/#"
            >
              List Movie
            </a>
          </div>
          <div className="col-sm-3 col-xs-12">
            <h6 className="mb-4 text-center-mobile">Our Sponsor</h6>

            <div className="d-flex justify-content-center-mobile">
              <img
                className="mb-3"
                style={{ display: "block" }}
                src="/images/cinemas/Vector.png"
                alt="sponsor"
              />
            </div>
            <div className="d-flex justify-content-center-mobile">
              <img
                className="mb-3"
                style={{ display: "block" }}
                src="/images/cinemas/Vector-1.png"
                alt="sponsor"
              />
            </div>
            <div className="d-flex justify-content-center-mobile">
              <img
                className="mb-3"
                style={{ display: "block" }}
                src="/images/cinemas/Vector-2.png"
                alt="sponsor"
              />
            </div>
          </div>
          <div className="col-sm-3 col-xs-12">
            <h6 className="mb-4 text-center-mobile">Follow us</h6>

            <IconText />
            <IconText />
            <IconText />
            <IconText />
          </div>
        </div>

        <p className="text-center mt-4 mb-2">
          © 2020 Tickitz. All Rights Reserved.
        </p>
      </footer>
      {/* <!-- End Footer --> */}
    </div>
  );
}

export default App;

// 1. class -> className
// 2. comment html -> comment react
// 3. image path "./images/asdasdasd.jpg" to "/images/asdasdasd.jpg"
// 4. style html "style=="font-size: block;"" to style react style={{ fontSize: "block" }}
// 5. image berikan alt
// 6. Anchor (a) wajib ada href, kalo gak tau kemana nilai default berikan ini /#
