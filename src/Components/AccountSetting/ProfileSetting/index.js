function ProfileSeetingAccount(params) {
  return (
    <>
      <section className="  mt-5  ">
        <div className="card">
          <div className="card-body">
            <h2 className="mb-2 fs-6">Public Profile Settings</h2>
            <div className="mb-2">
              <p className="sub_title ">
                Activating your public profile enables you to share it with
                friends and potential employers.
              </p>
              <p className="sub_title ">
                It's a great way to show the world your skills and experience.
              </p>
            </div>
            <div className="switch-button is-active me-4">
              <div className="switch-button__container me-4">
                <div className="form-check form-switch ">
                  <input
                    className="form-check-input me-4"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckChecked"
                  >
                    Make my profile public. (Recommended)
                  </label>
                  <p className="small__size text-muted">
                    By activating this option, you can share your profile to
                    those not on WUZZUF and get more exposure.
                  </p>
                </div>
              </div>
            </div>

            <form>
              <div className="css-2w5vi3 e1984bhe0">
                <span>Your url is:</span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/me/Lina-Ahmed-4b7a946bab"
                >
                  wuzzuf.net/me/Lina-Ahmed-4b7a946bab
                </a>
                <button type="button" className="btn btn-light ms-3">
                  Change
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export default ProfileSeetingAccount;
