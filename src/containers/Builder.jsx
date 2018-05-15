import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase';
import { compose, withHandlers } from 'recompose';

import Editors from '../components/Editors';
import Preview from '../components/Preview';

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  vizid: state.router.params.vizid,
  viz:
    state.firestore.data.vizzes &&
    state.firestore.data.vizzes[state.router.params.vizid]
  //viz: Object.keys(state.firestore)
});

const enhance = compose(
  firebaseConnect(),
  firestoreConnect(props => [{ collection: 'vizzes', doc: props.vizid }]),
  connect(mapStateToProps),
  withHandlers({
    updateViz: ({ firestore, firebase, vizid }) => (field, val) => {
      //console.log('Builder updateViz', field, val);
      firestore.update(
        { collection: 'vizzes', doc: vizid },
        {
          [field]: val,
          lastUpdate: firestore.FieldValue.serverTimestamp()
        }
      );
    }
  })
);

const Builder = ({ viz = {}, vizid, updateViz }) => (
  <div className="relative">
    <Editors vizid={vizid} updateViz={updateViz} viz={viz} />
    <div className="">
      <Preview js={viz.js} css={viz.css} html={viz.html} />
    </div>
  </div>
);

export default enhance(Builder);
