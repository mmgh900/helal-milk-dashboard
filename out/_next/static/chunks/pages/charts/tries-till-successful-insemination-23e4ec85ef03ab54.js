(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[789],{48703:function(n,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/tries-till-successful-insemination",function(){return i(26579)}])},47046:function(n,t,i){"use strict";i.d(t,{Z:function(){return u}});var e=i(11527),s=i(58562),r=i.n(s),a=i(13372),c=i(78242),l=i(50192),o=i(40616);i(50959);function u(n){var t=n.link,i=(0,a.Z)(),s=(0,c.Z)(i.breakpoints.up("md"));return(0,e.jsx)(r(),{href:t,children:(0,e.jsx)(l.Z,{sx:{position:"absolute",left:0},size:"large",startIcon:(0,e.jsx)(o.Z,{sx:{fontSize:18}}),children:s?"\u0628\u0627\u0632\u06af\u0634\u062a":""})})}},55774:function(n,t,i){"use strict";i.d(t,{Z:function(){return f}});var e=i(11527),s=(i(50959),i(79443)),r=i(38308),a=i(8538),c=i(73035),l=i(26148),o=i(61189),u=i(39869);function d(n){var t=n.title,i=n.children;return(0,e.jsxs)(o.Z,{sx:{mb:3},variant:"outlined",children:[(0,e.jsx)(l.Z,{variant:"dense",children:(0,e.jsx)(c.Z,{variant:"h6",children:t})}),(0,e.jsx)(s.Z,{}),(0,e.jsx)(u.Z,{children:i})]})}var x=i(47046);function f(n){var t=n.title,i=n.description,o=n.chart,u=n.controls;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"center",position:"relative"},children:[(0,e.jsx)(x.Z,{link:"./"}),(0,e.jsx)(c.Z,{variant:"h5",children:t})]}),(0,e.jsx)(s.Z,{sx:{mb:4}}),(0,e.jsxs)(r.ZP,{spacing:2,width:"100%",container:!0,children:[(0,e.jsxs)(r.ZP,{item:!0,xs:12,md:4,children:[(0,e.jsxs)(d,{title:"\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0646\u0645\u0648\u062f\u0627\u0631",children:[(0,e.jsx)(c.Z,{children:"\u0646\u0627\u0645 \u0646\u0645\u0648\u062f\u0627\u0631"}),(0,e.jsx)(c.Z,{variant:"h6",children:t})]}),(0,e.jsx)(d,{title:"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u0646\u0645\u0648\u062f\u0627\u0631",children:u})]}),(0,e.jsx)(r.ZP,{item:!0,xs:12,md:8,sx:{display:"flex",justifyContent:"center"},children:o})]}),(0,e.jsx)(a.Z,{sx:{my:3},maxWidth:"md",children:(0,e.jsx)(d,{title:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a",children:i})})]})}},7856:function(n,t,i){"use strict";i.d(t,{Z:function(){return b}});var e=i(11527),s=(i(50959),i(49562)),r=i(13044),a=i(96825),c=i(70693),l=i(67982),o=i(18614),u=i(52724),d=i(35832),x=i(96556),f=i(13372),h=i(30888),j=i(78242),Z=i(62851),p=i(99605);function b(n){var t=n.data,i=(0,f.Z)(),b=(0,j.Z)(i.breakpoints.up("md")),m=(0,p.Lm)();return(0,e.jsx)(h.Z,{width:"100%",children:(0,e.jsxs)(s.v,{width:b?.7*Math.min(i.breakpoints.values.xl,m)-60:m-16,height:500,data:null===t||void 0===t?void 0:t.data.map((function(n,i){return{bin:"\u0628\u0627\u0632\u0647 "+t.bins[i]+" \u062a\u0627 "+t.bins[i+1],"\u062a\u0639\u062f\u0627\u062f \u062f\u0631 \u0628\u0627\u0632\u0647":n}})),children:[(0,e.jsx)(r.K,{tick:{fontSize:12,fontFamily:"Pinar"},dataKey:"bin",angle:45,textAnchor:"end"}),(0,e.jsx)(a.B,{tick:{fontSize:12}}),(0,e.jsx)(c.u,{contentStyle:{backdropFilter:"blur(20px)",backgroundColor:(0,Z.Fq)(i.palette.background.paper,.4),borderRadius:"10px",borderColor:"#ffffff33",aspectRatio:"27/9",fontFamily:"Pinar"}}),(0,e.jsx)(l.D,{}),(0,e.jsx)(o.q,{strokeDasharray:"3 3"}),(0,e.jsx)(u.$,{label:"\u062a\u0639\u062f\u0627\u062f",dataKey:"\u062a\u0639\u062f\u0627\u062f \u062f\u0631 \u0628\u0627\u0632\u0647",fill:i.palette.primary.main}),(0,e.jsx)(d.d,{y:0,stroke:"#666"}),(0,e.jsx)(x.z,{x1:"bin1",x2:"bin2",y1:0,fill:"#888888",fillOpacity:.2})]})})}},12547:function(n,t,i){"use strict";var e=i(73669).Z.create({baseURL:"http://2.180.5.196:8000"});t.Z=e},26579:function(n,t,i){"use strict";i.r(t),i.d(t,{default:function(){return d}});var e=i(11527),s=i(73035),r=i(50959),a=i(30888),c=i(68016),l=i(7856),o=i(55774),u=i(12547);function d(){var n=(0,r.useState)(10),t=n[0],i=n[1],d=(0,r.useState)(),x=d[0],f=d[1];return(0,r.useEffect)((function(){u.Z.get("/histograms/tries-till-successful-insemination?bins=".concat(t)).then((function(n){f(n.data)}))}),[t]),(0,e.jsx)(o.Z,{description:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(s.Z,{children:'\u0647\u06cc\u0633\u062a\u0648\u06af\u0631\u0627\u0645 "\u062a\u0644\u0642\u06cc\u062d \u0645\u0648\u0641\u0642\u06cc\u062a \u0622\u0645\u06cc\u0632" \u062a\u0648\u0632\u06cc\u0639 \u062a\u0639\u062f\u0627\u062f \u062a\u0644\u0627\u0634 \u0647\u0627\u06cc \u062a\u0644\u0642\u06cc\u062d \u0645\u0648\u0631\u062f \u0646\u06cc\u0627\u0632 \u0642\u0628\u0644 \u0627\u0632 \u062f\u0633\u062a\u06cc\u0627\u0628\u06cc \u0628\u0647 \u062a\u0644\u0642\u06cc\u062d \u0645\u0648\u0641\u0642 \u0628\u0631\u0627\u06cc \u06af\u0627\u0648\u0647\u0627\u06cc \u0634\u06cc\u0631\u06cc \u0631\u0627 \u0646\u0634\u0627\u0646 \u0645\u06cc \u062f\u0647\u062f. \u0627\u06cc\u0646 \u0628\u06cc\u0646\u0634\u06cc \u062f\u0631 \u0645\u0648\u0631\u062f \u0645\u06cc\u0632\u0627\u0646 \u0645\u0648\u0641\u0642\u06cc\u062a \u0627\u0635\u0644\u0627\u062d \u0646\u0698\u0627\u062f \u0648 \u0627\u062b\u0631\u0628\u062e\u0634\u06cc \u0641\u0631\u0622\u06cc\u0646\u062f \u062a\u0644\u0642\u06cc\u062d \u0627\u0631\u0627\u0626\u0647 \u0645\u06cc \u062f\u0647\u062f. \u0645\u062d\u0648\u0631 x \u0647\u06cc\u0633\u062a\u0648\u06af\u0631\u0627\u0645 \u062a\u0639\u062f\u0627\u062f \u062a\u0644\u0627\u0634 \u0647\u0627\u06cc \u062a\u0644\u0642\u06cc\u062d \u0631\u0627 \u0646\u0634\u0627\u0646 \u0645\u06cc \u062f\u0647\u062f\u060c \u062f\u0631 \u062d\u0627\u0644\u06cc \u06a9\u0647 \u0645\u062d\u0648\u0631 y \u062a\u0639\u062f\u0627\u062f \u062f\u0641\u0639\u0627\u062a \u06cc\u0627 \u062a\u0639\u062f\u0627\u062f \u06af\u0627\u0648\u0647\u0627 \u062f\u0631 \u0647\u0631 \u062a\u0639\u062f\u0627\u062f \u062a\u0644\u0627\u0634 \u0631\u0627 \u0646\u0634\u0627\u0646 \u0645\u06cc \u062f\u0647\u062f. \u0627\u06cc\u0646 \u0647\u06cc\u0633\u062a\u0648\u06af\u0631\u0627\u0645 \u0628\u0647 \u062f\u0627\u0645\u062f\u0627\u0631\u0627\u0646 \u0627\u062c\u0627\u0632\u0647 \u0645\u06cc \u062f\u0647\u062f \u062a\u0627 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u062a\u0639\u062f\u0627\u062f \u062a\u0644\u0627\u0634 \u0647\u0627\u06cc \u062a\u0644\u0642\u06cc\u062d \u0645\u0648\u0631\u062f \u0646\u06cc\u0627\u0632 \u0628\u0631\u0627\u06cc \u0628\u0627\u0631\u062f\u0627\u0631\u06cc \u0645\u0648\u0641\u0642 \u0631\u0627 \u062f\u0631\u06a9 \u06a9\u0646\u0646\u062f. \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0628\u0631\u0627\u06cc \u062f\u0627\u0645\u067e\u0631\u0648\u0631: \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u06cc\u06a9 \u062f\u0627\u0645\u062f\u0627\u0631\u060c \u0627\u06cc\u0646 \u0647\u06cc\u0633\u062a\u0648\u06af\u0631\u0627\u0645 \u0628\u0631\u0627\u06cc \u0627\u0631\u0632\u06cc\u0627\u0628\u06cc \u06a9\u0627\u0631\u0627\u06cc\u06cc \u0628\u0631\u0646\u0627\u0645\u0647 \u067e\u0631\u0648\u0631\u0634 \u0634\u0645\u0627 \u0628\u0633\u06cc\u0627\u0631 \u0645\u0647\u0645 \u0627\u0633\u062a. \u0627\u06cc\u0646 \u0628\u0647 \u0634\u0645\u0627 \u06a9\u0645\u06a9 \u0645\u06cc\u200c\u06a9\u0646\u062f \u0627\u062b\u0631\u0628\u062e\u0634\u06cc \u062a\u06a9\u0646\u06cc\u06a9\u200c\u0647\u0627\u06cc \u0644\u0642\u0627\u062d \u0631\u0627 \u06a9\u0646\u062a\u0631\u0644 \u06a9\u0631\u062f\u0647 \u0648 \u0686\u0627\u0644\u0634\u200c\u0647\u0627\u06cc \u0628\u0627\u0644\u0642\u0648\u0647 \u062f\u0631 \u062f\u0633\u062a\u06cc\u0627\u0628\u06cc \u0628\u0647 \u0628\u0627\u0631\u062f\u0627\u0631\u06cc\u200c\u0647\u0627\u06cc \u0645\u0648\u0641\u0642 \u0631\u0627 \u0634\u0646\u0627\u0633\u0627\u06cc\u06cc \u06a9\u0646\u06cc\u062f. \u0628\u0627 \u062a\u062c\u0632\u06cc\u0647 \u0648 \u062a\u062d\u0644\u06cc\u0644 \u062a\u0648\u0632\u06cc\u0639 \u062a\u0644\u0627\u0634\u200c\u0647\u0627 \u062a\u0627 \u062a\u0644\u0642\u06cc\u062d \u0645\u0648\u0641\u0642\u060c \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0645\u0648\u0627\u0631\u062f \u06cc\u0627 \u0627\u0644\u06af\u0648\u0647\u0627\u06cc\u06cc \u0631\u0627 \u06a9\u0647 \u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u0646\u0634\u0627\u0646\u200c\u062f\u0647\u0646\u062f\u0647 \u0645\u0633\u0627\u0626\u0644\u06cc \u0645\u0627\u0646\u0646\u062f \u0628\u0627\u0631\u0648\u0631\u06cc \u0636\u0639\u06cc\u0641\u060c \u0632\u0645\u0627\u0646\u200c\u0628\u0646\u062f\u06cc \u0646\u0627\u0645\u0646\u0627\u0633\u0628 \u062a\u0644\u0642\u06cc\u062d \u06cc\u0627 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u0634\u06cc\u0648\u0647\u200c\u0647\u0627\u06cc \u0628\u0647\u062a\u0631 \u0645\u062f\u06cc\u0631\u06cc\u062a \u06af\u0644\u0647 \u0628\u0627\u0634\u062f\u060c \u0634\u0646\u0627\u0633\u0627\u06cc\u06cc \u06a9\u0646\u06cc\u062f. \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u06cc\u0646 \u0627\u0637\u0644\u0627\u0639\u0627\u062a\u060c \u0645\u06cc \u062a\u0648\u0627\u0646\u06cc\u062f \u062a\u0635\u0645\u06cc\u0645\u0627\u062a \u0622\u06af\u0627\u0647\u0627\u0646\u0647 \u0627\u06cc \u0628\u0631\u0627\u06cc \u0628\u0647\u0628\u0648\u062f \u0641\u0631\u0622\u06cc\u0646\u062f \u067e\u0631\u0648\u0631\u0634\u060c \u06a9\u0627\u0647\u0634 \u0647\u0632\u06cc\u0646\u0647 \u0647\u0627\u06cc \u0645\u0631\u062a\u0628\u0637 \u0628\u0627 \u062a\u0644\u0642\u06cc\u062d \u0646\u0627\u0645\u0648\u0641\u0642 \u0648 \u0627\u0641\u0632\u0627\u06cc\u0634 \u06a9\u0627\u0631\u0627\u06cc\u06cc \u06a9\u0644\u06cc \u062a\u0648\u0644\u06cc\u062f \u0645\u062b\u0644 \u062f\u0631 \u06af\u0644\u0647 \u0634\u06cc\u0631\u06cc \u062e\u0648\u062f \u0628\u06af\u06cc\u0631\u06cc\u062f.'})}),controls:(0,e.jsxs)(a.Z,{sx:{px:2},children:[(0,e.jsxs)(s.Z,{children:["\u062f\u0642\u062a \u0645\u062d\u0648\u0631 \u0627\u0641\u0642\u06cc (",t,")"]}),(0,e.jsx)(c.ZP,{id:"bins-input",name:"bins",value:t,min:1,max:100,step:1,onChange:function(n,t){return i(t)},marks:[{value:1,label:"1"},{value:100,label:"100"}]})]}),title:"\u062a\u0648\u0632\u06cc\u0639 \u062a\u0639\u062f\u0627\u062f \u062a\u0644\u0642\u06cc\u062d\u200c\u0647\u0627 \u062a\u0627 \u062a\u0644\u0642\u06cc\u062d \u0645\u0648\u0641\u0642",chart:x&&(0,e.jsx)(l.Z,{data:x})})}}},function(n){n.O(0,[321,558,744,774,888,179],(function(){return t=48703,n(n.s=t);var t}));var t=n.O();_N_E=t}]);