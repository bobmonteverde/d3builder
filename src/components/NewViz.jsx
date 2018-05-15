import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import {
  withFirestore,
  firebaseConnect,
  isLoaded,
  isEmpty
} from 'react-redux-firebase';

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

const enhance = compose(
  firebaseConnect(),
  withFirestore,
  connect(mapStateToProps),
  withHandlers({
    onSubmit: props => event => {
      event.preventDefault();
      if (!isLoaded(props.auth) || isEmpty(props.auth)) return false;
      console.log('auth', props.auth);
      const title = event.target[1].value;
      props.createNewViz(props.auth.uid, title);
    }
  })
);

const NewViz = ({ handleClose, onSubmit }) => (
  <div className="mw6 ba db center shadow-5 z-999">
    <h1 className="f4 ttu bg-near-black white mv0 pv2 ph3 w-100 inline-flex items-center justify-between">
      <span className="dib flex">Title of New Viz</span>
      <a
        onClick={handleClose}
        className="f6 grow no-underline pl3 pr2 pv1 pointer dib flex bg-black white"
      >
        <svg
          className="dib h1 w1"
          style={{ fill: 'currentColor' }}
          viewBox="0 0 24 24"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
        </svg>
      </a>
    </h1>
    <div className="pa3 bt bg-white">
      <form onSubmit={onSubmit} acceptCharset="utf-8">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className=" mh0 fw6 clip">Create New Viz</legend>
          <div className="mt2">
            <label htmlFor="title" className="f6 b db mb2 clip">
              Title
            </label>
            <input
              id="title"
              placeholder="Viz Title"
              className="input-reset ba b--black-20 pa2 mb2 db w-100"
              type="text"
              aria-describedby="name-desc"
            />
          </div>
          <div className="mt3 tr">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-white bg-animate hover-bg-black-70 hover-white grow pointer f6"
              type="submit"
              value="Create New Viz"
            />
          </div>
        </fieldset>
      </form>
    </div>
  </div>
);

export default enhance(NewViz);
