import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/mode/css';
import 'brace/mode/html';
import 'brace/theme/github';

const Editor = ({
  width = '100%',
  height = '100%',
  mode = 'javascript',
  handleChange,
  ...props
}) => (
  <AceEditor
    theme="github"
    onChange={handleChange}
    editorProps={{ $blockScrolling: true }}
    showPrintMargin={false}
    mode={mode}
    width={width}
    height={height}
    {...props}
  />
);

export default Editor;
