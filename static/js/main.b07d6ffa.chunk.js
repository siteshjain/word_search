(this.webpackJsonpdictionary=this.webpackJsonpdictionary||[]).push([[0],{60:function(e,n,t){},80:function(e,n,t){},81:function(e,n,t){},83:function(e,n,t){},87:function(e,n,t){},88:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t(8),s=t.n(c),r=(t(60),t(33)),i=t.n(r),l=t(44),d=t(30),j=t(120),o=t(45),u=t.n(o),b=(t(80),t(81),t(5)),h=function(){return Object(b.jsx)("div",{className:"footer",children:Object(b.jsxs)("p",{children:["Made By ",Object(b.jsx)("span",{children:"Sitesh Jain"})]})})},O=t(121),p=t(122),x=[{value:"English",label:"en"},{value:"Hindi",label:"hi"}],f=(t(83),function(e){var n=e.data1,t=e.setData,a=e.word,c=e.setWord;return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"main",children:[Object(b.jsx)("h2",{children:a||"Word Search"}),Object(b.jsxs)("div",{className:"option",children:[Object(b.jsx)(O.a,{id:"standard-basic",className:"search",label:"Type Word",autoComplete:"off",value:a,onChange:function(e){return c(e.target.value)}}),Object(b.jsx)(O.a,{id:"standard-select-currency",className:"select",value:n,onChange:function(e){return function(e){t(e),c("")}(e.target.value)},select:!0,label:"Language",children:x.map((function(e){return Object(b.jsx)(p.a,{value:e.label,children:e.value},e.label)}))})]})]})})}),m=(t(87),function(e){var n=e.word,t=e.det;e.data1;return console.log(t),Object(b.jsx)("div",{className:"information",children:""===n?Object(b.jsx)("span",{className:"span1",children:"Detail Meaning of Word"}):t.map((function(e){return e.meanings.map((function(e){return e.definitions.map((function(e){return Object(b.jsxs)("div",{className:"define1",children:[Object(b.jsxs)("span",{children:[Object(b.jsx)("b",{children:"Meaning : "}),Object(b.jsx)("p",{children:e.definition})]}),e.example&&Object(b.jsxs)("span",{children:[Object(b.jsx)("b",{children:"Example : "}),Object(b.jsx)("p",{children:e.example})]}),e.synonyms&&Object(b.jsxs)("span",{children:[Object(b.jsx)("b",{children:"Synonyms : "}),Object(b.jsx)("div",{children:e.synonyms.map((function(e){return Object(b.jsx)("div",{className:"syn1",children:e})}))})]}),Object(b.jsx)("br",{})]})}))}))}))})}),v=function(){var e=Object(a.useState)([]),n=Object(d.a)(e,2),t=n[0],c=n[1],s=Object(a.useState)(""),r=Object(d.a)(s,2),o=r[0],O=r[1],p=Object(a.useState)("en"),x=Object(d.a)(p,2),v=x[0],g=x[1],y=function(){var e=Object(l.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("https://api.dictionaryapi.dev/api/v2/entries/".concat(v,"/").concat(o));case 3:n=e.sent,c(n.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){y()}),[o,v]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"app",children:Object(b.jsxs)(j.a,{maxWidth:"md",className:"contain",children:[" ",Object(b.jsx)(f,{data1:v,setData:g,word:o,setWord:O}),Object(b.jsx)(m,{word:o,det:t,data1:v,children:" "}),Object(b.jsx)(h,{})]})})})};s.a.render(Object(b.jsx)(v,{}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.b07d6ffa.chunk.js.map