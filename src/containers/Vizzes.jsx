import React from 'react';
import { connect } from 'react-redux';
//import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { firestoreConnect } from 'react-redux-firebase';
import { compose, withHandlers } from 'recompose';
import { Link } from 'redux-little-router';

const enhance = compose(
  firestoreConnect(['vizzes']),
  withHandlers({
    renderList: ({ vizzes = [] }) => () =>
      vizzes.map((vis, i) => (
        <li className="lh-copy pv3 ph5 ba bl-0 bvt-0 br-0 b---">
          <Link href="/vizzes/UNFzxFTm0AuTsvEyCv7D">{vis.title}</Link>
        </li>
      ))
  }),
  connect(({ firestore }) => ({
    vizzes: firestore.vizzes
  }))
);
const Vizzes = ({ vizzes = [], renderList }) => (
  <ul className="list">{renderList()}</ul>
);

export default enhance(Vizzes);
