import {BrowserRouter as Switch, Router, Route } from "react-router-dom";
import React from "react"

let App=()=> {
  return (
    <Router>
     <div className="app">
       <Switch>
         <Route path="/checkout">
          <h1>checkout</h1>
         </Route>
         <Route path = "/login">
          <h1>login</h1>
         </Route>
         <Route path = "/">
          <h1>Mein khali hu</h1>
         </Route>
       </Switch>
    </div>

    </Router>
  );
}

export default App;
