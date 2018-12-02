import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link to="/dashboard" className="header__title">
          <h1>BuzzyCite</h1>
        </Link>
        <Link to="/CitationList" className="header__citationList">
          <div className="scaleLabel">My Citations</div>
          <i id="headerScale" className="fas fa-lg fa-2x fa-balance-scale"></i>
        </Link>
        <button className="header__button" onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);