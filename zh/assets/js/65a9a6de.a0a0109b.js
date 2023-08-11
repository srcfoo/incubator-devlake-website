"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[40070],{96442:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var r=i(87462),a=(i(67294),i(3905));i(61839);const n={title:"Requirement Granularity",description:"Requirement Granularity\n",sidebar_position:4},s=void 0,o={unversionedId:"Metrics/RequirementGranularity",id:"version-v0.17/Metrics/RequirementGranularity",title:"Requirement Granularity",description:"Requirement Granularity\n",source:"@site/versioned_docs/version-v0.17/Metrics/RequirementGranularity.md",sourceDirName:"Metrics",slug:"/Metrics/RequirementGranularity",permalink:"/zh/docs/v0.17/Metrics/RequirementGranularity",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.17/Metrics/RequirementGranularity.md",tags:[],version:"v0.17",sidebarPosition:4,frontMatter:{title:"Requirement Granularity",description:"Requirement Granularity\n",sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Requirement Delivery Rate",permalink:"/zh/docs/v0.17/Metrics/RequirementDeliveryRate"},next:{title:"Bug Age",permalink:"/zh/docs/v0.17/Metrics/BugAge"}},l={},u=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],m={toc:u};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,a.kt)("p",null,"The average number of story points per requirement."),(0,a.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Promote product teams to split requirements carefully, improve requirements quality, help developers understand requirements clearly, deliver efficiently and with high quality, and improve the project management capability of the team."),(0,a.kt)("li",{parentName:"ol"},"Establish a data-supported workload estimation model to help R&D teams calibrate their estimation methods and more accurately assess the granularity of requirements, which is useful to achieve better issue planning in project management.")),(0,a.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devlake.apache.org/livedemo/DataSources/Jira"},"Jira")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devlake.apache.org/livedemo/DataSources/GitHub"},"GitHub"))),(0,a.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,a.kt)("p",null,'The average story points of issues in type "REQUIREMENT" in the given data range.'),(0,a.kt)("b",null,"Data Sources Required"),(0,a.kt)("p",null,"This metric relies on ",(0,a.kt)("inlineCode",{parentName:"p"},"issues")," collected from Jira, GitHub, or TAPD."),(0,a.kt)("b",null,"Data Transformation Required"),(0,a.kt)("p",null,"This metric relies on the 'type-requirement' configuration in Jira, GitHub or TAPD's transformation rules while adding/editing a blueprint. This configuration tells DevLake what issues are ",(0,a.kt)("inlineCode",{parentName:"p"},"requirements"),"."),(0,a.kt)("p",null,"Besides, if you are importing Jira issues, you also need to configure the field of 'story_points' in the transformation."),(0,a.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Analyze the story points/requirement lead time of requirements to evaluate whether the ticket size, ie. requirement complexity is optimal."),(0,a.kt)("li",{parentName:"ol"},"Compare the estimated requirement granularity with the actual situation and evaluate whether the difference is reasonable by combining more microscopic workload metrics (e.g. lines of code/code equivalents)")))}d.isMDXComponent=!0}}]);