(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var n=c(1),s=c.n(n),o=c(7),a=c.n(o),i=(c(13),c(5)),r=(c(14),c(8)),d=c(6),l=c(0);function j(t){var e=t.todos,c=t.setTodos,n=t.el;return Object(l.jsxs)("div",{className:"todo ".concat(n.completed?"strike-th":""),children:[Object(l.jsx)("li",{className:"todo-item ".concat(n.completed?"strike-through":""),children:n.name}),Object(l.jsxs)("div",{className:"todo-btn",children:[Object(l.jsx)("button",{onClick:function(){c(e.map((function(t){return t.key===n.key?Object(d.a)(Object(d.a)({},t),{},{completed:!n.completed}):t})))},className:" complete-btn",children:Object(l.jsx)("i",{class:"fas fa-check fa-3x"})}),Object(l.jsx)("button",{onClick:function(){c(e.filter((function(t){return t.key!==n.key})))},className:" trash-btn",children:Object(l.jsx)("i",{class:"fas fa-backspace fa-3x"})})]})]})}var u=function(t){var e=t.inputText,c=t.setInputText,n=t.todos,s=t.setTodos;return Object(l.jsxs)("form",{className:"task-container",id:"task-form",children:[Object(l.jsx)("h2",{className:"task-heading",children:"Task:"}),Object(l.jsx)("input",{value:e,onChange:function(t){c(t.target.value)},type:"text",className:"text-field"}),Object(l.jsx)("input",{onClick:function(t){t.preventDefault(),s([].concat(Object(r.a)(n),[{name:e,completed:!1,key:1e3*Math.random()}])),c("")},type:"submit",name:"submit",className:"btn",value:"Add Task"})]})};function b(t){var e=t.todos,c=t.setTodos;return Object(l.jsxs)("div",{className:"todo-container",children:[Object(l.jsx)("ul",{className:"todo-list",children:e.map((function(t){return Object(l.jsx)(j,{el:t,todos:e,setTodos:c},e.key)}))}),Object(l.jsxs)("div",{className:"finished-container",children:[" ",Object(l.jsx)("button",{onClick:function(){c(e.filter((function(t){return!1===t.completed})))},className:"btn finished-btn",children:"Clear Finished"})]})]})}var f="todoApp.todos";var m=function(){var t=Object(n.useState)(""),e=Object(i.a)(t,2),c=e[0],s=e[1],o=Object(n.useState)([]),a=Object(i.a)(o,2),r=a[0],d=a[1];return Object(n.useEffect)((function(){var t=JSON.parse(localStorage.getItem(f));t&&d(t)}),[]),Object(n.useEffect)((function(){localStorage.setItem(f,JSON.stringify(r))}),[r]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:"Todo List"})}),Object(l.jsx)(u,{inputText:c,setInputText:s,todos:r,setTodos:d}),Object(l.jsx)(b,{todos:r,setTodos:d})]})},h=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(e){var c=e.getCLS,n=e.getFID,s=e.getFCP,o=e.getLCP,a=e.getTTFB;c(t),n(t),s(t),o(t),a(t)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.1755e349.chunk.js.map