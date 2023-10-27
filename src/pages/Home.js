import "../style/Home.css";
import "../style/Home.mobile.css";

import MovieComp from "../components/Movie";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";
import axios from "axios";

function Home() {
  // mounted / mounting
  const date = new Date();
  const month = date.toLocaleString("default", { month: "short" });

  const [resultNowShowing, setResultNowShowing] = React.useState([]);
  const [resultUpcoming, setResultUpcoming] = React.useState([]);
  const [selectedMonth, setSelectedMonth] = React.useState(month.toLowerCase());

  // lifecycle
  const handleGetRespone = async () => {
    try {
      // get data for now showing
      const nowShowing = await axios.get(
        "https://tickitz-be.onrender.com/v1/movie/now-showing"
      );

      if (nowShowing.status === 200) {
        setResultNowShowing(nowShowing.data.data);
      }

      // get data for upcoming
      const upcoming = await axios.get(
        "https://tickitz-be.onrender.com/v1/movie/upcoming"
      );

      if (upcoming.status === 200) {
        setResultUpcoming(upcoming.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    handleGetRespone();
  }, []);

  return (
    <div id="page_home">
      {/* <!-- Start Header --> */}
      <header className="container pt-4 mb-5">
        <Navbar />

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
            {resultNowShowing.slice(0, 5).map((item) => (
              <MovieComp
                poster={item.poster}
                title={item.title}
                genres={item.genres}
                desc={item.desc}
                slug={item.slug}
              />
            ))}
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
                <button
                  className={
                    selectedMonth === item.toLowerCase()
                      ? "btn btn-primary px-4"
                      : "btn btn-outline-primary px-4"
                  }
                  onClick={() => {
                    setSelectedMonth(item.toLowerCase());
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* <!-- Content --> */}
          <div className="d-flex gap-3 justify-content-around mt-5 mt-10-mobile">
            {resultUpcoming
              .filter((item) => item.showingMonth === selectedMonth)
              .slice(0, 5)
              .map((item) => (
                <MovieComp
                  poster={item.poster}
                  title={item.title}
                  genres={item.genres}
                  desc={item.desc}
                  slug={item.slug}
                />
              ))}
          </div>

          {/* Not found Movie */}
          {resultUpcoming.filter((item) => item.showingMonth === selectedMonth)
            .length === 0 ? (
            <p className="text-center" style={{ fontSize: "20px" }}>
              Movie not found
            </p>
          ) : null}
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

      <Footer />
    </div>
  );
}

export default Home;

// 1. class -> className
// 2. comment html -> comment react
// 3. image path "./images/asdasdasd.jpg" to "/images/asdasdasd.jpg"
// 4. style html "style="font-size: block;"" to style react style={{ fontSize: "block" }}
// 5. image berikan alt
// 6. Anchor (a) wajib ada href, kalo gak tau kemana nilai default berikan ini /#
