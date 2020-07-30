import React, { useState } from 'react';
import './AboutusCarousel.css';


const AboutusCarousel = (props) => {
  return (
    <div>
      <div id="Aboutuscarousel" className="con1 text-center carousel slide carousel-fade" data-ride="carousel" data-interval="3000">
            <ol className="carousel-indicators indicate">
              <li data-target="#Aboutuscarousel" data-slide-to="0" className="active"></li>
              <li data-target="#Aboutuscarousel" data-slide-to="1"></li>
              <li data-target="#Aboutuscarousel" data-slide-to="2"></li>
              <li data-target="#Aboutuscarousel" data-slide-to="3"></li>
              <li data-target="#Aboutuscarousel" data-slide-to="4"></li>
              <li data-target="#Aboutuscarousel" data-slide-to="5"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="text-center">
                  <img src={require('../../assets/about-mobile/team/1.png')} alt="1" width="60%" height="50%" className="team-imgs"/>
                  <h5 className="head-name">Anustup Mukherjee</h5>
                  <h6  className="pb-5 head-design"> CEO </h6>
                </div>
              </div>


              <div className="carousel-item ">
                <div className="text-center">
                  <img src={require('../../assets/about-mobile/team/2.png')} alt="2" width="60%" height="50%" className="team-imgs"/>
                  <h5 className="head-name">Ayush Tripathi</h5>
                  <h6  className="pb-5 head-design"> COO &amp; CO-FOUNDER </h6>
                </div>
              </div>

              <div className="carousel-item ">
                <div className="text-center">
                  <img src={require('../../assets/about-mobile/team/3.png')} alt="3" width="60%" height="50%" className="team-imgs"/>
                  <h5 className="head-name">Ashish Sharma</h5>
                  <h6  className="pb-5 head-design"> COO &amp; CO-FOUNDER </h6>
                </div>
              </div>

              <div className="carousel-item ">
                <div className="text-center">
                  <img src={require('../../assets/about-mobile/team/4.png')} alt="4" width="60%" height="50%" className="team-imgs"/>
                  <h5 className="head-name">Ankit Raj</h5>
                  <h6  className="pb-5 head-design">CTO</h6>
                </div>
              </div>

              <div className="carousel-item ">
                <div className="text-center">
                  <img src={require('../../assets/about-mobile/team/5.png')} alt="5" width="60%" height="50%" className="team-imgs"/>
                  <h5 className="head-name">Ipshita Prosad</h5>
                  <h6  className="pb-5 head-design">HOP</h6>
                </div>
              </div>

              <div className="carousel-item ">
                <div className="text-center">
                  <img src={require('../../assets/about-mobile/team/6.png')} alt="6" width="60%" height="50%" className="team-imgs"/>
                  <h5 className="head-name">Aditya Kumar</h5>
                  <h6  className="pb-5 head-design"> DIRECTOR </h6>
                </div>
              </div>
            </div>

            <a className="carousel-control-prev control-car1" href="#Aboutuscarousel" role="button" data-slide="prev">
              <span className=" car-control-sliders" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next control-car2" href="#Aboutuscarousel" role="button" data-slide="next">
              <span className=" car-control-sliders" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>

      </div>
    </div>
  );
}

export default AboutusCarousel;
