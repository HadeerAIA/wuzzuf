import React from 'react';
import './editProfile.scss'

export default function Experience() {
  return(<>
  
  
  <article class="col-lg-8 col-md-12">
                <div class="row">
                    <div class="col-md-12">
                        <div class="midsection mb-4">
                            <h5>How many years of experience do you have?</h5>
                            <select class="form-select mb-5 w-75 ms-4" id="experianceselect"
                                aria-label="Disabled select example">
                                <option disabled selected>Select..</option>
                                <option value="No Experiance">No Experiance</option>
                                <option value="Less than 1 year">Less than 1 year</option>
                            </select>
                        </div>
                        <div class="col-md-12 ">
                            <div class="midsection">
                                <h5>Work experiences/Activities?</h5>
                                <button type="button" class="btn btn-primary rounded-0 m-4">+ Add
                                    Experience/Activity</button>
                              

                            </div>
                        </div>
                    </div>
                </div>
            </article>
  
  </>)
}
