import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Listings/Footer";
import Login from "./components/Listings/Login";
import Modal from "./components/UI/Modal";
import ContextProvider from "./contextstore/ContextProvider";
import Checkout from "./screens/Checkout";
import Confirm from "./screens/Confirm";
import ProductListing from "./screens/ProductListing";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let foot = false;

  const showHandler = () => {
    setShowCart((prevShow) => !prevShow);
  };

  const hideHandler = () => {
    if (showCart) {
      setShowCart(false);
    }
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", 1);
    setIsLoggedIn(true);
  }; //For logging user out: manually remove key from localStorage

  const location = useLocation();

  if (location.pathname === "/checkout" || location.pathname === "/confirm") {
    foot = true;
  }

  useEffect(() => {
    const logState = localStorage.getItem("isLoggedIn");

    if (logState === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <ContextProvider>
      {!foot && <ProductListing />}
      {showCart && (
        <Modal>
          <Cart onCartShow={showHandler} />
        </Modal>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Footer
              onHide={hideHandler}
              onCartButton={showHandler}
              show={showCart}
              loginState={isLoggedIn}
            />
          }
        />
        <Route path="/login" element={<Login onLogin={loginHandler} />} />
        <Route
          path="/checkout"
          element={
            <>
              <Checkout />
              <Footer foot={true} />
            </>
          }
        />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
