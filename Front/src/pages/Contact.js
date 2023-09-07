import React, { useState } from "react";
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBValidation,
  MDBTextArea,
} from "mdb-react-ui-kit";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
  };

  return (
    <MDBContainer className="d-flex justify-content-center mt-3 container-contactForm">
      <MDBCard alignment="center" className="card-holder">
        <h5>Contact Us</h5>
        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit} noValidate className="row g-3">
            <div className="col-md-12">
              <MDBInput
                label="Name"
                type="text"
                value={formData.name}
                name="name"
                onChange={handleChange}
                required
                validation="Please provide a valid name"
              />
            </div>
            <div className="col-md-12">
              <MDBInput
                label="Email"
                type="email"
                value={formData.email}
                name="email"
                onChange={handleChange}
                required
                validation="Please provide a valid email"
              />
            </div>
            <div className="col-md-12">
              <MDBTextArea
                label="Message"
                type="textarea"
                value={formData.message}
                name="message"
                onChange={handleChange}
                required
                validation="Please provide a valid message"
                rows={4}
              />
            </div>
            <div className="col-12">
              <MDBBtn type="submit" className="btn btn-primary">
                Submit
              </MDBBtn>
            </div>
          </MDBValidation>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default Contact;
