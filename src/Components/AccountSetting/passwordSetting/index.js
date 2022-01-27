function  PasswordSetting(params) {
    return(
        <> 
        
     <section className="mt-3">
             <div className="card">
                <div className="card-body">
                    <h2 className="mb-2 fs-6">Change Password</h2>
                    <div className="mb-2">
                        <p className="sub_title ">To change your account password, enter your current password, then
                            enter your new password and confirm it.</p>
                    </div>
                    <form className="row g-3 needs-validation" novalidate>
                        <div className="form-group row">
                            <div className="col-md-6 mb-3">
                                <label for="validationCustom01" className="form-label">Current Password : </label>
                                <input type="password" className="form-control bg-light" id="validationCustom01" required />
                          
                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="col-md-6">
                                <label for="validationCustom02" className="form-label">New Password :
                                </label>
                                <div className="input-group has-validation">
                                    <input type="password" className="form-control bg-light" id="validationCustom02"
                                        aria-describedby="inputGroupPrepend" required />
                                
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label for="validationCustom03" className="form-label">Confirm New Email : </label>
                                <input type="password" className="form-control bg-light" id="validationCustom03" required />
                             
                            </div>
                        </div>
                        <div className="col-md-5 mt-3">
                            <button className="btn btn-light app_btn_settings " type="submit">Update Password</button>
                        </div>
                    </form>

                </div>
            </div>
     </section>
        
        </>
    )
}

export default PasswordSetting