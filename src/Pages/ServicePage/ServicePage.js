import React, { Component } from 'react';
import Header from '../../components/Header'
import './ServicePage.css'
import 'bootstrap/dist/css/bootstrap.css';

class ServicePage extends Component {

    render() {
        return (
            <>
                <Header/>
                <section className="our-services">                
          <div className="row">
            <div className="col-md-6">
              <div className="container serviceheading">
                OUR <br />SERVICES
              </div>
            </div>
            <div className="col-md-6">
              <div className="container servicetext">
                <p>Man ki baat is like a linked network and we are in touch with you on social platforms also to serve you the best and 
                  keep you away from stress and anxiety<br />
                </p>
                <p>
                  For services, we have three stages of test which are explained below. We will provide services on the basis of 
                  the result of these test. <br />
                </p>
                <p>
                  Moreover, we are connected with doctors so you would get direct appointments without hesitation.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="service-1">
          <div className="row">
            <div className="col-md-8 service1cont">
              <span className="service1heading">Are You Depressed?</span><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              odo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupi
              datat non proident, sunt in culpa qui officia deserunt mollit anim id est abrum.
            </div>
            <div className="col-md-1" />
            <div className="col-md-3 service1img">
            </div>
          </div>
        </section>
        <section className="service-2">
          <div className="row">
            <div className="col-md-4 service2img">
            </div>
            <div className="col-md-8 service2cont">
              <span className="service2head">Check Your Concentration Level</span><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              odo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupi
              datat non proident, sunt in culpa qui officia deserunt mollit anim id est abrum. <p /> 
            </div>
          </div>
        </section>
        <section className="service-3">
          <div className="row">
            <div className="col-md-9 service3cont">
              <span className="service3head">Know More About Your Personality</span><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              odo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupi
              datat non proident, sunt in culpa qui officia deserunt mollit anim id est abrum.
            </div>
            <div className="col-md-3 service3img">
            </div>
          </div>
        </section>
        <section className="consult">
          <div className="row">
            <div className="col-md-6 consultimg" />
            <div className="col-md-6 consulttext">
              <span className="consultheading">CONSULT <br /> A DOCTOR</span><br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nos-
              trud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehendjerit in voluptate velit esse cillum ddolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              off icia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, conetur
              adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor shus
              dolor sit amet, consectetur adipiscing elit
            </div>
          </div>
        </section>

                
            </>
        );
    }
}

export default ServicePage;