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
                    <div className="row">
                        <div className="col ">
                        <img class= "logo-secondary" src={logo2} alt="Card image cap" />
                            <p>hfhkd dfgdgfdg dhgfgdfgkd gdgfgdhf dgfdgf</p>
                        </div>
                        <div className="col top-searches">
                            <h6>Top Searches</h6>
                            <ul class="list-unstyled list-1">
                                <li>
                                    <a href="#!">Real State Agent Near Me</a>
                                </li>
                                <li>
                                    <a href="#!">Real State Agent Near Me</a>
                                </li>
                                <li>
                                    <a href="#!">Real State Agent Near Me</a>
                                </li>
                                <li>
                                    <a href="#!">Real State Agent Near Me</a>
                                </li>
                            </ul>


                        </div>
                        <div className="col">
                            
                            <ul className="list-unstyled list">
                                <li>
                                    <a href="#!">Real State Agent Near Me</a>
                                </li>
                                <li>
                                    <a href="#!">Real State Agent Near Me</a>
                                </li>
                                <li>
                                    <a href="#!">Real State Agent Near Me</a>
                                </li>
                                <li>
                                    <a href="#!">Real State Agent Near Me</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                        <p>Follow us</p>
                        <div className="icon">
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
                </div>
            </footer>

        </>
    );
}

export default Footer;
