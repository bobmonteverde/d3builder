import React from 'react';
import styled from 'styled-components';

import Editor from './Editor.jsx';

/*
const Tab = styled.li.attrs({
  className: props =>
    `w-100 w-33-l order-${props.order || 0} order-0-l bg-black-50 bt bb b--white pl3 pv1 fw7 white tracked ttu">JavaScript</li>`
})``;
*/

const Label = styled.div.attrs({
  className: 'absolute pv1 ph2 fw6 right-0 top-0 bg-black-50 white z-5'
})``;

const EditorWrap = styled.li.attrs({
  className: props =>
    `order-${props.order ||
      0} order-1-l w-100 h5 w-33-l ba b--black-50 relative`
})``;

const Editors = ({ updateViz, viz = {} }) => (
  <div className="relative">
    <ul className="flex flex-wrap justify-between list ma0 pa0">
      {/*<Tab order="0">JavaScript</Tab>*/}
      <EditorWrap order="0">
        <Editor
          name="jsEditor"
          mode="javascript"
          className="z-3"
          fontSize={16}
          value={viz.js}
          handleChange={updateViz('js')}
          enableLiveAutocompletion={true}
        />
        <Label>JS</Label>
      </EditorWrap>
      {/*<Tab order="1">CSS</Tab>*/}
      <EditorWrap order="1">
        <Editor
          name="cssEditor"
          mode="css"
          className="z-3"
          fontSize={16}
          value={viz.css}
          handleChange={updateViz('css')}
          enableLiveAutocompletion={true}
        />
        <Label>CSS</Label>
      </EditorWrap>
      {/*<Tab order="2">HTML</Tab>*/}
      <EditorWrap order="2">
        <Editor
          name="htmlEditor"
          mode="html"
          className="z-3"
          fontSize={16}
          value={viz.html}
          handleChange={updateViz('html')}
          enableLiveAutocompletion={true}
        />
        <Label>HTML</Label>
      </EditorWrap>
    </ul>
  </div>
);

export default Editors;
