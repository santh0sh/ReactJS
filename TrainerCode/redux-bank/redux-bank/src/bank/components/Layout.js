import React from 'react';
//import { Link, } from 'react-router-dom';

const Layout = (props) => {
  return (
    <div>
      <h1>Murthy's Corporate Bank</h1>
      <Link to="/">Account</Link>
      {' | '}
      <Link to="/withdrawals">Withdrawals</Link>
      {' | '}
      <Link to="/deposits">Deposits</Link>
      <br/>
      {props.children}
    </div>
  );
};
export default Layout;
