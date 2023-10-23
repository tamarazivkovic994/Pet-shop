import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter className="text-center mt-3" color="white" bgColor="dark">
      <MDBContainer className="p-1">
        <section className="m-2 d-flex justify-content-center justify-content-lg-between pb-2 border-bottom">
          <div className=" d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <MDBBtn
              outline
              color="light"
              floating
              className="d-flex justify-content-center align-items-center"
              href="https://www.instagram.com/all_about_doggos_/"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>
          </div>
        </section>
      </MDBContainer>

      <div
        className="text-center p-2"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        Tasha's Pet Shop, 2023 ©
      </div>
    </MDBFooter>
  );
}
