function ProfileSeetingAccount(params) {
  return (
    <>
      <section class="  mt-5  ">
        <div class="card">
          <div class="card-body">
            <h2 class="mb-2 fs-6">Public Profile Settings</h2>
            <div class="mb-2">
              <p class="sub_title ">
                Activating your public profile enables you to share it with
                friends and potential employers.
              </p>
              <p class=" sub_title ">
                It's a great way to show the world your skills and experience.
              </p>
            </div>
            <div class="switch-button is-active me-4">
              <div class="switch-button__container me-4">
                <div class="form-check form-switch ">
                  <input
                    class="form-check-input me-4"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    checked
                  />
                  <label class="form-check-label" for="flexSwitchCheckChecked">
                    Make my profile public. (Recommended)
                  </label>
                  <p class="small__size text-muted">
                    By activating this option, you can share your profile to
                    those not on WUZZUF and get more exposure.
                  </p>
                </div>
              </div>
            </div>

            <form>
              <div class="css-2w5vi3 e1984bhe0">
                <span>Your url is:</span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/me/Lina-Ahmed-4b7a946bab"
                >
                  wuzzuf.net/me/Lina-Ahmed-4b7a946bab
                </a>
                <button type="button" class="btn btn-light ms-3">
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
