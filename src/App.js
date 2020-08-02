import React, { useState, useEffect } from "react";
import "./App.css";
import { parse } from "./lib/parse";
import SqlEditor from "./components/SqlEditor";
import TsEditor from "./components/TsEditor";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/theme-gruvbox";
import Toggle from "react-toggle";
import "./css/bootstrap.min.css";

const sqlTypeToTsTypeMap = {
  varchar: "string",
  text: "string",
  int: "number",
  smallint: "number",
  bigint: "number",
  tinyint: "number",
};

function App() {
  const [sqlCode, setSqlCode] = useState("");
  const [tsCode, setTsCode] = useState("");
  const [theme, setTheme] = useState("gruvbox");
  const [commentFlag, setCommentFlag] = useState(true);
  const tsPh = "// Generated Typescript Interface";

  function onSqlChange(code) {
    setSqlCode(code);
  }

  useEffect(() => {
    let ts = sql2tsCode(sqlCode);
    setTsCode(ts);
  }, [sqlCode, commentFlag]);

  useEffect(() => {
    window.document.title = "SQL2TS"
  })

  const containerStyles = {
    display: "grid",
    gridTemplateColumns: "6fr 4fr",
    gridTemplateAreas: "sql-editor ts-editor",
    gap: "10px 20px",
  };

  function toggleComment(e) {
    if (e.target.checked) {
      setCommentFlag(true);
    } else {
      setCommentFlag(false);
    }
  }

  function astToInterface(tableDef) {
    if (tableDef.tableName) {
      let lines = [];
      let startLine = `interface ${tableDef.tableName} {`;
      lines.push(startLine);
      for (let col of tableDef.cols) {
        let type = sqlTypeToTsType(col.type);
        let colLine = `  ${col.colName}: ${type}`;
        if (commentFlag && col.comment) {
          const colComment = ` // ${col.comment}`;
          colLine += colComment;
        }
        lines.push(colLine);
      }
      let endLine = "}";
      lines.push(endLine);
      lines.push("\n");
      return lines.join("\n");
    } else {
      return "\n";
    }
  }

  function sqlTypeToTsType(type) {
    return sqlTypeToTsTypeMap[type] || "any";
  }

  function sql2tsCode(code) {
    if (!code) return tsPh;
    try {
      let parseRet = parse(code);
      let ret = parseRet[0];
      let tsCode = ret.map(astToInterface).join("");
      return tsCode;
    } catch (err) {
      console.log(err);
      const errLine = err.location.start;
      console.log(errLine);
      return err.message;
    }
  }

  return (
    <div
      className="app"
      style={{ backgroundColor: "#1D2021", padding: "20px" }}
    >
      <nav className="navbar navbar-expand-lg" style={{display:"flex", justifyItems: "flex-start"}}>
        <span className="navbar-brand" style={{ fontSize: "46px", color: "antiquewhite"}}>
          SQL2TS
        </span>

        <div
          className="toolbar"
          style={{ display: "flex", alignSelf: "flex-end", paddingLeft: "20px" }}
        >
          <div className="comment">
            <label style={{display:"flex"}}>
              <Toggle style={{alignSelf: "center"}}
                defaultChecked={commentFlag}
                onChange={toggleComment}
              ></Toggle>
              <span style={{ color: "adafae", fontSize: "13px", alignSelf: "center", paddingLeft: "6px"}}>Comments</span>
            </label>
          </div>
        </div>
      </nav>

      <div className="editor-zone" style={containerStyles}>
        <SqlEditor
          className="sql-editor"
          width="auto"
          code={sqlCode}
          onChange={onSqlChange}
          theme={theme}
        ></SqlEditor>
        <TsEditor
          placeholder={tsPh}
          className="ts-editor"
          width="auto"
          code={tsCode}
          theme={theme}
        ></TsEditor>
      </div>

    </div>
  );
}
export default App;
