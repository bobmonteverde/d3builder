import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import Editors from '../components/Editors';

@firestoreConnect(['vizzes'])
@connect(({ firestore }) => ({
  vizzes: firestore.vizzes
}))
export default class Builder extends Component {
  render() {
    return (
      <div className="relative">
        <Editors />
      </div>
    );
  }
}
