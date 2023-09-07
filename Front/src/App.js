import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "./redux/features/authSlice";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Contact from "./pages/Contact";


function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(setUser(user));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          {/* <Route path='/' element={<Home></Home>}></Route> */}
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/contact" element={<Contact />}></Route> 
          {/* <Route path="*" element={<NotFound></NotFound>}></Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
