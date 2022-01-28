import { Link } from "react-router-dom";
import Card from "../explorCard/index";
// import React, { useState } from "react";

function ExplorList(props) {
 
  return (
    <>
      <div className="container">
        <div className="row">
          <div className=" my-3">
            <h4> Explore New Career Opportunities</h4>
            <p className=" fw-light">
              To get relevant content in the feed below,
              <Link to={"/career-interests"}>update your career interests</Link>
            </p>
          </div>
          <sction
            className="jobs__container col-lg-7 col-xs-12"
            id="listOfJobs"
          >
            <Card
              status="fullTime"
              company="SmartTech Systems"
              location="Nasr City, Cairo"
              tags="Entry Level · 1+ Yrs of Exp · Computer Science · Angular · CSS · CSS3 · Engineering · front-end · HTML · HTML5 · Information Technology (IT) · JavaScript "
              title="Front End Developer (Angular)"
              srcImge="https://images.wuzzuf-data.net/files/company_logo/SmartTech-Systems-Egypt-25373-1542192084.png"
            />
          </sction>
          {/*prograss */}
          <sction className="jobs__prograss col-6 col-lg-4  col-xs-6">
            <section className="card">
              <div className="card-body">
                <h5 className="card-title">Improve Your Profile</h5>
                <small className="mb-2 text-muted">
                  <span className="Viewed">1</span>
                  <i>
                    employers viewed your profile in the last 30 days (0 all
                    time)
                  </i>
                </small>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: " 63%" }}
                    aria-valuenow="63"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <small className="mt-3 text-muted">
                  Your profile strength is 63%
                </small>
              </div>
            </section>
          </sction>
          {/*prograss */}
        </div>
      </div>
    </>
  );
}

export default ExplorList;
