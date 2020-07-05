import React from 'react';
import ServicePage from './Pages/ServicePage/ServicePage';
import { BrowserRouter as Router,Route} from "react-router-dom";
import KnowMorePage from './Pages/KnowMorePage/KnowMorePage';

function App() {
  return (
    <>
    <Router>
      <Route exact path = '/' render={
                props =>(
                  <React.Fragment>
                    <KnowMorePage/>
                    <img src='./Pages/KnowMorePage/images/lower.png' alt="" />
                  </React.Fragment>
                )
              }>
      </Route>
      </Router>
      </>
  );
}

export default App;
