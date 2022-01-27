import { Link } from "react-router-dom";
import SavedCard from "../savedCard/index";
// import React, { useState } from "react";

function SavedList(props) {
  //   const [movies, setMovies] = useState([]);

  return (
    <>
      <div class="col-md-6 offset-md-3 mt-4">
        <div>
          <h4>
            <span id="jobNumSaved"> 5</span> Active Saved Job
          </h4>
        </div>
        <sction class="jobs__container col-lg-7 col-xs-12" id="listSaved">
          <SavedCard
            status="fullTime"
            company="SmartTech Systems"
            location="Nasr City, Cairo"
            tags="Entry Level · 1+ Yrs of Exp · Computer Science · Angular · CSS · CSS3 · Engineering · front-end · HTML · HTML5 · Information Technology (IT) · JavaScript "
            title="Front End Developer (Angular)"
            srcImge="https://images.wuzzuf-data.net/files/company_logo/SmartTech-Systems-Egypt-25373-1542192084.png"
          />
        </sction>
      </div>
    </>
  );
}
export default SavedList;
