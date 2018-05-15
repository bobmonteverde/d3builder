import React from 'react';
import styled from 'styled-components';

import Editor from './Editor.jsx';

const Tab = styled.li.attrs({
  className: props =>
    `w-100 w-33-l order-${props.order ||
      0} order-0-l bg-black-50 bt bb b--white pl3 pv1 fw7 white tracked ttu">JavaScript</li>`
})``;

const EditorWrap = styled.li.attrs({
  className: props => `order-${props.order || 0} order-1-l w-100 h5 w-33-l`
})``;

const Editors = ({ updateViz, viz = {} }) => (
  <div className="relative">
    <ul className="flex flex-wrap justify-between list ma0 pa0">
      <Tab order="0">JavaScript</Tab>
      <EditorWrap order="0">
        <Editor
          name="jsEditor"
          mode="javascript"
          value={viz.js}
          handleChange={val => updateViz('js', val)}
        />
      </EditorWrap>
      <Tab order="1">CSS</Tab>
      <EditorWrap order="1">
        <Editor
          name="cssEditor"
          mode="css"
          value={viz.css}
          handleChange={val => updateViz('css', val)}
        />
      </EditorWrap>
      <Tab order="2">HTML</Tab>
      <EditorWrap order="2">
        <Editor
          name="htmlEditor"
          mode="html"
          value={viz.html}
          handleChange={val => updateViz('html', val)}
        />
      </EditorWrap>
    </ul>
  </div>
);

export default Editors;
