(this.webpackJsonpsql2ts=this.webpackJsonpsql2ts||[]).push([[0],{16:function(e,t,r){"use strict";function n(e,t,r,a){this.message=e,this.expected=t,this.found=r,this.location=a,this.name="SyntaxError","function"===typeof Error.captureStackTrace&&Error.captureStackTrace(this,n)}!function(e,t){function r(){this.constructor=e}r.prototype=t.prototype,e.prototype=new r}(n,Error),n.buildMessage=function(e,t){var r={literal:function(e){return'"'+a(e.text)+'"'},class:function(e){var t,r="";for(t=0;t<e.parts.length;t++)r+=e.parts[t]instanceof Array?c(e.parts[t][0])+"-"+c(e.parts[t][1]):c(e.parts[t]);return"["+(e.inverted?"^":"")+r+"]"},any:function(e){return"any character"},end:function(e){return"end of input"},other:function(e){return e.description}};function n(e){return e.charCodeAt(0).toString(16).toUpperCase()}function a(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+n(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+n(e)}))}function c(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+n(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+n(e)}))}return"Expected "+function(e){var t,n,a,c=new Array(e.length);for(t=0;t<e.length;t++)c[t]=(a=e[t],r[a.type](a));if(c.sort(),c.length>0){for(t=1,n=1;t<c.length;t++)c[t-1]!==c[t]&&(c[n]=c[t],n++);c.length=n}switch(c.length){case 1:return c[0];case 2:return c[0]+" or "+c[1];default:return c.slice(0,-1).join(", ")+", or "+c[c.length-1]}}(e)+" but "+function(e){return e?'"'+a(e)+'"':"end of input"}(t)+" found."},e.exports={SyntaxError:n,parse:function(e,t){t=void 0!==t?t:{};var r,a={},c={start:ie},o=ie,i=ee("#",!1),s=/^[^#\n\r]/,u=te(["#","\n","\r"],!0,!1),l=ee("/*!",!1),f=/^[^\n\r*\/]/,h=te(["\n","\r","*","/"],!0,!1),p=ee("*/;",!1),d=ee("CREATE",!1),m=/^[^;]/,A=te([";"],!0,!1),g=ee(";",!1),v=ee("TABLE",!1),E=ee("(",!1),b=ee(")",!1),y=/^[a-zA-Z0-9_\-]/,C=te([["a","z"],["A","Z"],["0","9"],"_","-"],!1,!1),x=re("whitespace"),N=/^[ \n\r\t]/,L=te([" ","\n","\r","\t"],!1,!1),w=(re("any"),{type:"any"}),T=ee("\n",!1),S=ee("\r\n",!1),O=ee("\r",!1),U=ee(",",!1),j=/^[a-z]/,R=te([["a","z"]],!1,!1),M=ee("signed",!1),I=ee("unsigned",!1),k=/^[0-9]/,z=te([["0","9"]],!1,!1),F=(te([["a","z"],["A","Z"],"_",["0","9"]],!1,!1),ee("NOT NULL",!1)),Y=ee("AUTO_INCREMENT",!1),q=ee("DEFAULT",!1),B=ee("'",!1),D=ee("NULL",!1),K=ee("COMMENT",!1),_=ee("`",!1),G=/^[^']/,P=te(["'"],!0,!1),Q=ee("PRIMARY KEY",!1),Z=ee("UNIQUE",!1),J=ee("KEY",!1),W=0,H=[{line:1,column:1}],$=0,V=[],X=0;if("startRule"in t){if(!(t.startRule in c))throw new Error("Can't start parsing from rule \""+t.startRule+'".');o=c[t.startRule]}function ee(e,t){return{type:"literal",text:e,ignoreCase:t}}function te(e,t,r){return{type:"class",parts:e,inverted:t,ignoreCase:r}}function re(e){return{type:"other",description:e}}function ne(t){var r,n=H[t];if(n)return n;for(r=t-1;!H[r];)r--;for(n={line:(n=H[r]).line,column:n.column};r<t;)10===e.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++;return H[t]=n,n}function ae(e,t){var r=ne(e),n=ne(t);return{start:{offset:e,line:r.line,column:r.column},end:{offset:t,line:n.line,column:n.column}}}function ce(e){W<$||(W>$&&($=W,V=[]),V.push(e))}function oe(e,t,r){return new n(n.buildMessage(e,t),e,t,r)}function ie(){var t,r,n;return t=W,(r=function(){var e,t;e=[],(t=fe())===a&&(t=se())===a&&(t=ue())===a&&(t=le());if(t!==a)for(;t!==a;)e.push(t),(t=fe())===a&&(t=se())===a&&(t=ue())===a&&(t=le());else e=a;return e}())!==a&&(n=function(){var t,r;t=W,X++,e.length>W?(r=e.charAt(W),W++):(r=a,0===X&&ce(w));X--,r===a?t=void 0:(W=t,t=a);return t}())!==a?t=r=[r,n]:(W=t,t=a),t}function se(){var t,r,n,c;if(t=W,pe()!==a)if(35===e.charCodeAt(W)?(r="#",W++):(r=a,0===X&&ce(i)),r!==a){for(n=[],s.test(e.charAt(W))?(c=e.charAt(W),W++):(c=a,0===X&&ce(u));c!==a;)n.push(c),s.test(e.charAt(W))?(c=e.charAt(W),W++):(c=a,0===X&&ce(u));n!==a&&(c=de())!==a?(t,t=""):(W=t,t=a)}else W=t,t=a;else W=t,t=a;return t}function ue(){var t,r,n,c;if(t=W,pe()!==a)if("/*!"===e.substr(W,3)?(r="/*!",W+=3):(r=a,0===X&&ce(l)),r!==a){for(n=[],f.test(e.charAt(W))?(c=e.charAt(W),W++):(c=a,0===X&&ce(h));c!==a;)n.push(c),f.test(e.charAt(W))?(c=e.charAt(W),W++):(c=a,0===X&&ce(h));n!==a?("*/;"===e.substr(W,3)?(c="*/;",W+=3):(c=a,0===X&&ce(p)),c!==a&&de()!==a?(t,t=""):(W=t,t=a)):(W=t,t=a)}else W=t,t=a;else W=t,t=a;return t}function le(){var t,r,n,c;if(t=W,r=W,X++,"CREATE"===e.substr(W,6)?(n="CREATE",W+=6):(n=a,0===X&&ce(d)),X--,n===a?r=void 0:(W=r,r=a),r!==a){for(n=[],m.test(e.charAt(W))?(c=e.charAt(W),W++):(c=a,0===X&&ce(A));c!==a;)n.push(c),m.test(e.charAt(W))?(c=e.charAt(W),W++):(c=a,0===X&&ce(A));n!==a?(59===e.charCodeAt(W)?(c=";",W++):(c=a,0===X&&ce(g)),c!==a&&de()!==a?(t,t=r=""):(W=t,t=a)):(W=t,t=a)}else W=t,t=a;return t}function fe(){var t,r,n,c,o,i,s,u,l,f;if(t=W,pe()!==a)if("CREATE"===e.substr(W,6)?(r="CREATE",W+=6):(r=a,0===X&&ce(d)),r!==a)if(pe()!==a)if("TABLE"===e.substr(W,5)?(n="TABLE",W+=5):(n=a,0===X&&ce(v)),n!==a)if(pe()!==a)if((c=ge())!==a)if(pe()!==a)if(40===e.charCodeAt(W)?(o="(",W++):(o=a,0===X&&ce(E)),o!==a)if((i=function(){var e,t;if(e=[],(t=me())!==a)for(;t!==a;)e.push(t),t=me();else e=a;return e}())!==a)if((s=function(){var e,t;if(e=[],(t=be())!==a)for(;t!==a;)e.push(t),t=be();else e=a;return e}())===a&&(s=null),s!==a)if(41===e.charCodeAt(W)?(u=")",W++):(u=a,0===X&&ce(b)),u!==a){if(l=[],m.test(e.charAt(W))?(f=e.charAt(W),W++):(f=a,0===X&&ce(A)),f!==a)for(;f!==a;)l.push(f),m.test(e.charAt(W))?(f=e.charAt(W),W++):(f=a,0===X&&ce(A));else l=a;l!==a?(59===e.charCodeAt(W)?(f=";",W++):(f=a,0===X&&ce(g)),f!==a&&pe()!==a?(t,t={tableName:c,cols:i,keys:s}):(W=t,t=a)):(W=t,t=a)}else W=t,t=a;else W=t,t=a;else W=t,t=a;else W=t,t=a;else W=t,t=a;else W=t,t=a;else W=t,t=a;else W=t,t=a;else W=t,t=a;else W=t,t=a;else W=t,t=a;return t}function he(){var t,r;if(t=[],y.test(e.charAt(W))?(r=e.charAt(W),W++):(r=a,0===X&&ce(C)),r!==a)for(;r!==a;)t.push(r),y.test(e.charAt(W))?(r=e.charAt(W),W++):(r=a,0===X&&ce(C));else t=a;return t}function pe(){var t,r;for(X++,t=[],N.test(e.charAt(W))?(r=e.charAt(W),W++):(r=a,0===X&&ce(L));r!==a;)t.push(r),N.test(e.charAt(W))?(r=e.charAt(W),W++):(r=a,0===X&&ce(L));return X--,t===a&&(r=a,0===X&&ce(x)),t}function de(){var t;return 10===e.charCodeAt(W)?(t="\n",W++):(t=a,0===X&&ce(T)),t===a&&("\r\n"===e.substr(W,2)?(t="\r\n",W+=2):(t=a,0===X&&ce(S)),t===a&&(13===e.charCodeAt(W)?(t="\r",W++):(t=a,0===X&&ce(O)))),t}function me(){var t,r,n,c,o,i;return t=W,pe()!==a&&(r=ge())!==a&&pe()!==a&&(n=function(){var t,r,n;t=W,r=[],j.test(e.charAt(W))?(n=e.charAt(W),W++):(n=a,0===X&&ce(R));if(n!==a)for(;n!==a;)r.push(n),j.test(e.charAt(W))?(n=e.charAt(W),W++):(n=a,0===X&&ce(R));else r=a;r!==a&&(t,r=r.join(""));return t=r}())!==a?((c=function(){var t,r,n,c,o,i,s;t=W,40===e.charCodeAt(W)?(r="(",W++):(r=a,0===X&&ce(E));r!==a&&(n=function(){var t,r;t=[],k.test(e.charAt(W))?(r=e.charAt(W),W++):(r=a,0===X&&ce(z));if(r!==a)for(;r!==a;)t.push(r),k.test(e.charAt(W))?(r=e.charAt(W),W++):(r=a,0===X&&ce(z));else t=a;return t}())!==a?(41===e.charCodeAt(W)?(c=")",W++):(c=a,0===X&&ce(b)),c!==a&&(o=pe())!==a?((i=function(){var t;"signed"===e.substr(W,6)?(t="signed",W+=6):(t=a,0===X&&ce(M));t===a&&("unsigned"===e.substr(W,8)?(t="unsigned",W+=8):(t=a,0===X&&ce(I)));return t}())===a&&(i=null),i!==a&&(s=pe())!==a?t=r=[r,n,c,o,i,s]:(W=t,t=a)):(W=t,t=a)):(W=t,t=a);return t}())===a&&(c=null),c!==a&&pe()!==a&&function(){var e,t,r,n;e=[],t=W,(r=Ae())!==a&&(n=pe())!==a?t=r=[r,n]:(W=t,t=a);for(;t!==a;)e.push(t),t=W,(r=Ae())!==a&&(n=pe())!==a?t=r=[r,n]:(W=t,t=a);return e}()!==a?((o=function(){var t,r,n,c,o;t=W,"COMMENT"===e.substr(W,7)?(r="COMMENT",W+=7):(r=a,0===X&&ce(K));r!==a&&pe()!==a?(39===e.charCodeAt(W)?(n="'",W++):(n=a,0===X&&ce(B)),n!==a&&(c=function(){var t,r;t=[],G.test(e.charAt(W))?(r=e.charAt(W),W++):(r=a,0===X&&ce(P));if(r!==a)for(;r!==a;)t.push(r),G.test(e.charAt(W))?(r=e.charAt(W),W++):(r=a,0===X&&ce(P));else t=a;return t}())!==a?(39===e.charCodeAt(W)?(o="'",W++):(o=a,0===X&&ce(B)),o!==a?(t,r=c.join(""),t=r):(W=t,t=a)):(W=t,t=a)):(W=t,t=a);return t}())===a&&(o=null),o!==a?(44===e.charCodeAt(W)?(i=",",W++):(i=a,0===X&&ce(U)),i===a&&(i=null),i!==a&&pe()!==a?(t,t={colName:r,type:n,comment:o||""}):(W=t,t=a)):(W=t,t=a)):(W=t,t=a)):(W=t,t=a),t}function Ae(){var t;return(t=function(){var t,r,n,c,o;t=W,"DEFAULT"===e.substr(W,7)?(r="DEFAULT",W+=7):(r=a,0===X&&ce(q));r!==a&&(n=pe())!==a&&(c=function(){var t,r,n,c;t=W,39===e.charCodeAt(W)?(r="'",W++):(r=a,0===X&&ce(B));r!==a&&(n=he())!==a?(39===e.charCodeAt(W)?(c="'",W++):(c=a,0===X&&ce(B)),c!==a?t=r=[r,n,c]:(W=t,t=a)):(W=t,t=a);t===a&&("NULL"===e.substr(W,4)?(t="NULL",W+=4):(t=a,0===X&&ce(D)));return t}())!==a?((o=pe())===a&&(o=null),o!==a?t=r=[r,n,c,o]:(W=t,t=a)):(W=t,t=a);return t}())===a&&("NOT NULL"===e.substr(W,8)?(t="NOT NULL",W+=8):(t=a,0===X&&ce(F)),t===a&&("AUTO_INCREMENT"===e.substr(W,14)?(t="AUTO_INCREMENT",W+=14):(t=a,0===X&&ce(Y)))),t}function ge(){var t,r,n,c;return t=W,96===e.charCodeAt(W)?(r="`",W++):(r=a,0===X&&ce(_)),r!==a&&(n=he())!==a?(96===e.charCodeAt(W)?(c="`",W++):(c=a,0===X&&ce(_)),c!==a?(t,t=r=n.join("")):(W=t,t=a)):(W=t,t=a),t}function ve(){var t,r;return"PRIMARY KEY"===e.substr(W,11)?(t="PRIMARY KEY",W+=11):(t=a,0===X&&ce(Q)),t===a&&(t=W,(r=function(){var t,r,n,c;t=W,"UNIQUE"===e.substr(W,6)?(r="UNIQUE",W+=6):(r=a,0===X&&ce(Z));r===a&&(r=null);r!==a&&pe()!==a?("KEY"===e.substr(W,3)?(n="KEY",W+=3):(n=a,0===X&&ce(J)),n!==a&&pe()!==a&&(c=ge())!==a?(t,t=r=c):(W=t,t=a)):(W=t,t=a);return t}())!==a&&(t,r=r||"pk"),t=r),t}function Ee(){var t,r,n;return t=W,(r=ge())!==a?(44===e.charCodeAt(W)?(n=",",W++):(n=a,0===X&&ce(U)),n===a&&(n=null),n!==a?(t,t=r=r):(W=t,t=a)):(W=t,t=a),t}function be(){var t,r,n,c,o,i;if(t=W,pe()!==a)if((r=ve())!==a)if(pe()!==a)if(40===e.charCodeAt(W)?(n="(",W++):(n=a,0===X&&ce(E)),n!==a){if(c=[],(o=Ee())!==a)for(;o!==a;)c.push(o),o=Ee();else c=a;c!==a?(41===e.charCodeAt(W)?(o=")",W++):(o=a,0===X&&ce(b)),o!==a?(44===e.charCodeAt(W)?(i=",",W++):(i=a,0===X&&ce(U)),i===a&&(i=null),i!==a&&pe()!==a?(t,t={name:r,keys:[].concat(c)}):(W=t,t=a)):(W=t,t=a)):(W=t,t=a)}else W=t,t=a;else W=t,t=a;else W=t,t=a;else W=t,t=a;return t}if((r=o())!==a&&W===e.length)return r;throw r!==a&&W<e.length&&ce({type:"end"}),oe(V,$<e.length?e.charAt($):null,$<e.length?ae($,$+1):ae($,$))}}},17:function(e,t,r){e.exports=r(39)},22:function(e,t,r){},23:function(e,t,r){},38:function(e,t,r){},39:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(14),o=r.n(c),i=(r(22),r(15)),s=r(2),u=(r(23),r(16)),l=r(4),f=r.n(l);var h=function(e){return a.a.createElement(f.a,{width:e.width,placeholder:"Type SQL DDL Statement Here",mode:"mysql",theme:e.theme,name:"sqlEditor",onLoad:function(e){},onChange:e.onChange,fontSize:14,showPrintMargin:!1,showGutter:!0,highlightActiveLine:!0,minLines:100,maxLines:"Infinity",setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showGutter:!1,showLineNumbers:!0,tabSize:2}})},p=r(8),d=r.n(p);var m=function(e){return a.a.createElement(f.a,{width:e.width,placeholder:e.placeholder,mode:"typescript",theme:e.theme,name:"tsEditor",readOnly:!0,fontSize:14,showPrintMargin:!1,showGutter:!0,highlightActiveLine:!1,value:e.code,minLines:100,maxLines:"Infinity",setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!0,showGutter:!1,tabSize:2}})},A=(r(35),r(36),r(37),r(38),{varchar:"string",text:"string",int:"number",smallint:"number",bigint:"number",tinyint:"number"});var g=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),r=t[0],c=t[1],o=Object(n.useState)(""),l=Object(s.a)(o,2),f=l[0],p=l[1],g=Object(n.useState)("gruvbox"),v=Object(s.a)(g,2),E=v[0],b=(v[1],Object(n.useState)(!0)),y=Object(s.a)(b,2),C=y[0],x=y[1],N="// Generated Typescript Interface";function L(e){if(e.tableName){var t=[],r="interface ".concat(e.tableName," {");t.push(r);var n,a=Object(i.a)(e.cols);try{for(a.s();!(n=a.n()).done;){var c=n.value,o=w(c.type),s="  ".concat(c.colName,": ").concat(o);if(C&&c.comment)s+=" // ".concat(c.comment);t.push(s)}}catch(u){a.e(u)}finally{a.f()}return t.push("}"),t.push("\n"),t.join("\n")}return""}function w(e){return A[e]||"any"}return Object(n.useEffect)((function(){var e=function(e){if(!e)return N;try{return Object(u.parse)(e)[0].map(L).join("")}catch(t){return t.message}}(r);p(e)}),[r,C]),a.a.createElement("div",{className:"app",style:{backgroundColor:"#1D2021",padding:"20px"}},a.a.createElement("nav",{className:"navbar navbar-expand-lg",style:{display:"flex",justifyItems:"flex-start"}},a.a.createElement("span",{className:"navbar-brand",style:{fontSize:"46px",color:"antiquewhite"}},"SQL2TS"),a.a.createElement("div",{className:"toolbar",style:{display:"flex",alignSelf:"flex-end",paddingLeft:"20px"}},a.a.createElement("div",{className:"comment"},a.a.createElement("label",{style:{display:"flex"}},a.a.createElement(d.a,{style:{alignSelf:"center"},defaultChecked:C,onChange:function(e){e.target.checked?x(!0):x(!1)}}),a.a.createElement("span",{style:{color:"adafae",fontSize:"13px",alignSelf:"center",paddingLeft:"6px"}},"Comments"))))),a.a.createElement("div",{className:"editor-zone",style:{display:"grid",gridTemplateColumns:"6fr 4fr",gridTemplateAreas:"sql-editor ts-editor",gap:"10px 20px"}},a.a.createElement(h,{className:"sql-editor",width:"auto",code:r,onChange:function(e){c(e)},theme:E}),a.a.createElement(m,{placeholder:N,className:"ts-editor",width:"auto",code:f,theme:E})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.a45791b0.chunk.js.map