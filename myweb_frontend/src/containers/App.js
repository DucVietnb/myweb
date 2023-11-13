import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import { history } from "../redux";
import { ToastContainer } from "react-toastify";

import {
  userIsAuthenticated,
  userIsNotAuthenticated,
} from "../hoc/authentication";

import { path } from "../utils";

import Home from "../routes/Home";
// import Login from '../routes/Login';
import Login from "../containers/Auth/Login";

import Header from "./Header-Login/Header";
import System from "../routes/System";

import { CustomToastCloseButton } from "../components/CustomToast";
import HomePage from "./HomePage/HomePage.js";
import CustomScrollbars from "../components/CustomScrollbars";
//ez
import ProductPage from "./ProductPage/ProductPage.js";
import HomeHeader from "./HomePage/Header/HomeHeader";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import HomeGeneral from "./HomePage/HomeGeneral";
import HomeFooter from "./HomePage/HomeFooter";
import ProductDetail from "./ProductDetail/ProductDetail";
import News from "./general/News";
//cus
import SignUp from "../containers/User/SignUp";
import Account from "./User/Account.js";
//produt
import ProductTivi from "./ProductPage/ProductTivi.js";
import ProductFridge from "./ProductPage/ProductFridge.js";
import ProductWashingMachine from "./ProductPage/ProductWashingMachine.js";

//order
import Cart from "./OrderPage/Cart.js";
import Order from "./OrderPage/Order.js";
import OrderThanks from "./OrderPage/OrderThanks.js";
class App extends Component {
  handlePersistorState = () => {
    const { persistor } = this.props;
    let { bootstrapped } = persistor.getState();
    if (bootstrapped) {
      if (this.props.onBeforeLift) {
        Promise.resolve(this.props.onBeforeLift())
          .then(() => this.setState({ bootstrapped: true }))
          .catch(() => this.setState({ bootstrapped: true }));
      } else {
        this.setState({ bootstrapped: true });
      }
    }
  };

  componentDidMount() {
    this.handlePersistorState();
  }

  render() {
    return (
      <Fragment>
        <Router history={history}>
          {/* {console.log(history)} */}
          <div className="main-container">
            {/* {this.props.isLoggedIn && <Header />} */}
            <span className="content-container">
              <CustomScrollbars style={{ height: "100vh", width: "100%" }}>
                <HomeHeader />

                <Switch>
                  <Route path={path.HOME} exact component={Home} />
                  <Route path={path.LOGIN} component={Login} />
                  <Route path={path.SIGNUP} component={SignUp} />
                  <Route path={path.ACCOUNT} component={Account} />
                  <Route path={path.HOMEPAGE} component={HomePage} />
                  <Route path={path.SYSTEM} component={System} />
                  <Route path={path.PRODUCT} component={ProductPage} />
                  <Route path={path.PRODUCT_DETAIL} component={ProductDetail} />
                  <Route path={path.PRODUCT_TIVI} component={ProductTivi} />
                  <Route path={path.PRODUCT_FRIDGE} component={ProductFridge} />
                  <Route
                    path={path.PRODUCT_WASHING}
                    component={ProductWashingMachine}
                  />
                  <Route path={path.NEWS} component={News} />
                  <Route path={path.CART} component={Cart} />
                  <Route path={path.ORDER} component={Order} />
                  <Route path={path.THANKS_ORDER} component={OrderThanks} />

                  <Route path={path.NOPAGE} component={NotFoundPage} />
                </Switch>
                <HomeGeneral />
                <HomeFooter />
              </CustomScrollbars>
            </span>

            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        </Router>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    started: state.app.started,
    isLoggedIn: state.user.isLoggedIn,
    dataUser: state?.user?.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
