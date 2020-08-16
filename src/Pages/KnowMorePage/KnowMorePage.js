import React, { Component } from 'react';
import Header from '../../components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import './KnowMorePage.css';

class KnowMorePage extends Component {
    render() {
        return (
            <div className="know-more-ab-us">
                <Header/>
                <section className="aboutus">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-5">
                <div className="row">
                  <div className="col-12 aboutusleft align-self-center">
                    <h1 className="abheading">ABOUT US</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="text-wrapper text-justify abpara">
                      <p>Man ki baat welcomes you into a world of happiness and serenity. We have an intent to create a world where
                        every individual is mentally sound and to curb the suicide curveby giving individuals who are depressed a safe 
                        and healthy platform to heal.
                      </p>
                      <p>
                        Man Ki Baat works as an artificially intelligent pocket doctor to detect ,predict and prevent depression.
                      </p>
                      <p>
                        Mental health is not a destination , but a process. Man Ki Baat is here to hold your hand through journey,
                        however long it may be.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-7 aboutusright">
              </div>
            </div>
          </div>
        </section>
        <div>
          <img src={require('./images/upper.png')} alt="wave1"  className="upper-wave1"/>
        </div>
        <div >
          <img src={require('./images/lower1.png')} alt="wave2" className="lower-wave1"/>
        </div>
        <section className="promise">
          <div className="container">
            <div className="row">
              <div className="col-5 align-self-center">
                <div className="promiseheading">PROMISE <br /> TO YOU </div>
              </div>
              <div className="col-7">
                <div className="text-justify promisepara">
                  At Man Ki Baat, we promise to be your friend through your thick and thin. We do not just want to treat you in the best 
                  way possible, but will also make you socially strong and happy. Be it stress, anxiety or depression, we help you see
                  beyond the problems, and focus on the joy of life. Take the test now and let us help you!
                </div>
                <br /> 
                <div className="quote">"The universe lies within you." </div>
              </div>
            </div>
          </div>
        </section>
        <section className="howitworks">
          {/*section seprating clouds*/}
          <div >
            <img src={require('./images/cloud.png')} alt="cloudy" className="cloud-one" />
          </div>
          <div >
            <img src={require('./images/cloud1.png')} alt="cloudy" className="cloud-two"/>
          </div>
          <div>
            <img src={require('./images/cloud.png')} alt="cloudy"  className="cloud-three"/>
          </div>
          <div className="row steps-pro">
            <div className="col-12 text-center">
              <h1 className="howhead">HOW IT WORKS </h1>
            </div>
          </div>
          <div className="container">
            <img src={require('./images/howitworks.png')} alt="how-it-works" className="how-works-img-d" />
            <div className="row substeps">
              <div className="col-3" style={{paddingLeft: '4%'}}>
                DOWNLOAD
              </div>
              <div className="col-3 text-center">
                ENROLL
              </div>
              <div className="col-3 text-center" style={{paddingLeft: '4%'}}>
                LOGIN
              </div>
              <div className="col-3" style={{paddingLeft: '7%'}}>
                QUESTIONNAIRE
              </div>
            </div>
            <img src={require('./images/1.png')} style={{width: '84%'}} className="rounded mx-auto d-block" alt="steps"/>
            <div className="row stepdetails">
              <div className="col-3 text-center" style={{paddingRight: '5%'}}>
                Download our application MANN KI BAAT from play store for a soft accessing or visit our website.
                <br /><br />
                It is a Simple pocket supplement which is user friendly and interactive.
              </div>
              <div className="col-3 text-center" style={{paddingRight: '3%', paddingLeft: '2%'}}>
                Getting signed up is a small formality to make sure we can stick around through your entire journey of coping with
                mental health therapy.
                <br /><br />
                You may also choose to be anonymous. We respect your privacy.
              </div>
              <div className="col-3 text-center" style={{paddingRight: '2%', paddingLeft: '5%'}}>
                You may also connect with us using your social media accounts, for easier &amp; faster linking access.
                <br /><br />
                We would never post without your permission.
              </div>
              <div className="col-3 text-center" style={{paddingRight: '1%', paddingLeft: '5%'}}>
                You are taken to a user friendly questionnaire.
                <br /><br />
                These questions have been carfeully designed after psychiatric consultations and medical research based on 
                ICD 10 guidelines published by the WHO.
              </div>
            </div>
            <div className="row whatnext">
              <div className="col-3 col-md-4">
                <div className="align-middle align-self-center whatsnext">
                </div>
              </div>
              <div className="col-8 col-md-8 text-justify">
                <div style={{paddingTop: '8%', paddingRight: '10%', paddingBottom: '8%'}}>
                  Man Ki Baat judges your state of mind based on your answers to the questionnaire.
                  If we find you stressed, we direct you to a chat bot. It's a place where you can talk to
                  our other users anonymously.
                  <br />
                  If you're found to be depressed or on the verge of depression, we take you to our TAT
                  (Thematic Apperception Test) page. This is based on image processing and response.
                  Our AI systems also take into account your visual reactions accessed via your webcam.
                  If you aren't Depressed or Stressed, you're all good to go! Congratulations!
                </div>
              </div>
            </div>
            <div className="separator" style={{paddingBottom: '7%'}}>
            </div>
            <div className="row benefits">
              <div className="col-8 col-md-8 benefitcost" style={{paddingTop: '8%', paddingLeft: '8%', paddingBottom: '4%'}}>
                <ul className="benefitul">
                  <li>First login report will be free but at second login, the report depression test will cost Rs 10.</li>
                  <li>If you want to go to chat bot through depression test then it will cost you Rs 25/per month.</li>
                  <li>If you only want the chat bot services and you don't need the depression test then it will cost 
                    you Rs 50/per month.
                  </li>
                </ul>
              </div>
              <div className="col-3 col-md-4 benefithead">
              </div>
            </div>
            <div className="separator" style={{paddingBottom: '10%'}}>
            </div>
          </div>
        </section>
            </div>
        );
    }
}

export default KnowMorePage;
