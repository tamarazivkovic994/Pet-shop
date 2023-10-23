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
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    file: null,
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", contactDetails.name);
    formData.append("email", contactDetails.email);
    formData.append("message", contactDetails.message);
    if (contactDetails.file) {
      formData.append("file", contactDetails.file, contactDetails.file.name);
    }

    emailjs
      .send("tasha994", "template_tasha994", formData, "nX-0GMmHiMZ8XoG_N")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Your message has been sent successfully!");
          setContactDetails({
            name: "",
            email: "",
            file: null,
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
    setContactDetails({ ...contactDetails, [name]: value });
  };

  const handleFileChange = (e) => {
    setContactDetails({ ...contactDetails, file: e.target.files[0] });
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
                    value={contactDetails.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <MDBInput
                    label="Your Email"
                    name="email"
                    type="email"
                    value={contactDetails.email}
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
                    onChange={handleFileChange}
                  />
                </div>
                <div className="mb-3">
                  <MDBTextArea
                    type="textarea"
                    label="Your Message"
                    name="message"
                    value={contactDetails.message}
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
