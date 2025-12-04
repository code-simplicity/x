(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@ant-design/x"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@ant-design/x"]||[]).push([["44b6dbda"],{af883c60:function(e,n,a){"use strict";a.d(n,"__esModule",{value:!0}),a.d(n,"default",{enumerable:!0,get:function(){return c;}});var i=a("777fffbe"),d=a("dcc18016"),s=a("33cbdced"),r=i._(a("40b32d6b"));let t=(0,s.createStyles)(({token:e,css:n})=>({container:n`
      width: 100%;
      margin: 0 auto;
      max-width: ${e.pcMaxWidth-2*e.pcContainerMargin}px;
      font-family: AlibabaPuHuiTi, ${e.fontFamily}, sans-serif;

      @media only screen and (max-width: ${e.pcMaxWidth}px) {
        max-width: calc(100vw - ${2*e.pcContainerMargin}px);
      }

      @media only screen and (max-width: ${e.mobileMaxWidth}px) {
        max-width: calc(100vw - ${2*e.marginLG}px);
      }
    `,title:n`
      font-size: 48px;
      color: #fff;
      text-align: center;
      padding-bottom: ${e.padding}px;

      @media only screen and (max-width: ${e.mobileMaxWidth}px) {
        font-size: ${e.fontSizeHeading1}px;
      }
    `,desc:n`
      color: ${e.colorTextSecondary};
      max-width: 880px !important;
      margin: 0 auto;
      text-align: center;
      padding-bottom: ${e.padding}px;
    `}));var c=e=>{let{styles:n}=t();return(0,d.jsxs)("div",{className:(0,r.default)(n.container,e.className),style:e.style,onClick:e.onClick,children:[e.title&&(0,d.jsx)("h2",{className:n.title,children:e.title}),e.desc&&(0,d.jsx)("p",{className:n.desc,children:e.desc}),e.children]});};},c190b68c:function(e,n,a){"use strict";var i=a("852bbaa9")._;a.d(n,"__esModule",{value:!0}),a.d(n,"default",{enumerable:!0,get:function(){return x;}});var d=a("777fffbe"),s=a("dcc18016"),r=a("33cbdced"),t=d._(a("40b32d6b")),c=a("896e0d47"),l=d._(a("6089b31e")),o=d._(a("c1e53507"));let u=(0,r.createStyles)(({token:e,css:n})=>({section:n`
      background: linear-gradient(180deg, #1e2226e6 0%, #1c2024 38%, #16191c 100%);
      border-radius: 40px 40px 0 0;
      backdrop-filter: blur(40px);
      display: flex;
      flex-direction: column;
      gap: ${e.pcContainerMargin}px;
      padding: ${e.pcContainerMargin}px 0;
    `,container:n`
      margin-top: -40px;
    `,framework:n`
      border-radius: 0;
      background-image: linear-gradient(90deg, #5a37e6 0%, #0059c9 100%);
    `}));var x=()=>{let{styles:e}=u(),n=(0,c.lazy)(()=>Promise.all([a.ensure("vendors_5"),a.ensure("common"),a.ensure("61c5fd7b")]).then(a.dr(i,a.bind(a,"61c5fd7b")))),d=(0,c.lazy)(()=>Promise.all([a.ensure("vendors_5"),a.ensure("common"),a.ensure("b8358547")]).then(a.dr(i,a.bind(a,"b8358547")))),r=(0,c.lazy)(()=>Promise.all([a.ensure("vendors_5"),a.ensure("common"),a.ensure("8dbb7305")]).then(a.dr(i,a.bind(a,"8dbb7305")))),x=(0,c.lazy)(()=>Promise.all([a.ensure("vendors_5"),a.ensure("common"),a.ensure("f7b5ca0b")]).then(a.dr(i,a.bind(a,"f7b5ca0b"))));return(0,s.jsxs)("main",{children:[(0,s.jsx)(o.default,{}),(0,s.jsx)("section",{className:e.section,children:(0,s.jsx)(l.default,{})}),(0,s.jsx)("section",{className:(0,t.default)(e.section,e.container),children:(0,s.jsx)(c.Suspense,{children:(0,s.jsx)(x,{})})}),(0,s.jsxs)("section",{className:(0,t.default)(e.section,e.container),children:[(0,s.jsx)(c.Suspense,{children:(0,s.jsx)(r,{})}),(0,s.jsx)(c.Suspense,{children:(0,s.jsx)(d,{})})]}),(0,s.jsx)("section",{className:(0,t.default)(e.section,e.framework,e.container),children:(0,s.jsx)(c.Suspense,{children:(0,s.jsx)(n,{})})})]});};}}]);
//# sourceMappingURL=44b6dbda-async.9f8488ac.js.map