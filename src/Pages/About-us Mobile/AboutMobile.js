import React from 'react'
import './AboutMobile.css'
import AboutusCarousel from './AboutusCarousel'
import MobileHeader from '../../components/MobileHeader'

export const AboutMobile= () =>{
    const para1="Man Ki Baat welcomes you into a world of happiness and serenity. We have an intent to create a world where every individual is mentally sound and to curb the duicide curve by giving individuals who are depressed a safe and healthy platform to heal.";
    const para2="Man Ki Baat works as an artificially intelligent pocket doctor to detect, predict and prevent depression";
    const para3="Mental health is not a destination, but a process. Man Ki Baat is here to hold your hand through journey, however long it may be.";
    const para4="At Man Ki Baat, we promise to be your friend through your thick and thin. We do not just want to treat you in the best way possible, but will also make you socially strong and happy. Be it stress, anxiety or depression, we help you see beyond the problems, and focus on the joy of life. Take the test now and let us help you!";
    const quote=" \"The universe lies within you.\"";

    return(
        <div className="ab-back-m">

            <MobileHeader/>

            <div className="container px-4 ">
                <h2 className="text-center abm-head pt-5">ABOUT US</h2>
                <div className="p-2 text-justify font-build pb-5">
                    <div>{para1}</div><br/>
                    <div>{para2}</div><br/>
                    <div>{para3}</div>
                </div>
                <div className="carousel-1-abm px-4">
                    <h3 className="text-center py-4 meet-team-head">Meet Our Team</h3>
                    <AboutusCarousel />
                </div>

                <h3 className="text-center pt-5 pro-text-m pb-2">OUR PROMISE TO YOU</h3>
                <div className="text-justify font-build">
                    {para4}
                </div>
                <div className="text-left font-build-quote pt-2">{quote}</div>
                <div className="text-right pt-2 pb-5">
                    <img src={require("../../assets/about-mobile/Group 29.png")} className="mr-3" height="50%" width="50%" alt="promise"/>
                </div>
            </div>
        </div>
    )
}
