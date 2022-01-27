import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
function ApplictionCard() {
  return (
    <>
      <div class="card ">
        <div
          tabindex="0"
          class="card-body"
          data-container="body"
          data-bs-toggle="popover"
          data-placement="right"
          data-html="true"
          data-bs-content-id="popover-content"
        >
          <div class="d-flex  justify-content-between">
            <div class="d-flex">
              <div class="app__image me-3 text-center">
                <img src="https://images.wuzzuf-data.net/files/company_logo/Almentor-net-Egypt-50627-1605087671.jpg" alt="" />
              </div>
              <div class="">
                <div class="pb-2 ">
                  <h5 class="fs-6 lh-base pe-2 d-flex"> Front End Developer</h5>
                  <small class="mb-2">
                    <span>almentor</span> -
                    <span class="text-muted">Maadi, Cairo</span>
                  </small>
                </div>

                <div>
                  <span class="badge text-secondary bg-light">Applied</span>
                  <small class="text-muted"> 2 day ago</small>
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
