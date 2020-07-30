import React, { Component } from 'react';
import { faUserCircle,faBars,faSearch} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './MobileHeader.css'

class MobileHeader extends Component {
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

                <div className="input-group" style={{width:"80%",marginLeft:"10%"}}>
                    <input type="text" className="form-control searchbar-hw" placeholder="Search here.." />
                    <div className="input-group-append">
                        <button className="btn btn-search-hw" type="button">
                            <FontAwesomeIcon icon={faSearch} color="#ed257a" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MobileHeader;
