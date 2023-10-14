import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBContainer,
} from "mdb-react-ui-kit";

const Home = () => {
  return (
    <MDBContainer className="d-flex justify-content-center mt-3 textContainer">
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>
            Welcome to Tasha's Pet Shop - Where Pet Dreams Come True!
          </MDBCardTitle>
          <MDBCardSubTitle className="cardSubTitle">About us</MDBCardSubTitle>
          <MDBCardText className="d-flex justify-content-center align-items-center cardText">
            At Tasha's Pet Shop, we're all about spreading joy and happiness
            through our furry, feathered, and scaly friends. Our passion for
            pets drives everything we do, and we're thrilled to be your one-stop
            destination for all your pet needs.
          </MDBCardText>
          <MDBCardSubTitle>🐶🐱🐰 Our Furry Family 🐢🐦🐠 </MDBCardSubTitle>
          <MDBCardText>
            We specialize in all things cute and cuddly! From adorable puppies
            and kittens to tiny bunnies, and even exotic reptiles and colorful
            birds, we've got an array of animals just waiting to be a part of
            your family. Our team takes great pride in ensuring all our pets are
            healthy, happy, and well-cared for.
          </MDBCardText>
          <MDBCardSubTitle>🌈 Pet Products Galore 🌈 </MDBCardSubTitle>
          <MDBCardText>
            Besides offering a wide variety of pets, we also provide everything
            you need to keep your furry friend content. Our store is stocked
            with high-quality pet supplies, from nutritious food to comfy beds,
            engaging toys, stylish accessories, and more. We believe that a
            pampered pet is a happy pet!
          </MDBCardText>
          <MDBCardSubTitle> 🌟Community and Events 🌟 </MDBCardSubTitle>
          <MDBCardText>
            Join our vibrant pet-loving community and stay updated on
            pet-related events, workshops, and adoption drives. We believe in
            giving back to our local pet community and making a difference in
            the lives of animals in need.
          </MDBCardText>
          <MDBCardSubTitle>
            🚚 Local Delivery and Worldwide Shipping 🌍
          </MDBCardSubTitle>
          <MDBCardText>
            Can't make it to our store? No problem! We offer local delivery and
            worldwide shipping, so you can access our fantastic products and
            services wherever you are.
          </MDBCardText>
          <MDBCardSubTitle>
            🌟 Join the Tasha's Pet Shop Family Today! 🌟
          </MDBCardSubTitle>
          <MDBCardText>
            We're thrilled to welcome you to the Tasha's Pet Shop family. Your
            pet's happiness and well-being mean the world to us, and we're here
            to support you every step of the way. Explore our website, visit our
            store, or get in touch with us today. Let's make pet dreams come
            true together!
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};
export default Home;
