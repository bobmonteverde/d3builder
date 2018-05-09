import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { Link } from 'react-router-dom';

import defaultUserImage from './User.png';

@firebaseConnect()
@connect(({ firebase: { auth, profile } }) => ({ auth, profile }))
export default class Header extends Component {
  handleLogin = () => {
    this.props.firebase.login({ provider: 'github', type: 'popup' });
  };

  handleLogout = () => {
    this.props.firebase.logout();
  };

  render() {
    const { profile, auth } = this.props;
    const dataLoaded = isLoaded(auth, profile);
    const authExists = isLoaded(auth) && !isEmpty(auth);

    console.log('name', profile && profile.displayName);
    console.log('dataLoaded', dataLoaded, 'authExists', authExists);

    const UserNav = dataLoaded ? (
      authExists ? (
        <nav className="flex pr3 pl3 pt1 pb0 items-center">
          <div className="f6 dib hide-child pb1 relative mr1 z-999">
            <a href="#0" className="db white link pa1">
              <div className="v-mid dib pr3">
                <img
                  src={(profile && profile.avatarUrl) || defaultUserImage}
                  className="ba b--black-10 db br-100 w2 h2"
                  alt="User Avatar"
                />
              </div>
              <span>
                {profile && profile.displayName ? profile.displayName : 'User'}
              </span>
            </a>
            <ul className="list pl0 ml0 mt0 mr1 ba b--black br2 child absolute w-100">
              {/*
            <li className="bb b--black">
              <a href="#0" className="db no-underline pa3 bg-animate bg-white hover-bg-black black hover-white">
                My Vizzes
              </a>
            </li>
            */}
              <li>
                <a
                  onClick={this.handleLogout}
                  href="#0"
                  className="db no-underline pa3 bg-animate bg-white hover-bg-black black hover-white"
                >
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <nav className="flex pr3 pl3 pt1 pb1 items-center">
          <a
            onClick={this.handleLogin}
            className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20"
            href="#0"
          >
            Sign In with Github
          </a>
        </nav>
      )
    ) : (
      <nav />
    );

    return (
      <header className="flex justify-between items-center bg-black-90 w-100">
        <Link
          to="/"
          className="flex flex-grow f3 white-70 hover-white v-mid link pa3"
          href="#0"
          title="Home"
        >
          d3learner
        </Link>
        <nav className="flex mr3 items-center f5 fw6 tracked">
          {/*
          <Link to="/" className="link dim white dib mr3" title="Home">Home</Link>
          */}
          <Link to="/vizzes" className="link dim white dib mr3" title="Vizzes">
            Vizzes
          </Link>
        </nav>
        <div className="flex justify-end">
          <nav className="flex mr3 items-center">
            <Link
              to="/new"
              className="link pv2 ph3 br4 white hover-black bg-animate bg-black hover-bg-white-90"
              title="New Viz"
            >
              + New Viz
            </Link>
          </nav>
          {UserNav}
        </div>
      </header>
    );
  }
}
