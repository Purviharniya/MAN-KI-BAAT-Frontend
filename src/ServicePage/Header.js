import React, { Component } from 'react';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.css';
import { faUserCircle,faBars,faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';


class Header extends Component {


    render() {
        return (
            <header>        
          <section className="mynavbar">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <nav>
                  <Link to="/" className="icons"><FontAwesomeIcon icon={faUserCircle} className="icon px-2" /></Link>
                  <Link to="/" className="icons"><FontAwesomeIcon icon={faBars} className="icon px-2"/></Link>
                  <Link to="/" className="icons"><FontAwesomeIcon icon={faSearch} className="icon px-2"/></Link>
                  <ul>
                    <li><Link to="/" className="btn def-btn">Man ki baat.</Link></li>
                    <li><Link to="/" className="btn def-btn"><div className="square" /></Link></li>
                  </ul>
                </nav>
              </div>
            </div>
          </section>
        </header>
        );
    }
}

export default Header;