import React from 'react';
import ServicePage from './ServicePage/ServicePage'
import { BrowserRouter as Router,Route} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Route exact path = '/' render={
                props =>(
                  <React.Fragment>
                    <ServicePage/>
                  </React.Fragment>
                )
              }>
      </Route>
      </Router>
      </>
  );
}

export default App;
