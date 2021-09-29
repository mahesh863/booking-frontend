import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import View from "./pages/View";
import Payment from "./pages/Payment";
import MyOrders from "./pages/MyOrders";
import PageNotFound from "./pages/PageNotFound";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//Css
import "./index.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

//Redux
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header />
        <ToastContainer />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/view" component={View} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/orders" component={MyOrders} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </Router>
        <Footer />
      </PersistGate>
    </Provider>
  );
};

export default App;
