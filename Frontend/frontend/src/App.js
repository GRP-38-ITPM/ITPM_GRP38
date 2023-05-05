import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import HomeComponent from "./components/HomeComponent";
import ListUserComponent from "./components/ListUserComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import ProductComponent from "./components/ProductComponent";
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";

function App() {
  return (
    <div>
 <HeaderComponent/>
      <Router>

        <Routes>

          <Route exact path="/" element={<HomeComponent/>} />
          <Route exact path="/register" element={<RegisterComponent/>} />
          <Route exact path="/login" element={<LoginComponent/>} />
          <Route exact path="/user" element={<ListUserComponent />} />
          <Route exact path="/viewProduct" element={<ProductComponent />} />

        </Routes>
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App;
