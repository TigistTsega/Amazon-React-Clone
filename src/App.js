/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Footer from "./Footer";
import { useStateValue } from './StateProvider';
import React, { useEffect } from 'react';
import { auth } from './firebase';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';
import Order from "./Order";

const promise = loadStripe(
  "pk_test_51LLd8yJ83auKM05Hbuxj2x3LaZ06p1SkxDMckIiRxrckN7CS81vxZDwFwKwMGU6yfOzTE8KtONpRPFbHfagtXlpn00enBxWVkA"
); 
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
                <Footer />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
            
          />
        </Routes>
      </div>
    </Router>
  
  );
}

export default App;
