import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'redux-little-router';
import { compose, withHandlers } from 'recompose';

import { actions as viewActions } from '../modules/view';

const mapStateToProps = state => ({});
const mapDispatchToProps = {
  ...viewActions
};
const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    newVizClick: props => () => props.setShowNewVizForm(true)
  })
);
const Home = ({ newVizClick }) => (
  <div className="relative">
    <div className="tc-l mt3 mt4-m mt5-l ph3">
      <svg
        className="dib h5 w5"
        style={{ fill: 'currentColor' }}
        viewBox="0 0 24 24"
        clipRule="evenodd"
        fillRule="evenodd"
      >
        <path d="M22.298 24h-5.469c-.182-2.287-1.893-4.311-3.43-5.941-.267-.283-.399-.611-.399-.908 0-.538.415-.979 1.105-.874.662.101 1.374.761 1.63 1.033v-5.175c0-.627.503-1.135 1.094-1.135.591 0 1.094.508 1.094 1.135v2.591c0 .454.445.513.502.059.118-.93 1.378-1.054 1.474.232.023.316.396.38.474.015.178-.837 1.367-.845 1.508.44.036.336.435.404.463.02.028-.388.155-.541.333-.541.6 0 1.262 1.17 1.262 2.557 0 2.492-1.641 2.498-1.641 6.492zm-9.798-21.586c2.933-1.617 7.169-2.282 11.5-2.414v13.644l-4.178-1.179c0-.145 0-.491-.014-.635-.14-1.419-1.295-2.698-2.979-2.73-1.729.048-2.866 1.303-2.991 2.882-.005.209-.003 2.166-.003 2.382-1.099 0-2.222.703-2.607 1.935-.21.678-.154 1.414.126 2.064.301.698.695 1.02 1.206 1.588-.636.113-1.295.032-1.893-.241-2.872-1.315-6.73-1.875-10.667-1.995v-17.715c4.331.132 8.568.797 11.5 2.414v10.586l1-.483v-10.103zm-9.5 10.317c2.086.312 4.451 1.024 6 1.673v-1.064c-1.668-.622-3.881-1.315-6-1.626v1.017zm0-2.031c2.086.312 4.451 1.023 6 1.672v-1.063c-1.668-.622-3.881-1.316-6-1.626v1.017zm0-2.031c2.086.311 4.451 1.023 6 1.673v-1.064c-1.668-.622-3.881-1.316-6-1.626v1.017zm0-2.031c2.086.311 4.451 1.023 6 1.672v-1.064c-1.668-.622-3.881-1.315-6-1.626v1.018zm18-1.018c-2.119.311-4.332 1.004-6 1.626v1.064c1.549-.649 3.914-1.361 6-1.672v-1.018zm-18-2.041c2.119.31 4.332 1.004 6 1.626v1.064c-1.549-.65-3.914-1.361-6-1.673v-1.017zm18 1.017c-2.086.312-4.451 1.023-6 1.673v-1.064c1.668-.622 3.881-1.316 6-1.626v1.017z" />
      </svg>
      <h1 className="f2 f1-l fw2 black-90 mt2 mb0 lh-title">
        Build Data Visualizations with D3
      </h1>
      <h2 className="fw1 f3 black-70 mt2 mb4">
        Get Help, Chat, Collaborate, and Share you're knowledge
      </h2>
      {/*
      <Link
        href={{ query: {newviz: true} }}
        className="f5 fw6 no-underline grow dib v-mid bg-blue white ba b--blue ph4 pv3 mb3"
      >
      */}
      <a
        onClick={newVizClick}
        className="f5 fw6 pointer no-underline grow dib v-mid bg-blue white ba b--blue ph4 pv3 mb3"
      >
        Build a Viz
      </a>
      {/*
      </Link>
      */}
      <span className="dib v-mid ph3 black-70 mb3">or</span>
      <Link
        href="/vizzes"
        className="f5 fw6 no-underline grow dib v-mid black ba b--black ph4 pv3 mb3"
      >
        View Vizzes
      </Link>
    </div>
  </div>
);

export default enhance(Home);
