import React, { useState } from "react";
import AceEditor from 'react-ace'
import * as Toggle from 'react-toggle'

function TsEditor(props) {
  return (
    <AceEditor
      width={props.width}
      placeholder={props.placeholder}
      mode="typescript"
      theme={props.theme}
      name="tsEditor"
      readOnly = {true}
      fontSize={14}
      showPrintMargin={false}
      showGutter={true}
      highlightActiveLine={false}
      value={props.code}
      minLines={100}
      maxLines="Infinity"
      setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        showGutter: false,
        tabSize: 2,
      }}
    />
  );
}

export default TsEditor;
