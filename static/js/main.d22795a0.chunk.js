(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(t,e,o){},14:function(t,e,o){"use strict";o.r(e);var n=o(3),s=o.n(n),c=o(4),r=o(5),i=o(7),a=o(6),u=o(1),d=o.n(u),l=(o(12),o(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],f=function(t){Object(i.a)(o,t);var e=Object(a.a)(o);function o(){var t;Object(c.a)(this,o);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={isOpened:!1,visibleGoods:[].concat(b)},t.startGoods=function(){t.setState({isOpened:!0})},t.reversedGoods=function(){t.setState((function(t){t.visibleGoods.reverse()}))},t.sortByABCGoods=function(){t.setState((function(t){t.visibleGoods.sort((function(t,e){return t.localeCompare(e)}))}))},t.sortByGoodsLength=function(){t.setState((function(t){t.visibleGoods.sort((function(t,e){return t.length-e.length}))}))},t.resetGoods=function(){t.setState((function(){return{visibleGoods:[].concat(b)}}))},t}return Object(r.a)(o,[{key:"render",value:function(){var t=this,e=this.state,o=e.isOpened,n=e.visibleGoods;return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Goods"}),!o&&Object(l.jsx)("button",{type:"button",onClick:function(){t.startGoods()},children:"Start"}),o&&Object(l.jsx)("button",{type:"button",onClick:function(){t.reversedGoods(),t.forceUpdate()},children:"Reverse"}),o&&Object(l.jsx)("button",{type:"button",onClick:function(){t.sortByABCGoods(),t.forceUpdate()},children:"Sort alphabetically"}),o&&Object(l.jsx)("button",{type:"button",onClick:function(){t.sortByGoodsLength(),t.forceUpdate()},children:"Sort by length"}),o&&Object(l.jsx)("button",{type:"button",onClick:function(){t.resetGoods(),t.forceUpdate()},children:"Reset"}),Object(l.jsx)("ul",{children:o&&n.map((function(t){return Object(l.jsx)("li",{children:t},t)}))})]})}}]),o}(d.a.Component),p=f;s.a.render(Object(l.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d22795a0.chunk.js.map