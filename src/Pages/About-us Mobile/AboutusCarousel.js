import React, { useState } from 'react';
import {Carousel,CarouselItem,CarouselControl,CarouselIndicators} from 'reactstrap';
import './AboutusCarousel.css';

const items = [
  {
    src: require('./images/team/1.png'),
    name: 'Anustup Mukherjee',
    desig: 'CEO'
  },
  {
    src: require('./images/team/2.png'),
    name: 'Ayush Tripathi',
    desig: 'COO & CO-FOUNDER'
  },
  {
    src: require('./images/team/3.png'),
    name: 'Ashish Sharma',
    desig: 'COO & CO-FOUNDER'
  },
  {
    src: require('./images/team/4.png'),
    name: 'Ankit Raj',
    desig: 'CTO'
  },
  {
    src: require('./images/team/5.png'),
    name: 'Ipshita Prosad',
    desig: 'HOP'
  },
  {
    src: require('./images/team/6.png'),
    name: 'Aditya Kumar',
    desig: 'DIRECTOR'
  },

];

const AboutusCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
          <div className="text-center">
            <img src={item.src} alt={item.name} width="60%" height="50%" className="team-imgs"/>
        <h5 className="head-name">{item.name}</h5>
        <h6  className="pb-5 head-design"> {item.desig}</h6>
        </div>
       
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      interval={3000}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} className="indicate"/>
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} className="control-car1"/>
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} className="control-car2" />
    </Carousel>
  );
}

export default AboutusCarousel;