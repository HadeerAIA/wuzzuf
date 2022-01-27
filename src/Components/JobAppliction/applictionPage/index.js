import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faEye } from "@fortawesome/free-solid-svg-icons";
import ApplictionCard from "../applictionCard/index";
 function PageAppliction() {
  return (
    <>
      <div class="container">
        <div class="row  mt-4">
          <section class="application__supNav col-6">
            <header class="d-flex align-items-center">
              <div class="subnav__activity col ">
                <div class="d-flex align-items-center">
                  <Link to="/application" class="text-dark">
                    <div class="d-inline-flex active-color">
                      Applications <span> (2)</span>
                    </div>
                  </Link>
                  <div class="space__around"></div>
                  <Link  to="archive" class="text-dark">
                    <div class="px-1"> Archive</div>
                  </Link>
                </div>
              </div>
              <div class="col d-flex align-items-center justify-content-end">
                <p class="text-center fs-6 lh-base pe-2 mt-2"> Sort By </p>
                <div>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Latest Activity</option>
                    <option value="1">Application Date</option>
                  </select>
                </div>
              </div>
            </header>
            <div class="row ">
              <section class="row applications__service  mt-4">
                <p> Account activity in the last 90 days</p>
                <div class="d-flex align-items-center">
                  <div
                    class="application__search d-flex align-items-center col-sm-3 col-md-4"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <div class="search__icon ">
                       <FontAwesomeIcon  icon={faSearch}/>
                    </div>
                    <div class="px-2">
                      <strong> 1</strong>
                      <p class="small__fonts"> Search appearances </p>
                    </div>
                  </div>
                  <div
                    class="application__search d-flex align-items-center ms-2 col-sm-3 col-md-4"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <div class="search__icon">
                      <FontAwesomeIcon icon={faEye} />
                    </div>
                    <div class="px-2">
                      <strong> 3</strong>
                      <p class="small__fonts"> Viewed your profile </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
          <div class="row">
            <div class="col-sm-6 col-md-6">
              <section class="mt-3">
                <section class="applications__service">
                <ApplictionCard />
                </section>
              </section>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-sm-5 col-md-6 ">
              <div class="card  career__applied">
                <div class="card-body col-6 mx-3 py-5">
                  <header>
                    <div class="mb-2">
                     
                      <i class="fas fa-briefcase text-primary fa-2x"></i>
                    </div>
                    <h2 class="css-1psx8u2">Choose a career!</h2>
                  </header>
                  <section>
                    <p class="sub_title">
                      Identify the career that matches your vital skills and
                      interests, and book a
                      <strong class="text-muted">WUZZUF coach</strong>.
                    </p>
                    <button
                      target="_blank"
                      href="#"
                      class="btn btn-primary mt-3"
                    >
                      Book Now<i class="fas fa-chevron-right  ps-2"></i>
                    </button>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageAppliction;
