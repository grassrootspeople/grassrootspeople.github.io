(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[15],{1100:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return $}));var r,a,c,u,s,i,o,f,b=e(44),p=e(0),d=e(3),j=e(26),h=e(134),O=e(241),l=e(2),m=e.n(l),v=e(5),x=e(34),g=e(60),w=e(818),k=e(4),H=e(17),y=e.n(H),S=e(41),C=e(16),R=e(78),B=e(183),L=e(138),U=function(){var t=Object(p.useState)([]),n=Object(x.a)(t,2),e=n[0],r=n[1],a=Object(g.c)().account,c=Object(L.a)().fastRefresh;return Object(p.useEffect)((function(){a&&function(){var t=Object(v.a)(m.a.mark((function t(){var n,e,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=B.a.map((function(t){return{address:Object(C.k)(),name:"pendingCake",params:[t.pid,a]}})),t.next=3,Object(S.a)(R,n);case 3:e=t.sent,c=B.a.map((function(t,n){return Object(k.a)(Object(k.a)({},t),{},{balance:new y.a(e[n])})})),r(c);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[a,c]),e},E=e(787),N=function(){var t=Object(p.useState)([]),n=Object(x.a)(t,2),e=n[0],r=n[1],a=Object(g.c)().account,c=Object(L.a)().fastRefresh;return Object(p.useEffect)((function(){a&&function(){var t=Object(v.a)(m.a.mark((function t(){var n,e;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=B.a.map((function(t){return{address:Object(C.k)(),name:"pendingCake",params:[t.pid,a]}})),t.next=3,Object(S.a)(R,n);case 3:e=t.sent,r(e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[a,c]),e},W=e(80),q=e(238),D=e(826),M=e(819),P=e(7),Q=d.e.div(r||(r=Object(b.a)(["\n  margin-bottom: 24px;\n"]))),z=function(){var t=Object(h.b)().t,n=Object(g.c)().account,e=N().reduce((function(t,n){var e=new y.a(n);return e.eq(0)?t:t+e.div(q.e).toNumber()}),0),r=Object(W.C)(),a=new y.a(e).multipliedBy(r).toNumber();return n?Object(P.jsxs)(Q,{children:[Object(P.jsx)(D.a,{value:e,lineHeight:"1.5"}),!r.eq(0)&&Object(P.jsx)(M.a,{value:a})]}):Object(P.jsx)(j.Ob,{color:"textDisabled",style:{lineHeight:"76px"},children:t("Locked")})},F=e(793),G=e(236),J=function(){var t=Object(h.b)().t,n=Object(F.a)("0x843d4a358471547f51534e3e51fae91cb4dc3f28"),e=Object(W.C)(),r=new H.BigNumber(Object(G.c)(n)).multipliedBy(e).toNumber();return Object(g.c)().account?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(D.a,{value:Object(G.c)(n),decimals:4,fontSize:"24px",lineHeight:"36px"}),e.eq(0)?Object(P.jsx)("br",{}):Object(P.jsx)(M.a,{value:r})]}):Object(P.jsx)(j.Ob,{color:"textDisabled",style:{lineHeight:"54px"},children:t("Locked")})},A=Object(d.e)(j.u)(a||(a=Object(b.a)(["\n  background-image: url('');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),T=d.e.div(c||(c=Object(b.a)(["\n  margin-bottom: 16px;\n"]))),I=d.e.img(u||(u=Object(b.a)(["\n  margin-bottom: 16px;\n"]))),K=d.e.div(s||(s=Object(b.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(t){return t.theme.colors.textSubtle})),V=d.e.div(i||(i=Object(b.a)(["\n  margin-top: 24px;\n"]))),X=function(){var t=Object(p.useState)(!1),n=Object(x.a)(t,2),e=n[0],r=n[1],a=Object(g.c)().account,c=Object(h.b)().t,u=U().filter((function(t){return t.balance.toNumber()>0})),s=Object(w.a)(u.map((function(t){return t.pid}))).onReward,i=Object(p.useCallback)(Object(v.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(!0),t.prev=1,t.next=4,s();case 4:t.next=8;break;case 6:t.prev=6,t.t0=t.catch(1);case 8:return t.prev=8,r(!1),t.finish(8);case 11:case"end":return t.stop()}}),t,null,[[1,6,8,11]])}))),[s]);return Object(P.jsx)(A,{children:Object(P.jsxs)(j.v,{children:[Object(P.jsx)(j.S,{scale:"xl",mb:"24px",children:c("Farms & Staking")}),Object(P.jsx)(I,{src:"/images/GRP.jpg",alt:"cake logo",width:64,height:64}),Object(P.jsxs)(T,{children:[Object(P.jsxs)(K,{children:[c("LOWB to Harvest"),":"]}),Object(P.jsx)(z,{})]}),Object(P.jsxs)(T,{children:[Object(P.jsxs)(K,{children:[c("LOWB in Wallet"),":"]}),Object(P.jsx)(J,{})]}),Object(P.jsx)(V,{children:a?Object(P.jsx)(j.q,{id:"harvest-all",disabled:u.length<=0||e,onClick:i,width:"100%",children:e?c("Collecting LOWB"):c("Harvest all (%count%)",{count:u.length})}):Object(P.jsx)(E.a,{width:"100%"})})]})})},Y=d.e.div(o||(o=Object(b.a)(["\n  align-items: center;\n  background-image: url('');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    background-image: url(''), url('');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])),(function(t){return t.theme.mediaQueries.lg})),Z=Object(d.e)(j.i)(f||(f=Object(b.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 12;\n    }\n  }\n"])),(function(t){return t.theme.mediaQueries.sm}),(function(t){return t.theme.mediaQueries.lg})),$=function(){var t=Object(h.b)().t;return Object(P.jsxs)(O.a,{children:[Object(P.jsxs)(Y,{children:[Object(P.jsx)(j.S,{as:"h1",scale:"xl",mb:"24px",color:"secondary",children:t("GRPSwap")}),Object(P.jsx)(j.Ob,{children:t("The #1 AMM and yield farm on Binance Smart Chain.")})]}),Object(P.jsx)("div",{children:Object(P.jsx)(Z,{children:Object(P.jsx)(X,{})})})]})}},790:function(t,n,e){"use strict";var r=e(34),a=e(0),c=e(791);n.a=function(){var t=Object(a.useState)(Date.now()),n=Object(r.a)(t,2),e=n[0],u=n[1];return{lastUpdated:e,previousLastUpdated:Object(c.a)(e),setLastUpdated:Object(a.useCallback)((function(){u(Date.now())}),[u])}}},791:function(t,n,e){"use strict";var r=e(0);n.a=function(t){var n=Object(r.useRef)();return Object(r.useEffect)((function(){n.current=t})),n.current}},793:function(t,n,e){"use strict";e.d(n,"b",(function(){return O}));var r=e(2),a=e.n(r),c=e(5),u=e(34),s=e(0),i=e(17),o=e.n(i),f=e(60),b=e(48),p=e(28),d=e(784),j=e(138),h=e(790),O=function(){var t=Object(s.useState)(p.b),n=Object(u.a)(t,2),e=n[0],r=n[1],i=Object(f.c)().account,b=Object(h.a)(),j=b.lastUpdated,O=b.setLastUpdated,l=Object(d.a)();return Object(s.useEffect)((function(){i&&function(){var t=Object(c.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.eth.getBalance(i);case 2:n=t.sent,r(new o.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[i,l,j,r]),{balance:e,refresh:O}};n.a=function(t){var n=Object(s.useState)(p.b),e=Object(u.a)(n,2),r=e[0],i=e[1],h=Object(f.c)().account,O=Object(d.a)(),l=Object(j.a)().fastRefresh;return Object(s.useEffect)((function(){h&&function(){var n=Object(c.a)(a.a.mark((function n(){var e,r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=Object(b.a)(t,O),n.next=3,e.methods.balanceOf(h).call();case 3:r=n.sent,i(new o.a(r));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[h,t,O,l]),r}},803:function(t,n,e){"use strict";e.d(n,"a",(function(){return b})),e.d(n,"i",(function(){return p})),e.d(n,"d",(function(){return d})),e.d(n,"e",(function(){return j})),e.d(n,"j",(function(){return h})),e.d(n,"f",(function(){return O})),e.d(n,"c",(function(){return l})),e.d(n,"b",(function(){return m})),e.d(n,"g",(function(){return v})),e.d(n,"h",(function(){return x}));var r=e(2),a=e.n(r),c=e(5),u=e(17),s=e.n(u),i=e(238),o=e(823),f=e(28),b=function(){var t=Object(c.a)(a.a.mark((function t(n,e,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n.methods.approve(e.options.address,o.a.constants.MaxUint256).send({from:r}));case 1:case"end":return t.stop()}}),t)})));return function(n,e,r){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(a.a.mark((function t(n,e,r,c){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==e){t.next=2;break}return t.abrupt("return",n.methods.enterStaking(new s.a(r).times(i.e).toString()).send({from:c,gas:2e5}).on("transactionHash",(function(t){return t.transactionHash})));case 2:return t.abrupt("return",n.methods.deposit(e,new s.a(r).times(i.e).toString()).send({from:c,gas:2e5}).on("transactionHash",(function(t){return t.transactionHash})));case 3:case"end":return t.stop()}}),t)})));return function(n,e,r,a){return t.apply(this,arguments)}}(),d=function(){var t=Object(c.a)(a.a.mark((function t(n,e){var r,c,u=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>2&&void 0!==u[2]?u[2]:18,c=u.length>3?u[3]:void 0,t.abrupt("return",n.methods.deposit(new s.a(e).times(f.a.pow(r)).toString()).send({from:c,gas:2e5}).on("transactionHash",(function(t){return t.transactionHash})));case 3:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),j=function(){var t=Object(c.a)(a.a.mark((function t(n,e,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n.methods.deposit().send({from:r,gas:2e5,value:new s.a(e).times(i.e).toString()}).on("transactionHash",(function(t){return t.transactionHash})));case 1:case"end":return t.stop()}}),t)})));return function(n,e,r){return t.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(a.a.mark((function t(n,e,r,c){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==e){t.next=2;break}return t.abrupt("return",n.methods.leaveStaking(new s.a(r).times(i.e).toString()).send({from:c,gas:2e5}).on("transactionHash",(function(t){return t.transactionHash})));case 2:return t.abrupt("return",n.methods.withdraw(e,new s.a(r).times(i.e).toString()).send({from:c,gas:2e5}).on("transactionHash",(function(t){return t.transactionHash})));case 3:case"end":return t.stop()}}),t)})));return function(n,e,r,a){return t.apply(this,arguments)}}(),O=function(){var t=Object(c.a)(a.a.mark((function t(n,e,r,c){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n.methods.withdraw(new s.a(e).times(f.a.pow(r)).toString()).send({from:c,gas:2e5}).on("transactionHash",(function(t){return t.transactionHash})));case 1:case"end":return t.stop()}}),t)})));return function(n,e,r,a){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(a.a.mark((function t(n,e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n.methods.emergencyWithdraw().send({from:e}).on("transactionHash",(function(t){return t.transactionHash})));case 1:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),m=function(){var t=Object(c.a)(a.a.mark((function t(n,e,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==e){t.next=2;break}return t.abrupt("return",n.methods.leaveStaking("0").send({from:r,gas:2e5}).on("transactionHash",(function(t){return t.transactionHash})));case 2:return t.abrupt("return",n.methods.deposit(e,"0").send({from:r,gas:2e5}).on("transactionHash",(function(t){return t.transactionHash})));case 3:case"end":return t.stop()}}),t)})));return function(n,e,r){return t.apply(this,arguments)}}(),v=function(){var t=Object(c.a)(a.a.mark((function t(n,e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n.methods.deposit("0").send({from:e,gas:2e5}).on("transactionHash",(function(t){return t.transactionHash})));case 1:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),x=function(){var t=Object(c.a)(a.a.mark((function t(n,e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n.methods.deposit().send({from:e,gas:2e5,value:f.b}).on("transactionHash",(function(t){return t.transactionHash})));case 1:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()},818:function(t,n,e){"use strict";e.d(n,"b",(function(){return d})),e.d(n,"a",(function(){return j}));var r=e(37),a=e(2),c=e.n(a),u=e(5),s=e(0),i=e(60),o=e(51),f=e(115),b=e(803),p=e(782),d=function(t){var n=Object(o.b)(),e=Object(i.c)().account,r=Object(p.m)();return{onReward:Object(s.useCallback)(Object(u.a)(c.a.mark((function a(){var u;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(b.b)(r,t,e);case 2:return u=a.sent,n(Object(f.a)(e)),a.abrupt("return",u);case 5:case"end":return a.stop()}}),a)}))),[e,n,t,r])}},j=function(t){var n=Object(i.c)().account,e=Object(p.m)();return{onReward:Object(s.useCallback)(Object(u.a)(c.a.mark((function a(){var u;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return u=t.reduce((function(t,a){return[].concat(Object(r.a)(t),[Object(b.b)(e,a,n)])}),[]),a.abrupt("return",Promise.all(u));case 2:case"end":return a.stop()}}),a)}))),[n,t,e])}}}}]);
//# sourceMappingURL=15.8084d26d.chunk.js.map