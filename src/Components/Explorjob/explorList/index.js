import { Link } from "react-router-dom";
import Card from "../explorCard/index";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getJobs from "../../../store/actions/getJobAppliction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShare,
  faEyeSlash,
  faBookmark
} from "@fortawesome/free-solid-svg-icons";
function ExplorList(props) {
  const getPostsSelector = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const getPostsAction = () => dispatch(getJobs());

  useEffect(() => {
    getPostsAction();
  }, []);
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
            {getPostsSelector.posts.map((post) => {
              return (
                <Card
                  title={post.data.titleJob}
                  city={post.data.city}
                  categories={post.data.categories}
                  country={post.data.Country}
                  componyName={post.data.companyname}
                  time={post.data.timeJob}
                  ImageUrl={post.data.ImgUrl}
                  experience={post.data.experience}
                />
              );
            })}
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
