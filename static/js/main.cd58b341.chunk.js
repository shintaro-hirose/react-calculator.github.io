(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{30:function(e,t,a){e.exports=a(41)},35:function(e,t,a){},36:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),i=(a(35),a(36),a(10)),o=a(55),u=a(58);function m(e){var t=Object(o.a)((function(t){return{margin:{margin:t.spacing(1),backgroundColor:e.backgroundColor}}}))();return r.a.createElement("div",null,r.a.createElement(u.a,{color:"inherit",className:t.margin,onClick:e.onClick},e.children))}var b=a(57),E=Object(o.a)((function(e){return{box:{fontSize:"60px",width:"100%",margin:"0 auto"}}}));function f(e){var t=E();return r.a.createElement("div",null,r.a.createElement(b.a,{className:t.box},e.children))}var s=a(56);var d=function(){var e=Object(n.useState)("0"),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("0"),o=Object(i.a)(l,2),u=o[0],E=o[1],d=Object(n.useState)(!1),v=Object(i.a)(d,2),N=v[0],g=v[1],C=Object(n.useState)(!0),k=Object(i.a)(C,2),h=k[0],S=k[1],j=Object(n.useState)(!1),p=Object(i.a)(j,2),y=p[0],O=p[1],x=Object(n.useState)(!1),w=Object(i.a)(x,2),A=w[0],B=w[1],J=function(e){A?(c(e),E("0"),g(!1),B(!1),O(!1)):N?E(y?String(u)+String(e):String(10*Number(u)+e)):c(y?String(a)+String(e):String(10*Number(a)+e)),0!==e&&S(!1)},W=function(e){A?B(!1):"0"!==u&&("add"===N?c(Number(a)+Number(u)):"subtract"===N?c(Number(a)-Number(u)):"divide"===N?c(Number(a)/Number(u)):"multiply"===N&&c(Number(a)*Number(u))),O(!1),g(e),E("0")},z=A?a:N?u:a,D=h?"AC":"C";return r.a.createElement("div",null,r.a.createElement(s.a,{variant:"h5"},"React Calculator"),r.a.createElement(f,null,z),r.a.createElement(b.a,{display:"flex",flexDirection:"column"},r.a.createElement(b.a,{display:"flex",justifyContent:"center"},r.a.createElement(m,{backgroundColor:"gray",onClick:function(){O(!1),h?(c("0"),g(!1),B(!1)):(S(!0),A?c("0"):N?E("0"):c("0"))}},r.a.createElement(s.a,{variant:"h5"},D)),r.a.createElement(m,{backgroundColor:"gray",onClick:function(){A?c(-1*Number(a)):N?E(-1*Number(u)):c(-1*Number(a))}},r.a.createElement(s.a,{variant:"h5"},"-/+")),r.a.createElement(m,{backgroundColor:"gray",onClick:function(){A?c(.01*Number(a)):N?E(.01*Number(u)):c(.01*Number(a))}},r.a.createElement(s.a,{variant:"h5"},"%")),r.a.createElement(m,{backgroundColor:"orange"},r.a.createElement(s.a,{variant:"h5",onClick:function(){return W("divide")}},"\xf7"))),r.a.createElement(b.a,{display:"flex",justifyContent:"center"},r.a.createElement(m,{onClick:function(){return J(7)}},r.a.createElement(s.a,{variant:"h5"},"7")),r.a.createElement(m,{onClick:function(){return J(8)}},r.a.createElement(s.a,{variant:"h5"},"8")),r.a.createElement(m,{onClick:function(){return J(9)}},r.a.createElement(s.a,{variant:"h5"},"9")),r.a.createElement(m,{backgroundColor:"orange"},r.a.createElement(s.a,{variant:"h5",onClick:function(){return W("multiply")}},"\xd7"))),r.a.createElement(b.a,{display:"flex",justifyContent:"center"},r.a.createElement(m,{onClick:function(){return J(4)}},r.a.createElement(s.a,{variant:"h5"},"4")),r.a.createElement(m,{onClick:function(){return J(5)}},r.a.createElement(s.a,{variant:"h5"},"5")),r.a.createElement(m,{onClick:function(){return J(6)}},r.a.createElement(s.a,{variant:"h5"},"6")),r.a.createElement(m,{backgroundColor:"orange"},r.a.createElement(s.a,{variant:"h5",onClick:function(){return W("subtract")}},"-"))),r.a.createElement(b.a,{display:"flex",justifyContent:"center"},r.a.createElement(m,{onClick:function(){return J(1)}},r.a.createElement(s.a,{variant:"h5"},"1")),r.a.createElement(m,{onClick:function(){return J(2)}},r.a.createElement(s.a,{variant:"h5"},"2")),r.a.createElement(m,{onClick:function(){return J(3)}},r.a.createElement(s.a,{variant:"h5"},"3")),r.a.createElement(m,{backgroundColor:"orange"},r.a.createElement(s.a,{variant:"h5",onClick:function(){return W("add")}},"+"))),r.a.createElement(b.a,{display:"flex",justifyContent:"center"},r.a.createElement(m,{onClick:function(){return J(0)}},r.a.createElement(s.a,{variant:"h5"},"0")),r.a.createElement(m,{onClick:function(){N?E(y?String(u)+"00":String(100*Number(u))):c(y?String(a)+"00":String(100*Number(a)))}},r.a.createElement(s.a,{variant:"h5"},"00")),r.a.createElement(m,null,r.a.createElement(s.a,{variant:"h5",onClick:function(){y||(O(!0),N?E(String(u)+"."):c(String(a)+"."))}},".")),r.a.createElement(m,{backgroundColor:"orange"},r.a.createElement(s.a,{variant:"h5",onClick:function(){O(!1),B(!0),"add"===N?"0"===u?(E(a),c(Number(a)+Number(a))):c(Number(a)+Number(u)):"subtract"===N?"0"===u?(E(Number(a)),c(Number(a)-Number(a))):c(Number(a)-Number(u)):"divide"===N?"0"===u?(E(Number(a)),c(Number(a)/Number(a))):c(Number(a)/Number(u)):"multiply"===N&&("0"===u?(E(Number(a)),c(Number(a)*Number(a))):c(Number(a)*Number(u)))}},"=")))))};var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(d,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.cd58b341.chunk.js.map