(this["webpackJsonplaunch-pad"]=this["webpackJsonplaunch-pad"]||[]).push([[0],{49:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),s=n(53),i=n(54),u=n(5),l=n(50),j=n(51),b=n(52),p=n(4),h=n.n(p),d=n(1),f=function(){var t=Object(a.useState)(null),e=Object(u.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)([]),o=Object(u.a)(r,2),s=(o[0],o[1]),i=Object(l.a)();return Object(a.useEffect)((function(){i.locate(),i.on("locationfound",(function(t){c(t.latlng),i.flyTo(t.latlng,8);var e=t.accuracy;h.a.circle(t.latlng,e).addTo(i),s(t.bounds.toBBoxString().split(","))}))}),[i]),null===n?null:Object(d.jsx)(j.a,{position:n,children:Object(d.jsx)(b.a,{children:"You are here."})})},O=n(12),g=n.n(O),x=n(22),v=n(23),m=n.n(v),S=n.p+"static/media/satellite.1d4364f6.png",y=h.a.icon({iconUrl:S,iconSize:[38,38],iconAnchor:[22,94],popupAnchor:[-3,-76]}),w=function(){var t=Object(a.useState)(),e=Object(u.a)(t,2),n=e[0],c=e[1];return Object(a.useEffect)((function(){var t=function(){var t=Object(x.a)(g.a.mark((function t(){var e;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"http://3.143.45.11:3000/satellites/above-me/",t.next=3,m()("".concat("http://3.143.45.11:3000/satellites/above-me/","30.626945/-96.334334"));case 3:return e=t.sent,t.abrupt("return",c(e.data));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t(),setInterval(t,5e3)}),[]),n?n.above.map((function(t){return Object(d.jsx)(j.a,{position:[t.satlat,t.satlng],icon:y,children:Object(d.jsx)(b.a,{children:Object(d.jsxs)("p",{class:"landpad-details",children:["Sat Name:",Object(d.jsx)("strong",{children:t.satname}),Object(d.jsx)("br",{})]})})},t.satid)})):"Map is loading..."},z=function(){return Object(d.jsxs)(s.a,{center:[0,0],zoom:5,style:{height:"100vh",width:"100vw"},children:[Object(d.jsx)(i.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(d.jsx)(w,{}),Object(d.jsx)(f,{})]})};var B=function(){return Object(d.jsx)(z,{center:[0,0],zoom:4})},F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(B,{})}),document.getElementById("root")),F()}},[[49,1,2]]]);
//# sourceMappingURL=main.349f460a.chunk.js.map