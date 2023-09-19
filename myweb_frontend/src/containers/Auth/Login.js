import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import "./Login.scss";
import { FormattedMessage } from "react-intl";
import login from "../../assets/images/login.jpeg"
// import { handleLoginApi } from "../../services/userService";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: "",
        isShowPassword: false,
        errMessage: ''
      };
  }

  // sự kiện on change
    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value,
        });
    };
    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value,
        });
    };
    handleLogin = async () => {
        console.log("all state: ", this.state)

//     this.setState({
//       errMessage: ''
//     })
//     try {
//       let data = await handleLoginApi(this.state.username, this.state.password);
//       if (data && data.errCode !== 0) {
//         this.setState({
//           errMessage: data.message
//         })
//       }
//       if (data && data.errCode === 0) {
//         this.props.userLoginSuccess(data.user)
//         console.log('login success')
//       }
//     } catch (e) {
//       if (e.response) {
//         if (e.response.data) {
//           this.setState({
//             errMessage: e.response.data.message
//           })
//         }
//       }
//       console.log('abc',e.response);
//     }
  };
//   // show password
  handleShowPassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };

  render() {
      return (
              <div className="login__background">
                  <div className="login__img">
                      <img src={login} />
                  </div>
              <div className="content__input">
                  <div className="login__form">
                      <h1 className="col-12 text-center">LOGIN</h1>
                      <div className="login__input">
                          <label>Username</label>
                          <input
                              type="email"
                              className=""
                              placeholder="Enter your email"
                              value={this.state.username}
                              onChange={(event) => this.handleOnChangeUsername(event)}
                          ></input>
                      </div>
                      <div className="login__input">
                          <label>Password</label>
                          <div className="form__control">
                              
                          <input
                                  type={this.state.isShowPassword ? "text" : "password"}
                              className=""
                              placeholder="Enter your password"
                              value={this.state.password}
                              onChange={(event) => this.handleOnChangePassword(event)}
                              ></input>
                              <span onClick={() => this.handleShowPassword()}>
                                  <i
                                      className={
                                          this.state.isShowPassword
                                              ? "far fa-eye"
                                              : "far fa-eye-slash"
                                      }
                                  ></i>
                              </span>
                          </div>
                      </div>
                      <div className="col-12">
                          <button className="btn-login" onClick={() => this.handleLogin()}>
                              Login
                          </button>
                      </div>
                      <div className="col-12 pt-2">
                          <span className="forgot-password">Forgot your password?</span>
                      </div>
                      <div className="col-12 text-center mt-5">
                          <span className="text-center">Or login with :</span>
                      </div>
                      <div className="col-12 social-login mt-1">
                          <i className="fab fa-facebook fa-3x facebook"></i>
                          <i className="fab fa-twitter fa-3x switter"></i>
                          <i className="fab fa-google-plus-g fa-3x google"></i>
                      </div>
                  </div>
              </div>
          </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
      // userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(),)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
