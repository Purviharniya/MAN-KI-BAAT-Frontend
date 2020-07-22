import React from 'react'
import AngerPageDesktop from './AngerPageDesktop'
import AngerPageMobile from './AngerPageMobile'
import './AngerPage.css'
import 'bootstrap/dist/css/bootstrap.css';

class MainAngerPage extends React.Component{
    render(){
        return(
            <React.Fragment>
                <AngerPageDesktop/>
                <AngerPageMobile/>
            </React.Fragment>
        )
    }
}
export default MainAngerPage;
