import React, {useState}  from "react"; import AceEditor from 'react-ace'


function SqlEditor(props) {
  function onLoad(editor) {
    // console.log(editor, "sqlEditor")
  }

  return (
    <AceEditor
      width={props.width}
      placeholder="Type SQL DDL Statement Here"
      mode="mysql"
      theme={props.theme}
      name="sqlEditor"
      onLoad={onLoad}
      onChange={props.onChange}
      fontSize={14}
      showPrintMargin={false}
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
