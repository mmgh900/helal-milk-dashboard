(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{94341:function(n,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/milk-production",function(){return i(77464)}])},47046:function(n,t,i){"use strict";i.d(t,{Z:function(){return o}});var r=i(11527),e=i(58562),s=i.n(e),a=i(13372),c=i(78242),l=i(50192),x=i(40616);i(50959);function o(n){var t=n.link,i=(0,a.Z)(),e=(0,c.Z)(i.breakpoints.up("md"));return(0,r.jsx)(s(),{href:t,children:(0,r.jsx)(l.Z,{sx:{position:"absolute",left:0},size:"large",startIcon:(0,r.jsx)(x.Z,{sx:{fontSize:18}}),children:e?"\u0628\u0627\u0632\u06af\u0634\u062a":""})})}},55774:function(n,t,i){"use strict";i.d(t,{Z:function(){return j}});var r=i(11527),e=(i(50959),i(79443)),s=i(38308),a=i(8538),c=i(73035),l=i(26148),x=i(61189),o=i(39869);function u(n){var t=n.title,i=n.children;return(0,r.jsxs)(x.Z,{sx:{mb:3},variant:"outlined",children:[(0,r.jsx)(l.Z,{variant:"dense",children:(0,r.jsx)(c.Z,{variant:"h6",children:t})}),(0,r.jsx)(e.Z,{}),(0,r.jsx)(o.Z,{children:i})]})}var d=i(47046);function j(n){var t=n.title,i=n.description,x=n.chart,o=n.controls;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"center",position:"relative"},children:[(0,r.jsx)(d.Z,{link:"./"}),(0,r.jsx)(c.Z,{variant:"h5",children:t})]}),(0,r.jsx)(e.Z,{sx:{mb:4}}),(0,r.jsxs)(s.ZP,{spacing:2,width:"100%",container:!0,children:[(0,r.jsxs)(s.ZP,{item:!0,xs:12,md:4,children:[(0,r.jsxs)(u,{title:"\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0646\u0645\u0648\u062f\u0627\u0631",children:[(0,r.jsx)(c.Z,{children:"\u0646\u0627\u0645 \u0646\u0645\u0648\u062f\u0627\u0631"}),(0,r.jsx)(c.Z,{variant:"h6",children:t})]}),(0,r.jsx)(u,{title:"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u0646\u0645\u0648\u062f\u0627\u0631",children:o})]}),(0,r.jsx)(s.ZP,{item:!0,xs:12,md:8,sx:{display:"flex",justifyContent:"center"},children:x})]}),(0,r.jsx)(a.Z,{sx:{my:3},maxWidth:"md",children:(0,r.jsx)(u,{title:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a",children:i})})]})}},7856:function(n,t,i){"use strict";i.d(t,{Z:function(){return p}});var r=i(11527),e=(i(50959),i(49562)),s=i(13044),a=i(96825),c=i(70693),l=i(67982),x=i(18614),o=i(52724),u=i(35832),d=i(96556),j=i(13372),h=i(30888),f=i(78242),b=i(62851),Z=i(99605);function p(n){var t=n.data,i=(0,j.Z)(),p=(0,f.Z)(i.breakpoints.up("md")),m=(0,Z.Lm)();return(0,r.jsx)(h.Z,{width:"100%",children:(0,r.jsxs)(e.v,{width:p?.7*Math.min(i.breakpoints.values.xl,m)-60:m-16,height:500,data:null===t||void 0===t?void 0:t.data.map((function(n,i){return{bin:"\u0628\u0627\u0632\u0647 "+t.bins[i]+" \u062a\u0627 "+t.bins[i+1],"\u062a\u0639\u062f\u0627\u062f \u062f\u0631 \u0628\u0627\u0632\u0647":n}})),children:[(0,r.jsx)(s.K,{tick:{fontSize:12,fontFamily:"Pinar"},dataKey:"bin",angle:45,textAnchor:"end"}),(0,r.jsx)(a.B,{tick:{fontSize:12}}),(0,r.jsx)(c.u,{contentStyle:{backdropFilter:"blur(20px)",backgroundColor:(0,b.Fq)(i.palette.background.paper,.4),borderRadius:"10px",borderColor:"#ffffff33",aspectRatio:"27/9",fontFamily:"Pinar"}}),(0,r.jsx)(l.D,{}),(0,r.jsx)(x.q,{strokeDasharray:"3 3"}),(0,r.jsx)(o.$,{label:"\u062a\u0639\u062f\u0627\u062f",dataKey:"\u062a\u0639\u062f\u0627\u062f \u062f\u0631 \u0628\u0627\u0632\u0647",fill:i.palette.primary.main}),(0,r.jsx)(u.d,{y:0,stroke:"#666"}),(0,r.jsx)(d.z,{x1:"bin1",x2:"bin2",y1:0,fill:"#888888",fillOpacity:.2})]})})}},12547:function(n,t,i){"use strict";var r=i(73669).Z.create({baseURL:"http://2.180.5.196:8000"});t.Z=r},77464:function(n,t,i){"use strict";i.r(t),i.d(t,{default:function(){return u}});var r=i(11527),e=i(73035),s=i(50959),a=i(30888),c=i(68016),l=i(7856),x=i(55774),o=i(12547);function u(){var n=(0,s.useState)(10),t=n[0],i=n[1],u=(0,s.useState)(),d=u[0],j=u[1];return(0,s.useEffect)((function(){o.Z.get("/histograms/milk-production?bins=".concat(t)).then((function(n){j(n.data)}))}),[t]),(0,r.jsx)(x.Z,{description:(0,r.jsxs)(e.Z,{children:["\u0647\u06cc\u0633\u062a\u0648\u06af\u0631\u0627\u0645 \u0646\u0648\u0639\u06cc \u0646\u0645\u0648\u062f\u0627\u0631 \u0627\u0633\u062a \u06a9\u0647 \u0628\u0647 \u0645\u0627 \u06a9\u0645\u06a9 \u0645\u06cc \u06a9\u0646\u062f \u062a\u0627 \u062a\u0648\u0632\u06cc\u0639 \u06cc\u0627 \u06af\u0633\u062a\u0631\u0634 \u06cc\u06a9 \u0645\u062c\u0645\u0648\u0639\u0647 \u062e\u0627\u0635 \u0627\u0632 \u062f\u0627\u062f\u0647 \u0647\u0627 \u0631\u0627 \u062f\u0631\u06a9 \u06a9\u0646\u06cc\u0645. \u062f\u0631 \u0627\u06cc\u0646 \u0645\u0648\u0631\u062f\u060c \u0647\u06cc\u0633\u062a\u0648\u06af\u0631\u0627\u0645 \u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062a\u0648\u0644\u06cc\u062f \u0634\u06cc\u0631 \u0631\u0627 \u0628\u0631\u0627\u06cc \u0645\u0632\u0631\u0639\u0647 \u0644\u0628\u0646\u06cc \u0645\u062c\u0633\u0645 \u0645\u06cc \u06a9\u0646\u062f.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"\u0645\u062d\u0648\u0631 \u0627\u0641\u0642\u06cc \u06a9\u0647 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062d\u0648\u0631 x \u0646\u06cc\u0632 \u0634\u0646\u0627\u062e\u062a\u0647 \u0645\u06cc \u0634\u0648\u062f\u060c \u0645\u062d\u062f\u0648\u062f\u0647 \u06cc\u0627 \u062f\u0633\u062a\u0647 \u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u062a\u0648\u0644\u06cc\u062f \u0634\u06cc\u0631 \u0631\u0627 \u0646\u0634\u0627\u0646 \u0645\u06cc \u062f\u0647\u062f. \u0627\u06cc\u0646 \u062f\u0633\u062a\u0647 \u0647\u0627 \u0631\u0627 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0628\u0631 \u062d\u0633\u0628 \u0648\u0632\u0646 \u0648 \u06a9\u06cc\u0644\u0648\u06af\u0631\u0645 \u0634\u06cc\u0631 \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647 \u0627\u0633\u062a. \u0647\u0631 \u062f\u0633\u062a\u0647 \u06cc\u0627 \u0645\u062d\u062f\u0648\u062f\u0647 \u0628\u0627 \u06cc\u06a9 \u0646\u0648\u0627\u0631 \u062f\u0631 \u0646\u0645\u0648\u062f\u0627\u0631 \u0646\u0634\u0627\u0646 \u062f\u0627\u062f\u0647 \u0645\u06cc \u0634\u0648\u062f.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"\u0645\u062d\u0648\u0631 \u0639\u0645\u0648\u062f\u06cc\u060c \u0647\u0645\u0686\u0646\u06cc\u0646 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062d\u0648\u0631 y \u0634\u0646\u0627\u062e\u062a\u0647 \u0645\u06cc \u0634\u0648\u062f\u060c \u0646\u0634\u0627\u0646 \u062f\u0647\u0646\u062f\u0647 \u0641\u0631\u0627\u0648\u0627\u0646\u06cc \u06cc\u0627 \u062a\u0639\u062f\u0627\u062f \u0648\u0642\u0648\u0639 \u0628\u0631\u0627\u06cc \u0647\u0631 \u062f\u0633\u062a\u0647 \u06cc\u0627 \u0645\u062d\u062f\u0648\u062f\u0647 \u062a\u0648\u0644\u06cc\u062f \u0634\u06cc\u0631 \u0627\u0633\u062a. \u0627\u06cc\u0646 \u0646\u0634\u0627\u0646 \u0645\u06cc \u062f\u0647\u062f \u06a9\u0647 \u0686\u0646\u062f \u0628\u0627\u0631 \u0645\u062d\u062f\u0648\u062f\u0647 \u062e\u0627\u0635\u06cc \u0627\u0632 \u062a\u0648\u0644\u06cc\u062f \u0634\u06cc\u0631 \u062f\u0631 \u0645\u062c\u0645\u0648\u0639\u0647 \u062f\u0627\u062f\u0647 \u0645\u0634\u0627\u0647\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"\u0627\u0631\u062a\u0641\u0627\u0639 \u0647\u0631 \u0645\u06cc\u0644\u0647 \u062f\u0631 \u0646\u0645\u0648\u062f\u0627\u0631 \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u062f\u0641\u0639\u0627\u062a \u06cc\u0627 \u062a\u0639\u062f\u0627\u062f \u062a\u0648\u0644\u06cc\u062f \u0634\u06cc\u0631 \u0627\u0633\u062a \u06a9\u0647 \u062f\u0631 \u0622\u0646 \u0645\u062d\u062f\u0648\u062f\u0647 \u062e\u0627\u0635 \u0642\u0631\u0627\u0631 \u062f\u0627\u0631\u062f. \u0628\u0646\u0627\u0628\u0631\u0627\u06cc\u0646\u060c \u0645\u06cc\u0644\u0647 \u0647\u0627\u06cc \u0628\u0644\u0646\u062f\u062a\u0631 \u0646\u0634\u0627\u0646 \u062f\u0647\u0646\u062f\u0647 \u0641\u0631\u06a9\u0627\u0646\u0633 \u0628\u0627\u0644\u0627\u062a\u0631 \u062a\u0648\u0644\u06cc\u062f \u0634\u06cc\u0631 \u062f\u0631 \u0622\u0646 \u0645\u062d\u062f\u0648\u062f\u0647 \u0627\u0633\u062a.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"\u0628\u0627 \u0645\u0634\u0627\u0647\u062f\u0647 \u0647\u06cc\u0633\u062a\u0648\u06af\u0631\u0627\u0645\u060c \u062f\u0627\u0645\u062f\u0627\u0631 \u0645\u06cc \u062a\u0648\u0627\u0646\u062f \u0628\u06cc\u0646\u0634 \u0647\u0627\u06cc\u06cc \u0628\u0647 \u062f\u0633\u062a \u0622\u0648\u0631\u062f. \u0645\u062b\u0644\u0627:",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"\u0646\u0645\u0648\u062f\u0627\u0631 \u0645\u06cc \u062a\u0648\u0627\u0646\u062f \u0631\u0627\u06cc\u062c \u062a\u0631\u06cc\u0646 \u06cc\u0627 \u0645\u0639\u0645\u0648\u0644\u06cc \u062a\u0631\u06cc\u0646 \u0645\u062d\u062f\u0648\u062f\u0647 \u062a\u0648\u0644\u06cc\u062f \u0634\u06cc\u0631 \u0631\u0627 \u0646\u0634\u0627\u0646 \u062f\u0647\u062f. \u0628\u0644\u0646\u062f\u062a\u0631\u06cc\u0646 \u0646\u0648\u0627\u0631 \u0645\u062d\u062f\u0648\u062f\u0647 \u0628\u0627 \u0628\u06cc\u0634\u062a\u0631\u06cc\u0646 \u0641\u0631\u06a9\u0627\u0646\u0633 \u0631\u0627 \u0646\u0634\u0627\u0646 \u0645\u06cc \u062f\u0647\u062f \u0648 \u0633\u0637\u062d \u0645\u0639\u0645\u0648\u0644 \u062a\u0648\u0644\u06cc\u062f \u0634\u06cc\u0631 \u0631\u0627 \u0646\u0634\u0627\u0646 \u0645\u06cc \u062f\u0647\u062f. \u06a9\u0634\u0627\u0648\u0631\u0632 \u0645\u06cc \u062a\u0648\u0627\u0646\u062f \u0647\u0631 \u06af\u0648\u0646\u0647 \u0627\u0644\u06af\u0648\u0647\u0627\u06cc \u067e\u0631\u062a \u06cc\u0627 \u063a\u06cc\u0631\u0639\u0627\u062f\u06cc \u0631\u0627 \u062f\u0631 \u062f\u0627\u062f\u0647 \u0647\u0627 \u0634\u0646\u0627\u0633\u0627\u06cc\u06cc \u06a9\u0646\u062f. \u0627\u06af\u0631 \u0645\u06cc\u0644\u0647 \u0647\u0627\u06cc\u06cc \u0648\u062c\u0648\u062f \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f \u06a9\u0647 \u0628\u0647 \u0637\u0648\u0631 \u0642\u0627\u0628\u0644 \u062a\u0648\u062c\u0647\u06cc \u0627\u0632 \u0628\u0642\u06cc\u0647 \u0645\u062a\u0645\u0627\u06cc\u0632 \u0628\u0627\u0634\u062f\u060c \u0646\u0634\u0627\u0646 \u0645\u06cc \u062f\u0647\u062f \u06a9\u0647 \u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u0645\u0642\u0627\u062f\u06cc\u0631 \u0627\u0633\u062a\u062b\u0646\u0627\u06cc\u06cc \u062a\u0648\u0644\u06cc\u062f \u0634\u06cc\u0631 \u0648\u062c\u0648\u062f \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f \u06a9\u0647 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u062a\u0648\u062c\u0647 \u062f\u0627\u0631\u0646\u062f.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"\u0646\u0645\u0648\u062f\u0627\u0631 \u0647\u0645\u0686\u0646\u06cc\u0646 \u0646\u0645\u0627\u06cc \u06a9\u0644\u06cc \u0627\u0632 \u062a\u0648\u0632\u06cc\u0639 \u062a\u0648\u0644\u06cc\u062f \u0634\u06cc\u0631 \u0631\u0627 \u0627\u0631\u0627\u0626\u0647 \u0645\u06cc \u062f\u0647\u062f. \u0627\u06cc\u0646 \u0646\u0634\u0627\u0646 \u0645\u06cc\u200c\u062f\u0647\u062f \u06a9\u0647 \u0686\u06af\u0648\u0646\u0647 \u062f\u0627\u062f\u0647\u200c\u0647\u0627 \u062f\u0631 \u0645\u062d\u062f\u0648\u062f\u0647\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u067e\u062e\u0634 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f \u0648 \u0627\u06cc\u062f\u0647\u200c\u0627\u06cc \u0627\u0632 \u062a\u0646\u0648\u0639 \u062f\u0631 \u0633\u0637\u0648\u062d \u062a\u0648\u0644\u06cc\u062f \u0634\u06cc\u0631 \u0627\u0631\u0627\u0626\u0647 \u0645\u06cc\u200c\u062f\u0647\u062f. \u0628\u0647 \u0637\u0648\u0631 \u06a9\u0644\u06cc\u060c \u0627\u06cc\u0646 \u0646\u0645\u0648\u062f\u0627\u0631 \u0647\u06cc\u0633\u062a\u0648\u06af\u0631\u0627\u0645 \u0628\u0647 \u06a9\u0634\u0627\u0648\u0631\u0632 \u06a9\u0645\u06a9 \u0645\u06cc \u06a9\u0646\u062f \u062a\u0627 \u062a\u0648\u0632\u06cc\u0639 \u062a\u0648\u0644\u06cc\u062f \u0634\u06cc\u0631 \u0631\u0627 \u0628\u0647 \u0631\u0648\u0634\u06cc \u0633\u0627\u062f\u0647 \u0648 \u0634\u0647\u0648\u062f\u06cc \u062a\u062c\u0633\u0645 \u0648 \u062f\u0631\u06a9 \u06a9\u0646\u062f \u0648 \u0628\u0647 \u0622\u0646\u0647\u0627 \u0627\u062c\u0627\u0632\u0647 \u0645\u06cc \u062f\u0647\u062f \u062a\u0627 \u062a\u0635\u0645\u06cc\u0645\u0627\u062a \u0622\u06af\u0627\u0647\u0627\u0646\u0647 \u0627\u06cc \u062f\u0631 \u0645\u0648\u0631\u062f \u0639\u0645\u0644\u06cc\u0627\u062a \u0645\u0632\u0631\u0639\u0647 \u0644\u0628\u0646\u06cc \u062e\u0648\u062f \u0628\u06af\u06cc\u0631\u0646\u062f."]}),controls:(0,r.jsxs)(a.Z,{sx:{px:2},children:[(0,r.jsxs)(e.Z,{children:["\u062f\u0642\u062a \u0645\u062d\u0648\u0631 \u0627\u0641\u0642\u06cc (",t,")"]}),(0,r.jsx)(c.ZP,{id:"bins-input",name:"bins",value:t,min:1,max:100,step:1,onChange:function(n,t){return i(t)},marks:[{value:1,label:"1"},{value:100,label:"100"}]})]}),title:"\u0646\u0645\u0648\u062f\u0627\u0631 \u062a\u0648\u0632\u06cc\u0639 \u062a\u0648\u0644\u06cc\u062f \u0634\u06cc\u0631",chart:d&&(0,r.jsx)(l.Z,{data:d})})}}},function(n){n.O(0,[321,558,744,774,888,179],(function(){return t=94341,n(n.s=t);var t}));var t=n.O();_N_E=t}]);