import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import AngerPage from './AngerPage'

const MainAngerPage = () => {
  return (
    <div className="background" >
      <div className="row" style={{marginLeft:0, marginRight:0}}>
        <Router>
          <Sidebar />
          <div id="main-content" className="col-md-10" >
            <Switch>
              <Route exact path="/" component={AngerPage} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
};

export default MainAngerPage;