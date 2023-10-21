import { MDBCardGroup, MDBCard, MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import items from "../data/items.json";

const Shop = () => {
  return (
    <div>
      <MDBCardGroup className=" m-3 cardGroupShop">
        <div className="row">
          {items.map((item) => (
            <div key={item.id} className="col-md-3">
              <MDBCard className="d-flex justify-content-center align-items-center cardItem">
                <img
                  src={item.image}
                  className="card-img-top m-1"
                  alt={item.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.details}</p>
                  <p className="card-text">Price: {item.price}</p>
                </div>
                <div>
                  <MDBBtn className="d-flex justify-content-center m-1 btnCard" color="btn btn-dark">
                    Add to cart
                  </MDBBtn>
                </div>
              </MDBCard>
            </div>
          ))}
        </div>
      </MDBCardGroup>
    </div>
  );
};

export default Shop;
