import React, { Component } from 'react';
import { faUserCircle,faBars} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './MobileHeader.css'

class ServiceHeader extends Component {
    render() {
        return (
            <div className="header-mob">
                <nav className="navbar navbar-expand navbar-light" style={{boxShadow:"none",marginBottom:"0"}}>
                
                <a className="navbar-brand" href="/">
                    <img
                        src={require("./images/logo.png")}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="mkb-icon"
                    />
                    </a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">                    
                            <Link to="/">
                                <li className="nav-item pr-3"><FontAwesomeIcon icon={faUserCircle} size="2x" color="#ed257a"/></li>
                            </Link>
                            <Link to="/">
                                <li className="nav-item"><FontAwesomeIcon icon={faBars} size="2x" color="#ed257a" /></li>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default ServiceHeader;