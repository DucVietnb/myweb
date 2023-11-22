import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import UserManage from "../containers/System/UserManage";
import ManageCustomer from "../containers/System/User/ManageCustomer";
import ManageAdmin from "../containers/System/User/ManageAdmin";
import Header from "../containers/Header-Login/Header";
import UpdateProduct from "../containers/System/Product/UpdateProduct";
import ManageProduct from "../containers/System/Product/ManageProduct";
import OrderChecking from "../containers/System/Order/OrderChecking";
import OrderConfirm from "../containers/System/Order/OrderConfirm";
import OrderDelivering from "../containers/System/Order/OrderDelivering";
import OrderCheckDone from "../containers/System/Order/OrderCheckDone";
import OrderDone from "../containers/System/Order/OrderDone";
import OrderRequestCancel from "../containers/System/Order/OrderRequestCancel";
import OrderCanceled from "../containers/System/Order/OrderCanceled";
import Statistics from "../containers/System/Statistics/Statistics";
class System extends Component {
  render() {
    const { systemMenuPath, isLoggedIn } = this.props;
    return (
      <React.Fragment>
        {isLoggedIn && <Header />}
        <div className="system-container">
          <div className="system-list">
            <Switch>
              <Route path="/system/user-manage" component={UserManage} />
              <Route
                path="/system/customer-manage"
                component={ManageCustomer}
              />
              <Route path="/system/admin-manage" component={ManageAdmin} />

              {/* <Route
                path="/system/product-manage-create"
                component={CreateProduct}
              /> */}
              <Route path="/system/product-manage" component={ManageProduct} />

              <Route path="/system/product-update" component={UpdateProduct} />
              <Route path="/system/order-checking" component={OrderChecking} />
              <Route path="/system/order-confirm" component={OrderConfirm} />
              <Route
                path="/system/order-delivering"
                component={OrderDelivering}
              />
              <Route
                path="/system/order-checkdone"
                component={OrderCheckDone}
              />

              <Route path="/system/order-done" component={OrderDone} />
              <Route
                path="/system/order-req-cancel"
                component={OrderRequestCancel}
              />
              <Route path="/system/order-canceled" component={OrderCanceled} />
              <Route path="/system/statistics" component={Statistics} />

              <Route
                component={() => {
                  return <Redirect to={systemMenuPath} />;
                }}
              />
            </Switch>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    systemMenuPath: state.app.systemMenuPath,
    isLoggedIn: state.user.isLoggedIn,
    dataUser: state?.user?.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
