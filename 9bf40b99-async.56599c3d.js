(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@ant-design/x"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@ant-design/x"]||[]).push([["9bf40b99"],{"9bf40b99":function(e,i,n){"use strict";n.d(i,"__esModule",{value:!0}),n.e(i,{default:function(){return p;},useStyle:function(){return s;}});var t=n("777fffbe"),d=n("dcc18016"),r=n("11b38ed9"),l=n("33cbdced"),o=t._(n("40b32d6b")),a=n("2ccdbe5e"),c=t._(n("896e0d47"));let s=(0,l.createStyles)(({token:e,css:i})=>{let{antCls:n}=e;return{anchorToc:i`
      scrollbar-width: thin;
      scrollbar-gutter: stable;
      ${n}-anchor {
        ${n}-anchor-link-title {
          font-size: ${e.fontSizeSM}px;
        }
      }
    `,tocWrapper:i`
      position: fixed;
      top: ${e.headerHeight+e.contentMarginTop-4}px;
      inset-inline-end: 0;
      width: 148px;
      padding: 0;
      border-radius: ${e.borderRadius}px;
      box-sizing: border-box;
      margin-inline-end: calc(8px - 100vw + 100%);
      z-index: 10;
      .toc-debug {
        color: ${e.purple6};
        &:hover {
          color: ${e.purple5};
        }
      }
      > div {
        box-sizing: border-box;
        width: 100%;
        max-height: calc(100vh - ${e.headerHeight+e.contentMarginTop+24}px) !important;
        margin: auto;
        overflow: auto;
        padding: ${e.paddingXXS}px;
        backdrop-filter: blur(8px);
      }

      @media only screen and (max-width: ${e.screenLG}px) {
        display: none;
      }
    `,articleWrapper:i`
      padding-inline: 48px 164px;
      padding-block: 0 32px;

      @media only screen and (max-width: ${e.screenLG}px) {
        & {
          padding: 0 ${2*e.paddingLG}px;
        }
      }
    `};});var p=({showDebug:e,debugDemos:i=[]})=>{let{styles:n}=s(),t=(0,l.useTheme)(),p=(0,a.useRouteMeta)(),u=(0,a.useTabMeta)(),h=c.default.useMemo(()=>((null==u?void 0:u.toc)||p.toc).reduce((e,i)=>{if(2===i.depth)e.push({...i});else if(3===i.depth){let n=e[e.length-1];n&&(n.children=n.children||[],n.children.push({...i}));}return e;},[]),[null==u?void 0:u.toc,p.toc]);return p.frontmatter.toc?(0,d.jsx)("section",{className:n.tocWrapper,children:(0,d.jsx)(r.Anchor,{affix:!1,className:n.anchorToc,targetOffset:t.anchorTop,showInkInFixed:!0,items:h.map(n=>{var t;return{href:`#${n.id}`,title:n.title,key:n.id,children:null===(t=n.children)||void 0===t?void 0:t.filter(n=>e||!i.includes(n.id)).map(e=>({key:e.id,href:`#${e.id}`,title:(0,d.jsx)("span",{className:(0,o.default)({"toc-debug":i.includes(e.id)}),children:null==e?void 0:e.title})}))};})})}):null;};}}]);
//# sourceMappingURL=9bf40b99-async.56599c3d.js.map