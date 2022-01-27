import "./style.scss"
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <>
    <div className="RegistContactContanier">
        <div className="container">
            <div  className="RegistLogoText">
                <p className="RegistHeaderParagraph">WUZZUF</p>
            </div>
            <div className="RegistbodyContact">
                <div className="row col-lg-5 col-sm-7 col-md-7  ">
                    <div className="card RegistCart flex-row-revers text-center" >
                        <p className="card-header bg-white my-3 RegistcardParagraph" >Sign Up and Start Applying
                            For
                            Jobs</p>

                        <div className="card-body">
                            <form className="row g-3 needs-validation" action="#" novalidate>
                                <div className="col-md-6 col-lg-6">
                                    <label htmlFor="validationCustom01" className="form-label d-flex flex-row">First
                                        name</label>
                                    <input type="text" className="form-control" id="validationCustom01"
                                        placeholder="first name" required />
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <label htmlFor="validationCustom02" className="form-label d-flex flex-row">Last name</label>
                                    <input type="text" className="form-control" id="validationCustom02"
                                        placeholder="last name" required />
                                </div>
                                <div className="col-md-12 col-lg-12">
                                    <label htmlFor="validationCustom03" className="form-label d-flex flex-row">Email</label>
                                    <input type="text" className="form-control" id="validationCustom03" name="email"
                                        placeholder="email" required />
                                </div>
                                <div className="col-md-12 col-lg-12 ">
                                    <label htmlFor="validationCustom04" className="form-label d-flex flex-row">Password</label>
                                    <input type="password" className="form-control" id="validationCustom04" name="password"
                                        placeholder="password" required />
                                </div>
                                <div className="col-md-12 col-lg-12">
                                    <button className="btn btn-primary col-lg-12" type="submit" >Sign Up</button>
                                </div>
                                <hr/>
                                <div className="col-md-12 col-lg-12">
                                    <p>Already on WUZZUF?
                                        <Link to={`/Login`} id="Link" className="RegistanchorsOfForms">Sign in</Link>
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
export default Register;
