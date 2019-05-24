import React from "react";
import { NavLink, Link } from "react-router";

import { setAccessTokenUnplash } from "../unsplash/";
import { authenticationUrl } from "../unsplash/";

class Home extends React.Component {
  handleClick() {
    location.assign(authenticationUrl);
  }

  render() {
    const token = localStorage.getItem("token");

    return (
      <main className="main-wrapper">
        <header className="header">
          <div className="container-my">
            <h1>MiminoGram</h1>
          </div>
        </header>
        <div className="block-home">
          <div className="registration-form">
            <p>Авторизуйся через Unsplash.com:</p>
            <button className="but_auth" onClick={this.handleClick.bind(this)}>
              Авторизоваться
            </button>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
