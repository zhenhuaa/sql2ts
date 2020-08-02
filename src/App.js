import React, { useState } from "react";
import "./App.css";
import { parse } from "./lib/parse";
import SqlEditor from "./components/SqlEditor";
import TsEditor from "./components/TsEditor";

const sqlTypeToTsTypeMap = {
  varchar: "string",
  text: "string",
  int: "number",
  smallint: "number",
  bigint: "number",
  tinyint: "number",
};

function sqlTypeToTsType(type) {
  return sqlTypeToTsTypeMap[type] || "any";
}

function astToInterface(tableDef) {
  if (tableDef.tableName) {
    let lines = [];
    let startLine = `interface ${tableDef.tableName} {`;
    lines.push(startLine);
    for (let col of tableDef.cols) {
      let type = sqlTypeToTsType(col.type);
      lines.push(`  ${col.colName}: ${type}`);
    }
    let endLine = "}";
    lines.push(endLine);
    lines.push("\n");
    return lines.join("\n");
  } else {
    return "\n";
  }
}

function sql2tsCode(code) {
  try {
    let parseRet = parse(code);
    let ret = parseRet[0];
    let tsCode = ret.map(astToInterface).join("");
    return tsCode;
  } catch (err) {
    return err.message;
  }
}

function App() {
  const [tsCode, setTsCode] = useState("");

  function onSqlChange(code) {
    let ts = sql2tsCode(code);
    setTsCode(ts);
  }

  const containerStyles = {
    display: "grid",
    "grid-template-areas": "sql-editor ts-editor",
    "grid-template-columns": "1fr 1fr",
  };

  return (
    <div style={containerStyles}>
      <SqlEditor class="sql-editor" width="500px" onChange={onSqlChange}></SqlEditor>
      <TsEditor class="ts-editor" width="500px" code={tsCode}></TsEditor>
    </div>
  );
}
export default App;
