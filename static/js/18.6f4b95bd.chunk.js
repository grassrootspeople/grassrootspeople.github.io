(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[18],{1095:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return dn}));var r,c,a,i,s,o,u,l,b,j,d,p=n(2),x=n.n(p),O=n(5),h=n(34),f=n(0),m=n.n(f).a.createContext({mostRecentLotteryNumber:0,historyError:!1,historyData:[]}),g=n(17),v=n.n(g),y=n(772),w=n(66),k=n(356),S=n(346),C=n(345),L=(n(238),n(16)),D=n(28),z=function(){var e=Object(O.a)(x.a.mark((function e(t,n){var r,c,a,i,s,o,u,l,b;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Object(w.b)(),c=new r.eth.Contract(k,Object(L.l)()),a=new y.b(t),i=[],!(n.length>100)){e.next=13;break}s=0,o=x.a.mark((function e(){var t,r,o,u;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.slice(100*s,100*(s+1)),r=t.map((function(e){return[e[0].toLowerCase(),a.encodeFunctionData(e[1],e[2])]})),e.next=4,c.methods.aggregate(r).call();case 4:o=e.sent,u=o.returnData,s++,i=i.concat(u.map((function(e,n){return a.decodeFunctionResult(t[n][1],e)})));case 8:case"end":return e.stop()}}),e)}));case 7:if(!(s<n.length/100)){e.next=11;break}return e.delegateYield(o(),"t0",9);case 9:e.next=7;break;case 11:e.next=19;break;case 13:return u=n.map((function(e){return[e[0].toLowerCase(),a.encodeFunctionData(e[1],e[2])]})),e.next=16,c.methods.aggregate(u).call();case 16:l=e.sent,b=l.returnData,i=b.map((function(e,t){return a.decodeFunctionResult(n[t][1],e)}));case 19:return e.abrupt("return",i);case 20:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),I=function(){var e=Object(O.a)(x.a.mark((function e(t,n,r,c){var a,i,s,o,u,l,b,j,d,p;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=c,e.t0){e.next=5;break}return e.next=4,t.methods.issueIndex().call();case 4:e.t0=e.sent;case 5:return a=e.t0,e.next=8,T(n,r);case 8:return i=e.sent,s=Array.apply(null,{length:i}).map((function(e,t){return[n.options.address,"tokenOfOwnerByIndex",[r,t]]})),e.next=12,z(S,s);case 12:return o=e.sent,u=o.map((function(e){return e.toString()})),l=u.map((function(e){return[n.options.address,"getLotteryIssueIndex",[e]]})),e.next=17,z(S,l);case 17:return b=e.sent,j=[],b.forEach(function(){var e=Object(O.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:new v.a(t).eq(a)&&j.push(u[n]);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),d=j.map((function(e){return[n.options.address,"getLotteryNumbers",[e]]})),e.next=23,z(S,d);case 23:return p=e.sent,e.next=26,E(t);case 26:return e.abrupt("return",p);case 27:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),T=function(){var e=Object(O.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.balanceOf(n).call());case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),F=function(){var e=Object(O.a)(x.a.mark((function e(t,n,r){var c,a,i,s,o,u,l,b,j,d;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.methods.issueIndex().call();case 2:return e.next=4,T(n,r);case 4:return c=e.sent,a=Array.apply(null,{length:c}).map((function(e,t){return[n.options.address,"tokenOfOwnerByIndex",[r,t]]})),e.next=8,z(S,a);case 8:return i=e.sent,s=i.map((function(e){return e.toString()})),o=s.map((function(e){return[n.options.address,"getClaimStatus",[e]]})),e.next=13,z(S,o);case 13:return u=e.sent,l=s.filter((function(e,t){return!u[t][0]})),b=l.map((function(e){return[t.options.address,"getRewardView",[e]]})),e.next=18,z(C,b);case 18:return j=e.sent,d=[],j.forEach((function(e,t){e>0&&d.push(l[t])})),d.length>200&&(d=d.slice(0,200)),e.prev=22,e.abrupt("return",t.methods.multiClaim(d).send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 26:return e.prev=26,e.t0=e.catch(22),e.abrupt("return",console.error(e.t0));case 29:case"end":return e.stop()}}),e,null,[[22,26]])})));return function(t,n,r){return e.apply(this,arguments)}}(),A=function(){var e=Object(O.a)(x.a.mark((function e(t,n,r){var c,a,i,s,o,u,l,b,j,d,p,h,f,m;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.methods.issueIndex().call();case 3:return c=e.sent,e.next=6,T(n,r);case 6:return a=e.sent,i=Array.apply(null,{length:a}).map((function(e,t){return[n.options.address,"tokenOfOwnerByIndex",[r,t]]})),e.next=10,z(S,i);case 10:return s=e.sent,o=s.map((function(e){return e.toString()})),u=o.map((function(e){return[n.options.address,"getLotteryIssueIndex",[e]]})),e.next=15,z(S,u);case 15:return l=e.sent,b=o.map((function(e){return[n.options.address,"getClaimStatus",[e]]})),e.next=19,z(S,b);case 19:return j=e.sent,e.next=22,E(t);case 22:return d=e.sent,p=[],l.forEach(function(){var e=Object(O.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(d||t.toString()!==c)&&(j[n][0]||p.push(o[n]));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),h=p.map((function(e){return[t.options.address,"getRewardView",[e]]})),e.next=28,z(C,h);case 28:return f=e.sent,m=f.reduce((function(e,t){return v.a.sum(e,t)}),D.b),e.abrupt("return",m);case 33:e.prev=33,e.t0=e.catch(0),console.error(e.t0);case 36:return e.abrupt("return",D.b);case 37:case"end":return e.stop()}}),e,null,[[0,33]])})));return function(t,n,r){return e.apply(this,arguments)}}(),N=function(){var e=Object(O.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.methods.issueIndex().call();case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(O.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.drawed().call());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(O.a)(x.a.mark((function e(t){var n,r,c,a,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.methods.issueIndex().call();case 2:return n=e.sent,r=[],e.next=6,t.methods.drawed().call();case 6:if((c=e.sent)||0!==parseInt(n,10)){e.next=9;break}return e.abrupt("return",[0,0,0,0]);case 9:if(c){e.next=22;break}a=0;case 11:if(!(a<4)){e.next=20;break}return e.t0=r,e.next=15,t.methods.historyNumbers(n-1,a).call();case 15:e.t1=+e.sent.toString(),e.t0.push.call(e.t0,e.t1);case 17:a++,e.next=11;break;case 20:e.next=32;break;case 22:i=0;case 23:if(!(i<4)){e.next=32;break}return e.t2=r,e.next=27,t.methods.winningNumbers(i).call();case 27:e.t3=+e.sent.toString(),e.t2.push.call(e.t2,e.t3);case 29:i++,e.next=23;break;case 32:return e.abrupt("return",r);case 33:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=n(782),Q=n(241),M=n(44),P=n(3),q=n(26),H=n(134),U=n(245),V=n(7),W=Object(P.e)(q.S).attrs({as:"h1",scale:"xl"})(r||(r=Object(M.a)(["\n  color: #ffffff;\n  margin-bottom: 24px;\n  text-shadow: 2px 2px 2px #00000040;\n"]))),Y=Object(P.e)(q.Ob)(c||(c=Object(M.a)(["\n  background: -webkit-linear-gradient(#ffd800, #eb8c00);\n  font-size: 24px;\n  font-weight: 600;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n"]))),K=P.e.div(a||(a=Object(M.a)(["\n  background-image: linear-gradient(#7645d9, #452a7a);\n  max-height: max-content;\n  overflow: hidden;\n  "," {\n    max-height: 256px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),J=Object(P.e)(U.a)(i||(i=Object(M.a)(["\n  display: flex;\n\n  flex-direction: column-reverse;\n\n  "," {\n    flex-direction: row;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),X=P.e.div(s||(s=Object(M.a)(["\n  flex: 1;\n  padding-right: 0;\n  padding-bottom: 40px;\n  padding-top: 40px;\n\n  "," {\n    padding-right: 24px;\n  }\n\n  "," {\n    padding-right: 32px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),Z=P.e.div(o||(o=Object(M.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  padding-left: 0;\n\n  & img {\n    width: 80%;\n  }\n\n  "," {\n    margin-top: 0;\n    padding-left: 24px;\n  }\n\n  "," {\n    padding-left: 32px;\n    & img {\n      margin-top: -25px;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),G=function(){var e=Object(H.b)().t;return Object(V.jsx)(K,{children:Object(V.jsxs)(J,{children:[Object(V.jsxs)(X,{children:[Object(V.jsx)(W,{children:e("The Lottery Is Changing!")}),Object(V.jsx)(Y,{children:e("Come back soon!")}),Object(V.jsx)(q.cb,{bold:!0,mt:20,external:!0,href:"https://voting.pancakeswap.finance/#/pancake/proposal/QmU8pcbmBrfbfVQXMMxmkExDq3mYq4s5cbBuFe6uCZzdmX",children:e("Learn more")})]}),Object(V.jsx)(Z,{children:Object(V.jsx)("img",{src:"/images/tombola.png",alt:"lottery bunny"})})]})})},$=n(4),_=function(){var e=Object(O.a)(x.a.mark((function e(t){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.pancakeswap.com/api/singleLottery?lotteryNumber=".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(0),new Error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(f.useState)(!0),t=Object(h.a)(e,2),n=t[0],r=t[1],c=Object(f.useState)(null),a=Object(h.a)(c,2),i=a[0],s=a[1],o=Object(f.useState)(null),u=Object(h.a)(o,2),l=u[0],b=u[1],j=Object(f.useContext)(m).mostRecentLotteryNumber;return Object(f.useEffect)((function(){j>0&&function(){var e=Object(O.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(!0),e.next=4,_(j);case 4:t=e.sent,s(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),b(e.t0);case 11:return e.prev=11,r(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}()()}),[j,s,r,b]),{isLoading:n,data:i,mostRecentLotteryNumber:j,error:l}},te=P.e.div(u||(u=Object(M.a)(["\n  margin-bottom: 24px;\n"]))),ne=P.e.div(l||(l=Object(M.a)(["\n  position: relative;\n"]))),re=P.e.div(b||(b=Object(M.a)(["\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  /* Firefox */\n  input[type='number'] {\n    -moz-appearance: textfield;\n  }\n"]))),ce=P.e.div(j||(j=Object(M.a)(["\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translate(0%, -50%);\n  width: auto;\n"]))),ae=function(e){var t=e.initialLotteryNumber,n=e.onSubmit,r=Object(f.useState)(t),c=Object(h.a)(r,2),a=c[0],i=c[1],s=Object(f.useState)(!1),o=Object(h.a)(s,2),u=o[0],l=o[1],b=Object(H.b)().t;return Object(V.jsxs)(te,{children:[Object(V.jsx)(q.Ob,{children:b("Select lottery number:")}),Object(V.jsx)("form",{onSubmit:function(e){e.preventDefault(),n(a)},children:Object(V.jsxs)(ne,{children:[Object(V.jsx)(re,{children:Object(V.jsx)(q.Y,{value:a,type:"number",inputMode:"numeric",min:"0",isWarning:u,max:t,onChange:function(e){if(e.currentTarget.value){var n=parseInt(e.currentTarget.value,10);l(n>t),i(n)}else i(t)}})}),Object(V.jsx)(ce,{children:Object(V.jsx)(q.q,{type:"submit",scale:"sm",disabled:u,children:b("Search")})})]})})]})},ie=function(e){var t=e.error;return Object(V.jsx)(q.Ob,{p:"24px",children:t.message})},se=n(135),oe=P.e.div(d||(d=Object(M.a)(["\n  margin-right: 16px;\n  svg {\n    width: 48px;\n    height: 48px;\n  }\n"]))),ue=function(e){var t=e.valueToDisplay,n=e.children,r=e.Icon,c=Object(se.a)(e,["valueToDisplay","children","Icon"]);return Object(V.jsxs)(q.R,Object($.a)(Object($.a)({},c),{},{children:[r&&Object(V.jsx)(oe,{children:Object(V.jsx)(r,{})}),Object(V.jsxs)(q.R,{flexDirection:"column",children:[Object(V.jsx)(q.Ob,{fontSize:"14px",color:"textSubtle",children:n}),Object(V.jsx)(q.S,{scale:"lg",children:t})]})]}))};ue.defaultProps={valueToDisplay:"",Icon:function(){return Object(V.jsx)("div",{})},children:""};var le,be,je,de,pe,xe,Oe,he,fe,me,ge,ve,ye,we,ke,Se,Ce,Le,De,ze,Ie,Te,Fe,Ae,Ne,Ee,Re,Be,Qe,Me,Pe,qe,He,Ue,Ve,We,Ye,Ke,Je,Xe=ue,Ze=n(60),Ge=n(138),$e=n(790),_e=function(){var e=Object(f.useState)(D.b),t=Object(h.a)(e,2),n=t[0],r=t[1],c=Object(f.useState)(!1),a=Object(h.a)(c,2),i=a[0],s=a[1],o=Object(Ze.c)().account,u=Object(B.l)(),l=Object(B.k)(),b=Object($e.a)(),j=b.lastUpdated,d=b.setLastUpdated,p=Object(f.useCallback)(Object(O.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,A(l,u,o);case 3:t=e.sent,r(t),s(!1);case 6:case"end":return e.stop()}}),e)}))),[o,l,u]);return Object(f.useEffect)((function(){o&&l&&u&&p()}),[o,p,l,u,j]),{claimLoading:i,claimAmount:n,setLastUpdated:d}},et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=Object(f.useState)([]),n=Object(h.a)(t,2),r=n[0],c=n[1],a=Object(Ze.c)(),i=a.account,s=Object(B.l)(),o=Object(B.k)(),u=Object(Ge.a)(),l=u.fastRefresh;return Object(f.useEffect)((function(){i&&o&&s&&function(){var t=Object(O.a)(x.a.mark((function t(){var n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(o,s,i,e);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[i,o,s,l,e]),r},tt=n(787),nt=P.e.div(le||(le=Object(M.a)(["\n  color: #ff8c28;\n"]))),rt=P.e.div(be||(be=Object(M.a)(["\n  text-align: center;\n  overflow-y: auto;\n  max-height: 400px;\n  color: ",";\n"])),(function(e){return e.theme.colors.primary})),ct=Object(P.e)(q.q)(je||(je=Object(M.a)(["\n  margin-top: ","px;\n"])),(function(e){return e.theme.spacing[2]})),at=function(e){var t=e.myTicketNumbers,n=e.onDismiss,r=e.from,c=function(){var e=Object(f.useState)([0,0,0,0]),t=Object(h.a)(e,2),n=t[0],r=t[1],c=Object(B.k)(),a=Object(Ge.a)().fastRefresh;return Object(f.useEffect)((function(){c&&function(){var e=Object(O.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(c);case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,c,r]),n}(),a=Object(H.b)().t,i=Object(f.useCallback)((function(e){for(var t=0,n=c.length-1;n>=0;n--)c[n]==e[n]&&t++;return t}),[c]),s=t.map((function(e,t){if(i(e[0])>1&&"buy"!==r){var n=new Array(i(e[0])+1).join("\ud83e\udd11");return Object(V.jsxs)(nt,{children:[n,e.toString(),n]},t)}return Object(V.jsx)("p",{children:e.toString()},t)}));return Object(V.jsxs)(q.mb,{title:a("My Tickets (Total: %TICKETS%)",{TICKETS:t.length}),onDismiss:n,children:[Object(V.jsx)(rt,{children:Object(V.jsx)("h2",{children:s})}),Object(V.jsx)(ct,{variant:"secondary",onClick:n,children:a("Close")})]})},it=P.e.div(de||(de=Object(M.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  padding-top: 24px;\n\n  & > div {\n    flex: 1;\n    width: 100%;\n  }\n"]))),st=Object(P.e)(q.cb)(pe||(pe=Object(M.a)(["\n  align-items: center;\n  display: flex;\n  height: 48px;\n  justify-content: center;\n  text-decoration: none;\n  width: 100%;\n"]))),ot=function(e){var t=e.contractLink,n=e.lotteryNumber,r=Object(H.b)().t,c=et(n),a=c.length,i=Object(q.hc)(Object(V.jsx)(at,{myTicketNumbers:c,from:"buy"})),s=Object(h.a)(i,1)[0];return Object(Ze.c)().account?Object(V.jsxs)(it,{children:[Object(V.jsx)(q.q,{disabled:0===a,onClick:s,width:"100%",children:r("View your tickets")}),Object(V.jsx)(st,{href:t,children:r("View on BscScan")})]}):Object(V.jsx)(it,{children:Object(V.jsx)(tt.a,{})})},ut=n(80),lt=n(819),bt=P.e.div(xe||(xe=Object(M.a)(["\n  display: grid;\n  grid-template-columns: repeat(",", 1fr);\n  grid-template-rows: repeat(4, auto);\n"])),(function(e){return e.pastDraw?3:2})),jt=Object(P.e)(q.Ob)(Oe||(Oe=Object(M.a)(["\n  text-align: right;\n"]))),dt=Object(P.e)(q.S)(he||(he=Object(M.a)(["\n  text-align: right;\n"]))),pt=P.e.div(fe||(fe=Object(M.a)(["\n  margin-bottom: ",";\n"])),(function(e){return e.marginBottom?e.marginBottom:"10px"})),xt=Object(P.e)(pt)(me||(me=Object(M.a)(["\n  transform: translate(-40%, 0%);\n"]))),Ot=function(e){var t=e.lotteryPrizeAmount,n=void 0===t?0:t,r=e.pastDraw,c=void 0!==r&&r,a=e.jackpotMatches,i=e.twoTicketMatches,s=e.threeTicketMatches,o=+(n/100*50).toFixed(0),u=+(n/100*20).toFixed(0),l=+(n/100*10).toFixed(0),b=+(n/100*20).toFixed(0),j=Object(H.b)().t,d=Object(ut.C)(),p=function(e){return new g.BigNumber(e).multipliedBy(d).toNumber()};return Object(V.jsxs)(bt,{pastDraw:c,children:[Object(V.jsx)(pt,{children:Object(V.jsx)(q.Ob,{fontSize:"14px",color:"textSubtle",children:j("No. Matched")})}),c&&Object(V.jsx)(xt,{children:Object(V.jsx)(jt,{fontSize:"14px",color:"textSubtle",children:j("Winners")})}),Object(V.jsx)(pt,{children:Object(V.jsx)(jt,{fontSize:"14px",color:"textSubtle",children:j("Prize Pot")})}),Object(V.jsx)(pt,{children:Object(V.jsx)(q.S,{scale:"md",children:"4"})}),c&&Object(V.jsx)(xt,{children:Object(V.jsx)(dt,{scale:"md",children:a})}),Object(V.jsx)(pt,{children:Object(V.jsxs)(dt,{scale:"md",children:[o.toLocaleString(),!c&&!d.eq(0)&&Object(V.jsx)(lt.a,{value:p(o)})]})}),Object(V.jsx)(pt,{children:Object(V.jsx)(q.Ob,{bold:!0,children:"3"})}),c&&Object(V.jsx)(xt,{children:Object(V.jsx)(jt,{bold:!0,children:s})}),Object(V.jsx)(pt,{children:Object(V.jsxs)(jt,{children:[u.toLocaleString(),!c&&!d.eq(0)&&Object(V.jsx)(lt.a,{value:p(u)})]})}),Object(V.jsx)(pt,{children:Object(V.jsx)(q.Ob,{children:"2"})}),c&&Object(V.jsx)(xt,{children:Object(V.jsx)(jt,{children:i})}),Object(V.jsx)(pt,{children:Object(V.jsxs)(jt,{children:[l.toLocaleString(),!c&&!d.eq(0)&&Object(V.jsx)(lt.a,{value:p(l)})]})}),Object(V.jsx)(pt,{marginBottom:"0",children:Object(V.jsxs)(q.Ob,{children:[j("".concat(c?"Burned":"To burn")),":"]})}),c?Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(pt,{marginBottom:"0"}),Object(V.jsx)(pt,{marginBottom:"0",children:Object(V.jsx)(jt,{children:b.toLocaleString()})})]}):Object(V.jsx)(pt,{marginBottom:"0",children:Object(V.jsx)(jt,{children:b.toLocaleString()})})]})},ht=function(e){if(!e)return{};var t=new Date(e),n=t.toDateString();return{hours:t.getUTCHours(),monthAndDay:n.split(" ").splice(1,2).join(" ")}},ft=P.e.div(ge||(ge=Object(M.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n"]))),mt=function(e){var t=e.timeValue,n=ht(t),r=n.monthAndDay,c=n.hours;return Object(V.jsx)(ft,{children:Object(V.jsxs)(q.Ob,{fontSize:"14px",children:[r,", ",c,":00 UTC"]})})},gt=P.e.div(ve||(ve=Object(M.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),vt=Object(P.e)(Xe)(ye||(ye=Object(M.a)(["\n  margin-bottom: ","px;\n"])),(function(e){return e.theme.spacing[4]})),yt=function(e){var t=e.data,n=Object(H.b)().t,r=t.contractLink,c=t.jackpotTicket,a=t.lotteryDate,i=t.lotteryNumber,s=t.lotteryNumbers,o=t.match2Ticket,u=t.match3Ticket,l=t.poolSize;return!t.error&&t&&Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(q.v,{children:Object(V.jsxs)(gt,{children:[Object(V.jsx)(mt,{timeValue:a}),Object(V.jsxs)(q.S,{scale:"md",mb:"24px",children:["Round #",i]}),Object(V.jsx)(vt,{valueToDisplay:"".concat(s[0],", ").concat(s[1],", ").concat(s[2],", ").concat(s[3]),Icon:q.Qb,children:n("Winning numbers")}),Object(V.jsx)(Xe,{valueToDisplay:n("".concat(l.toLocaleString()," CAKE")),Icon:q.wb,children:n("Total prizes")})]})}),Object(V.jsxs)(q.w,{children:[Object(V.jsx)(Ot,{lotteryPrizeAmount:l,jackpotMatches:c,twoTicketMatches:o,threeTicketMatches:u,pastDraw:!0}),Object(V.jsx)(ot,{contractLink:r,lotteryNumber:i})]})]})},wt=function(e){var t=e.error,n=e.data;return Object(V.jsx)(q.u,{children:t.message?Object(V.jsx)(ie,{error:t}):Object(V.jsx)(yt,{data:n})})},kt=P.e.div(we||(we=Object(M.a)(["\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 8px solid #ddd;\n  border-bottom: 8px solid #ddd;\n  width: 20px;\n  height: 20px;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  @-webkit-keyframes spin {\n    0% {\n      -webkit-transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]))),St=function(){return Object(V.jsx)(kt,{})},Ct=P.e.div(ke||(ke=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Lt=Object(P.e)(q.v)(Se||(Se=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 552px; // height of final card\n"]))),Dt=function(){var e=Object(f.useState)({roundData:null,error:{message:null,type:null},isInitialized:!1,isLoading:!0}),t=Object(h.a)(e,2),n=t[0],r=t[1],c=ee(),a=c.data,i=c.mostRecentLotteryNumber,s=Object(H.b)().t,o=n.roundData,u=n.error,l=n.isInitialized,b=n.isLoading;Object(f.useEffect)((function(){a&&r((function(e){return Object($.a)(Object($.a)({},e),{},{isLoading:!1,isInitialized:!0,roundData:a})}))}),[a,r]);var j=function(){var e=Object(O.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r((function(e){return Object($.a)(Object($.a)({},e),{},{isLoading:!0})})),_(t).then((function(e){e.error?r((function(e){return Object($.a)(Object($.a)({},e),{},{error:{message:s("The lottery number you provided does not exist"),type:"out of range"},isLoading:!1,isInitialized:!0})})):r((function(t){return Object($.a)(Object($.a)({},t),{},{error:{message:null,type:null},roundData:e,isLoading:!1,isInitialized:!0})}))})).catch((function(){r((function(e){return Object($.a)(Object($.a)({},e),{},{error:{message:s("Error fetching data"),type:"api"},isLoading:!1,isInitialized:!0})}))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(V.jsxs)(Ct,{children:[Object(V.jsx)(ae,{initialLotteryNumber:i,onSubmit:j}),!l||b?Object(V.jsx)(q.u,{children:Object(V.jsx)(Lt,{children:Object(V.jsx)(St,{})})}):Object(V.jsx)(wt,{error:u,data:o})]})},zt=n(829),It=n(257),Tt=Object(f.lazy)((function(){return Promise.all([n.e(2),n.e(20)]).then(n.bind(null,1088))})),Ft=Object(f.lazy)((function(){return Promise.all([n.e(2),n.e(19)]).then(n.bind(null,1089))})),At=P.e.div(Ce||(Ce=Object(M.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Nt=function(e){var t=e.showLast,n=Object(H.b)().t,r=Object(It.a)().isDark,c=Object(f.useContext)(m),a=c.historyData,i=c.historyError,s=function(e){var n=a.map((function(t){return t[e]})).reverse();return"max"===t?n:n.slice(-1*Number(t))},o=function(e){return{borderColor:e.color,fill:!1,borderWidth:2,pointRadius:0,pointHitRadius:10}},u={labels:s("lotteryNumber"),datasets:[Object($.a)({label:"Pool Size",data:s("poolSize"),yAxisID:"y-axis-pool"},o({color:"#8F80BA"})),Object($.a)({label:"Burned",data:s("burned"),yAxisID:"y-axis-burned"},o({color:"#1FC7D4"}))]},l=function(e){return{borderCapStyle:"round",gridLines:{display:!1},ticks:{fontFamily:"Kanit, sans-serif",fontColor:e.color,fontSize:12,lineHeight:e.lineHeight,maxRotation:0,beginAtZero:!0,autoSkipPadding:15,userCallback:function(e){return e.toLocaleString()}}}},b=Object(f.useMemo)((function(){return{tooltips:{mode:"index",intersect:!1},legend:{display:!1},scales:{yAxes:[Object($.a)({type:"linear",position:"left",id:"y-axis-pool"},l({color:"#8f80ba",lineHeight:1.6})),Object($.a)({type:"linear",position:"right",id:"y-axis-burned"},l({color:"#1FC7D4",lineHeight:1.5}))],xAxes:[Object($.a)({},l({color:r?"#FFFFFF":"#452A7A",lineHeight:1}))]}}}),[r]);return Object(V.jsxs)(V.Fragment,{children:[i&&Object(V.jsx)(At,{children:Object(V.jsx)(q.Ob,{children:n("Error fetching data")})}),!i&&a.length>1?Object(V.jsx)(f.Suspense,{fallback:Object(V.jsx)("div",{children:n("Loading...")}),children:50===t||100===t?Object(V.jsx)(Ft,{data:u,options:b}):Object(V.jsx)(Tt,{data:u,options:b,type:"line"})}):Object(V.jsx)(At,{children:Object(V.jsx)(St,{})})]})},Et=P.e.div(Le||(Le=Object(M.a)(["\n  display: flex;\n  margin: 24px 0 24px;\n"]))),Rt=P.e.div(De||(De=Object(M.a)(["\n  display: flex;\n  margin-right: 18px;\n  align-items: center;\n"]))),Bt=P.e.div(ze||(ze=Object(M.a)(["\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  background-color: ",";\n  margin-right: 6px;\n"])),(function(e){var t=e.isPoolSize;return e.theme.colors[t?"textSubtle":"primary"]})),Qt=function(){var e=Object(H.b)().t;return Object(V.jsxs)(Et,{children:[Object(V.jsxs)(Rt,{children:[Object(V.jsx)(Bt,{isPoolSize:!0}),Object(V.jsx)(q.Ob,{children:e("Pool Size")})]}),Object(V.jsxs)(Rt,{children:[Object(V.jsx)(Bt,{}),Object(V.jsx)(q.Ob,{children:e("Burned")})]})]})},Mt=P.e.div(Ie||(Ie=Object(M.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  flex-direction: column-reverse;\n\n  "," {\n    flex-wrap: nowrap;\n    flex-direction: row;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),Pt=P.e.div(Te||(Te=Object(M.a)(["\n  margin-top: 24px;\n\n  "," {\n    margin-top: 0;\n  }\n\n  > "," {\n    font-size: 12px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),q.Ob),qt=function(){var e=Object(H.b)().t,t=Object(f.useState)(50),n=Object(h.a)(t,2),r=n[0],c=n[1];return Object(V.jsx)(q.u,{children:Object(V.jsxs)(q.v,{children:[Object(V.jsx)(q.S,{scale:"md",children:e("History")}),Object(V.jsxs)(Mt,{children:[Object(V.jsx)(Qt,{}),Object(V.jsxs)(Pt,{children:[Object(V.jsx)(q.Ob,{textTransform:"uppercase",children:e("Show Last")}),Object(V.jsx)(zt.a,{options:[{label:"50",value:50},{label:"100",value:100},{label:"200",value:200},{label:"Max",value:"max"}],onChange:function(e){c(e.value)}})]})]}),Object(V.jsx)(Nt,{showLast:r})]})})},Ht=n(236),Ut=P.e.div(Fe||(Fe=Object(M.a)(["\n  display: flex;\n  align-items: baseline;\n"]))),Vt=P.e.div(Ae||(Ae=Object(M.a)(["\n  margin-bottom: 16px;\n\n  svg {\n    width: 80px;\n    height: 80px;\n  }\n"]))),Wt=P.e.div(Ne||(Ne=Object(M.a)(["\n  margin-top: ","px;\n"])),(function(e){return e.theme.spacing[3]})),Yt=P.e.div(Ee||(Ee=Object(M.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),Kt=Object(P.e)(q.q)(Re||(Re=Object(M.a)(["\n  margin-top: ","px;\n"])),(function(e){return e.theme.spacing[1]})),Jt=function(e){var t=e.onSuccess,n=Object(f.useState)(!1),r=Object(h.a)(n,2),c=r[0],a=r[1],i=Object(H.b)().t,s=_e(),o=s.claimLoading,u=s.claimAmount,l=function(){var e=Object(Ze.c)().account,t=Object(B.k)(),n=Object(B.l)();return{onMultiClaim:Object(f.useCallback)(Object(O.a)(x.a.mark((function r(){var c;return x.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,F(t,n,e);case 3:return c=r.sent,r.abrupt("return",c);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",!1);case 10:case"end":return r.stop()}}),r,null,[[0,7]])}))),[e,t,n])}}().onMultiClaim,b=et(),j=Object(q.hc)(Object(V.jsx)(at,{myTicketNumbers:b,from:"buy"})),d=Object(h.a)(j,1)[0],p=Object(f.useCallback)(Object(O.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(!0),e.next=4,l();case 4:e.sent&&(t(),a(!1)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[l,a,t]),m=Object(Ht.c)(u).toFixed(2);return Object(V.jsxs)(Yt,{children:[Object(V.jsx)(Vt,{children:Object(V.jsx)(q.ac,{})}),Object(V.jsx)(q.S,{as:"h3",scale:"lg",color:"secondary",children:i("You won!")}),o&&Object(V.jsx)(St,{}),!o&&Object(V.jsx)(V.Fragment,{children:Object(V.jsxs)(Ut,{children:[Object(V.jsx)(q.S,{as:"h4",scale:"xl",style:{marginRight:"6px"},children:m}),Object(V.jsx)(q.S,{as:"h4",scale:"lg",children:"CAKE"})]})}),Object(V.jsx)(Wt,{children:Object(V.jsx)(q.q,{width:"100%",disabled:c,onClick:p,children:i("Collect")})}),Object(V.jsx)(Kt,{variant:"text",onClick:d,children:i("View your tickets")})]})},Xt=P.e.div(Be||(Be=Object(M.a)(["\n  display: flex;\n"]))),Zt=P.e.div(Qe||(Qe=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Gt=Object(P.e)(q.Ob)(Me||(Me=Object(M.a)(["\n  padding-left: 12px;\n"]))),$t=P.e.img(Pe||(Pe=Object(M.a)(["\n  margin-right: 6px;\n\n  "," {\n    margin-right: 20px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),_t=Object(P.e)(q.q)(qe||(qe=Object(M.a)(["\n  padding: 0 12px;\n  height: unset;\n"]))),en=function(){var e=Object(H.b)().t,t=et(),n=Object(q.hc)(Object(V.jsx)(at,{myTicketNumbers:t,from:"buy"})),r=Object(h.a)(n,1)[0];return Object(V.jsxs)(Xt,{children:[Object(V.jsx)($t,{src:"/images/no-prize.svg",alt:"no prizes won"}),Object(V.jsxs)(Zt,{children:[Object(V.jsx)(Gt,{color:"textDisabled",children:e("Sorry, no prizes to collect")}),Object(V.jsx)(_t,{variant:"text",onClick:r,children:e("View your tickets")})]})]})},tn=Object(P.e)(q.u)(He||(He=Object(M.a)(["\n  ","\n"])),(function(e){return e.isDisabled?"  \n        margin-top: 16px;\n        background-color: unset;\n        box-shadow: unset;\n        border: 1px solid ".concat(e.theme.colors.textDisabled,";\n\n        ").concat(e.theme.mediaQueries.sm," {\n          margin-top: 24px;\n        }\n\n        ").concat(e.theme.mediaQueries.lg," {\n          margin-top: 32px;\n        }\n        "):""})),nn=function(e){var t=e.isAWin,n=e.onSuccess;return Object(V.jsx)(tn,{isDisabled:!t,isActive:t,children:Object(V.jsx)(q.v,{children:t?Object(V.jsx)(Jt,{onSuccess:n}):Object(V.jsx)(en,{})})})},rn=Object(P.e)(q.v)(Ue||(Ue=Object(M.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  max-height: 196px;\n"]))),cn=Object(P.e)(q.S)(Ve||(Ve=Object(M.a)(["\n  margin: 16px 0;\n"]))),an=P.e.div(We||(We=Object(M.a)(["\n  svg {\n    width: 80px;\n    height: 80px;\n  }\n"]))),sn=function(){var e=Object(H.b)().t;return Object(V.jsx)(q.u,{isActive:!0,children:Object(V.jsxs)(rn,{children:[Object(V.jsx)(an,{children:Object(V.jsx)(q.Pb,{})}),Object(V.jsxs)("div",{children:[Object(V.jsx)(cn,{scale:"md",children:e("Unlock wallet to access lottery")}),Object(V.jsx)(tt.a,{})]})]})})},on=function(){var e=Object(Ze.c)().account,t=_e(),n=t.claimAmount,r=t.setLastUpdated,c=Object(Ht.c)(n)>0,a=Object(f.useCallback)((function(){r()}),[r]);return Object(V.jsx)(q.m,{mb:"32px",children:e?Object(V.jsx)(nn,{isAWin:c,onSuccess:a}):Object(V.jsx)(sn,{})})},un=Object(P.e)(q.i)(Ye||(Ye=Object(M.a)(["\n  align-items: start;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 12;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),ln=P.e.div(Ke||(Ke=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),bn=P.e.div(Je||(Je=Object(M.a)(["\n  display: flex;\n  margin-top: 32px;\n  justify-content: center;\n"]))),jn=function(){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(on,{}),Object(V.jsxs)(un,{children:[Object(V.jsx)(Dt,{}),Object(V.jsxs)(ln,{children:[Object(V.jsx)(qt,{}),Object(V.jsx)(bn,{children:Object(V.jsx)("img",{src:"/images/pancake-lottery-bunny.png",alt:"lottery bunny"})})]})]})]})},dn=function(){var e=Object(B.k)(),t=Object(f.useState)([]),n=Object(h.a)(t,2),r=n[0],c=n[1],a=Object(f.useState)(!1),i=Object(h.a)(a,2),s=i[0],o=i[1],u=Object(f.useState)(0),l=Object(h.a)(u,2),b=l[0],j=l[1],d=Object(f.useState)(1),p=Object(h.a)(d,2),g=p[0],v=p[1];return Object(f.useEffect)((function(){fetch("https://api.pancakeswap.com/api/lotteryHistory").then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(){o(!0)}))}),[]),Object(f.useEffect)((function(){e&&function(){var t=Object(O.a)(x.a.mark((function t(){var n,r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e);case 2:n=t.sent,r=n-1,j(n),v(r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[e]),Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(G,{}),Object(V.jsx)(Q.a,{children:Object(V.jsx)(m.Provider,{value:{historyError:s,historyData:r,mostRecentLotteryNumber:g,currentLotteryNumber:b},children:Object(V.jsx)(jn,{})})})]})}},790:function(e,t,n){"use strict";var r=n(34),c=n(0),a=n(791);t.a=function(){var e=Object(c.useState)(Date.now()),t=Object(r.a)(e,2),n=t[0],i=t[1];return{lastUpdated:n,previousLastUpdated:Object(a.a)(n),setLastUpdated:Object(c.useCallback)((function(){i(Date.now())}),[i])}}},791:function(e,t,n){"use strict";var r=n(0);t.a=function(e){var t=Object(r.useRef)();return Object(r.useEffect)((function(){t.current=e})),t.current}},829:function(e,t,n){"use strict";var r,c,a,i,s,o,u=n(4),l=n(34),b=n(44),j=n(0),d=n(3),p=n(26),x=n(7),O=d.e.div(r||(r=Object(b.a)(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0px 16px;\n  box-shadow: ",";\n  border: 1px solid ",";\n  border-radius: 16px;\n  background: ",";\n  transition: border-radius 0.15s;\n"])),(function(e){return e.theme.shadows.inset}),(function(e){return e.theme.colors.inputSecondary}),(function(e){return e.theme.colors.input})),h=d.e.div(c||(c=Object(b.a)(["\n  min-width: 136px;\n  height: 0;\n  position: absolute;\n  overflow: hidden;\n  background: ",";\n  z-index: ",";\n  transition: transform 0.15s, opacity 0.15s;\n  transform: scaleY(0);\n  transform-origin: top;\n  opacity: 0;\n\n  "," {\n    min-width: 168px;\n  }\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.zIndices.dropdown}),(function(e){return e.theme.mediaQueries.sm})),f=d.e.div(a||(a=Object(b.a)(["\n  cursor: pointer;\n  width: ","px;\n  position: relative;\n  background: ",";\n  border-radius: 16px;\n  height: 40px;\n  min-width: 136px;\n\n  "," {\n    min-width: 168px;\n  }\n\n  ","\n\n  svg {\n    position: absolute;\n    right: 16px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n"])),(function(e){return e.width}),(function(e){return e.theme.colors.input}),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.isOpen&&Object(d.d)(i||(i=Object(b.a)(["\n      "," {\n        border-bottom: 1px solid ",";\n        box-shadow: ",";\n        border-radius: 16px 16px 0 0;\n      }\n\n      "," {\n        height: auto;\n        transform: scaleY(1);\n        opacity: 1;\n        border: 1px solid ",";\n        border-top-width: 0;\n        border-radius: 0 0 16px 16px;\n        box-shadow: ",";\n      }\n    "])),O,(function(e){return e.theme.colors.inputSecondary}),(function(e){return e.theme.tooltip.boxShadow}),h,(function(e){return e.theme.colors.inputSecondary}),(function(e){return e.theme.tooltip.boxShadow}))})),m=d.e.ul(s||(s=Object(b.a)(["\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  z-index: ",";\n"])),(function(e){return e.theme.zIndices.dropdown})),g=d.e.li(o||(o=Object(b.a)(["\n  list-style: none;\n  padding: 8px 16px;\n  &:hover {\n    background: ",";\n  }\n"])),(function(e){return e.theme.colors.inputSecondary}));t.a=function(e){var t=e.options,n=e.onChange,r=Object(j.useRef)(null),c=Object(j.useRef)(null),a=Object(j.useState)(!1),i=Object(l.a)(a,2),s=i[0],o=i[1],b=Object(j.useState)(t[0]),d=Object(l.a)(b,2),v=d[0],y=d[1],w=Object(j.useState)({width:0,height:0}),k=Object(l.a)(w,2),S=k[0],C=k[1],L=function(){return o(!s)},D=function(e){return function(){y(e),o(!1),n&&n(e)}};return Object(j.useEffect)((function(){C({width:c.current.offsetWidth,height:c.current.offsetHeight})}),[]),Object(x.jsxs)(f,Object(u.a)(Object(u.a)({isOpen:s,ref:r},S),{},{children:[0!==S.width&&Object(x.jsx)(O,{onClick:L,children:Object(x.jsx)(p.Ob,{children:v.label})}),Object(x.jsx)(p.d,{color:"text",onClick:L}),Object(x.jsx)(h,{children:Object(x.jsx)(m,{ref:c,children:t.map((function(e){return e.label!==v.label?Object(x.jsx)(g,{onClick:D(e),children:Object(x.jsx)(p.Ob,{children:e.label})},e.label):null}))})})]}))}}}]);
//# sourceMappingURL=18.6f4b95bd.chunk.js.map