import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <h1 style={props.cssStyles.h1}>USAA</h1>
      <nav>
        <ul style={props.cssStyles.ul}>
          <li style={props.cssStyles.ul.li}>
            <Link to="/">Home</Link>
          </li>
          <li style={props.cssStyles.ul.li}>
            <Link to="/paycheck-planner">Paycheck Planner</Link>
          </li>
          <li style={props.cssStyles.ul.li}>
            <Link to="/savings-booster">Savings Booster</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}