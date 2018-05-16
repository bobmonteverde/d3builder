import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/mode/css';
import 'brace/mode/html';
import 'brace/theme/github';
import 'brace/ext/language_tools';

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
    editorProps={{ $blockScrolling: Infinity }}
    showPrintMargin={false}
    mode={mode}
    width={width}
    height={height}
    {...props}
  />
);

export default Editor;
