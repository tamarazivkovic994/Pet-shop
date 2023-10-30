import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MDBCardGroup, MDBCard, MDBBtn } from "mdb-react-ui-kit";
import items from "../data/items.json";
import { addItem } from "../redux/features/cartSlice";

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);
  const [itemsToShow, setItemsToShow] = useState(8);
  const dispatch = useDispatch();

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleAddToCart = (item) => {
   dispatch(addItem(item));
  };

  const loadMore = () => {
    setItemsToShow((prevItems) => prevItems + 8);
  };

  return (
    <div>
      <div
        className="input-group rounded"
        style={{ width: "20%", margin: "1%", paddingTop: '10%' }}
      >
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <span
          className="input-group-text border-0"
          id="search-addon"
          style={{ gap: "20%" }}
        >
          <i
            className="fas fa-search"
            onClick={() => handleSearch(searchQuery)}
          ></i>
          <i className="fas fa-times" onClick={() => handleSearch("")}></i>
        </span>
      </div>
      <MDBCardGroup className="m-3 cardGroupShop">
        <div className="row">
          {filteredItems.slice(0, itemsToShow).map((item) => (
            <div key={item.id} className="col-md-3 d-flex align-items-stretch">
              <MDBCard className="d-flex justify-content-center align-items-center cardItem">
                <img
                  src={item.image}
                  className="card-img-top m-1 p-2 cardImage"
                  alt={item.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.details}</p>
                  <p className="card-text">Price: ${item.price}</p>
                </div>
                <div>
                  <MDBBtn
                    className="d-flex justify-content-center m-1 btnCard"
                    color="btn btn-dark"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to cart
                  </MDBBtn>
                </div>
              </MDBCard>
            </div>
          ))}
        </div>
        {itemsToShow < filteredItems.length && (
          <div className="d-flex justify-content-center mt-2">
            <MDBBtn className="btn btn-dark" onClick={loadMore}>
              Load more
            </MDBBtn>
          </div>
        )}
      </MDBCardGroup>
    </div>
  );
};

export default Shop;
