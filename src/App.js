import "./App.css";
import MainPage from "../src/components/HomePage/Mainpage";
import Checkout from "../src/components/CheckOut/Checkout";
import PlaceOrder from "../src/components/PlaceOrder/PlaceOrder";
import DisplayContent from "./components/DisplayContent/DisplayContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavigationBar/Navbar";
import CartContextProvider from "./components/CartContext";

function App() {
  return (
    <>
      <Router>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/DisplayContent" element={<DisplayContent />} />
            <Route path="/PlaceOrder/:id" element={<PlaceOrder />} />
          </Routes>
        </CartContextProvider>
      </Router>
    </>
  );
}

export default App;
