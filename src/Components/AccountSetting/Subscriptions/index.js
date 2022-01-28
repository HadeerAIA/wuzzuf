function Subscription(params) {
  return (
    <>
      <section className="card mt-5">
        <div className="card-body">
          <h2 className="mb-2 fs-6">My Subscriptions</h2>
          <form>
            <div className="css-v2unji">
              <div className="d-flex  align-items-center mb-3">
                <div className="form-check col-md-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label className="form-check-label" for="flexCheckChecked">
                    Receive new jobs newsletter
                  </label>
                </div>
                <div className="ms-3 col-md-3">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Weekly</option>
                    <option value="1"> monthly</option>
                  </select>
                </div>
              </div>
              <p className="sub_title">
                You will receive emails containing the latest jobs which match
                your preferences. You will get it weekly or monthly depending on
                your job search status 
              </p>
              <div className="mt">
                <label className="checkbox">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <span className="fw-bold text-muted ms-2">
                    <span className="sub_title">
                      Receive notification emails for jobs similar to your
                      recent applications
                    </span>
                  </span>
                </label>
              </div>

              <div className="mt-2">
                <label className="fw-bold text-muted  ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <span className="ms-2">
                    <span className="sub_title">
                      Receive profile alerts and offers
                    </span>
                  </span>
                </label>
              </div>
              <p className="sub_title">
                We will email you when employers view your CV or job
                applications and tips regarding your profile.
              </p>
              <div className="">
                <button type="button" className="btn btn-light">
                  Update Subscriptions
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Subscription;
