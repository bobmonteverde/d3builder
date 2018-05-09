import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/github';

@firebaseConnect()
@connect(({ firebase: { profile } }) => ({ profile }))
export default class Editor extends Component {
  static defaultProps = {
    width: '100%',
    height: '100%',
    name: 'UNIQUE_ID?'
  };

  onChange(val) {
    console.log(val);
  }

  render() {
    const { profile, auth, firebase, ...props } = this.props;
    console.log('props', props);

    return (
      <AceEditor
        mode="javascript"
        theme="github"
        onChange={this.onChange}
        editorProps={{ $blockScrolling: true }}
        showPrintMargin={false}
        {...props}
      />
    );
  }
}
