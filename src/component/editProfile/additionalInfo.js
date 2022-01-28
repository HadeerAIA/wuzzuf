import React from 'react';
import"./editProfile.scss"

export default function AdditionalInfo() {
  return (<>
  
  
  <article class="col-lg-8 col-md-12">
                <div class="row">
                    <div class="col-md-12">
                        <div class="midsection mb-4">
                            <h5 class="mb-1">Achievements</h5>
                            
                            <div class="col-md-9 ">
                                <div class="midsection__form">
                                    <p class="midsection__form__pa">Sports, patents, publications, books, awards, etc.</p>
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1" class="form-label">Add Achievements</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                      </div>
                                      <p class="midsection__form__pa mt-2">You have 1000 characters remaining (max 1000)</p>    
                                        <button type="submit" class="btn btn-primary rounded-0 mt-3 mb-2">Save Changes</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </article>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  </>);
}
