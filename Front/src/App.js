import "./App.scss";
import { Provider } from "react-redux";
import store from "./redux/store";
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
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Stories from "./pages/Stories";
import Cart from "./components/Cart";

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [cart, setCart] = useState([]);

  useEffect(() => {
    dispatch(setUser(user));
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header cart={cart} setCart={setCart} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/shop"
              element={<Shop cart={cart} setCart={setCart} />}
            />
            <Route path="/cart" element={<Cart cart={cart} />} />
            <Route path="/stories" element={<Stories />} />
          </Routes>
          <ScrollToTop smooth color="#bda8ad" className="scroll-btn mb-8" />
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
