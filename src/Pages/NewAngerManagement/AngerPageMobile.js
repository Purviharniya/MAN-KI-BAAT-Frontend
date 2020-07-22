import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './AngerPage.css'

class AngerPageMobile extends React.Component{
    render()
    {
        return(        
        <div className="d-xs-block d-sm-block d-md-none">
        <div className="container">
            <div className="row mt-5 angerm-row">
                <div className="col-7  pl-4 text-center align-self-center angerm-heading">
                    ANGER<br/> MANAGEMENT
                </div>
                <div className="col-5">
                    <img className="img-responsive float-right angerm-img float-right" style={{height:"100%", width:"100%"}} src={require("./images/anger.jpg")} alt="anger" />
                </div>
            </div>
        </div>

        <div className="row mt-4 no-gutters">
            <div className="col-7">
                <div className="card mt-4 symptom-c-m" >
                    <div className="row no-gutters">
                        <div className="col-5">
                            <img className="card-img c-1-i-1" src={require("./images/symptom.jpg")} alt="symptom" style={{height:"8rem", width:"100%"}}  />
                        </div>
                        <div className="col-7">    
                            <h5 className="card-title d-block position-relative c-1-m-h pb-4">LETS RECOGNIZE<br/> YOUR SYMPTOMS</h5>
                            <a href="/test" className="btn b-1-c-1">TAKE TEST</a>
                        </div>
                    </div>
                </div>

                <div className="card mt-5 tune-c-m" style={{minHeight:"11rem"}}>
                    <div className="row no-gutters">
                        <div className="col-6 order-last">
                            <img className="card-img c-2-i-2" src={require("./images/music.jpg")} alt="music"  style={{height:"11rem", width:"100%"}}  />
                        </div>
                        <div className="col-6 order-first">
                            <h5 className="card-title c-2-m-h text-center">LETS PLAY <br/> SOME TUNES</h5>
                            <a href="/" className="btn b-2-c-2">PLAY</a>    
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-5 pl-3">
                <div className="card angerm-c-3">
                    <img className="img-top c-3-i-3-relax" src={require("./images/Relax.jpg")} style={{height:"9rem"}} alt="relax"/>
                        <div className="card-title c-3-t-3 text-center">FOCUS ON RELAXATION</div>
                        <div className="c-3-text3 text-center">Music,Dance,<br/>Paint</div>
                        <a href="/" className="btn b-3-c-3">MORE</a>
                </div>
            </div>
        </div>

        <div className="row pb-4">
            <div className="col-12">
                <div className="card mt-4 talk-c-m" style={{minHeight:"8rem"}}>
                    <div className="row no-gutters">
                        <div className="col-6">
                            <img className="card-img c-3-i-3" src={require("./images/talk.jpg")} alt="talk"  style={{height:"8rem", width:"100%"}}  />
                        </div>
                        <div className="col-6">    
                            <h5 className="card-title c-3-m-h text-center text-light">TALK TO SOMEONE,<br/> TALK TO US</h5>
                            <a href="/" className="btn b-3-c-3">CONTACT</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
        );
        }
        }

export default AngerPageMobile;