(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[17],{1102:function(e,t,n){"use strict";n.r(t);n(0);var i,r,c,s,o,a,b,l=n(241),j=n(32),d=n(111),x=n(26),u=n(250),p=n(128),O=n(134),m=n(80),h=n(44),f=n(3),g=n(837),v=n(855),w=n(7),y=f.e.div(i||(i=Object(h.a)(["\n  padding-top: 16px;\n\n  "," {\n    padding-top: 24px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),S=f.e.img(r||(r=Object(h.a)(["\n  border-radius: 50%;\n  height: 64px;\n  margin-top: -12px;\n  width: 64px;\n  border: solid 2px white;\n\n  "," {\n    height: 128px;\n    margin-top: -24px;\n    width: 128px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),k=f.e.div(c||(c=Object(h.a)(["\n  margin-bottom: 8px;\n  text-align: center;\n"]))),D=Object(f.e)(x.u)(s||(s=Object(h.a)(["\n  overflow: visible;\n"]))),C=Object(f.e)(x.x)(o||(o=Object(h.a)(["\n  position: relative;\n  background: url(",");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  border-radius: 32px 32px 0 0;\n  padding-top: 0;\n  text-align: center;\n"])),(function(e){return e.bg})),z=Object(f.e)(x.S).attrs({as:"h2"})(a||(a=Object(h.a)(["\n  font-size: 24px;\n\n  "," {\n    font-size: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),I=f.e.div(b||(b=Object(h.a)(["\n  display: grid;\n  grid-gap: 16px;\n  grid-template-columns: 1fr;\n  margin-bottom: 16px;\n\n  "," {\n    grid-gap: 32px;\n    grid-template-columns: repeat(2, 1fr);\n    margin-bottom: 32px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),T=function(e){var t=e.team,n=Object(O.b)().t;return Object(w.jsx)(y,{children:Object(w.jsxs)(D,{children:[Object(w.jsxs)(C,{bg:"/images/teams/".concat(t.background),children:[Object(w.jsx)(k,{children:Object(w.jsx)(S,{src:"/images/teams/".concat(t.images.md),alt:"team avatar"})}),Object(w.jsx)(z,{color:t.textColor,children:t.name}),Object(w.jsx)(x.Ob,{as:"p",color:t.textColor,children:t.description})]}),Object(w.jsxs)(x.v,{children:[Object(w.jsxs)(I,{children:[Object(w.jsx)(v.a,{icon:x.L,title:t.users,subtitle:n("Active Members")}),Object(w.jsx)(v.a,{icon:x.zb,title:n("Coming Soon"),subtitle:n("Team Points"),isDisabled:!0})]}),Object(w.jsx)(x.S,{as:"h3",children:n("Team Achievements")}),Object(w.jsx)(g.a,{})]})]})})},R=n(854);t.default=function(){var e=Object(j.h)().id,t=Number(e),n=Object(O.b)().t,i=-1!==p.a.findIndex((function(e){return e.id===t})),r=Object(m.E)(t);return i?r?Object(w.jsxs)(l.a,{children:[Object(w.jsx)(R.a,{}),Object(w.jsx)(x.R,{mb:"24px",children:Object(w.jsx)(d.a,{to:"/teams",children:Object(w.jsxs)(x.R,{alignItems:"center",children:[Object(w.jsx)(x.G,{color:"primary"}),Object(w.jsx)(x.Ob,{color:"primary",children:n("Teams Overview")})]})})}),Object(w.jsx)(T,{team:r})]}):Object(w.jsx)(u.a,{}):Object(w.jsx)(j.a,{to:"/404"})}},813:function(e,t,n){"use strict";var i,r=n(44),c=n(3).e.div(i||(i=Object(r.a)(["\n  border-bottom: 2px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])),(function(e){return e.theme.colors.textSubtle}));t.a=c},837:function(e,t,n){"use strict";n(0);var i=n(26),r=n(134),c=n(7);t.a=function(e){var t=e.children,n=Object(r.b)().t;return Object(c.jsxs)(i.R,{flexDirection:"column",alignItems:"center",justifyContent:"center",p:"24px",children:[Object(c.jsx)(i.p,{width:"72px",height:"72px"}),Object(c.jsx)(i.S,{as:"h5",scale:"md",color:"textDisabled",children:t||n("Coming Soon!")})]})}},854:function(e,t,n){"use strict";n(0);var i=n(26),r=n(80),c=n(134),s=n(813),o=n(111),a=n(7),b=function(){var e=Object(c.b)().t;return Object(a.jsx)(i.u,{mb:"32px",isActive:!0,children:Object(a.jsx)(i.v,{children:Object(a.jsxs)(i.R,{alignItems:["start",null,"center"],justifyContent:["start",null,"space-between"],flexDirection:["column",null,"row"],children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(i.S,{scale:"lg",mb:"8px",children:e("You haven't set up your profile yet!")}),Object(a.jsx)(i.Ob,{children:e("You can do this at any time by clicking on your profile picture in the menu")})]}),Object(a.jsx)(i.q,{as:o.a,to:"/profile",mt:["16px",null,0],children:e("Set up now")})]})})})};t.a=function(){var e=Object(c.b)().t,t=Object(r.D)(),n=t.isInitialized,o=t.profile,l=n&&!o;return Object(a.jsxs)(a.Fragment,{children:[l&&Object(a.jsx)(b,{}),Object(a.jsxs)(s.a,{children:[Object(a.jsx)(i.S,{as:"h1",scale:"xxl",color:"secondary",children:e("Teams & Profiles")}),Object(a.jsx)(i.Ob,{bold:!0,children:e("Show off your stats and collectibles with your unique profile. Team features will be revealed soon!")})]})]})}},855:function(e,t,n){"use strict";var i,r=n(4),c=n(135),s=(n(0),n(26)),o=n(44),a=n(3),b=Object(a.e)(s.Ob)(i||(i=Object(o.a)(["\n  border: 2px solid ",";\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.tertiary}));b.defaultProps={p:"24px"};var l=b,j=n(7);t.a=function(e){var t=e.icon,n=e.title,i=e.subtitle,o=e.isDisabled,a=void 0!==o&&o,b=Object(c.a)(e,["icon","title","subtitle","isDisabled"]);return Object(j.jsx)(l,Object(r.a)(Object(r.a)({},b),{},{children:Object(j.jsxs)(s.R,{alignItems:"start",children:[Object(j.jsx)(t,{width:"44px",mr:"24px",color:a?"textDisabled":"currentColor"}),Object(j.jsxs)("div",{children:[Object(j.jsx)(s.S,{as:"h3",scale:"xl",color:a?"textDisabled":"text",children:n}),Object(j.jsx)(s.Ob,{textTransform:"uppercase",color:a?"textDisabled":"textSubtle",fontSize:"12px",bold:!0,children:i})]})]})}))}}}]);
//# sourceMappingURL=17.f551b7b2.chunk.js.map