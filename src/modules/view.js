import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

// This section is for all un-categorized actions

// ------------------------------------
// Constants
// ------------------------------------
const SET_SHOW_NEW_VIZ_FORM = 'd3h/view/SET_SHOW_NEW_VIZ_FORM';

export const constants = {
  SET_SHOW_NEW_VIZ_FORM
};

// ------------------------------------
// Actions
// ------------------------------------
export const setShowNewVizForm = createAction(
  SET_SHOW_NEW_VIZ_FORM,
  isShown => ({ isShown })
);

export const actions = {
  setShowNewVizForm
};

// ------------------------------------
// Reducer
// ------------------------------------
const defaultState = Map({
  showNewVizForm: false
});

export default handleActions(
  {
    [SET_SHOW_NEW_VIZ_FORM]: (state, { payload }) =>
      state.set('showNewVizForm', payload.isShown)
  },
  defaultState
);
