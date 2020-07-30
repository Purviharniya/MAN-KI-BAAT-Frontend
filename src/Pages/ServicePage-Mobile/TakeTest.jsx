import React, { Component } from 'react';
import './TakeTest.css';
import ServiceHeader from '../../components/ServiceHeader'

class CarouselTakeTest extends Component {
  render() {
    return (
      <div>
        <div className="taketest-background">
          <ServiceHeader/>
          <div className="container">

          <div id="Taketestcarousel" className="con1 text-center carousel slide" data-interval="3000" data-ride="carousel">
            <ol className="carousel-indicators car-control-sm">
              <li data-target="#Taketestcarousel" data-slide-to="0" className="active"></li>
              <li data-target="#Taketestcarousel" data-slide-to="1"></li>
              <li data-target="#Taketestcarousel" data-slide-to="2"></li>
            </ol>


            <div className="carousel-inner">
              <div className="carousel-item text-center active">
                <div className="container">
                  <img src={require('../../assets/service-mobile/slider/Rectangle 19.png')} className="test-imgs-img-1" alt="..."/>
                  <div className="car-s-padder">
                    <div className="py-3 car-cap-s">ARE YOU DEPRESSED?</div>
                    <img src={require('../../assets/service-mobile/slider/Group 7.png')} alt="img" className="img-responsive img-lines"/>
                  </div>
                  <div className="linker-group d-block">
                    <div className="test-linker py-2"><a href="/">TAKE THE TEST</a></div>
                  </div>
                </div>
              </div>


              <div className="carousel-item text-center">
                <div className="container">
                  <img src={require('../../assets/service-mobile/slider/Rectangle 17.png')} className="test-imgs-img-1" alt="..."/>
                  <div className="car-s-padder">
                    <div className="py-3 car-cap-s">CHECK YOUR CONCENTRATION LEVEL</div>
                    <img src={require('../../assets/service-mobile/slider/Group 7.png')} alt="img" className="img-responsive img-lines"/>
                  </div>
                  <div className="linker-group d-block">
                    <div className="test-linker py-2"><a href="/">TAKE THE TEST</a></div>
                  </div>
                </div>
              </div>


              <div className="carousel-item text-center">
                <div className="container">
                  <img src={require('../../assets/service-mobile/slider/Rectangle 9.png')} className="test-imgs-img-1" alt="..."/>
                  <div className="car-s-padder">
                    <div className="py-3 car-cap-s">KNOW MORE ABOUT YOUR PERSONALITY</div>
                    <img src={require('../../assets/service-mobile/slider/Group 7.png')} alt="img" className="img-responsive img-lines"/>
                  </div>
                  <div className="linker-group d-block">
                     <div className="test-linker py-2"><a href="/">TAKE THE TEST</a></div>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-pre" href="#Taketestcarousel" role="button" data-slide="prev">
              <span className=" car-control-sliders" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next " href="#Taketestcarousel" role="button" data-slide="next">
              <span className="car-control-sliders" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default CarouselTakeTest;
