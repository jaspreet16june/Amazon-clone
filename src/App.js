import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Product from "./Product";


let App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>this is a checkOut page</h1>
          </Route>
          <Route path="/login">
            <h1>this is a login page</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Product 
              id="12345688"
              image="https://m.media-amazon.com/images/I/81AbJXWCxXL._AC_UL320_.jpg"
              name="Lenovo Flex 5 14\ 2-in-1 Laptop, 14.0\ FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD, AMD Radeon Graphics, Digital Pen Included, Win 10, 81X20005US, Graphite Grey"
              rating={4}
              price={606.10}


            />
            <h1>this is a home page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

