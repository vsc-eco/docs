"use strict";(self.webpackChunkvsc_docu=self.webpackChunkvsc_docu||[]).push([[549],{8575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var s=n(5893),a=n(1151);const o={},r=void 0,i={id:"tutorials/example-project-guess-game",title:"example-project-guess-game",description:"NOTE: THIS SECTION HAS NOT BEEN UPDATED FOR MAINNET VSC (PROCEED WITH CAUTION)",source:"@site/docs/tutorials/example-project-guess-game.md",sourceDirName:"tutorials",slug:"/tutorials/example-project-guess-game",permalink:"/docs/tutorials/example-project-guess-game",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sdk",permalink:"/docs/references/sdk"},next:{title:"first-contract",permalink:"/docs/tutorials/first-contract"}},c={},h=[{value:"NOTE: THIS SECTION HAS NOT BEEN UPDATED FOR MAINNET VSC (PROCEED WITH CAUTION)",id:"note-this-section-has-not-been-updated-for-mainnet-vsc-proceed-with-caution",level:2},{value:"What is it about",id:"what-is-it-about",level:2},{value:"How to play",id:"how-to-play",level:2},{value:"Deploy the contract",id:"deploy-the-contract",level:3},{value:"Start the UI",id:"start-the-ui",level:3},{value:"Play the game",id:"play-the-game",level:3},{value:"What happens in the background?",id:"what-happens-in-the-background",level:2},{value:"Known issues",id:"known-issues",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"note-this-section-has-not-been-updated-for-mainnet-vsc-proceed-with-caution",children:"NOTE: THIS SECTION HAS NOT BEEN UPDATED FOR MAINNET VSC (PROCEED WITH CAUTION)"}),"\n",(0,s.jsx)(t.h1,{id:"guess-the-number-game",children:"Guess the number game"}),"\n",(0,s.jsx)(t.h2,{id:"what-is-it-about",children:"What is it about"}),"\n",(0,s.jsx)(t.p,{children:"This simple game demonstrates the feasibility of integrating the VSC network into user-facing applications."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"guess-game-frontend",src:n(815).Z+"",width:"2560",height:"1304"})}),"\n",(0,s.jsxs)(t.p,{children:["The game is very straightforward, 2 players take guesses of numbers and the player that's guess is closer to a ",(0,s.jsx)(t.em,{children:"pseudo"})," generated random number wins the round. When a player wins a round, they advance the next step on the ladder."]}),"\n",(0,s.jsx)(t.p,{children:"At the end, the player that won the most amount of rounds wins."}),"\n",(0,s.jsx)(t.h2,{id:"how-to-play",children:"How to play"}),"\n",(0,s.jsx)(t.p,{children:"We first deploy the contract that serves as the backend of the game. Afterwards, we start 2 instances of the frontend that are then going to play against each other."}),"\n",(0,s.jsx)(t.h3,{id:"deploy-the-contract",children:"Deploy the contract"}),"\n",(0,s.jsxs)(t.p,{children:["Clone the repository of the ",(0,s.jsx)(t.a,{href:"https://github.com/Pl8tinium/vsc-app-example-guess-game-contract",children:"contract"})," and install the npm packages."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"git clone git@github.com:Pl8tinium/vsc-app-example-guess-game-contract.git\nnpm install\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Create an ",(0,s.jsx)(t.em,{children:".env"})," file to provide your credentials for the contract deployment. Use the ",(0,s.jsx)(t.em,{children:".env.example"})," file as a template!"]}),"\n",(0,s.jsx)(t.p,{children:"Start an IPFS gateway on your local machine."}),"\n",(0,s.jsx)(t.p,{children:"Deploy the contract"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm run deploy\n"})}),"\n",(0,s.jsx)(t.p,{children:"In the output logs, you should be able to find the contract address."}),"\n",(0,s.jsx)(t.h3,{id:"start-the-ui",children:"Start the UI"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://pl8tinium.github.io/vsc-app-example-guess-game-frontend/",children:"The frontend is now also directly being served."})," Therefore there is no need anymore to build the project locally."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Clone the repository of the ",(0,s.jsx)(t.a,{href:"https://github.com/Pl8tinium/vsc-app-example-guess-game-frontend",children:"frontend"})," and install the npm packages."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"git clone git@github.com:Pl8tinium/vsc-app-example-guess-game-frontend.git\nnpm install\n"})}),"\n",(0,s.jsx)(t.p,{children:"Start the frontend."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,s.jsx)(t.p,{children:"The logs should hint you the localhost address the server was bound to. Open this address twice to simulate a 2 player environment."}),"\n",(0,s.jsx)(t.p,{children:"You can also start the frontend on another machine if you want to simulate a real world scenario or genuinely just want to play the game with someone else."}),"\n",(0,s.jsx)(t.h3,{id:"play-the-game",children:"Play the game"}),"\n",(0,s.jsx)(t.p,{children:"Both players need to provide authentification credentials. This can be done by either using a HIVE or light account."}),"\n",(0,s.jsx)(t.p,{children:"After credentials are provided the contract address needs to be input."}),"\n",(0,s.jsxs)(t.p,{children:["Now start the contract status check by pressing the button ",(0,s.jsx)(t.code,{children:"Enable contract status check"}),". This process regularly scans the contract storage for changes so that your frontend can react to it."]}),"\n",(0,s.jsxs)(t.p,{children:["One of the 2 players can now start the game session by clicking start game. The other player can then join via the button ",(0,s.jsx)(t.code,{children:"Join game"}),"."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Note: The current block times don't provide instant feedback to your actions. Press the buttons once and wait for some time, before you press the buttons again. Do ",(0,s.jsx)(t.em,{children:"NOT"})," spam the buttons. You can also see the state of your transaction in a VSC block explorer and you can check the developer console of the frontend for possible errors related to the submission."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The game should now be initiated. Both players can, independently of each other, take a random guess. Just insert a number into the text box and confirm with ",(0,s.jsx)(t.code,{children:"Submit guess"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["This process repeats until a winner is found. The UI updates accordingly and the game can be reset (replayed) by the ",(0,s.jsx)(t.code,{children:"Reset game"})," button."]}),"\n",(0,s.jsx)(t.h2,{id:"what-happens-in-the-background",children:"What happens in the background?"}),"\n",(0,s.jsx)(t.p,{children:"The logic of the smart contract is the core of the game. It prevents players from cheating by being responsible for the random number generation and the decision making when it comes to announcing the winner."}),"\n",(0,s.jsxs)(t.p,{children:["Under the hood, it has multiple entrypoints that mirror the basic functionalities that were described in the ",(0,s.jsx)(t.em,{children:"play the game"})," section. The frontend is simply just a wrapper to invoke those functions."]}),"\n",(0,s.jsx)(t.p,{children:"Don't hesitate to take a look at the code! It should be fairly simple to understand, because of it's very basic functionality."}),"\n",(0,s.jsx)(t.h2,{id:"known-issues",children:"Known issues"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"For each guess wait for the transaction to be confirmed by a block. It is currently not possible to execute 2 guess transactions in the same block."}),"\n",(0,s.jsx)(t.li,{children:"The reset functionality does not work at this moment in time. You need to redeploy the contract in case you want to play again."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},815:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/guess-game-frontend-1b6545652091fd0596484bf7c78a65f0.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var s=n(7294);const a={},o=s.createContext(a);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);