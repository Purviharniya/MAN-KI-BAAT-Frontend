import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './AngerPage.css'
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AngerPageDesktop extends React.Component{
    render()
    {
        return(
            <div className="container d-none d-md-block d-lg-block">
                
                <div className="row mt-5 anger-row">
                    <div className="col-7 col-md-7 offset-md-1 text-center align-self-center">
                        ANGER <br/> MANAGEMENT
                    </div>
                    <div className="col-5 col-md-4">
                        <img className="img-responsive float-right anger-img" style={{height:"100%", width:"70%"}} src={require("./images/anger.jpg")} alt="anger" />
                    </div>
                </div>
                                    

                <div className="row mt-2">
                    <div className="col-12 col-md-11 offset-md-1 mt-5 ">
                        <div className="row">
                            <div className="col-12 col-md-6 pt-3">
                                <div className="card anger-card-one">
                                    <div className="row no-gutters">
                                        <div className="col-5">
                                            <img className="card-img img-responsive" style={{height:"100%"}} src={require("./images/music.jpg")} alt="music" />
                                        </div>
                                        <div className="col-7">
                                            <div className="card1-body">
                                                
                                                    <h5 className="card-title text-left">LETS PLAY SOME TUNES!!!!</h5>
                                                    <div className=" d-none d-md-block">
                                                        <div className="row">
                                                            <div className="col-3">
                                                            <FontAwesomeIcon icon={faSquare} size="3x" color="#FFAA9D"/>
                                                            </div>
                                                            <div className="col-9">
                                                            <p> Song Name <br/> Artist</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-3">
                                                            <FontAwesomeIcon icon={faSquare} size="3x" color="#FFAA9D"/>
                                                            </div>
                                                            <div className="col-9">
                                                            <p> Song Name <br/> Artist</p>
                                                            </div>
                                                        </div>
                                                        <div className="row pb-5">
                                                            <div className="col-3">
                                                            <FontAwesomeIcon icon={faSquare} size="3x" color="#FFAA9D" />
                                                            </div>
                                                            <div className="col-9">
                                                            <p> Song Name <br/> Artist</p>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                <a href="/" className="btn anger-btn-one">VIEW MORE</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-5 pt-3">
                                <div className="card anger-card-one">
                                    <img className="img-fluid" src={require("./images/relax-d.jpg")} style={{height:"20vh", width:"100%"}} alt="relax"/>
                                    <div className="card2-body">
                                        <h5 className="card-title text-center">LETS RELAX FOR A WHILE</h5>
                                        <div className="card-text d-none d-md-block">
                                            <div className="row btn-links">
                                                <div className="col-6"><a href= "/" className="btn btn-block btn-link">Paint</a></div>
                                                <div className="col-6"><a href="/" className="btn btn-block btn-link">Music</a></div>
                                                <div className="col-6 pt-2"><a href="/" className="btn btn-block btn-link">Dance</a></div>
                                            </div>
                                            <div className="row btn-links">
                                                <div className="col-6 pt-2 pb-5"><a href="/" className="btn btn-block btn-link">Cook</a></div>
                                                </div>
                                            </div>
                                        <a href="/" className="btn anger-btn-one">VIEW MORE</a>
                                        </div>
                                    </div>
                                </div>
                    </div>
                </div>                 
            </div>

            <div className="row mt-3 pb-5">
                <div className="col-12 col-md-4 pt-5">
                    <div className="card anger-card-two c-1" style={{minHeight:"10rem"}}>
                        <div className="row no-gutters">
                            <div className="col-5">
                                <img className="card-img img-3-1" src={require("./images/motivation.jpg")} alt="motivation" />
                            </div>
                            <div className="col-7">
                                <div className="card3-body">
                                    <h6 className="card-title res">MOTIVATIONAL POSTS</h6><br/>
                                    <a href="/" className="btn anger-btn-two">VIEW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 pt-5">
                    <div className="card anger-card-two c-2" style={{minHeight:"10rem"}}>
                        <div className="row no-gutters">
                            <div className="col-5">
                                <img className="card-img img-3-2" src={require("./images/symptoms.jpg")}  alt="symptoms" />
                            </div>
                            <div className="col-7">
                                <div className="card4-body">
                                    <h6 className="card-title pb-1">LETS RECOGNISE YOUR WARNING SYMPTOMS</h6> 
                                    <a href="/" className="btn anger-btn-two">TEST</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 pt-5">
                    <div className="card anger-card-two c-3" style={{minHeight:"10rem"}}>
                        <div className="row no-gutters">
                            <div className="col-5">
                                <img className="card-img img-3-3" src={require("./images/talk-d.jpg")}  alt="Talk" />
                            </div>
                            <div className="col-7">
                                <div className="card5-body">
                                    <h6 className="card-title text-center">TALK TO SOMEONE, TALK TO US</h6><br/>
                                    <a href="/" className="btn anger-btn-two" style={{marginBottom:'0'}}>CONTACT</a>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default AngerPageDesktop
