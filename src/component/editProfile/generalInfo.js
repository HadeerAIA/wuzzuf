import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './editProfile.scss'
export default function GeneralInfo() {
  return (<>
  
  <article class="col-lg-8 col-md-12">
                <div class="row">
                    <div class="col-md-12">
                        <div class="midsection mb-4">
                            <h5>Your Personal Info</h5>
                            <form class="row">
                                <div class="col-md-6 ">
                                    <div class="midsection__form">
                                        <label for="FirstName" class="form-label labelFont">First Name</label>
                                        <span class="text-danger">*</span>
                                        <input type="text" class="form-control" id="FirstName" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="midsection__form">
                                        <label for="MiddleName" class="form-label">Middle Name</label>
                                        <input type="text" class="form-control" id="MiddleName" />
                                    </div>
                                </div>
                                <div class="col-md-6 ">
                                    <div class="midsection__form">
                                        <label for="LastName" class="form-label labelFont">Last Name</label>
                                        <span class="text-danger">*</span>
                                        <input type="text" class="form-control" id="LastName" />
                                    </div>
                                </div>

                                <div class="col-md-7 ">
                                    <div class="midsection__form">
                                        <label class="col-form-label form-label">Birthday</label>
                                        <span class="text-danger">*</span>
                                        <div class="row">
                                            <div class="col-md-2">
                                                <select class="form-select" id="Military"
                                                    aria-label="Disabled select example">
                                                    <option disabled selected>Select..</option>
                                                </select>
                                            </div>
                                            <div class="col-md-5">
                                                <select class="form-select" id="Military"
                                                    aria-label="Disabled select example">
                                                    <option disabled selected>Select..</option>
                                                </select>
                                            </div>
                                            <div class="col-md-5">
                                                <select class="form-select" id="Military"
                                                    aria-label="Disabled select example">
                                                    <option disabled selected>Select..</option>
                                                </select>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div class="col-md-12 ">
                                    <div class="midsection__form">
                                        <label class="col-form-label form-label">Gender</label>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="radio" class="form-check-input" name="Gender" id="Male"
                                                    value="Male"/>
                                                Male
                                            </label> &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                                            <label class="form-check-label">
                                                <input type="radio" class="form-check-input" name="Gender" id="Female"
                                                    value="Female"/>
                                                Female
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-7 ">
                                    <div class="midsection__form">
                                        <label class="col-form-label form-label">Number of Dependents</label>
                                        <select class="form-select  " id="Dependents"
                                            aria-label="Disabled select example">
                                            <option disabled selected>Select..</option>

                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-7 ">
                                    <div class="midsection__form">
                                        <label class="col-form-label form-label">Military Status</label>
                                        <select class="form-select  " id="Military"
                                            aria-label="Disabled select example">
                                            <option disabled selected>Select..</option>
                                            <option value="Not Applicable">Not Applicable</option>
                                            <option value="Exempted">Exempted</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Postponed">Postponed</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-12 ">
                                    <div class="midsection__form">
                                        <label class="col-form-label form-label">Marital Status</label>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="radio" class="form-check-input" name="MaritalStatus"
                                                    id="unspecified" value="unspecified"/>
                                                Unspecified
                                            </label> &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                                            <label class="form-check-label">
                                                <input type="radio" class="form-check-input" name="MaritalStatus"
                                                    id="single" value="single"/>
                                                Single
                                            </label> &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                                            <label class="form-check-label">
                                                <input type="radio" class="form-check-input" name="MaritalStatus"
                                                    id="married" value="married"/>
                                                Married
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 ">
                                    <div class="midsection__form">
                                        <label class="col-form-label form-label">Do you have a driving license?</label>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="radio" class="form-check-input" name="license" id="Yes"
                                                    value="Yes"/>
                                                Yes
                                            </label> &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                                            <label class="form-check-label">
                                                <input type="radio" class="form-check-input" name="license" id="No"
                                                    value="No"/>
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 ">
                                    <div class="midsection__form">
                                        <label class="col-form-label form-label">Do you have a car?</label>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="radio" class="form-check-input" name="Car" id="Yes"
                                                    value="Male"/>
                                                Yes
                                            </label> &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                                            <label class="form-check-label">
                                                <input type="radio" class="form-check-input" name="Car" id="No"
                                                    value="No"/>
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-9 ">
                                    <div class="midsection__form">
                                        <label for="TagLine" class="form-label labelFont">Tag Line</label>
                                        <input type="text" class="form-control" id="TagLine" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-12 mb-4 ">
                            <div class="midsection">
                                <h5>Your Location</h5>
                                <form class="row">
                                    <div class="col-md-7">
                                        <div class="midsection__form">
                                            <label class="col-form-label form-label">Country <span
                                                    class="text-danger">*</span></label>
                                            <select class="form-select mb-2" id="Country"
                                                aria-label="Disabled select example">
                                                <option disabled selected>Select..</option>
                                            </select>
                                            <label class="col-form-label form-label">City <span
                                                    class="text-danger">*</span></label>
                                            <select class="form-select mb-2" id="City"
                                                aria-label="Disabled select example">
                                                <option disabled selected>Select..</option>
                                            </select>
                                            <label class="col-form-label form-label">Area</label>
                                            <select class="form-select" id="Area" aria-label="Disabled select example">
                                                <option disabled selected>Select..</option>
                                            </select>

                                        </div>
                                    </div>
                                    <div class="col-md-7 ">
                                        <div class="midsection__form">
                                            <label for="TagLine" class="form-label labelFont">Tag Line</label>

                                            <input type="text" class="form-control" id="TagLine" />
                                        </div>
                                    </div>
                                    <div class="col-md-12 ">
                                        <div class="midsection__form">
                                            <label class="col-form-label form-label">Would you be willing to relocate to
                                                another city or country if you find the right opportunity?</label>
                                            <div class="form-check">
                                                <label class="form-check-label">
                                                    <input type="radio" class="form-check-input" name="opportunity"
                                                        id="Yes" value="Male"/>
                                                    Yes
                                                </label> &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                                                <label class="form-check-label">
                                                    <input type="radio" class="form-check-input" name="opportunity"
                                                        id="No" value="No"/>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        
                        <div class="col-md-12 mb-4 ">
                            <div class="midsection">
                                <h5>Your Contact Info</h5>
                                <div class="row">
                                    <div class="col-md-6 me-5">
                                        <div class="midsection__form">
                                            <label for="TagLine" class="form-label labelFont">Mobile Number</label>
                                            <span class="text-danger">*</span>
                                            <input type="text" class="form-control" id="TagLine" />
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-4">
                                        <div class="midsection__form">
                                            <label for="TagLine" class="form-label labelFont">Alternative Number</label>
                                            <input type="text" class="form-control" id="TagLine" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit"  class="btn btn-primary mb-2">Save Changes</button>
                    </div>
                </div>
            </article>
  </>)
}
