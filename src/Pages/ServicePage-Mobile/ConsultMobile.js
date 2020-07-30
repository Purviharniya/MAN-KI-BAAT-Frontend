import React, { Component } from 'react';
import './ConsultMobile.css'
import ServiceHeader from '../../components/ServiceHeader'
import {Link} from 'react-router-dom';
class ServiceMobile extends Component {
    render() {
        return (
            <div className="background-consult-mo">
                <ServiceHeader />
                <div className="container pt-1 text-center">
                    <img src={require('../../assets/service-mobile/consult/Rectangle 3.png')} alt="imgs" className="img-responsive consult-img-m" />
                </div>
                <div className="white-con-con pb-5">
                    <div className="text-right">
                            <div className="pt-5">
                                <div className="con-a-doc-mh">CONSULT<br/> A DOCTOR </div>
                                <br/>

                                <div className="con-text-liner">
                                    <img src={require('../../assets/service-mobile/consult/Group 8.png')} alt="lines" className="img-responsive consult-lines-img"/>
                                </div>

                                <div className="text-center button-con-m pt-5">
                                    <Link to="/">
                                        <div className="btn-1-s-consult">CONSULT NOW</div> 
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