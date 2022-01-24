import './style.scss'
import Logo from './logo_48.png'
const ContactUs =()=>
{
    return (
        <>
        <div className="container my-5 ">
        <div className="ContactUsbodyContact rounded-0">
            <div className="row col-lg-5 col-sm-8 col-md-6 ">
                <div className=" ContactUsBody card  d-flex flex-row-revers rounded-0" >
                    <p className="card-header my-4 ContactUsheader bg-white">Contact us
                    </p>
                    <div className="card-body">
                        <form className="row g-3 needs-validation my-2" action="#" noValidate>
                            <div className="col-md-12 col-lg-12 col-sm-12">
                                <label htmlFor="validationCustom01" className="form-label d-flex flex-row">What is your question
                                    about?</label>
                                <div className="input-group mb-3">
                                    <select className="form-select" id="inputGroupSelect01"  required>
                                        <option selected disabled value="0">Select...</option>
                                        <option value="1">Technical Issue / Error with the Site</option>
                                        <option value="2">Sales Inquiry / Request</option>
                                        <option value="3">Partnerships / Sponsorships</option>
                                        <option value="2">Marketing</option>
                                        <option value="3"> Product / Service Idea</option>
                                        <option value="2">General Inquiry / Complaint</option>
                                        <option value="3">Thanks / Praise</option>
                                        <option value="3">Others</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-12">
                                <label htmlFor="validationCustom01" className="form-label d-flex flex-row">Subject</label>
                                <input type="text" className="form-control" id="validationCustom01" name="subject"
                                    required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-12 ">
                                <label htmlFor="validationCustom01" className="form-label d-flex flex-row">Message</label>
                                <div className="form-floating">
                                    <textarea className="ContactUstextarea form-control " placeholder="Leave a comment here"
                                        id="floatingTextarea2" style={{height: '100px'}} required></textarea>
                                    <label htmlFor="floatingInput">Leave a comment here</label>
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <div className="form-check ContactUsRobotDiv">
                                    <input className="form-check-input m-1 mt-3 ContactUsRoboInput" type="checkbox" value="" id="invalidCheck"
                                        required />
                                    <label className="form-check-label m-1 my-3 ContactUsRobotLabel" htmlFor="invalidCheck">
                                        I'm not a robot
                                    </label>
                                    <img src={Logo} alt='Logo Image ' className='ContactUsImage' />
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-12">
                                <button className="btn btn-primary col-lg-2 col-md-5 col-sm-5" type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}
export default ContactUs