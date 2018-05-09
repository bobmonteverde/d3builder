import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="relative">
        <div className="tc-l mt4 mt5-m mt6-l ph3">
          <h1 className="f2 f1-l fw2 black-90 mb0 lh-title">
            Build Data Visualizations with D3
          </h1>
          <h2 className="fw1 f3 black-80 mt3 mb4">
            Get Help, Chat, Collaborate, and Share you're knowledge
          </h2>
          <Link
            to="/new"
            className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3"
            href="/"
          >
            Build a Viz
          </Link>
          <span className="dib v-mid ph3 black-70 mb3">or</span>
          <Link
            to="/vizzes"
            className="f6 no-underline grow dib v-mid black ba b--black ph3 pv2 mb3"
            href=""
          >
            View all Vizzes
          </Link>
        </div>
      </div>
    );
  }
}
