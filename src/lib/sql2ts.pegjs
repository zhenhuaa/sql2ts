start=Sqls EOF

Sqls = (TableDef / CommentLine / NoCreateStat) +

CommentLine1 = _ "#" [^#\n\r]* LineBreak {return ""}

CommentLine2 = _ "/*!" [^\n\r*/]* "*/;" LineBreak {return ""}

CommentLine = CommentLine1 / CommentLine2

NoCreateStat = !"CREATE"i [^;]* ";" LineBreak {return ""}

TableDef
  = _ "CREATE"i _ "TABLE"i _ tbName:field _ "(" cols:ColsDef keys:KeyStats? ")" tbEnd:TableEnd ";" _ {
    return {tableName: tbName, cols: cols, keys: keys, comment: tbEnd.comment}
}

KV=_ word _ "=" _ word

TableEnd = KV+ _"DEFAULT"i? _ KV* _ comment:TableComment? {
return {comment:comment}
}


TableComment =  _ "COMMENT"i _ "=" _ "'" ct:commentText "'" {
   return ct.join("")
}


Identity = [a-zA-Z0-9_-]+

_ "whitespace"
  = [ \n\r\t]*
  

any "any"
 = .*
 
ColsDef = ColDef+

LineBreak = "\n" / "\r\n" / "\r"

EOF = !.
  
ColDef 
  = _ colName:field _ type:type _ typeModify? _ colsModify comment:comment? ","? _ {
  return {colName: colName, type:type, comment: comment || ""}
}
  
type = char:[a-z]i+ {
  return char.map(r => r.toLowerCase()).join("")
}

intSign = "signed"i / "unsigned"i

typeModify = "(" [0-9, ]+ ")" _ intSign? _  

digits = [0-9]+

word = [a-zA-Z_0-9]+

modifyVerb = default / "NOT NULL"i / "AUTO_INCREMENT"i

default = "DEFAULT"i _ defaultValue  _?

defaultValue = "'" ft:Identity "'" / "NULL"i / "''" / digits

colsModify  = (modifyVerb _)*

comment = "COMMENT"i _ "'" ct:commentText "'" {
  return ct.join("")
}

field = 
  "`" ft:Identity "`" {
    return ft.join("")
}

commentText = [^']+

keyName = "PRIMARY" _ "KEY"i / noPkKey:noPkKey {
   return noPkKey || "pk"
}

keyType = "UNIQUE"i _ "KEY"i? / "KEY"i
noPkKey = keyType _ keyName:field {
   return keyName
}

key = _ kx:field _ ","? {
  return kx
}

keyStat =
_ keyName1:keyName _ "(" key:key+ ")" ","? _ {
  return {name: keyName1, keys: [].concat(key) }
}

KeyStats = keyStat+
