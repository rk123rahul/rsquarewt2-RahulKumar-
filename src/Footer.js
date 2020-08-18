import React from 'react';
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import fb from "./assets/Facebook.png";
import tw from "./assets/Twitter.png";
import ins from "./assets/Instagram.png";
import logo2 from "./assets/nock-nock-allwht.png";


function Footer() {
    return (
        <>
            <footer className="page-footer bg-info">
                <div className="container footer ">
                    <div className="row footer-row">
                        <div className="col ">
                            <img class="logo-secondary " src={logo2} alt="Card image cap " />
                            <p>nock nock provides buyers with the ultimate in Real Estate experision while dealing with only the Top 1% of hand picked Real Estae Agents in Canada.</p>
                        </div>
                        <div className="col top-searches">
                            <h6>Top Searches</h6>
                            <ul class="list-unstyled list-1">
                                <li>
                                    <a href="#!">Real State Agent Near Me</a>
                                </li>
                                <li>
                                    <a href="#!">Real State Agent in Toronto</a>
                                </li>
                                <li>
                                    <a href="#!">Real State Agent in Oakville</a>
                                </li>
                                <li>
                                    <a href="#!">Real State Agent in Milton</a>
                                </li>
                            </ul>


                        </div>
                        <div className="col">

                            <ul className="list-unstyled list">
                                <li>
                                    <a href="#!">Real State Agent in Burlington</a>
                                </li>
                                <li>
                                    <a href="#!">Real State Agent in Mississauga</a>
                                </li>
                                <li>
                                    <a href="#!">Real State Agent in Etobicoke</a>
                                </li>
                                <li>
                                    <a href="#!">Real State Agent in Hamilton</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <p>Follow us</p>
                            <div className="icon footer-icon">
                                <span>
                                    <img class="card-img-top" src={fb} alt="Card image cap" />
                                </span>
                                <span>
                                    <img class="card-img-top" src={tw} alt="Card image cap" />
                                </span>
                                <span>
                                    <img class="card-img-top" src={ins} alt="Card image cap" />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="footer-divider"></div>
                    <div class="lower-footer">
                        <p class="terms-condition">Terms and Condition /About Us /News /Privacy Policy</p>
                        <p class="terms-condition">@ 2020 nock nock inc. All rights reserved</p>
                    </div>
                </div>

            </footer>

        </>
    );
}

export default Footer;
