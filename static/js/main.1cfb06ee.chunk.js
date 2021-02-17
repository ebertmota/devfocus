(this.webpackJsonpdevfocus=this.webpackJsonpdevfocus||[]).push([[0],{38:function(n,t,e){"use strict";e.r(t);var r=e(1),i=e(0),o=e.n(i),c=e(21),a=e.n(c),u=e(16),s=e(4),d=e(5);function b(){var n=Object(s.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    outline: 0;\n  }\n\n  body {\n    color: #FFF;\n    -webkit-font-smoothing: antialised;\n  }\n\n  body, input, button {\n    font-family: 'Roboto', sans-serif;\n    font-size: 16px;\n  }\n\n  h1, h2, h3, h4, h5, h6, strong {\n    font-weight: 500;\n  }\n\n  button {\n    cursor: pointer;\n  }\n\n  ul, li {\n    list-style: none;\n  }\n\n  a {\n    text-decoration: none;\n  }\n"]);return b=function(){return n},n}var f=Object(d.a)(b()),h=e(2),l=e(17),p=e.n(l),j=e(25),x=e(10);function m(){var n=Object(s.a)(["\n  display: flex;\n  width: 100%;\n  max-width: 1280px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n"]);return m=function(){return n},n}function g(){var n=Object(s.a)(["\n  display: flex;\n  height: 72px;\n  width: 100%;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  background: #202024;\n\n  h1 {\n    strong {\n      margin: 0 8px;\n    }\n    span {\n      font-weight: lighter;\n      color: #05f4b7;\n    }\n  }\n"]);return g=function(){return n},n}var O=d.b.header(g()),v=d.b.div(m()),w=function(){return Object(r.jsx)(O,{children:Object(r.jsx)(v,{children:Object(r.jsxs)("h1",{children:[Object(r.jsx)("span",{children:"<"}),Object(r.jsx)("strong",{children:"focus"}),Object(r.jsx)("span",{children:" />"})]})})})},y=e.p+"static/media/dev-ilustration.544f3d09.svg";function k(){var n=Object(s.a)(["\n  width: 100%;\n  max-width: 50%;\n  color: #202024;\n\n  h1 {\n    margin-bottom: 20px;\n  }\n\n  h2 {\n    margin: 40px 0 20px 0;\n    color: #6a6a71;\n  }\n\n  p {\n    color: #6a6a71;\n    text-align: justify;\n    font-size: 16px;\n    margin-bottom: 40px;\n  }\n\n  > button {\n    width: 100%;\n    max-width: 200px;\n    padding: 15px;\n    font-size: 16px;\n    border: 0;\n    border-radius: 10px;\n    background: #05f4b7;\n    color: #fff;\n    font-weight: 700;\n\n    &:hover {\n      background: #06ce9c;\n    }\n  }\n"]);return k=function(){return n},n}function S(){var n=Object(s.a)(["\n  width: 100%;\n  display: flex;\n  min-height: 600px;\n  flex-direction: column;\n  margin-top: 72px;\n  max-width: 1280px;\n  padding: 0 40px;\n  background-image: url(",");\n  background-size: 50%;\n  background-repeat: no-repeat;\n  background-position: bottom right;\n"]);return S=function(){return n},n}function E(){var n=Object(s.a)(["\n  border: 0;\n  box-shadow: 0;\n  padding: 8px 15px;\n  color: #fff;\n  transition: background 0.2s;\n  & + button {\n    margin: 0 5px;\n  }\n  font-weight: ",";\n  border-radius: 4px;\n  background: ",";\n"]);return E=function(){return n},n}function T(){var n=Object(s.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  padding: 40px;\n"]);return T=function(){return n},n}function z(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 100px;\n  max-width: 480px;\n  max-height: 360px;\n  width: 100%;\n  background: rgba(108, 108, 112, 0.3);\n  border-radius: 10px;\n\n  span {\n    font-size: 120px;\n  }\n\n  > button {\n    width: 200px;\n    margin-top: 25px;\n    padding: 15px;\n    width: 200px;\n    border-radius: 8px;\n    font-weight: bold;\n  }\n"]);return z=function(){return n},n}function I(){var n=Object(s.a)(["\n  width: 100%;\n  min-height: 100vh;\n  background: #202024;\n  display: flex;\n  justify-content: center;\n"]);return I=function(){return n},n}function P(){var n=Object(s.a)(["\n  display: flex;\n  height: 100%;\n  min-height: 100vh;\n  flex-direction: column;\n  align-items: center;\n"]);return P=function(){return n},n}var C=d.b.div(P()),q=d.b.div(I()),F=d.b.div(z()),N=d.b.div(T()),B=d.b.button(E(),(function(n){return n.selected?"700":"500"}),(function(n){return n.selected?"rgba(0, 0, 0, 0.15)":"none"})),R=d.b.div(S(),y),A=d.b.div(k()),J=[{name:"Pomodoro",minutes:25},{name:"Short Break",minutes:5},{name:"Long Break",minutes:15}],M=function(){var n=Object(i.useState)(25),t=Object(x.a)(n,2),e=t[0],o=t[1],c=Object(i.useState)(0),a=Object(x.a)(c,2),u=a[0],s=a[1],d=Object(i.useState)(!1),b=Object(x.a)(d,2),f=b[0],h=b[1],l=Object(i.useState)(!1),m=Object(x.a)(l,2),g=m[0],O=m[1],v=Object(i.useState)(0),y=Object(x.a)(v,2),k=y[0],S=y[1];Object(i.useEffect)((function(){function n(){return(n=Object(j.a)(p.a.mark((function n(){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:Notification||alert("Esse browser n\xe3o suporta notifica\xe7\xf5es desktop"),"granted"!==Notification.permission&&Notification.requestPermission();case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),Object(i.useEffect)((function(){if(g){if(!u&&!e){O(!1);new Notification("Time to take a break!",{icon:"https://i.pinimg.com/originals/00/cc/b6/00ccb6f59d1215f5666ad229af120e9f.png",body:"get some coffe..."});o(25)}if(!u){if(!e)return;var n=setInterval((function(){s(59),o(e-1)}),1e3);return function(){return clearInterval(n)}}var t=setInterval((function(){s(u-1)}),1e3);return function(){return clearInterval(t)}}}),[u,g,e]);return Object(i.useEffect)((function(){var n=J.find((function(n,t){return t===k}));n&&o(n.minutes)}),[k]),Object(r.jsxs)(C,{children:[Object(r.jsx)(w,{}),Object(r.jsx)(q,{children:Object(r.jsxs)(F,{children:[Object(r.jsx)(N,{children:J.map((function(n,t){return Object(r.jsx)(B,{selected:t===k,onClick:function(){return S(t)},children:n.name})}))}),Object(r.jsxs)("span",{children:[String(e).padStart(2,"0"),":",String(u).padStart(2,"0")]}),Object(r.jsxs)("button",{type:"button",onClick:function(){!1===f&&(o((function(n){return n-1})),s(59),h(!0)),O((function(n){return!n}))},children:[!g&&25===e&&"START",g&&"PAUSE",!1===g&&e<25&&"RESUME"]})]})}),Object(r.jsx)(R,{children:Object(r.jsxs)(A,{children:[Object(r.jsx)("h1",{children:"Online Pomodoro Timer to boost your productivity"}),Object(r.jsx)("h2",{children:"What is Pomodoro Technique?"}),Object(r.jsx)("p",{children:"The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for tomato, after the tomato-shaped kitchen timer that Cirillo used as a university student."}),Object(r.jsx)("button",{type:"button",children:"Check it out"})]})})]})},U=function(){return Object(r.jsx)(h.c,{children:Object(r.jsx)(h.a,{path:"/",exact:!0,component:M})})},L=function(){return Object(r.jsxs)(u.a,{basename:"/devfocus",children:[Object(r.jsx)(U,{}),Object(r.jsx)(f,{})]})};a.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(L,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.1cfb06ee.chunk.js.map