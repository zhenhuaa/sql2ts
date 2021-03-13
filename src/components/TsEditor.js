import React from "react";
import AceEditor from "react-ace";
import { FiClipboard } from "react-icons/fi";
import { useClipboard } from "use-clipboard-copy";

function TsEditor(props) {
  const clipboard = useClipboard();

  const handleCopy = React.useCallback(() => {
    clipboard.copy(props.code);
  }, [clipboard, props.code]);

  return (
    <div>
      <div
        style={{ float: "right", marginRight: "20px" }}
        onClick={handleCopy}
        className="button -flower center"
      >
        <FiClipboard size="1.5em" />
        Copy
      </div>
      <AceEditor
        width={props.width}
        placeholder={props.placeholder}
        mode="typescript"
        theme={props.theme}
        name="tsEditor"
        readOnly={true}
        fontSize={14}
        showPrintMargin={false}
        showGutter={true}
        highlightActiveLine={false}
        value={props.code}
        minLines={100}
        maxLines={Infinity}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          showGutter: false,
          tabSize: 2,
        }}
      />
    </div>
  );
}

export default TsEditor;
