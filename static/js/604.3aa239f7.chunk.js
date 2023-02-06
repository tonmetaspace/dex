"use strict";(self.webpackChunktonswap_web=self.webpackChunktonswap_web||[]).push([[604],{57604:function(e,n,t){t.r(n),t.d(n,{default:function(){return U}});var o=t(30357),a=t(45366),r=t(18740),u=t(68963),s=t.t(u,2),i=t(55195),c=t(79711),l=t(80124),d=t(30371),f=t(94361),m=t(74650),p=t(88027),h=t(19867),v=t(5922),Z=t(74165),k=t(15861),x=t(77563),T=t(63317),y=t(24145),g=t(81003),w=t(84672),A=t(75),S=t(29439),b=t(51611),j=t(61638),B=t(57091);function M(e,n,t,o,a){var r="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,s=u.useState((function(){return a&&r?t(e).matches:o?o(e).matches:n})),i=(0,S.Z)(s,2),c=i[0],l=i[1];return(0,B.Z)((function(){var n=!0;if(r){var o=t(e),a=function(){n&&l(o.matches)};return a(),o.addListener(a),function(){n=!1,o.removeListener(a)}}}),[e,t,r]),c}var C=s.useSyncExternalStore;function F(e,n,t,o){var a=u.useCallback((function(){return n}),[n]),r=u.useMemo((function(){if(null!==o){var n=o(e).matches;return function(){return n}}return a}),[a,e,o]),s=u.useMemo((function(){if(null===t)return[a,function(){return function(){}}];var n=t(e);return[function(){return n.matches},function(e){return n.addListener(e),function(){n.removeListener(e)}}]}),[a,t,e]),i=(0,S.Z)(s,2),c=i[0],l=i[1];return C(l,c,r)}var L=t(39910),W=t(30213),P=t(75859),N=function(){var e=(0,h.x)(),n=e.srcTokenAmount,t=e.destTokenAmount,o=e.selectedToken,a=(0,h.x)().totalBalances,r=(0,i.$)().t,u=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=(0,b.Z)(),o="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,a=(0,j.Z)({name:"MuiUseMediaQuery",props:n,theme:t}),r=a.defaultMatches,u=void 0!==r&&r,s=a.matchMedia,i=void 0===s?o?window.matchMedia:null:s,c=a.ssrMatchMedia,l=void 0===c?null:c,d=a.noSsr,f="function"===typeof e?e(t):e;return f=f.replace(/^@media( ?)/m,""),(void 0!==C?F:M)(f,u,i,l,d)}((0,W.Z)().breakpoints.down("sm")),s=function(){var e=(0,k.Z)((0,Z.Z)().mark((function e(){return(0,Z.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.Z.buyTransaction(),e.abrupt("return",x.qb(o.tokenMinter,n,t));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,w.Z)(),o?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(T.Z,{icon:(0,P.jsx)(y.Z,{}),getTxRequest:s,getAmountFunc:x.Vk,getBalances:function(){return Promise.all([x.gF(),x.yX(o)])},srcToken:g.nS,destToken:o,submitButtonText:r("buy",{token:"".concat(null===o||void 0===o?void 0:o.displayName)}),refreshAmountsOnActionChange:!a.destBalance&&!a.srcBalance,actionCategory:A.hX.SWAP,actionType:A.Us.BUY,gasFee:x.et.SWAP}),(0,P.jsx)(L.Z,{align:"center",fontSize:u?11.5:15,children:r("risks-understanding")})]}):null},O=function(){var e=(0,h.x)(),n=e.srcTokenAmount,t=e.destTokenAmount,o=e.selectedToken,a=(0,h.x)().totalBalances,r=(0,i.$)().t;return(0,w.Z)(),o?(0,P.jsx)(T.Z,{icon:(0,P.jsx)(y.Z,{}),getTxRequest:function(){return f.Z.sellTransaction(),x.wN(o.tokenMinter,n,t)},getAmountFunc:x.Vk,getBalances:function(){return Promise.all([x.yX(o),x.gF()])},srcToken:o,destToken:g.nS,submitButtonText:r("sell",{token:null===o||void 0===o?void 0:o.displayName}),refreshAmountsOnActionChange:!a.destBalance&&!a.srcBalance,actionCategory:A.hX.SWAP,actionType:A.Us.SELL,gasFee:x.et.SWAP}):null};var U=function(){var e=(0,h.x)().selectedToken,n=(0,h.O)(),t=n.toggleBuyToSell,s=n.toggleSellToBuy,Z=(0,m.Kr)().onOperationTypeChange,k=(0,i.$)().t,x=(0,r.Z)(),T=(0,c.UO)(),y=(0,v.xB)(T);(0,a.Z)((function(){Z(p.C8.SWAP)}));var g=(0,u.useMemo)((function(){return e?[{text:"buy",method:function(){f.Z.goToBuy(),s()}},{text:"sell",method:function(){f.Z.goToSell(),t()}}]:[]}),[x,e]),w=(0,u.useCallback)((function(e){x(l.Z.swap.navigateToBuy.replace(":id",e.tokenMinter)),f.Z.selectTokenToTrade(e.displayName)}),[x]);return(0,P.jsxs)(P.Fragment,{children:[e&&(0,P.jsx)(o.Z,{symbol:e.displayName,items:g,action:y}),(0,P.jsxs)(c.Z5,{children:[(0,P.jsx)(c.AW,{path:l.Z.swap.buy,element:(0,P.jsx)(N,{})}),(0,P.jsx)(c.AW,{path:l.Z.swap.sell,element:(0,P.jsx)(O,{})}),(0,P.jsx)(c.AW,{path:l.Z.swap.tokens,element:(0,P.jsx)(d.n,{onTokenSelect:w,title:k("jettons-available")})})]})]})}},24145:function(e,n,t){var o=t(64836);n.Z=void 0;var a=o(t(43563)),r=t(75859),u=(0,a.default)((0,r.jsx)("path",{d:"M18.3 14.29a.9959.9959 0 0 0-1.41 0L13 18.17V3c0-.55-.45-1-1-1s-1 .45-1 1v15.18L7.12 14.3a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l5.59 5.59c.39.39 1.02.39 1.41 0l5.59-5.59c.38-.39.38-1.03 0-1.42z"}),"SouthRounded");n.Z=u}}]);