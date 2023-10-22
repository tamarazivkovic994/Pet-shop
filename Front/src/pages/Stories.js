import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const data = [
  {
    image: require("../img/banner2.jpg"),
    caption: "Archi and Don Vito",
    description: "Enjoying the beatiful day at sea",
  },
  {
    image: require("../img/banner3.jpg"),
    caption: "Archibald",
    description: "Fall has come and lets all have fun in the leaves",
  },
  {
    image: require("../img/banner4.jpg"),
    caption: "Arci and Don Vito",
    description: "A perfect day for a walk in the park",
  },
];

function HappyCorner() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="mt-2 carousel"
    >
      {data.map((slide, i) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src={slide.image}
              alt="slider image"
            />
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
export default HappyCorner;
