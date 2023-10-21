import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';

const data = [
  {
   image: require('../img/banner2.jpg'), 
   caption:"Caption",
   description:"Description Here"
  },
  {
    image:require('../img/banner3.jpg'), 
    caption:"Caption",
    description:"Description Here"
   },
   {
    image:require('../img/banner4.jpg'), 
    caption:"Caption",
    description:"Description Here"
   } 
]

function HappyCorner() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          className="d-block w-100"
          src={slide.image}
          alt="slider image"
        />
        <Carousel.Caption>
          <h3>{slide.caption}</h3>
          <p>{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
    </Carousel>
  );
}
export default HappyCorner;