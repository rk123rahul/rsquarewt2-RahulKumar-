import React from 'react';
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Menu from "./Menu"
import Footer from "./Footer"
import Card from "./Card"
import Info from "./Info"
import Image from "./Image"
function App() {
  return (
    <>
      <div class="body-container">
        <Menu></Menu>
        <Image></Image>
        <div class="divider  text-center"></div>
        <div className="text-center my-5 text-secondary">
             <h4>Why People choose Us Over The Rest.</h4>
        </div>
        <Info></Info>
        <div class="card sort-by-area  container text-center my-3 ">
          <div class="card-body text-info">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <b>Sort By Area</b>

                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
                <hr></hr>
              </li>
            </ul>
          </div>
        </div>
        <Card></Card>
        <h6 class="text-center text-info my-5">VIEW MORE</h6>
        <Footer></Footer>
      </div>

    </>
  );
}

export default App;
