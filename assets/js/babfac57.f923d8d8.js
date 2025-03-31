"use strict";(self.webpackChunkvsc_docu=self.webpackChunkvsc_docu||[]).push([[444],{7635:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var t=s(5893),r=s(1151);const c={},a=void 0,i={id:"references/sdk",title:"sdk",description:"NOTE: THIS SECTION HAS NOT BEEN UPDATED FOR MAINNET VSC (PROCEED WITH CAUTION)",source:"@site/docs/references/sdk.md",sourceDirName:"references",slug:"/references/sdk",permalink:"/docs/references/sdk",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/docs/references/examples"},next:{title:"example-project-guess-game",permalink:"/docs/tutorials/example-project-guess-game"}},o={},l=[{value:"NOTE: THIS SECTION HAS NOT BEEN UPDATED FOR MAINNET VSC (PROCEED WITH CAUTION)",id:"note-this-section-has-not-been-updated-for-mainnet-vsc-proceed-with-caution",level:2},{value:"VSC javascript (assemblyscript) sdk",id:"vsc-javascript-assemblyscript-sdk",level:2},{value:"Example usage",id:"example-usage",level:3},{value:"Frequently used",id:"frequently-used",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"note-this-section-has-not-been-updated-for-mainnet-vsc-proceed-with-caution",children:"NOTE: THIS SECTION HAS NOT BEEN UPDATED FOR MAINNET VSC (PROCEED WITH CAUTION)"}),"\n",(0,t.jsx)(n.h1,{id:"sdk",children:"SDK"}),"\n",(0,t.jsx)(n.p,{children:"The VSC sdks are libraries that abstract away various functionalities that are useful in the context of coding a VSC smart contract."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Nice to know: They also serve access to e.g. the smart contract's database layer by exposing namespaces and interfaces. At the stage of the contract execution, invocations of such interfaces are translated to generalized calls of the VSC node. Thereby ensuring that those functionalities are equal regardless of the language implementation of the SDK."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"vsc-javascript-assemblyscript-sdk",children:"VSC javascript (assemblyscript) sdk"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/vsc-eco/sdk",children:"VSC javascript sdk"})," is a library that is compatible with assemblyscript projects, thereby it can be used directly in the ",(0,t.jsx)(n.a,{href:"git@github.com:vsc-eco/contract-template.git",children:"contract template"}),". It is included in the project by default."]}),"\n",(0,t.jsxs)(n.p,{children:["The API documentation can be found ",(0,t.jsx)(n.a,{href:"https://vsc-eco.github.io/sdk/",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"example-usage",children:"Example usage"}),"\n",(0,t.jsx)(n.p,{children:"Import the library."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { db, console } from "@vsc.eco/sdk/assembly";\n'})}),"\n",(0,t.jsx)(n.p,{children:"Execute a function."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'export function mySampleMethod(payload: String): string {\n  ...\n  db.setObject("key-1", payload);\n  const val = db.getObject("key-1");\n  console.log(val)\n  ...\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"frequently-used",children:"Frequently used"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"namespace db"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"db.setObject"}),"\n",(0,t.jsx)(n.li,{children:"db.getObject"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"namespace arrays"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Arrays.toHexString"}),"\n",(0,t.jsx)(n.li,{children:"Arrays.fromHexString"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"namespace console"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"console.log"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"no namespace"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"getEnv"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>a});var t=s(7294);const r={},c=t.createContext(r);function a(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);