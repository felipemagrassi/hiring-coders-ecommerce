import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ShopList from "./components/ShopList";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <Router>
        <header className="w-full ">
          <nav className="w-full flex justify-between p-7">
            <div className="flex-grow font-semibold text-5xl text-center">
              <Link to="/">Hiring-Coders</Link>
            </div>
            <Link to="/cart">Loja</Link>
          </nav>
        </header>
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <ShopList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
