import React from 'react';
import "./editProfile.scss"

export default function OnlinePresence() {
    return (<>
        <article class="col-lg-8 col-md-12">
            <div class="row">
                <div class="col-md-12">
                    <div class="midsection mb-4">
                        <h5 class="mb-4">Your Online Presence</h5>
                        <div class="midsection__form">
                            <div class="mb-4 row">
                                <label for="LinkedIn" class="col-sm-2 form-label text-dark">LinkedIn</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="LinkedIn" placeholder="linkeding.com/in/username" />
                                </div>
                            </div>
                            <div class="mb-4 row">
                                <label for="Facebook" class="col-sm-2 form-label text-dark">Facebook</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="Facebook" placeholder="facebook.com/username" />
                                </div>
                            </div>
                            <div class="mb-4 row">
                                <label for="Twitter" class="col-sm-2 form-label text-dark">Twitter</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="Twitter" placeholder="twitter.com/username" />
                                </div>
                            </div>
                            <div class="mb-4 row">
                                <label for="Behance" class="col-sm-2 form-label text-dark" >Behance</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="Behance" placeholder="behance.net.com/username" />
                                </div>
                            </div>
                            <div class="mb-4 row">
                                <label for="Instagram" class="col-sm-2 form-label text-dark" >Instagram</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="Instagram" placeholder="instgram.com/username" />
                                </div>
                            </div>
                            <div class="mb-4 row">
                                <label for="GitHub" class="col-sm-2 form-label text-dark">GitHub</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="GitHub" placeholder="github.com/username" />
                                </div>
                            </div>

                            <div class="mb-4 row">
                                <label for="YouTube" class="col-sm-2 form-label text-dark">YouTube</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="YouTube" placeholder="youtube.com/username" />
                                </div>
                            </div>
                            <div class="mb-4 row">
                                <label for="Blog" class="col-sm-2 form-label text-dark">Blog</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="Blog" placeholder="your blog" />
                                </div>
                            </div>
                            <div class="mb-4 row">
                                <label for="Website" class="col-sm-2 form-label text-dark">Website</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="Website" placeholder="your personal website" />
                                </div>
                            </div>
                            <div class="mb-4 row">
                                <label for="Other" class="col-sm-2 form-label text-dark">Other</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="Other" />
                                </div>
                            </div>

                        </div>

                    </div>
                    <button type="submit" disabled class="btn btn-primary mb-2">Save Changes</button>


                </div>
            </div>
        </article>
    </>)
}
