function DeleteAccount(params) {
    return (
        <>
          <div className="card mt-5 mb-3">
            <div className="card-body">
                <h2 className="mb-2 fs-6">Delete Account</h2>
                <p className="sub_title">If you are deleting your profile just because you do not want employers to
                    see
                    your profile, you can just hide your profile through the above section.</p>
                <div className="mt-3">
                    <button type="button" className="btn btn-danger text-white " data-bs-toggle="modal"
                        data-bs-target="#exampleModal">Delete My
                        Account</button>
                </div>
            </div>
        </div>
        
         </>
    )
}

export default DeleteAccount