!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){function n(e,t,n,o){const r=n.length>0&&Math.max(...n)>0;if(o||t||r){return`${r?",  ":""}${t}:${e=1==t?e:`${e}s`}`}return""}const o=`│  Built  {  ${function(e){const t=(new Date).getTime()-e,o=Math.floor(t/1e3/86400),r=Math.floor(t/1e3/3600%24),i=Math.floor(t/1e3/60%60),a=Math.floor(t/1e3%60);return Math.floor(t%1e3),""+n("day",o,[],!1)+n("hour",r,[o],!1)+n("minute",i,[o,r],!1)+n("second",a,[o,r,i],!0)}(1555041316946)}  }  Ago  │`,r="".padStart(o.length-2,"─");console.log(""+`\n┌${r}┐\n`+`${o}\n`+`└${r}┘\n`)},function(e,t,n){n(0),e.exports=n(2)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(3)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4);class r{constructor({model:e,element:t}){this.children=[],this.children_IDs=[],this.name=e.name,this.id=e.id,this.parent_id=e.parent_id,this.element=t}get path(){return this.parent?`${this.parent.path}\\${this.name}`:this.name}add_Child(e){e.parent=this,this.children.push(e),this.children_IDs.push(e.id)}}const i=$("kt-board > thead").children().toArray().flatMap(e=>$(e).children().toArray()),a=o.activeBoard.workflowStages().toArray().map(e=>e.attributes),l=function(e,t,n){const o=[...t],i=[];for(;o.length>0;){const t=i.length;n.forEach(t=>{o.filter(e=>e.parent_id==t.id).map(e=>({child:e,parent:t})).forEach(({child:t,parent:n})=>{const a=o.indexOf(t);if(-1!=a){n instanceof r&&n.add_Child(t),o.splice(a,1);const l=i.length;i.push(new r({model:t,element:e[l]}))}})}),n=i.slice(t)}return i}(i,a.slice(1),[a[0]]);console.log(l),console.log(l.map(e=>e.element)),console.log(l.map(e=>e.path))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.KanbanTool=window.KT,t.activeBoard=t.KanbanTool.boards.models[0]}]);