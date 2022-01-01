import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout"
import Login from "./components/login/Login";

function App() {
  return (
    <Router>
      <div className="app">
      
        

        {/* Going with Routes  */}
        <Routes>
          <Route exact path="/login" element= { <Login/>} > 
              </Route>

          <Route exact path="/checkout" element={<> <Navbar /> <Checkout /> </>}>
              </Route>

          <Route exact path="/" element={<> <Navbar/> <Home/> </>}>
          
              </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
