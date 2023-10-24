import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBTextArea,
} from "mdb-react-ui-kit";

const SendStory = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    file: null,
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send("tasha994", "template_26wojxx", formData, "nX-0GMmHiMZ8XoG_N")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Your message has been sent successfully!");
          setFormData({
            name: "",
            email: "",
            file: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, file: file });
  };

  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form onSubmit={sendEmail}>
                <div className="mb-3">
                  <MDBInput
                    label="Your Name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <MDBInput
                    label="Your Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="formFile" className="form-label">
                    Upload File
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    value={formData.file}
                    onChange={handleFileChange}
                  />
                </div>
                <div className="mb-3">
                  <MDBTextArea
                    type="textarea"
                    label="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="text-center">
                  <MDBBtn type="submit">Send</MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SendStory;
