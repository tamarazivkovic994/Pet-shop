import React from "react";
import { MDBCard, MDBCardGroup, MDBTypography } from "mdb-react-ui-kit";
import stories from "../data/stories.js";
import Carousel from "react-bootstrap/Carousel";

function Stories() {
  const carouselInterval = 3000;
  return (
    <div style={{ paddingTop: '10%' }}>
      <h1>Happy Adoption Stories</h1>
      <Carousel interval={carouselInterval}>
        {stories.map((story) => (
          <Carousel.Item key={story.id}>
            <div className="d-flex">
              <img
                className="d-block w-50"
                src={story.image}
                alt={story.name}
                style={{ objectFit: "cover", maxHeight: "550px" }}
              />

              <div className="d-flex flex-column justify-content-center w-50 p-4 carouselStory">
                <h3>
                  {story.name}, {story.age}
                </h3>
                <p>{story.story}</p>
                <p className="text-muted" style={{ fontStyle: "italic" }}>
                  - story by {story.contributor}
                </p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <MDBCardGroup className="m-2">
        {stories.map((story) => (
          <MDBCard
            className="m-2 d-flex justify-content-between flex-column cardStory"
            key={story.id}
            style={{ flex: "1 0 21%" }}
          >
            
              <img
                src={story.image}
                className="card-img-top m-1 p-2 cardImage"
                alt={story.name}
              />
          
            <div className="card-body-story">
              <h5 className="card-title">{story.name}</h5>
              <p className="card-text-story">
                <small>Age: {story.age}</small>
              </p>
              <p className="card-text-story">{story.story}</p>
              <MDBTypography tag="footer" className="blockquote-footer">
                <i>Story by {story.contributor}</i>
              </MDBTypography>
            </div>
          </MDBCard>
        ))}
      </MDBCardGroup>
    </div>
  );
}
export default Stories;
