import React from 'react';
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

function Card() {
    return (
        <>
            <div class="container card-container">
                <div class="row card-row">
                    <div id="login-container">

                        <div class="profile-img image"></div>
                        <h1 className="card-name text-info">
                            Roise sutter
                </h1>
                        <div class="description text-center">
                            The Red Pin<div class="text-divider"></div> <span className="text-secondary">Real Estate Agent</span>
                        </div>
                        <div class="social container">
                            <p className="ax"><b>Ontario,Canada</b></p>
                            <p className="ax"><b>Markham,L3R </b></p>
                            <p className="ax"><b>Ontario,Canada</b></p>
                        </div>
                        <div className="row text-center city">
                            <p className="col-4">State and country</p>
                            <p className="col-4">City & Zip</p>
                            <p className="col-4"> Contact Type</p>
                        </div>
                    </div>
                    <div id="login-container">
                        <div class="profile-img2 image"></div>
                        <h1 className="card-name text-info">
                            Nate lahey
                </h1>
                        <div class="description text-center">
                            The Red Pin<div class="text-divider"></div> <span className="text-secondary">Real Estate Agent</span>
                        </div>
                        <div class="social container">
                            <p className="ax"><b>Ontario,Canada</b></p>
                            <p className="ax"><b>Markham,L3R </b></p>
                            <p className="ax"><b>Ontario,Canada</b></p>

                        </div>
                        <div className="row text-center city">
                            <p className="col-4">State and country</p>
                            <p className="col-4">City & Zip</p>
                            <p className="col-4"> Contact Type</p>
                        </div>
                    </div>
                    <div id="login-container">
                        <div class="profile-img3 image"></div>
                        <h1 className="card-name text-info">
                            Martha Gim
                </h1>
                        <div class="description text-center">
                            The Red Pin<div class="text-divider"></div><span className="text-secondary">Real Estate Agent</span>
                        </div>
                        <div class="social container">
                            <p className="ax"><b>Ontario,Canada</b></p>
                            <p className="ax"><b>Markham,L3R </b></p>
                            <p className="ax"><b>Ontario,Canada</b></p>
                        </div>
                        <div className="row text-center city">
                            <p className="col-4">State and country</p>
                            <p className="col-4">City & Zip</p>
                            <p className="col-4"> Contact Type</p>
                        </div>
                    </div>
                    <div id="login-container">
                        <div class="profile-img4 image"></div>
                        <h1 className="card-name text-info">
                            Jack Gibbins
                </h1>
                        <div class="description text-center">
                            The Red Pin<div class="text-divider"></div><span className="text-secondary">Real Estate Agent</span>
                        </div>
                        <div class="social container">
                            <p className="ax"><b>Ontario,Canada</b></p>
                            <p className="ax"><b>Markham,L3R </b></p>
                            <p className="ax"><b>Ontario,Canada</b></p>
                        </div>
                        <div className="row text-center city">
                            <p className="col-4">State and country</p>
                            <p className="col-4">City & Zip</p>
                            <p className="col-4"> Contact Type</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
