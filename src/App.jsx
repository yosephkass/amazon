import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import { useStateValue } from "./StateProvider";
import React, { useEffect } from "react";
import { auth } from "./Firebase"
import Payment from "./Components/Payment/Payment"
import Orders from "./Components/Orders/Orders"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function App() {
  const [{ }, dispatch] = useStateValue();
  const promise = loadStripe(
    "pk_test_51NfTtGBOW57BDMMYgcKE2nGOtERnwIyDqAFaFWseJuoJYBKUyyWrSVRIXKtAK3cksFeLQGyKHf1lifUCYoO5YKbA00Z2MC7aNy"
  );

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    //     <Router>
    //   <div className="App">
    //     <Header />
    //     <Routes>
    //       <Route path="/checkout" element={<Checkout />} />
    //       <Route path="/" element={<Home />} />
    //     </Routes>
    //   </div>
    // </Router>

    <Router>
      <div className="App">
        {/* <Header /> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/Checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
