import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ShopList from "./components/ShopList";
import Cart from "./components/Cart";
import ProductScreen from "./components/ProductScreen";
import Admin from "./components/Admin";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function App() {
  //eslint-disable-next-line
  const [cart, setCart] = useState([]);

  return (
    <div className="p-4">
      <Router>
        <header className="w-full ">
          <nav className="w-full flex justify-between items-center">
            <div className="flex-grow font-semibold text-5xl text-center pl-10">
              <Link to="/">My Store</Link>
            </div>
            <div>
              <Link to="/cart">
                <ShoppingCartIcon />
              </Link>
              {/* <Link to="/admin" className="pl-2">
                Gestão
              </Link> */}
            </div>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/cart">
              <Cart props={[cart, setCart]} />
            </Route>
            <Route path="/product/:id" children={<ProductScreen />}>
              <ProductScreen props={[cart, setCart]} />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/">
              <ShopList />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
