import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardFooter,
  MDBValidation,
  MDBBtn,
  MDBSpinner,
  MDBContainer,
  MDBCardHeader,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { login } from "../redux/features/authSlice";
import { GoogleLogin } from "@react-oauth/google";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const { email, password } = formValue;
  const { googleId } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ formValue, navigate, toast }));
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const googleSuccess = (response) => {
    if (email && password && googleId) {
      dispatch(login({ formValue, navigate, toast }));
    }
    console.log(response);
  };
  const googleFailure = (error) => {
    toast.error(error);
  };
  const handleLogin = () => {
    navigate("/shop");
  }


  return (
    <MDBContainer className="d-flex justify-content-center mt-3 container">
      <MDBCard alignment="center" className="card-holder">
        <MDBCardHeader className="card-header">Member Login</MDBCardHeader>

        <MDBCardBody className="card-body">
          <MDBValidation onSubmit={handleSubmit}>
            <div className="col-md-12 pb-3">
              <MDBInput
                label="email"
                type="email"
                value={email}
                name="email"
                required
                onChange={onInputChange}
                invalid
                validation="Please enter your email!!!"
              ></MDBInput>
            </div>
            <div className="col-md-12 pb-3">
              <MDBInput
                label="password"
                type="password"
                value={password}
                name="password"
                required
                onChange={onInputChange}
                invalid
                validation="Please enter your password!!!"
              ></MDBInput>
            </div>
            <div className="col-md-12">
              <MDBBtn className="mt-2" onClick={() => handleLogin()}>
                {loading && (
                  <MDBSpinner
                    size="sm"
                    role="status"
                    tag="span"
                    className="me-2"
                  />
                )}
                Login
              </MDBBtn>
            </div>
            <div className="col-md-12 d-flex justify-content-center mt-3">
              {loading && (
                <MDBSpinner
                  size="sm"
                  role="status"
                  tag="span"
                  className="me-2"
                />
              )}
              <GoogleLogin onSuccess={googleSuccess} onError={googleFailure} />
            </div>
          </MDBValidation>
        </MDBCardBody>
        <MDBCardFooter className="text-muted">
          Don't have an account? <Link to="/register">Register</Link>
        </MDBCardFooter>
      </MDBCard>
    </MDBContainer>
  );
};

export default Login;
