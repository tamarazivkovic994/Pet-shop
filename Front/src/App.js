import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "./redux/features/authSlice";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(setUser(user));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          {/* <Route path="*" element={<NotFound></NotFound>}></Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
