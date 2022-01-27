import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
function ApplictionCard() {
  return (
    <>
      <div className="card ">
        <div
          tabindex="0"
          className="card-body"
          data-container="body"
          data-bs-toggle="popover"
          data-placement="right"
          data-html="true"
          data-bs-content-id="popover-content"
        >
          <div className="d-flex  justify-content-between">
            <div className="d-flex">
              <div className="app__image me-3 text-center">
                <img src="https://images.wuzzuf-data.net/files/company_logo/Almentor-net-Egypt-50627-1605087671.jpg" alt="" />
              </div>
              <div className="">
                <div className="pb-2 ">
                  <h5 className="fs-6 lh-base pe-2 d-flex"> Front End Developer</h5>
                  <small className="mb-2">
                    <span>almentor</span> -
                    <span className="text-muted">Maadi, Cairo</span>
                  </small>
                </div>

                <div>
                  <span className="badge text-secondary bg-light">Applied</span>
                  <small className="text-muted"> 2 day ago</small>
                </div>
              </div>
            </div>

            <FontAwesomeIcon  icon={faEllipsisH}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplictionCard;
