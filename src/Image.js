import React from 'react';
import "./Image.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";




function Image() {
    return (
        <>
            <div class=" banner-container">
                <div class="description-banner">
                    <h4 className="text-center">GET A $5,000 INTEREST-FREE RENOVATION ADVANCE</h4>
                    <div className="my-4">
                        <h1 className="text-center "><span><b>Buy    </b></span><span className="z">your home from the</span></h1>
                        <h1 className="text-center z">comfort of your couch.</h1>
                    </div>
                    <div className="my-4 description2">
                        <h5 className="text-center ">GET READY FOR A REAL ESTATE EXPERIENCE</h5>
                        <h5 className="text-center">UNLIKE ANY YOU'VE EVER HAD BEFORE.</h5>
                    </div>
                    <div class="wrapper">
                        <div class="container-bar">
                            <input type="text" class="input" placeholder="City or Postal Code" />
                            <input type="button" value="search" class="close-btn" />
                        </div>
                        <div class="finance">
                            <p className="text-center">NEED FINANCING?</p>
                        </div>
                    </div>
                </div>
                <div class="background-overlay"></div>
            </div>
        </>

    );
}

export default Image;
