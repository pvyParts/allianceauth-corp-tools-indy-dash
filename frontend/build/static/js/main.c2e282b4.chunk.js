(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{212:function(e,t,r){},213:function(e,t,r){},254:function(e,t,r){},255:function(e,t,r){"use strict";r.r(t);var n=r(267),a=r(138),c=r(0),s=r.n(c),l=r(14),i=r(52),o=r(33),u=r(268),j=r(130),d=r(69),b=r.n(d),h=r(91),p=r.n(h);function f(){return(f=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/indy/api/structure/list");case 2:return t=e.sent,console.log("get structure list in api"),console.log(t),e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}p.a.defaults.xsrfHeaderName="X-CSRFToken";var O=r(75),x=r(2),g=function(){return Object(x.jsx)(u.a.Body,{className:"flex-container",children:Object(x.jsx)(O.a,{className:"spinner-size"})})},m=r(13),v=r(262),y=r(40),w=r(270),S=r(41),F=r(73),C=r(263),P=r(264),N=r(265),L=r(134),z=r(269),R=r(266),k=(r(212),r(213),function(){return Object(x.jsx)(u.a.Body,{className:"flex-container",children:Object(x.jsxs)("div",{className:"text-center",children:[Object(x.jsx)("div",{className:"error-size bottom-text",children:Object(x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",fill:"currentColor",class:"bi bi-exclamation-triangle error-anim",viewBox:"0 0 16 16",children:[Object(x.jsx)("path",{d:"M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"}),Object(x.jsx)("path",{d:"M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"})]})}),Object(x.jsx)("h3",{className:"text-margin",children:"Error Loading Component"})]})})});var H={option:function(e){return Object(m.a)(Object(m.a)({},e),{},{color:"black"})}};function A(e){var t=e.message;return Object(x.jsx)(v.a,{id:"character_tooltip",children:t})}function B(e){var t=e.column;t.filterValue,t.preFilteredRows,t.setFilter;return Object(x.jsx)(x.Fragment,{})}function E(e){var t=e.column,r=t.filterValue,n=t.preFilteredRows,a=t.setFilter,c=n.length;return Object(x.jsx)("input",{className:"form-control",value:r||"",onChange:function(e){a(e.target.value||void 0)},placeholder:"Search ".concat(c," records...")})}function M(e){var t=e.column,r=t.setFilter,n=t.filterValue,a=t.preFilteredRows,c=t.id,l=s.a.useMemo((function(){var e=new Set;return a?(a.forEach((function(t){null!==t.values[c]&&("object"===typeof t.values[c]?e.add(t.values[c].name):e.add(t.values[c]))})),Object(o.a)(e.values())):[]}),[c,a]);return Object(x.jsx)(F.a,{title:n,onChange:function(e){return r(e.value)},value:{label:n||"All"},defaultValue:{label:"All"},styles:H,options:[{id:-1,value:"",label:"All"}].concat(l.map((function(e,t){return{id:t,value:e,label:e}})))},n)}var T=function(){return{}};var D=function(e){var t=e.isLoading,r=e.isFetching,n=e.data,a=e.error,c=e.columns,l=e.asyncExpandFunction,i=e.getRowProps,o=void 0===i?T:i,u=s.a.useMemo((function(){return{Filter:B}}),[]),j=s.a.useMemo((function(){return{text:function(e,t,r){return e.filter((function(e){return t.some((function(t){if(r){var n=e.values[t];return"object"===typeof n&&(n=n.name),e.hasOwnProperty("originalSubRows")&&(n+=e.originalSubRows.reduce((function(e,r){return e+" "+(n=r,t.split(".").reduce((function(e,t){return e[t]}),n));var n}),"")),!!n&&n.toLowerCase().includes(r.toLowerCase())}return!0}))}))}}}),[]),d=Object(S.useTable)({columns:c,data:n,defaultColumn:u,filterTypes:j,initialState:{pageSize:20}},S.useFilters,S.useSortBy,S.useExpanded,S.usePagination),b=d.getTableProps,h=d.getTableBodyProps,p=d.headerGroups,f=d.page,g=d.prepareRow,v=d.canPreviousPage,F=d.canNextPage,H=d.pageOptions,E=d.pageCount,M=d.gotoPage,D=d.nextPage,V=d.previousPage,G=d.setPageSize,Q=d.visibleColumns,I=d.state,J=I.pageIndex,K=I.pageSize;return t?Object(x.jsx)("div",{className:"col-xs-12 text-center",children:Object(x.jsx)(O.a,{className:"spinner-size"})}):a?Object(x.jsx)(k,{}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(C.a,{striped:!0,children:[Object(x.jsxs)("thead",Object(m.a)(Object(m.a)({},b()),{},{children:[p.map((function(e){return Object(x.jsx)("tr",Object(m.a)(Object(m.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(x.jsxs)("th",Object(m.a)(Object(m.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(x.jsx)("span",{className:"pull-right",children:e.canSort?e.isSorted?e.isSortedDesc?Object(x.jsx)(P.a,{glyph:"sort-by-attributes-alt"}):Object(x.jsx)(P.a,{glyph:"sort-by-attributes"}):Object(x.jsx)(P.a,{glyph:"sort"}):""})]}))}))}))})),p.map((function(e){return Object(x.jsx)("tr",Object(m.a)(Object(m.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(x.jsx)("th",Object(m.a)(Object(m.a)({},e.getHeaderProps()),{},{children:Object(x.jsx)("div",{children:e.canFilter?e.render("Filter"):null})}))}))}))}))]})),Object(x.jsx)("tbody",Object(m.a)(Object(m.a)({},h()),{},{children:f.map((function(e,t){g(e);var r=o(e);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("tr",Object(m.a)(Object(m.a)({},e.getRowProps(r)),{},{children:e.cells.map((function(e){return Object(x.jsx)("td",Object(m.a)(Object(m.a)({style:{verticalAlign:"middle"}},e.getCellProps()),{},{children:e.render("Cell")}))}))})),e.isExpanded&&l({row:e,rowProps:r,visibleColumns:Q})]})}))}))]}),Object(x.jsx)("div",{className:"pagination pull-right",children:Object(x.jsxs)(N.a,{children:[Object(x.jsxs)(L.a,{children:[Object(x.jsx)(y.a,{bsStyle:"success",onClick:function(){return M(0)},disabled:!v,children:Object(x.jsx)(P.a,{glyph:"step-backward"})})," ",Object(x.jsx)(y.a,{bsStyle:"success",onClick:function(){return V()},disabled:!v,children:Object(x.jsx)(P.a,{glyph:"triangle-left"})})," ",Object(x.jsx)(y.a,{bsStyle:"success",onClick:function(){return D()},disabled:!F,children:Object(x.jsx)(P.a,{glyph:"triangle-right"})})," ",Object(x.jsx)(y.a,{bsStyle:"success",onClick:function(){return M(E-1)},disabled:!F,children:Object(x.jsx)(P.a,{glyph:"step-forward"})})]}),Object(x.jsxs)(L.a,{children:[Object(x.jsx)(y.a,{active:!0,bsStyle:"success",children:"Page Size:"})," ",Object(x.jsx)(z.a,{id:"pageSizeDropdown",bsStyle:"success",title:K,onSelect:function(e){G(Number(e))},children:[20,50,100,1e6].map((function(e){return Object(x.jsxs)(R.a,{id:e,eventKey:e,value:e,children:["Show ",e]},e)}))})]})]})}),Object(x.jsx)("div",{className:"pagination pull-left",children:Object(x.jsxs)(L.a,{children:[Object(x.jsx)(y.a,{active:!0,bsStyle:"info",children:Object(x.jsx)(x.Fragment,{children:H.length>0?Object(x.jsxs)(x.Fragment,{children:["Page"," ",Object(x.jsxs)("strong",{children:[J+1," of ",H.length]})]}):Object(x.jsxs)(x.Fragment,{children:["Page ",Object(x.jsx)("strong",{children:"- of -"})]})})})," ",r?Object(x.jsx)(w.a,{placement:"bottom",overlay:A({message:"Refreshing Data"}),children:Object(x.jsx)(y.a,{bsStyle:"info",children:Object(x.jsx)(P.a,{className:"glyphicon-refresh-animate",glyph:"refresh"})})}):Object(x.jsx)(w.a,{placement:"bottom",overlay:A({message:"Data Loaded: "+(new Date).toLocaleString()}),children:Object(x.jsx)(y.a,{bsStyle:"info",children:Object(x.jsx)(P.a,{glyph:"ok"})})})]})})]})},V=function(){var e=Object(i.useQuery)(["dashboard"],(function(){return function(){return f.apply(this,arguments)}()})),t=e.isLoading,r=e.error,n=e.data,a=e.isFetching,c=s.a.useMemo((function(){return[{Header:"Type",accessor:"type",Filter:M,filter:"includes"},{Header:"Structure",accessor:"name",Filter:E,filter:"text",Cell:function(e){return Object(x.jsx)("div",{style:{whiteSpace:"nowrap"},children:e.value})}},{Header:"Services",accessor:"services",Filter:function(e){var t=e.column,r=t.setFilter,n=t.filterValue,a=t.preFilteredRows,c=t.id,l=s.a.useMemo((function(){var e=new Set;return a?(a.forEach((function(t){null!==t.values[c]&&t.values[c].forEach((function(t){e.add(t)}))})),Object(o.a)(e.values())):[]}),[c,a]);return Object(x.jsx)(F.a,{title:n,onChange:function(e){return r(e.value)},value:{label:n||"All"},defaultValue:{label:"All"},styles:H,options:[{id:-1,value:"",label:"All"}].concat(l.map((function(e,t){return{id:t,value:e,label:e}})))},n)},filter:function(e,t,r){return e.filter((function(e){return t.some((function(t){if(r){var n=e.values[t].reduce((function(e,t){return e+"  "+t}),"");return!!n&&n.toLowerCase().includes(r.toLowerCase())}return!0}))}))},Cell:function(e){return e.value?Object(x.jsx)("div",{className:"text-center",children:e.value.map((function(e){return Object(x.jsx)("p",{className:"padded-label",children:e})}))}):Object(x.jsx)(x.Fragment,{})}},{Header:"Rigs",accessor:"rigs",Filter:E,filter:"text",Cell:function(e){return Object(x.jsx)("div",{children:e.value.map((function(e){return Object(x.jsx)("p",{children:e})}))})}}]}),[]);return t?Object(x.jsx)(g,{}):r?Object(x.jsx)("div",{}):Object(x.jsx)(u.a.Body,{children:Object(x.jsx)(D,{isLoading:t,data:n,columns:c,error:r,isFetching:a})})};r(254);n.a.addDefaultLocale(a);var G=new i.QueryClient,Q=function(){return Object(x.jsx)(i.QueryClientProvider,{client:G,children:Object(x.jsx)(V,{})})},I=document.getElementById("root");Object(l.render)(Object(x.jsx)(Q,{}),I)}},[[255,1,2]]]);
//# sourceMappingURL=main.c2e282b4.chunk.js.map