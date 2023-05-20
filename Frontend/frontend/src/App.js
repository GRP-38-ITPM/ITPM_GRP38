import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import ViewProduct from "./pages/ViewProduct";

function App() {
  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/viewProduct" element={<ViewProduct />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
