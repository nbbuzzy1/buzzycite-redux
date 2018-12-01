import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="login-container">
      <h1 className="loginTitle">BuzzyCite</h1>
      <i id="loginScale" className="fas fa-lg fa-3x fa-balance-scale"></i>
      <button className="button-login" onClick={startLogin}>Login</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);