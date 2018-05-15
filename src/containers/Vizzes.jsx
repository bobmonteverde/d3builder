import React from 'react';
import { connect } from 'react-redux';
//import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { firestoreConnect } from 'react-redux-firebase';
import { compose, withHandlers } from 'recompose';
import { Link } from 'redux-little-router';

const enhance = compose(
  firestoreConnect(['vizzes']),
  connect(({ firestore }) => ({
    vizzes: firestore.ordered.vizzes
  })),
  withHandlers({
    renderList: ({ vizzes = [] }) => () =>
      vizzes.map((viz, i) => (
        <li key={viz.id} className="lh-copy pv2 ph5 ba bl-0 bt-0 br-0 b---">
          <Link href={`/vizzes/${viz.id}`} className="link dim fw7 black-90">
            {viz.title}
          </Link>
        </li>
      ))
  })
);
const Vizzes = ({ renderList }) => <ul className="list">{renderList()}</ul>;

export default enhance(Vizzes);
