import { createSelector } from 'reselect';

// --- Selectors ---
export const showNewVizFormSelector = state => state.view.get('showNewVizForm');

// --- Combined Selectors ---
export const showOverlaySelector = createSelector(
  showNewVizFormSelector,
  showNewVizForm => showNewVizForm
);

const viewSelectors = state => ({
  showNewVizForm: showNewVizFormSelector(state),
  showOverlay: showOverlaySelector(state)
});

export default viewSelectors;
