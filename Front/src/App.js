import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
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

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/stories" element={<Stories />} />
        </Routes>
        <ScrollToTop smooth color="#bda8ad" className="scroll-btn mb-8" />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
