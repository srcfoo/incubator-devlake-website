"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[8396],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={title:"Using Advanced Mode",sidebar_position:6,description:"Using the advanced mode of Config-UI\n"},i=void 0,s={unversionedId:"UserManuals/ConfigUI/AdvancedMode",id:"UserManuals/ConfigUI/AdvancedMode",title:"Using Advanced Mode",description:"Using the advanced mode of Config-UI\n",source:"@site/docs/UserManuals/ConfigUI/AdvancedMode.md",sourceDirName:"UserManuals/ConfigUI",slug:"/UserManuals/ConfigUI/AdvancedMode",permalink:"/docs/UserManuals/ConfigUI/AdvancedMode",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/UserManuals/ConfigUI/AdvancedMode.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Using Advanced Mode",sidebar_position:6,description:"Using the advanced mode of Config-UI\n"},sidebar:"docsSidebar",previous:{title:"Configuring Jenkins",permalink:"/docs/UserManuals/ConfigUI/Jenkins"},next:{title:"Grafana User Guide",permalink:"/docs/UserManuals/Dashboards/GrafanaUserGuide"}},l={},c=[{value:"Why advanced mode?",id:"why-advanced-mode",level:2},{value:"How to use advanced mode to create pipelines?",id:"how-to-use-advanced-mode-to-create-pipelines",level:2},{value:"Examples",id:"examples",level:2}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"why-advanced-mode"},"Why advanced mode?"),(0,o.kt)("p",null,"Advanced mode allows users to create any pipeline by writing JSON. This is useful for users who want to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Collect multiple GitHub/GitLab repos or Jira projects within a single pipeline"),(0,o.kt)("li",{parentName:"ol"},"Have fine-grained control over what entities to collect or what subtasks to run for each plugin"),(0,o.kt)("li",{parentName:"ol"},"Orchestrate a complex pipeline that consists of multiple stages of plugins.")),(0,o.kt)("p",null,"Advanced mode gives the most flexibility to users by exposing the JSON API."),(0,o.kt)("h2",{id:"how-to-use-advanced-mode-to-create-pipelines"},"How to use advanced mode to create pipelines?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Click on "+ New Blueprint" on the Blueprint page.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(96371).Z,width:"2746",height:"448"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},'In step 1, click on the "Advanced Mode" link.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(83684).Z,width:"1450",height:"548"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"The pipeline editor expects a 2D array of plugins. The first dimension represents different stages of the pipeline and the second dimension describes the plugins in each stage. Stages run in sequential order and plugins within the same stage runs in parallel. We provide some templates for users to get started. Please also see the next section for some examples.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(87850).Z,width:"1548",height:"984"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"You can choose how often you would like to sync your data in this step by selecting a sync frequency option or enter a cron code to specify your prefered schedule. After setting up the Blueprint, you will be prompted to the Blueprint's activity detail page, where you can track the progress of the current run and wait for it to finish before the dashboards become available. You can also view all historical runs of previously created Blueprints from the list on the Blueprint page.")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Collect multiple GitLab repos sequentially.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When there're multiple collection tasks against a single data source, we recommend running these tasks sequentially since the collection speed is mostly limited by the API rate limit of the data source.\nRunning multiple tasks against the same data source is unlikely to speed up the process and may overwhelm the data source.")),(0,o.kt)("p",null,"Below is an example for collecting 2 GitLab repos sequentially. It has 2 stages, each contains a GitLab task."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[\n  [\n    {\n      "Plugin": "gitlab",\n      "Options": {\n        "projectId": 15238074\n      }\n    }\n  ],\n  [\n    {\n      "Plugin": "gitlab",\n      "Options": {\n        "projectId": 11624398\n      }\n    }\n  ]\n]\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Collect a GitHub repo and a Jira board in parallel")),(0,o.kt)("p",null,"Below is an example for collecting a GitHub repo and a Jira board in parallel. It has a single stage with a GitHub task and a Jira task. Since users can configure multiple Jira connection, it's required to pass in a ",(0,o.kt)("inlineCode",{parentName:"p"},"connectionId")," for Jira task to specify which connection to use."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[\n  [\n    {\n      "Plugin": "github",\n      "Options": {\n        "repo": "lake",\n        "owner": "merico-dev"\n      }\n    },\n    {\n      "Plugin": "jira",\n      "Options": {\n        "connectionId": 1,\n        "boardId": 76\n      }\n    }\n  ]\n]\n')))}p.isMDXComponent=!0},96371:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/AdvancedMode1-b57f41fff7e23f19c2af911e2adaddcf.png"},83684:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/AdvancedMode2-3dd7ce37847a5d866cad6d9a45779830.png"},87850:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/AdvancedMode3-303a06ebfeed1ba23b72ecd1562129c0.png"}}]);