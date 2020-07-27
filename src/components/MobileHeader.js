import React, { Component } from 'react';
import {Nav, Navbar} from "react-bootstrap";
import { faUserCircle,faBars,faSearch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './MobileHeader.css'

class MobileHeader extends Component {
    render() {
        return (
            <div className="header-mob">
                <Navbar style={{boxShadow:"none",marginBottom:"0"}}>
                    <Navbar.Brand href="/">
                    <img
                        src={require("./images/logo.png")}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="mkb-icon"
                    />
                    </Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="/"><FontAwesomeIcon icon={faUserCircle} size="2x" color="#ed257a"/></Nav.Link>
                        <Nav.Link href="/"><FontAwesomeIcon icon={faBars} size="2x" color="#ed257a" /></Nav.Link>
                    </Nav>
                </Navbar>

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