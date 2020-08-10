import React from "react";
import AceEditor from "react-ace";

function SqlEditor(props) {
  function onLoad(editor) {
  }

  return (
    <AceEditor
      width={props.width}
      placeholder="Type SQL Create Table Statement Here"
      mode="mysql"
      theme={props.theme}
      name="sqlEditor"
      onChange={props.onChange}
      onLoad={onLoad}
      fontSize={14}
      showPrintMargin={false}
      showGutter={true}
      highlightActiveLine={true}
      minLines={100}
      maxLines={Infinity}
      value={props.code}
      annotations={props.annotations}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showGutter: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
}

export default SqlEditor;
