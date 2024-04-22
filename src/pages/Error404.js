import React from "react";
import "../styles/error404.css";
import ErrorImg from "../assets/images/errorImg.jpeg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <div className="wrapper ">
        <Helmet>
          <title>Error Page</title>
          <meta
            name="description"
            content="This is the error page for handling any possible errors during an api call"
          />
          <link rel="canonical" href="/error" />
        </Helmet>
        <div className="error-container">
          <h2>Error 404: Contact Page Not Found!</h2>
          <h5>Who send you come no show you road? &#128514;</h5>
          <div className="error">
            <img src={ErrorImg} alt="" className="errorimg" />
          </div>

          <div className="error-btn">
            <Link to="/" className="btn">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
