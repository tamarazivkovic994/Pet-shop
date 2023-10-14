import React, { useState } from "react";
import emailjs from "emailjs-com";
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
    notARobot: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.notARobot) {
      alert("Please confirm that you are not a robot.");
      return;
    }

    emailjs
      .send("tasha994", "template_tasha994", formData, "oVvF4HP--JzB2gA0Y")
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          alert("Email sent successfully");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error("Email could not be sent:", error);
          alert("Email could not be sent");
        }
      );
  };
  return (
    <MDBContainer className="d-flex justify-content-center mt-3 container-contactForm">
      <MDBCard alignment="center" className="card-holder contactForm">
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
            <div className="col-md-12">
              <div className="d-flex form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={formData.notARobot}
                  name="notARobot"
                  onChange={handleChange}
                  id="notARobot"
                />
                <label className="form-check-label" htmlFor="notARobot">
                  I am not a robot
                </label>
              </div>
            </div>
            <div className="col-12">
              <MDBBtn type="submit" className="btn btn-primary">
                Submit
              </MDBBtn>
            </div>
          </MDBValidation>
        </MDBCardBody>
      </MDBCard>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11328.950345008454!2d20.44077426195146!3d44.77596147190829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a71674b4b7341%3A0x5235b66ed3ddc2f!2sPetshop%20Dedinje!5e0!3m2!1sen!2srs!4v1697295511046!5m2!1sen!2srs"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </MDBContainer>
  );
};

export default Contact;
