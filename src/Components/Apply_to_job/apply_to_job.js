/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './apply_to_job.scss';

export default function Apply_to_job() {
    return (
        <>
  
  <div className="container">
        <div className="row mt-5 m-0 p-0"> 
            <div className="col-lg-3 col-md-3 col-sm-12 rounded">
                <div className=" rounded p-2 m-5 smallanswerdiv">
                    <p className='font13'>Your answers reflect your vital skills and experience. Providing excellent answers sets you apart from the competition.</p>
                 </div>
            </div>
            <div className=" col-lg-6 col-md-6 col-sm-12 mb-5">
                <div className="rounded d-flex flex-row justify-content-between fs-5 p-2 m-0 text-white Appform">
                    Application Form
                       <button className="btn btn-light btn-sm " type="button">View job details</button>
                 </div>
                 <div className="p-3 m-0 bg-light" >
                    <img className="float-end" src="EasyKash-Egypt-16658-1602411775-sm.png" alt=" "/>
                    <h5 className="text-dark fw-bold">PHP Full Stack Developer / Laravel</h5>
                    <span className='font13 hiringteam'>The hiring team at VadeCom requires you to answer the<br/> below questions.</span>
                    <div class="mb-3 mt-4">
                        <label for="formGroupExampleInput" class="form-label fw-bold font13">Why should we hire you for this position?</label>
                        <div className="form-floating">
                            <textarea className="form-control h70" id="floatingInputValue"></textarea>
                            <label for="floatingInputValue">Write your answer here..</label>
                          </div>                      </div>
                      <div className="mb-3">
                        <label for="formGroupExampleInput2" class="form-label fw-bold font13">Can you provide us with a sample of your work?</label>
                        <div className="form-floating">
                            <textarea className="form-control h70" id="floatingInputValue"></textarea>
                            <label for="floatingInputValue">Write your answer here..</label>
                          </div>
                      </div>
                      <div class="mb-3">
                        <label for="formGroupExampleInput2" class="form-label fw-bold font13">Are you willing to start immediately?</label><br/>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                            <label class="form-check-label fw-bold font13" for="inlineRadio1">Yes</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                            <label class="form-check-label fw-bold font13" for="inlineRadio2">No</label>
                          </div>
                      </div>
                 </div>

                 <div>
                    <button type="submit" class="btn btn-primary btn-sm float-end mt-3 m-1 font13">Submit Application</button>
                    <button type="button" class="btn btn-secondary btn-sm float-end mt-3 m-1 font13">Save and Apply later</button>
                    <button type="button" class="btn btn-secondary btn-sm float-start mt-3 m-1 ms-2 font13">Cancel</button>
                 </div>
            </div>
        </div>
    </div>
        </>
    )
}
