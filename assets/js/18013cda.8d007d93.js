"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[8709],{14386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));n(61839);const l={title:"BitBucket(Beta)",description:"BitBucket Plugin\n"},r=void 0,s={unversionedId:"Plugins/bitbucket",id:"Plugins/bitbucket",title:"BitBucket(Beta)",description:"BitBucket Plugin\n",source:"@site/docs/Plugins/bitbucket.md",sourceDirName:"Plugins",slug:"/Plugins/bitbucket",permalink:"/docs/next/Plugins/bitbucket",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Plugins/bitbucket.md",tags:[],version:"current",frontMatter:{title:"BitBucket(Beta)",description:"BitBucket Plugin\n"},sidebar:"docsSidebar",previous:{title:"Plugins",permalink:"/docs/next/Plugins"},next:{title:"Customize",permalink:"/docs/next/Plugins/customize"}},o={},u=[{value:"Summary",id:"summary",level:2},{value:"Entities",id:"entities",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Configuration",id:"configuration",level:2},{value:"API Sample Request",id:"api-sample-request",level:2},{value:"References",id:"references",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"This plugin collects various entities from Bitbucket, including pull requests, issues, comments, pipelines, git commits, and etc."),(0,a.kt)("p",null,"As of v0.14.2, ",(0,a.kt)("inlineCode",{parentName:"p"},"bitbucket")," plugin can only be invoked through DevLake API. Its support in Config-UI is WIP."),(0,a.kt)("h2",{id:"entities"},"Entities"),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/Overview/SupportedDataSources#data-collection-scope-by-each-plugin"},"BitBucket entities")," collected by this plugin."),(0,a.kt)("h2",{id:"metrics"},"Metrics"),(0,a.kt)("p",null,"Metrics that can be calculated based on the data collected from bitbucket:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/Metrics/CommitCount"},"Commit Count")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/Metrics/CommitAuthorCount"},"Commit Author Count")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/Metrics/AddedLinesOfCode"},"Added Lines of Code")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/Metrics/DeletedLinesOfCode"},"Deleted Lines of Code")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/Metrics/PRCount"},"PR Count")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/Metrics/PRTimeToMerge"},"PR Time To Merge")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/Metrics/PRMergeRate"},"PR Merge Rate")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/Metrics/PRReviewDepth"},"PR Review Depth")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/Metrics/PRSize"},"PR Size")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/Metrics/BuildCount"},"Build Count")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/Metrics/BuildDuration"},"Build Duration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/Metrics/BuildSuccessRate"},"Build Success Rate"))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configuring Bitbucket via ",(0,a.kt)("a",{parentName:"li",href:"/docs/next/Configuration/BitBucket"},"Config UI"))),(0,a.kt)("h2",{id:"api-sample-request"},"API Sample Request"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Please replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),' in the sample requests with your actual DevLake API endpoint. For how to view DevLake API\'s swagger documentation, please refer to the "Using DevLake API" section of ',(0,a.kt)("a",{parentName:"p",href:"/docs/next/DeveloperManuals/DeveloperSetup"},"Developer Setup"),".")),(0,a.kt)("p",null,"You can trigger data collection by making a POST request to ",(0,a.kt)("inlineCode",{parentName:"p"},"/pipelines"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl \'http://localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n  "name": "project1",\n  "plan": [\n    [\n      {\n        "plugin": "bitbucket",\n        "options": {\n          "connectionId": 1,\n          "fullName": "likyh/likyhphp",\n          "transformationRules":{\n            "deploymentPattern":"",\n            "productionPattern":"",\n            "issueStatusTodo":"new,open",\n            "issueStatusInProgress":"",\n            "issueStatusDone":"resolved,closed",\n            "issueStatusOther":"on hold,wontfix,duplicate,invalid"\n          }\n        }\n      }\n    ]\n  ]\n}\n\'\n')),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/DeveloperManuals/DeveloperSetup#references"},"references"))))}p.isMDXComponent=!0}}]);