import React from 'react';
import './WorksMobile.css'
import {Nav, Navbar} from "react-bootstrap";
import { faUserCircle,faBars,faSearch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileHeader from '../../components/MobileHeader'

class WorksMobile extends React.Component{
    render(){
        return(

            <div className="works-background">
                
                <MobileHeader />

                <div className="container py-5">
                    <h2 className="text-center howm-text pb-5">HOW IT WORKS</h2>
                

                <div className="row no-gutters text-light">
                    <div className="col-7 hwm-c1">
                        <div className="card1-pad">
                            <div className="hwm-1-h1 text-right">
                                01
                            </div>
                            <div className="text-justify download-t1 pl-3">
                                Download our MAN KI BAAT from play store for a soft accessing or visit our website.<br/> <br/>
                                It is a simple pocket supplement which is user friendly and interactive
                            </div>
                        </div>
                    </div>
                    <div className="col-5 hwm-c2 text-center">
                        <div className="card-2-pad">
                            <img src={require('./images/Group 15.png')} className="h-down-img img-responsive" alt="download"/> <br/>
                            <div className="download-title text-light pt-2">DOWNLOAD</div>
                        </div>
                    </div>
                </div>

                <div className="row no-gutters pt-3 text-light">
                    <div className="col-5 hwm-c2 text-center">
                        <div className="card-3-pad">
                            <img src={require('./images/Group 16.png')} className="h-down-img img-responsive" alt="download"/> <br/>
                            <div className="download-title text-light pt-2">ENROLL</div>
                        </div>
                    </div>
                    <div className="col-7 hwm-c3">
                        <div className="card-4-pad">
                            <div className="hwm-1-h1 text-left">
                                02
                            </div>
                            <div className="text-justify download-t1">
                                Getting signed up is a small formality to make sure we can stick around
                                through your entire journey of coping with mental health therapy. <br/><br/>
                                You may choose to be anonymous. We rescpect your privacy.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row no-gutters pt-3 text-light">
                    <div className="col-7 hwm-c1">
                        <div className="card-5-pad">
                            <div className="hwm-1-h1 text-right">
                                03
                            </div>
                            <div className="text-justify download-t1">
                                You may also connect with us using your social media accounts, for easier &amp; faster linking
                                access. <br/><br/> We would never post without your permission.
                            </div>
                        </div>
                    </div>
                    <div className="col-5 hwm-c2 text-center">
                        <div className="card-6-pad">
                            <img src={require('./images/Group 17.png')} className="h-down-img img-responsive" alt="download"/> <br/>
                            <div className="download-title text-light pt-2">LOGIN</div>
                        </div>
                    </div>
                </div>

                <div className="row no-gutters pt-3 text-light">
                    <div className="col-5 hwm-c2 text-center">
                        <div className="card-7-pad">
                        <img src={require('./images/Group 18.png')} className="h-down-img img-responsive" alt="download"/><br/>
                        <div className="download-title text-light pt-2">QUESTIONNAIRE</div>
                        </div>
                    </div>
                    <div className="col-7 hwm-c3">
                        <div className="card-8-pad">
                            <div className="hwm-1-h1 text-left">
                                04
                            </div>
                            <div className="text-justify download-t1">
                                You will be taken to a user friendly questionnaire. <br/><br/>
                                These questions have been carefully designed after psychiatric consultations and medical research 
                                based on ICD 10 guidelines pubhlished by the WHO.
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row pt-5">
                    <div className="container whatnext-card">
                        <div className="whatnext-c-text text-justify">
                            MAN KI BAAT judges your state of mind based on your answers to the questionnaire.
                            If we find you stressed, we direct you to a chat bot. It's a place where you can talk to our other
                            users anonymously. <br/>
                            If you're found to be depressed or on the verge of depression, we take you to our TAT(Thematic 
                            Apperception Test) page. This is based on image processing and response. Our AI systems also take into
                            account your visual reactions accessed via your webcam.
                        </div>
                    </div>
                </div>
                
        </div>

        

        </div>
        )
    }
}

export default WorksMobile;