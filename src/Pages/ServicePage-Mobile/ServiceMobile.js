import React, { Component } from 'react';
import './ServiceMobile.css'
import ServiceHeader from '../../components/ServiceHeader'
import {Link} from 'react-router-dom';
class ServiceMobile extends Component {
    render() {
        return (
            <div className="background-ser-mo">
                <ServiceHeader />
                <div className="container pt-1 text-center">
                    <img src={require('../../assets/service-mobile/main/Group 12.png')} alt="img" className="img-responsive service-img-m" />
                </div>
                <div className="white-con pb-5">
                    <div className="text-right">
                            <div className="pt-5">
                                
                                <div className="our-s-m-h">OUR<br/> SERVICES </div>
                                <br/>

                                <div className=" text-liner">
                                    <img src={require('../../assets/service-mobile/main/Group 10.png')} alt="lines"  className="img-responsive lines-img"/>
                                </div>

                                <div className="text-center button-grp-s pt-4">
                                    <Link to="/take-a-test">
                                        <div className="btn-1-s">TAKE A TEST</div> 
                                    </Link>
                                        <br/>
                                    <Link to="/consult">
                                        <div className="btn-1-s">CONSULT A DOCTOR</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default ServiceMobile;