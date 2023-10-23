import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

const Home = () => {
  return (
    <MDBContainer className="mt-3">
      <MDBRow className="justify-content-md-center mb-4">
        <MDBCol md="6">
          <MDBCard className="mb-3">
            <MDBCardBody>
              <MDBCardTitle className="text-center">
                Welcome to Tasha's Pet Shop
              </MDBCardTitle>
              <MDBCardTitle className="text-center" style={{ fontSize: '1rem' }}>
                Where Pet Dreams Come True!
              </MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        <ContentSection
          subtitle="About us"
          text="At Tasha's Pet Shop, we're all about spreading joy and happiness through our furry, feathered, and scaly friends. Our passion for pets drives everything we do."
          emoji=""
        />
        <ContentSection
          subtitle="Our Furry Family"
          text="We specialize in all things cute and cuddly! Our team takes great pride in ensuring all our pets are healthy, happy, and well-cared for."
          emoji="🐶🐱🐰🐢🐦🐠"
        />
        <ContentSection
          subtitle="Pet Products Galore"
          text="Our store is stocked with high-quality pet supplies. We believe that a pampered pet is a happy pet!"
          emoji="🌈"
        />
        <ContentSection
          subtitle="Community and Events"
          text="Join our vibrant pet-loving community. We believe in making a difference in the lives of animals in need."
          emoji="🌟"
        />
        <ContentSection
          subtitle="Local Delivery and Worldwide Shipping"
          text="We offer local delivery and worldwide shipping, so you can access our products and services wherever you are."
          emoji="🚚🌍"
        />
        <ContentSection
          subtitle="Join Tasha's Pet Shop Family Today!"
          text="We're here to support you every step of the way. Let's make pet dreams come true together!"
          emoji="🌟"
        />
      </MDBRow>
    </MDBContainer>
  );
};

const ContentSection = ({ subtitle, text, emoji }) => {
  return (
    <MDBCol>
      <MDBCard className="h-100">
        <MDBCardBody>
          <MDBCardTitle>{emoji} {subtitle}</MDBCardTitle>
          <MDBCardText>{text}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default Home;
