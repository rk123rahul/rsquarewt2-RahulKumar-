import React from 'react';
import "./Info.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import pic1 from "./assets/mortgage.png";
import pic2 from "./assets/financial.png";
import pic3 from "./assets/deal.png";
import pic4 from "./assets/seller.png";

function Info() {
    return (
        <> <div className="container">
            <div className="row info-flex1"> 
            <div class="card info-card  my-5" >
                <img class="card-img-top" src={pic1} alt="Card image cap" />
                <div class="card-body">
                <h5 class="card-title text-center">HAND CURATED PROFESSIONALS </h5>
                    <p class="card-text">Buying? selling? Financing?No problem.Our team is hand selected from the best professionals in each specific area of Real Estate </p>
                </div>
            </div>
            <div class="card info-card my-5" >
                <img class="card-img-top" src={pic2} alt="Card image cap" />
                <div class="card-body">
                <h5 class="card-title text-center">SAVE ON FEES</h5>
                    <p class="card-text">Pay just 4.5% in fees.That's 0.5% less than the traditional 5% and,<br></br> thousand saving.</p>
                </div>
            </div>
            </div>
            </div>
            <div className="container">
            <div className="row info-flex1"> 
            <div class="card info-card  my-5" >
                <img class="card-img-top" src={pic3} alt="Card image cap" />
                <div class="card-body text-center">
                <h5 class="card-title">MAXIMIZE YOURS SALE PRICE</h5>
                    <p class="card-text">Sell your home at higher price and attract more buyers with a $5 interest-free advance for renovations. </p>
                </div>
            </div>
            <div class="card info-card my-5" >
                <img class="card-img-top" src={pic4} alt="Card image cap" />
                <div class="card-body">
                <h5 class="card-title text-center">EXPERTISE AT EVERY STEP</h5>
                    <p class="card-text">From setting the right list price to closing,you'll be supported by local industry experts.</p>
                </div>
            </div>
            </div>
            </div>

        </>
    );
}

export default Info;
