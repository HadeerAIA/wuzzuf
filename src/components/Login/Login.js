import "./style.scss";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="LoginContactContanier"> 
        <div className="container">
          <div className="text-center">
            <p className="pt-5 LoginHeaderParagraph">WUZZUF</p>
          </div>
          <div className="LoginbodyContact">
            <div className="row col-lg-4 col-sm-6 col-md-7 ">
              <div className="card col-12 text-center">
                <p className="card-header bg-white LoginCartHeader my-3 col-md-12 col-lg-12 LogincardParagraph">
                  Welcome Back
                </p>

                <div className="card-body">
                  <form className="row g-3 needs-validation" action="#" novalidate>
                    <div className="col-md-12 col-lg-12 ">
                      <label
                        htmlFor="validationCustom01"
                        className="form-label d-flex flex-row"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationCustom01"
                        name="email"
                        placeholder="email"
                        required
                      />
                    </div>
                    <div className="col-md-12 col-lg-12 col-12">
                      <label
                        htmlFor="validationCustom02"
                        className="form-label d-flex flex-row"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="validationCustom02"
                        name="password"
                        placeholder="password"
                        required
                      />
                    </div>
                    <div className="col-md-12 col-lg-12 col-sm-8">
                      <button
                        className="btn btn-primary col-lg-12"
                        type="submit"
                      >
                        Sign Up
                      </button>
                    </div>
                    <hr />
                    <div className="col-md-12 col-lg-12 ">
                      <p>
                        New to WUZZUF?
                        <Link to={`/Regist`} id="Link" class="LoginanchorsOfForms"> Join us</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
