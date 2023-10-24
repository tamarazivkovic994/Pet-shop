import React from "react";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

function App() {
  return (
    <div className="page-container">
      <MDBFooter className="text-center footer" color="white" bgColor="dark">
        <MDBContainer className="py-2">
          <section className="d-flex justify-content-center justify-content-lg-between pb-4 border-bottom">
            <div className="d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <MDBBtn
                outline
                color="light"
                floating
                className="ms-2"
                href="https://www.instagram.com/all_about_doggos_/"
                role="button"
                rel="noopener noreferrer" 
                target="_blank" 
              >
                <MDBIcon fab icon="instagram" />
              </MDBBtn>
            </div>
          </section>
        </MDBContainer>

        <div
          className="text-center py-1"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          Tasha's Pet Shop, 2023 ©
        </div>
      </MDBFooter>
    </div>
  );
}

export default App;
