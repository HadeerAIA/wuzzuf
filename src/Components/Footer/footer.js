/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './footer.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faLinkedin,
    faFacebookF
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <>
           
    <div class="container-fluid text-white ">
        <div class="row px-xl-5 p-5 jobFooter">
            <div class="col-lg-4 col-md-12 mb-2">
                <a href="#" id="W">
                    <h1 class="mb-4 display-4 font-weight-bold text-white">WUZZUF</h1>
                </a>
                <p class="mb-1">Employers and Recruiters, go to our</p>
                <a class="text-white mb-6" href="#">RECRUITMENT SERVICES.</a>

                <p class="mb-2 fw-bold">Members Directory:</p>
                <a class="text-white mb-2 text-decoration-none" href="#">A</a>
                <a class="text-white mb-2 text-decoration-none" href="#">B</a>
                <a class="text-white mb-2 text-decoration-none" href="#">C</a>
                <a class="text-white mb-2 text-decoration-none" href="#">D</a>
                <a class="text-white mb-2 text-decoration-none" href="#">E</a>
                <a class="text-white mb-2 text-decoration-none" href="#">F</a>
                <a class="text-white mb-2 text-decoration-none" href="#">G</a>
                <a class="text-white mb-2 text-decoration-none" href="#">H</a>
                <a class="text-white mb-2 text-decoration-none" href="#">I</a>
                <a class="text-white mb-2 text-decoration-none" href="#">J</a>
                <a class="text-white mb-2 text-decoration-none" href="#">K</a>
                <a class="text-white mb-2 text-decoration-none" href="#">L</a>
                <a class="text-white mb-2 text-decoration-none" href="#">M</a>
                <a class="text-white mb-2 text-decoration-none" href="#">N</a>
                <a class="text-white mb-2 text-decoration-none" href="#">O</a>
                <a class="text-white mb-2 text-decoration-none" href="#">P</a>
                <a class="text-white mb-2 text-decoration-none" href="#">Q</a>
                <a class="text-white mb-2 text-decoration-none" href="#">R</a>
                <a class="text-white mb-2 text-decoration-none" href="#">S</a>
                <a class="text-white mb-2 text-decoration-none" href="#">T</a>
                <a class="text-white mb-2 text-decoration-none" href="#">U</a>
                <a class="text-white mb-2 text-decoration-none" href="#">V</a>
                <a class="text-white mb-2 text-decoration-none" href="#">W</a>
                <a class="text-white mb-2 text-decoration-none" href="#">X</a>
                <a class="text-white mb-2 text-decoration-none" href="#">Y</a>
                <a class="text-white mb-2 text-decoration-none" href="#">Z</a>
                <a class="text-white mb-2 text-decoration-none" href="#">#</a>
            </div>

            <div class="col-lg-8 col-md-12">
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <h5 class="font-weight-bold text-white mb-4">Links</h5>
                        <div class="d-flex flex-column justify-content-start">
                            <a class="text-white mb-2 text-decoration-none" href="#">Career Resources</a>
                            <a class="text-white mb-2 text-decoration-none" href="#">WUZZUF Coaches</a>
                            <a class="text-white mb-2 text-decoration-none" href="#">About Us</a>
                            <a class="text-white mb-2 text-decoration-none" href="#">Recruitment Service</a>
                            <a class="text-white mb-2 text-decoration-none" href="#">RSS</a>
                        </div>
                    </div>

                    <div class="col-md-4 mb-3">
                        <pre>
                        </pre>
                        <div class="d-flex flex-column justify-content-start">
                            <a class="text-white mb-2 text-decoration-none" href="#">Partners</a>
                            <a class="text-white mb-2 text-decoration-none" href="#">Sitemap</a>
                            <a class="text-white mb-2 text-decoration-none" href="#">Contact Us</a>
                            <a class="text-white mb-2 text-decoration-none" href="#">Privacy, Cookies, Terms &
                                Conditions</a>
                            <a class="text-white mb-2 text-decoration-none" href="#">وظائف مصر</a>
                        </div>
                    </div>

                    <div class="col-md-4 mb-3">
                        <h5 class="font-weight-bold text-white mb-4">Follow Us</h5>
                        <div class="mb-4">

                        <a href='#'>
                            <FontAwesomeIcon
                            className='socialMedia_Facebook icon header_icon text-white me-3'
                            icon={faFacebookF}/>
                        </a>

                        <a href='#'>
                            <FontAwesomeIcon
                            className='socialMedia_Twitter icon header_icon  text-white me-3'
                            icon={faLinkedin}/>
                        </a>

                        <a href='#'>
                            <FontAwesomeIcon className='socialMedia_LinkedIn icon header_icon text-white me-3'
                            icon={faTwitter}/>
                        </a>
                        
                    </div>
                        <p class="fs-6">© 2021 WUZZUF. All Rights Reserved. Owned by BasharSoft LLC.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

        </>
    )
}
