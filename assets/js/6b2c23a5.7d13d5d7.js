"use strict";(self.webpackChunkvsc_docu=self.webpackChunkvsc_docu||[]).push([[602],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={slug:"running-a-node"},a="Running a node",l={unversionedId:"Getting Started/Running a node",id:"Getting Started/Running a node",title:"Running a node",description:"This tutorial will guide you through the process of setting up a VSC node .",source:"@site/docs/Getting Started/Running a node.md",sourceDirName:"Getting Started",slug:"/Getting Started/running-a-node",permalink:"/docs/Getting Started/running-a-node",draft:!1,tags:[],version:"current",frontMatter:{slug:"running-a-node"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/Introduction"},next:{title:"Creating your first smart contract",permalink:"/docs/Getting Started/creating-your-first-smart-contract"}},c={},u=[],s={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running-a-node"},"Running a node"),(0,o.kt)("p",null,"This tutorial will guide you through the process of setting up a VSC node ."),(0,o.kt)("p",null,"Requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hive account (50HP, will rise in the future)"),(0,o.kt)("li",{parentName:"ul"},"Technical knowledge of using a command line interface"),(0,o.kt)("li",{parentName:"ul"},"Docker and docker-compose installed. Please see ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"https://docs.docker.com/get-docker/")," for installation guide for docker. ")),(0,o.kt)("p",null,"System requirements are very low, in the future requirements will rise as network usage incrases."),(0,o.kt)("p",null,"System requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Raspberry pi 4 or better"),(0,o.kt)("li",{parentName:"ul"},"4 cores, 2GB ram or better")),(0,o.kt)("p",null,"The setup:"),(0,o.kt)("p",null,"1 ) ",(0,o.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/vsc-eco/vsc-node"),"\n2 ) ",(0,o.kt)("inlineCode",{parentName:"p"},"cd vsc-node"),"\n3 ) < Fill in .env file here >"),(0,o.kt)("p",null,"You'll need to create a .env file with the following values from the .env.example file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Fill these in with your hive account details\nHIVE_ACCOUNT=Insert hive account username\nHIVE_ACCOUNT_POSTING=Insert hive account posting key\nHIVE_ACCOUNT_ACTIVE=Insert hive account active key\n")),(0,o.kt)("p",null,"We generally recommend you use a different Hive account from your main account."),(0,o.kt)("p",null,"4 ) ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose up -d")),(0,o.kt)("p",null,"You should be off to the races at this point! We can verify that your node is operating correctly on our discord server. Please actively monitor our Hive blog and discord server for incoming updates regarding VSC. You will need to consistent update your node as we release new versions of the software. Staying up to date with the rest of the network is critical in ensuring reliable operation of the network."))}d.isMDXComponent=!0}}]);