import React from 'react';
import "./Dropdown.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import fb from "./assets/Facebook.png";
import tw from "./assets/Twitter.png";
import ins from "./assets/Instagram.png";

function Dropdown() {
    return (
        <>
            <div className="dropdown-list bg-info">
                <div className="dropdown-m">
                    <p className="text-light"> Agent Directory</p>
                    <p className="text-light"> About Us</p>
                    <p className="text-light"> Blog</p>
                    <p className="text-light"> privacy</p>
                    <p className="text-light"> Term And Conditions</p>
                </div>
                <div className="dropdown_footer my-5 text-light">
                    <p>+1_88 888 856<div className="dropdown_icon">
                        <span>
                            <img class="card-img-top icon-popup" src={fb} alt="Card image cap" />
                        </span>
                        <span>
                            <img class="card-img-top icon-popup " src={tw} alt="Card image cap" />
                        </span>
                        <span>
                            <img class="card-img-top icon-popup" src={ins} alt="Card image cap" />
                        </span>
                    </div></p>
                    <p> Hello@Nocknock.Ca</p>
                </div>

            </div>
        </>
    );
}

export default Dropdown;
