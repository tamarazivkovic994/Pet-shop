import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setUser } from "./redux/features/authSlice";
import ScrollToTop from "react-scroll-to-top";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import AdoptMe from "./pages/AdoptMe";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import HappyCorner from "./pages/HappyCorner";
import Cart from "./components/Cart";

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [cart, setCart] = useState([]);

  useEffect(() => {
    dispatch(setUser(user));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header cart={cart} setCart={setCart} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/adoptme" element={<AdoptMe />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route
            path="/shop"
            element={<Shop cart={cart} setCart={setCart} />}
          ></Route>
          <Route path="/cart" render={() => <Cart cart={cart} />} />
          <Route path="/happycorner" element={<HappyCorner />}></Route>
          {/* <Route path="*" element={<NotFound></NotFound>}></Route> */}
        </Routes>
        <ScrollToTop smooth color="#bda8ad" className="scroll-btn mb-8" />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
