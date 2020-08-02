import React, { useState } from "react";
import AceEditor from 'react-ace'
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/theme-gruvbox";

function TsEditor(props) {
  return (
    <AceEditor
      width="auto"
      placeholder="Generated Typescript Interface"
      mode="typescript"
      theme="gruvbox"
      name="tsEditor"
      readOnly = {true}
      fontSize={14}
      showPrintMargin={true}
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
