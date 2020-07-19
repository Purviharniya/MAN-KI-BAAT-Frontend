import React, { useEffect } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  useEffect(() => {
    document
      .getElementById('sidebarCollapse')
      .addEventListener('click', function () {
        document.getElementById('sidebar').classList.toggle('active');
        this.classList.toggle('active');
      });
  });


  return (
    <div className="col-2">
      <div className="row justify-content-center"> 
      <nav className="col-8 col-sm-4 col-md-3 col-lg-2" id="sidebar">
        <div className="sidebar-header ">
        <Link to="/">
          <div className="row mt-5">
            <div className="col-10 align-self-center sidebar-head pl-5">MAN KI BAAT</div>
            <div className="col-2 square"></div>
          </div>
          </Link>
          <Link to="/therapy">
          <div className="therapy-head">
            THERAPY-
          </div>
          </Link>
        </div>

        <ul className="list-unstyled components mt-10 pt-5 mb-5 pl-4">
          <Link to="/therapy/meditation">
            <li className="d-flex align-items-center mb-4">
              <h6 className="text--cstm-m-0  db-nav-color--secondary ">
                MEDITATION
              </h6>
            </li>
          </Link>
          <Link to="/therapy/smilingyoga">
            <li className="d-flex align-items-center mb-4">
             <h6 className="text--cstm-m-0 db-nav-color--secondary ">
                SMILING YOGA
              </h6>
            </li>
          </Link>
          <Link to="/dashboard/angermanagement">
            <li className="d-flex align-items-center mb-4">
              <h6 className="text--cstm-m-0 db-nav-color--secondary ">
                ANGER MANAGEMENT
              </h6>
            </li>
          </Link>
          <Link to="/dashboard/musictherapy">
            <li className="d-flex align-items-center mb-4">
             <h6 className="text--cstm-m-0 db-nav-color--secondary ">
                MUSIC THERAPY
              </h6>
            </li>
          </Link>
        </ul>
      </nav>
      <div id="content" className="d-md-block d-lg-none">
        <nav
          id="new-navbar-left--cstm"
          className="navbar navbar-expand-lg navbar-light bg-light rounded-circle"
        >
          <div className="container-fluid">
            <button type="button" id="sidebarCollapse" className="navbar-btn">
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      </div></div>

    </div>
  );
};
export default Sidebar;