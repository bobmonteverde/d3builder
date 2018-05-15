import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import NewVizForm from '../components/NewViz';

import { viewSelectors } from '../selectors';

import { actions as viewActions } from '../modules/view';
import { actions as vizzesActions } from '../modules/vizzes';

const mapStateToProps = state => ({
  ...viewSelectors(state)
});

const mapDispatchToProps = {
  ...viewActions,
  ...vizzesActions
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    closeNewVizForm: props => () => props.setShowNewVizForm(false)
  })
);
const Overlay = ({
  showOverlay,
  showNewVizForm,
  closeNewVizForm,
  createNewViz
}) => (
  <div
    className={!showOverlay ? 'dn' : 'fixed dt vh-100 w-100 bg-black-30 top-0'}
  >
    <div className="dtc v-mid ph3 ph4-l">
      <NewVizForm handleClose={closeNewVizForm} createNewViz={createNewViz} />
    </div>
  </div>
);

export default enhance(Overlay);
