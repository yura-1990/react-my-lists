import React from "react";

import {Link } from "react-router-dom";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name };
  }

  render() {
    return (
      <header>
        <nav className="header__nav">
        <div className="container header__content" >
          <a href="/" className="logo">Logo</a>
          <ul className="header__list">
            <li>
              <Link className="header__link" to="/get-started">Get Started</Link>
            </li>
            <li>
              <Link className="header__link" to="/my-todo-list">My todo</Link>
            </li>
            <li>
              <Link className="header__link" to="/my-sites-list">Sites</Link>
            </li>
            <li>
              <Link className="header__link" to="/future-list">Future</Link>
            </li>
            <li>
              <Link className="header__link" to="/plan-list">Plans</Link>
            </li>
            <li>
              <Link className="header__link" to="/about">About</Link>
            </li>
            <li>
              <Link className="header__link" to="/docs">Docs</Link>
            </li>
          </ul>
        </div>
      </nav>
      </header>
    );
  }
}
