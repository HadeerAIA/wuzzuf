import './style.scss'
import AboutUsImage from './map.jpg'
const AboutUs = () => {
  return (
    <>
      <div className="container my-5">
        <div className="AboutUsbodyContact">
          <div className="row col-lg-10 col-sm-12 col-md-12 ">
            <div className=" justify-content-center  ">
              <div className=" AboutUsBody card  col-12 ">
                <p
                  className="card-header my-3 AboutUsheader col-md-12 col-lg-12 d-flex flex-row-revers bg-white"   
                >
                  About Us
                </p>

                <div className="card-body">
                  <form className="row g-3 needs-validation" action="#" noValidate>
                    <div className="row col-lg-9 col-sm-9 col-md-9">
                      <div>
                        <p>
                          WUZZUF.net is created and managed by BasharSoft, a
                          technology firm founded in 2009 and one of very few
                          companies in the MENA region specialized in developing
                          Innovative Online Recruitment Solutions for top
                          enterprises and organizations. Since May 2012, we
                          successfully served 10,000+ top companies and
                          employers in Egypt, 1.5 MILLION CVs were viewed on our
                          platform and 100,000+ job seekers directly hired
                          through us. In total, 250,000+ open job vacancies were
                          advertised and now, 500,000+ users visit our website
                          each month looking for jobs at top Employers.
                        </p>
                        <p>
                          We are now expanding our success to the Gulf region.
                          We are helping employers and job seekers from UAE,
                          Qatar and other gulf countries find their right match
                          through our intelligent real-time recommendations and
                          around the clock support.
                        </p>
                        <h4>Looking for a job?</h4>
                        <p>
                          If you are searching for a new career opportunity, you
                          can search open vacancies and jobs. You can also
                          signup here to be alerted of new jobs by email.
                        </p>
                        <h4>Are you a recruiter or employer?</h4>
                        <p>
                          If you are currently hiring, and would like to
                          advertise your jobs on WUZZUF.net, please signup for
                          an employer account and post your jobs right away.
                        </p>
                        <h4>Other inquiries?</h4>
                        <p>
                          If you have any other inquiries, please contact us
                          here.
                        </p>
                      </div>
                    </div>
                    <div className="row col-lg-3 col-sm-3 col-md-3 ">
                      <div >
                        <img
                          src={AboutUsImage}
                          className="AboutUsImage" alt='AboutUsImage'
                        />
                      </div>
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

export default AboutUs;
