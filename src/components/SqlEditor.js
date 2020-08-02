import React, {useState}  from "react"; import AceEditor from 'react-ace'
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-gruvbox";


function SqlEditor(props) {
  function onLoad(editor) {
    console.log(editor, "sqlEditor")
  }

  return (
    <AceEditor
      width="auto"
      placeholder="Type SQL DDL Statement Here"
      mode="mysql"
      theme="gruvbox"
      name="sqlEditor"
      onLoad={onLoad}
      onChange={props.onChange}
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      minLines={100}
      maxLines="Infinity"
      setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showGutter: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
}

export default SqlEditor;
