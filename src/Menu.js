import React from 'react';
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import logo from "./assets/nock-nock-logo-wht.png";

function Menu() {
  return (
    <>
      <div>
        <nav class="navbar navbar-light bg-light">
        <div class="navbar-container">
          <a class="navbar-brand" href="#"><img src={logo} alt="Card image cap" /></a>
          </div>
          <div class="links">
          <a class="nav-link" href="#">SELL <span class="sr-only">(current)</span></a>
          <a class="nav-link buy-links" href="#">BUY <span class="sr-only">(current)</span></a>
          <a class="nav-link" href="#">FINANCE <span class="sr-only">(current)</span></a>
          </div>
          <div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Menu;
