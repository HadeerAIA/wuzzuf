import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShare,
  faEyeSlash,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
const ExplorCard = (props) => {
  return (
    <>
      <div className="job__detail bg-body card bx-1 bt-1 mb-3">
        <header className="job__description d-flex justify-content-between border-bottom mx-2 pb-2">
          <div className="card-body">
            <div>
              <Link to="/compony">
                <span className="app_blue_color"> {props.title}</span>
              </Link>
              <i className="badge text-secondary bg-light fw-light">
                {props.status}
              </i>
              <p>
                <Link to="/compony">
                  <small className="text-dark fw-normal">{props.company}</small>
                </Link>
                <span>-</span>
                <small className="text-secondary ">{props.location}</small>
              </p>
            </div>
            <div className="text-secondary fs-6">
              <small> {props.tags}</small>
              <time className="text-success">1day</time>
            </div>
          </div>
          <a href="#company" className="mt-4">
            <img src={props.srcImge} width="75px" alt={props.title} />
          </a>
        </header>
        <div className="job__reacts d-flex align-items-center ps-3 mt-1 text-secondary">
          <button id="save" className="btn text-secondary ">
            <FontAwesomeIcon icon={faBookmark} />
            Save
          </button>
          <button className="btn   text-secondary hovering_btn">
            <FontAwesomeIcon icon={faShare} />
            Share
          </button>
          <button className="btn   text-secondary hovering_btn">
            <FontAwesomeIcon icon={faEyeSlash} />
            Hide
          </button>
        </div>
      </div>
    </>
  );
};

export default ExplorCard;
