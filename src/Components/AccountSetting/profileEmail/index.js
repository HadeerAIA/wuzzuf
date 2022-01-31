function ProfileEmailSeeting(params) {
  return (
    <>
      <section className="mt-3">
        <div className="card">
          <div className="card-body">
            <h2 className="mb-2 fs-6">Account Email</h2>
            <div className="mb-2">
              <p className="sub_title ">
                To change your account password, enter your current password,
                then enter your new password and confirm it.
              </p>
            </div>
            <form className="row g-3 needs-validation">
              <div className="form-group row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="currentPassword" className="form-label">
                    Current Password :
                  </label>
                  <input
                    type="password"
                    className="form-control bg-light"
                    id="currentPassword"
                    required
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-md-6">
                  <label htmlFor="passwordEmail" className="form-label">
                    New Password :
                  </label>
                  <div className="input-group has-validation">
                    <input
                      type="password"
                      className="form-control bg-light"
                      id="passwordEmail"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="confirmEmail" className="form-label">
                    Confirm New Email :
                  </label>
                  <input
                    type="email"
                    className="form-control bg-light"
                    id="confirmEmail"
                    required
                  />
                </div>
              </div>
              <div className="col-md-5 mt-3">
                <button
                  className="btn btn-light app_btn_settings "
                  type="submit"
                >
                  Update Email
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProfileEmailSeeting;
