import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { Link } from 'react-router-dom';

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
          <div className="f6 fw6 dib hide-child pb1 relative mr1 z-999">
            <a href="#0" className="db white link pa1">
              <div className="v-mid dib pr3">
                {profile && profile.avatarUrl ? (
                  <img
                    src={profile.avatarUrl}
                    className="ba b--black-10 db br-100 w2 h2"
                    alt="User Avatar"
                  />
                ) : (
                  <svg
                    className="dib h2 w2"
                    style={{ fill: 'currentColor' }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />
                  </svg>
                )}
              </div>
              <span>
                {profile && profile.displayName
                  ? profile.displayName
                  : 'User Name'}
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
            className="inline-flex items-center white bg-animate hover-bg-white hover-black no-underline ph4 br-pill ba b--white-20"
            href="#0"
          >
            <span className="f6 fw6 mr2">Sign In</span>
            <svg
              className="dib h2 w2"
              x="0px"
              y="0px"
              viewBox="0 0 30 30"
              style={{ fill: 'currentColor' }}
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
            </svg>
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
          className="inline-flex items-center flex-grow f3 white-70 hover-white v-mid link pa3"
          href="#0"
          title="Home"
        >
          <svg
            className="dib h2 w2"
            style={{ fill: 'currentColor' }}
            viewBox="0 0 24 24"
            clipRule="evenodd"
            fillRule="evenodd"
          >
            <path d="M22.298 24h-5.469c-.182-2.287-1.893-4.311-3.43-5.941-.267-.283-.399-.611-.399-.908 0-.538.415-.979 1.105-.874.662.101 1.374.761 1.63 1.033v-5.175c0-.627.503-1.135 1.094-1.135.591 0 1.094.508 1.094 1.135v2.591c0 .454.445.513.502.059.118-.93 1.378-1.054 1.474.232.023.316.396.38.474.015.178-.837 1.367-.845 1.508.44.036.336.435.404.463.02.028-.388.155-.541.333-.541.6 0 1.262 1.17 1.262 2.557 0 2.492-1.641 2.498-1.641 6.492zm-9.798-21.586c2.933-1.617 7.169-2.282 11.5-2.414v13.644l-4.178-1.179c0-.145 0-.491-.014-.635-.14-1.419-1.295-2.698-2.979-2.73-1.729.048-2.866 1.303-2.991 2.882-.005.209-.003 2.166-.003 2.382-1.099 0-2.222.703-2.607 1.935-.21.678-.154 1.414.126 2.064.301.698.695 1.02 1.206 1.588-.636.113-1.295.032-1.893-.241-2.872-1.315-6.73-1.875-10.667-1.995v-17.715c4.331.132 8.568.797 11.5 2.414v10.586l1-.483v-10.103zm-9.5 10.317c2.086.312 4.451 1.024 6 1.673v-1.064c-1.668-.622-3.881-1.315-6-1.626v1.017zm0-2.031c2.086.312 4.451 1.023 6 1.672v-1.063c-1.668-.622-3.881-1.316-6-1.626v1.017zm0-2.031c2.086.311 4.451 1.023 6 1.673v-1.064c-1.668-.622-3.881-1.316-6-1.626v1.017zm0-2.031c2.086.311 4.451 1.023 6 1.672v-1.064c-1.668-.622-3.881-1.315-6-1.626v1.018zm18-1.018c-2.119.311-4.332 1.004-6 1.626v1.064c1.549-.649 3.914-1.361 6-1.672v-1.018zm-18-2.041c2.119.31 4.332 1.004 6 1.626v1.064c-1.549-.65-3.914-1.361-6-1.673v-1.017zm18 1.017c-2.086.312-4.451 1.023-6 1.673v-1.064c1.668-.622 3.881-1.316 6-1.626v1.017z" />
          </svg>
          <span className="fw5 ml3">d3learner</span>
        </Link>
        <nav className="flex mr3 items-center f5 fw6 tracked">
          `{' '}
          {/*
    `      <Link to="/" className="link dim white dib mr3" title="Home">Home</Link>
    o
          */}
          <Link
            to="/vizzes"
            className="link dim white dib mr3 inline-flex items-center"
            title="Vizzes"
          >
            <svg
              className="dib h1 w1"
              style={{ fill: 'currentColor' }}
              viewBox="0 0 24 24"
            >
              <path d="M21.698 10.658l2.302 1.342-12.002 7-11.998-7 2.301-1.342 9.697 5.658 9.7-5.658zm-9.7 10.657l-9.697-5.658-2.301 1.343 11.998 7 12.002-7-2.302-1.342-9.7 5.657zm12.002-14.315l-12.002-7-11.998 7 11.998 7 12.002-7z" />
            </svg>
            <span className="f6 fw6 ml2">Vizzes</span>
          </Link>
        </nav>
        <div className="flex justify-end">
          <nav className="flex mr3 items-center">
            <Link
              to="/new"
              className="link ph3 pv2 br4 inline-flex items-center white hover-black bg-animate bg-black hover-bg-white-90"
              title="New Viz"
            >
              <svg
                className="dib h1 w1"
                style={{ fill: 'currentColor' }}
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7 14h-5v5h-4v-5h-5v-4h5v-5h4v5h5v4z" />
              </svg>
              <span className="f6 fw6 ml2">New Viz</span>
              {/* <svg className="dib h2 w2" fillRule="evenodd" clipRule="evenodd" style={{fill:'currentColor'}}><path d="M5.829 6c-.412 1.165-1.524 2-2.829 2-1.656 0-3-1.344-3-3s1.344-3 3-3c1.305 0 2.417.835 2.829 2h13.671c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5h-4.671c-.412 1.165-1.524 2-2.829 2-1.305 0-2.417-.835-2.829-2h-4.671c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5h13.671c.412-1.165 1.524-2 2.829-2 1.656 0 3 1.344 3 3s-1.344 3-3 3c-1.305 0-2.417-.835-2.829-2h-13.671c-2.484 0-4.5-2.016-4.5-4.5s2.016-4.5 4.5-4.5h4.671c.412-1.165 1.524-2 2.829-2 1.305 0 2.417.835 2.829 2h4.671c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5h-13.671zm6.171 5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"/></svg> */}
            </Link>
          </nav>
          {UserNav}
        </div>
      </header>
    );
  }
}
