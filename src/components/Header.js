import React, { Component } from 'react';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.css';
import { faUserCircle,faBars,faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Header extends Component {

  componentDidMount(){
    $(document).ready(function(){
        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            if (scroll > 100) {
              $(".mynavbar").css("background" , "#0005");
            }
      
            else{
                $(".mynavbar").css("background" , "");  	
            }
        })
      });
   
        $(document).ready(function(){
            $(window).scroll(function(){
                var scroll = $(window).scrollTop();
                if (scroll > 100) {
                  $(".mynavbar").css("backdrop-filter","saturate(180%) blur(20px)");
                }
          
                else{
                    $(".mynavbar").css("backdrop-filter" , "");  	
                }
            })
          });
}

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