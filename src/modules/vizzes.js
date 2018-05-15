import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
//import { getFirestore } from 'redux-firestore'

// ------------------------------------
// Constants
// ------------------------------------
const CREATE_NEW_VIZ = 'd3h/vizzes/CREATE_NEW_VIZ';
const CREATE_NEW_VIZ_COMPLETE = 'd3h/vizzes/CREATE_NEW_VIZ_COMPLETE';

export const constants = {
  CREATE_NEW_VIZ,
  CREATE_NEW_VIZ_COMPLETE
};

// ------------------------------------
// Actions
// ------------------------------------
export const createNewViz = createAction(CREATE_NEW_VIZ, (uid, title) => ({
  uid,
  title
}));
export const createNewVizComplete = createAction(CREATE_NEW_VIZ_COMPLETE);

export const actions = {
  createNewViz,
  createNewVizComplete
};

// ------------------------------------
// Reducer
// ------------------------------------
const defaultState = Map({
  isCreatingNewViz: false
});

export default handleActions(
  {
    [CREATE_NEW_VIZ]: (state, { payload }) =>
      state.set('isCreatingNewViz', true),

    [CREATE_NEW_VIZ_COMPLETE]: (state, { payload }) =>
      state.set('isCreatingNewViz', false)
  },
  defaultState
);
