(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@ant-design/x"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@ant-design/x"]||[]).push([["6527ead6"],{"4442d69d":function(e,l,t){"use strict";t.d(l,"__esModule",{value:!0}),t.d(l,"default",{enumerable:!0,get:function(){return a;}});var i=t("dcc18016"),n=t("11b38ed9"),a=e=>{let{item:{username:l,url:t}={}}=e;return(null==l?void 0:l.includes("github-actions"))?null:(0,i.jsx)(n.Tooltip,{title:l,children:(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:`https://github.com/${l}`,target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(n.Avatar,{size:"small",src:t,alt:l,children:l})})})});};},"6527ead6":function(e,l,t){"use strict";t.d(l,"__esModule",{value:!0}),t.d(l,"default",{enumerable:!0,get:function(){return m;}});var i=t("777fffbe"),n=t("dcc18016"),a=i._(t("56c58c62")),r=t("33cbdced"),d=i._(t("40b32d6b")),s=t("2ccdbe5e"),o=i._(t("896e0d47")),u=i._(t("ea6ba054")),c=i._(t("4442d69d"));let f=(0,r.createStyles)(({token:e,css:l})=>({listMobile:l`
    margin: 1em 0 !important;
  `,title:l`
    font-size: ${e.fontSizeSM}px;
    opacity: 0.5;
    margin-bottom: ${e.marginXS}px;
  `,list:l`
    display: flex;
    flex-wrap: wrap;
    clear: both;
    li {
      height: 24px;
      transition: all ${e.motionDurationSlow};
      margin-inline-end: -${e.marginXS}px;
    }
    &:hover {
      li {
        margin-inline-end: 0;
      }
    }
  `}));var m=({filename:e})=>{let{formatMessage:l}=(0,s.useIntl)(),{styles:t}=f(),{isMobile:i}=o.default.use(u.default);return e?(0,n.jsxs)("div",{className:(0,d.default)({[t.listMobile]:i}),children:[(0,n.jsx)("div",{className:t.title,children:l({id:"app.content.contributors"})}),(0,n.jsx)(a.default,{cache:!0,repo:"x",owner:"ant-design",branch:"main",fileName:e,className:t.list,renderItem:(e,l)=>(0,n.jsx)(c.default,{item:e,loading:l},null==e?void 0:e.url)})]}):null;};}}]);
//# sourceMappingURL=6527ead6-async.c964905d.js.map