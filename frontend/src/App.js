import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import { auth } from "./firebase";
import { Switch, Route } from "react-router-dom";
import CheckoutPage from "./pages/CheckoutPage";
import SignInPage from "./pages/SignInPage";
import { useStateValue } from "./StateProvider";
import PaymentPage from "./pages/PaymentPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Header from "./components/Header";
import Orders from "./pages/Orders";
const promise = loadStripe(
  "pk_test_51HQBLYFazrj3FMQnrUeNIn6Jj5XP4zIox3hVfxFEusHfbv5vxZTHduHhcAEW96viCYSS2FENjd6PWZO1aHydpKWj00ga9aoD1M"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          payload: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          payload: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/payment">
        <Header />
      <Elements stripe={promise}>
        <PaymentPage/>
      </Elements>
        </Route>
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/orders" component={Orders} />
      </Switch>
    </div>
  );
}

export default App;
