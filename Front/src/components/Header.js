import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../redux/features/authSlice";
import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
} from "mdb-react-ui-kit";
import img from "../img/pet shop.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setLogout());
  };

  const { user } = useSelector((state) => ({ ...state.auth }));

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/" className="icon-header">
          <img
            src={img}
            alt="logo"
            className="logo"
            style={{
              display: "flex",
              flexDirection: "row",
              blockSize: "100px",
            }}
          />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNav(!showNav)}
          style={{ color: "#bda8ad" }}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
            {/* <MDBNavbarItem>
              <MDBNavbarLink active href="/home">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem> */}
            <MDBNavbarItem>
              <MDBNavbarLink active href="/adoptme">
                Adopt me 
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active href="/shop">
                Shop
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active href="/happycorner">
                Happy corner
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/contact">Contact</MDBNavbarLink>
            </MDBNavbarItem>
            <div className="d-flex ms-auto">
              {user?.result?._id ? (
                <MDBNavbarItem>
                  <MDBNavbarLink href="/login">
                    <p className="header-text" onClick={() => handleLogout()}>
                      {" "}
                      Logout
                    </p>
                  </MDBNavbarLink>
                </MDBNavbarItem>
              ) : (
                <MDBNavbarItem>
                  <MDBNavbarLink className="header-text" href="/login">
                    LogIn
                  </MDBNavbarLink>
                </MDBNavbarItem>
              )}

              <MDBNavbarItem className="d-flex shopping-cart">
                <MDBNavbarLink href="/cart">
                 Cart
                </MDBNavbarLink>
              </MDBNavbarItem>
            </div>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
