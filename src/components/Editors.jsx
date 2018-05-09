import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import styled from 'styled-components';

import Editor from './Editor.jsx';

@firestoreConnect(['vizzes'])
@connect(({ firestore }) => ({ vizzes: firestore.vizzes }))
export default class Editors extends Component {
  render() {
    const Tab = styled.li.attrs({
      className: props =>
        `w-100 w-33-l order-${props.order ||
          0} order-0-l bg-black-50 bt bb b--white pl3 pv1 fw7 white tracked ttu">JavaScript</li>`
    })``;

    const EditorWrap = styled.li.attrs({
      className: props => `order-${props.order || 0} order-1-l w-100 h5 w-33-l`
    })``;

    return (
      <div className="relative">
        <ul className="flex flex-wrap justify-between list ma0 pa0">
          <Tab order="0">JavaScript</Tab>
          <EditorWrap order="0">
            <Editor name="jsEditor" />
          </EditorWrap>
          <Tab order="1">CSS</Tab>
          <EditorWrap order="1">
            <Editor name="cssEditor" />
          </EditorWrap>
          <Tab order="2">HTML</Tab>
          <EditorWrap order="2">
            <Editor name="htmlEditor" />
          </EditorWrap>
        </ul>
      </div>
    );
  }
}
