"use strict";(self.webpackChunkvsc_docu=self.webpackChunkvsc_docu||[]).push([[853],{9521:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=t(5893),s=t(1151);const r={},i="FAQ",a={id:"discussions/FAQ",title:"FAQ",description:"Do we supply node snapshots for node operators?",source:"@site/docs/discussions/FAQ.md",sourceDirName:"discussions",slug:"/discussions/FAQ",permalink:"/docs/discussions/FAQ",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/Introduction"},next:{title:"core-philosophy",permalink:"/docs/discussions/core-philosophy"}},d={},c=[{value:"Do we supply node snapshots for node operators?",id:"do-we-supply-node-snapshots-for-node-operators",level:2},{value:"Are there any node rewards?",id:"are-there-any-node-rewards",level:2},{value:"When will I be able to deploy my token on VSC?",id:"when-will-i-be-able-to-deploy-my-token-on-vsc",level:2},{value:"How do I run a node?",id:"how-do-i-run-a-node",level:2},{value:"Why do I see Error: No withdrawals to process?",id:"why-do-i-see-error-no-withdrawals-to-process",level:2},{value:"How do to update a node?",id:"how-do-to-update-a-node",level:2},{value:"How to check if a node is up to date?",id:"how-to-check-if-a-node-is-up-to-date",level:2},{value:"How do I migrate from the vsc-node repo to the vsc-deployment repo?",id:"how-do-i-migrate-from-the-vsc-node-repo-to-the-vsc-deployment-repo",level:2},{value:"How do I start writing a smart contract on VSC?",id:"how-do-i-start-writing-a-smart-contract-on-vsc",level:2},{value:"Why is the documentation structured in this way?",id:"why-is-the-documentation-structured-in-this-way",level:2}];function h(e){const o={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"faq",children:"FAQ"}),"\n",(0,n.jsx)(o.h2,{id:"do-we-supply-node-snapshots-for-node-operators",children:"Do we supply node snapshots for node operators?"}),"\n",(0,n.jsx)(o.p,{children:"No, you're node should sync up in ~1 day. If it takes significantly longer than that, contact us."}),"\n",(0,n.jsx)(o.h2,{id:"are-there-any-node-rewards",children:"Are there any node rewards?"}),"\n",(0,n.jsx)(o.p,{children:"Not yet. We have plans of doing a proof of burn model were node operators essentially buy credits to produce blocks. Then, when you produce blocks, you'd get a small reward on top of your initial investment.\nNote: We are not guaranteeing any specifics at the moment. This is subject to change as we do addition research."}),"\n",(0,n.jsx)(o.h2,{id:"when-will-i-be-able-to-deploy-my-token-on-vsc",children:"When will I be able to deploy my token on VSC?"}),"\n",(0,n.jsx)(o.p,{children:"We do not have a specific timeline for this.\nHowever, we are currently working on token and wrapping technology internally with HIVE, HBD, and BTC. Once all the kinks are ironed out with that, we will define public token standard(s) and create a reference implementation for each of those standard(s)."}),"\n",(0,n.jsx)(o.h2,{id:"how-do-i-run-a-node",children:"How do I run a node?"}),"\n",(0,n.jsxs)(o.p,{children:["Checkout ",(0,n.jsx)(o.a,{href:"https://github.com/vsc-eco/vsc-deployment",children:"this repository"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"why-do-i-see-error-no-withdrawals-to-process",children:"Why do I see Error: No withdrawals to process?"}),"\n",(0,n.jsx)(o.p,{children:"This is typically normal, especially when your node is re-indexing. Most blocks don't generate withdrawals from the multisig, at the moment. In fact, at the time of writing, there should only be 1 withdrawal from vaultec, so you should see this message many times in your logs."}),"\n",(0,n.jsx)(o.h2,{id:"how-do-to-update-a-node",children:"How do to update a node?"}),"\n",(0,n.jsx)(o.p,{children:"Firstly, be sure to use the deployment from #4 \u2060faqs\u2060 and then run sudo docker-compose up -d. This will pull the latest VSC node docker image automatically."}),"\n",(0,n.jsx)(o.h2,{id:"how-to-check-if-a-node-is-up-to-date",children:"How to check if a node is up to date?"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.code,{children:"sudo docker-compose exec vsc-node cat .git/refs/heads/main"})}),"\n",(0,n.jsx)(o.p,{children:"This will show you the commit you are on."}),"\n",(0,n.jsxs)(o.p,{children:["Then you can compare it the latest commit in the vsc-node ",(0,n.jsx)(o.a,{href:"https://github.com/vsc-eco/vsc-node/commits/main/",children:"GitHub repo"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"how-do-i-migrate-from-the-vsc-node-repo-to-the-vsc-deployment-repo",children:"How do I migrate from the vsc-node repo to the vsc-deployment repo?"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsx)(o.li,{children:"cd ~/vsc-node (or where ever your vsc-node repo is)"}),"\n",(0,n.jsx)(o.li,{children:"sudo docker-compose down"}),"\n",(0,n.jsx)(o.li,{children:"sudo ./migrate.sh"}),"\n",(0,n.jsx)(o.li,{children:"cd ../vsc-deployment (or where ever you set the new repo to be)"}),"\n",(0,n.jsx)(o.li,{children:"sudo docker-compose up -d"}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"how-do-i-start-writing-a-smart-contract-on-vsc",children:"How do I start writing a smart contract on VSC?"}),"\n",(0,n.jsxs)(o.p,{children:["This is our contract template. It should be enough to get started. There is usage and suggestions in ",(0,n.jsx)(o.a,{href:"https://github.com/vsc-eco/contract-template",children:"this repo"})," README."]}),"\n",(0,n.jsxs)(o.p,{children:["Also, ",(0,n.jsx)(o.a,{href:"https://github.com/vsc-eco/dex",children:"here is a DEX"})," that we are working on that tries to use/showcase best practices for writing VSC contracts."]}),"\n",(0,n.jsx)(o.p,{children:"As for a formal docs site, we don't have that at the moment."}),"\n",(0,n.jsx)(o.p,{children:"However, you can checkout the AssemblyScript docs for usage of the smart contract language. It is very similar to TypeScript. Then, everything you need to interface with the VSC chain state is available in the @vsc.eco/sdk npm package."}),"\n",(0,n.jsx)(o.p,{children:"If you have any concrete suggestions about what we should include in a formal documentation site, please let us know."}),"\n",(0,n.jsx)(o.h2,{id:"why-is-the-documentation-structured-in-this-way",children:"Why is the documentation structured in this way?"}),"\n",(0,n.jsxs)(o.p,{children:["The documentation approach is based on the ",(0,n.jsx)(o.em,{children:"Di\xe1taxis"})," principle. You can watch a summary about it ",(0,n.jsx)(o.a,{href:"https://www.youtube.com/watch?v=t4vKPhjcMZg",children:"here"}),"."]})]})}function l(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,o,t)=>{t.d(o,{Z:()=>a,a:()=>i});var n=t(7294);const s={},r=n.createContext(s);function i(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);