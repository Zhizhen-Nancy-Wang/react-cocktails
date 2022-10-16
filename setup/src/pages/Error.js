import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h1 className="section-title">Oops! It's a Dead End!</h1>
        <a className="btn btn-primary" href="/">
          {" "}
          Back Home
        </a>
      </div>
    </section>
  );
};

export default Error;
