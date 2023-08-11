"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[56617],{8871:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=i(87462),r=(i(67294),i(3905));i(61839);const o={title:"PR Time To Merge",description:"PR Time To Merge\n",sidebar_position:19},n=void 0,s={unversionedId:"Metrics/PRTimeToMerge",id:"Metrics/PRTimeToMerge",title:"PR Time To Merge",description:"PR Time To Merge\n",source:"@site/docs/Metrics/PRTimeToMerge.md",sourceDirName:"Metrics",slug:"/Metrics/PRTimeToMerge",permalink:"/zh/docs/Metrics/PRTimeToMerge",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Metrics/PRTimeToMerge.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"PR Time To Merge",description:"PR Time To Merge\n",sidebar_position:19},sidebar:"docsSidebar",previous:{title:"PR Deploy Time",permalink:"/zh/docs/Metrics/PRDeployTime"},next:{title:"PR Merge Rate",permalink:"/zh/docs/Metrics/PRMergeRate"}},l={},d=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in?",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],m={toc:d};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,r.kt)("p",null,"The time it takes from when a PR is issued to when it is merged. Essentially, PR Time to Merge = PR Pickup Time + PR Review Time."),(0,r.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,r.kt)("p",null,"The delay of reviewing and waiting to review PRs has large impact on delivery speed, while reasonably short PR Time to Merge can indicate frictionless teamwork. Improving on this metric is the key to reduce PR cycle time."),(0,r.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/livedemo/DataSources/GitHub"},"GitHub")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/livedemo/OSSMaintainers/WeeklyCommunityRetro"},"Weekly Community Retro"))),(0,r.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,r.kt)("b",null,"Data Sources Required"),(0,r.kt)("p",null,"This metric relies on PRs/MRs collected from GitHub, GitLab, BitBucket, Gitee or other code review tools."),(0,r.kt)("b",null,"Data Transformation Required"),(0,r.kt)("p",null,"N/A"),(0,r.kt)("b",null,"SQL Queries"),(0,r.kt)("p",null,"The following SQL shows how to find the ",(0,r.kt)("inlineCode",{parentName:"p"},"mean time to merge of PRs")," in specific repositories and given time range."),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(78707).Z,width:"1118",height:"329"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SELECT\n    avg(TIMESTAMPDIFF(Minute,created_date,merged_date)/1440)\nFROM \n    pull_requests\nWHERE \n  -- $__timeFilter will take Grafana's time range\n  $__timeFilter(created_date)\n  -- please replace the repo ids with your own, or create a '$repo_id' variable in Grafana\n    and base_repo_id in ('repo_1', 'repo_2')\n    and merged_date is not null\n")),(0,r.kt)("p",null,"If you want to measure the monthly trend of ",(0,r.kt)("inlineCode",{parentName:"p"},"PR time to merge")," in the screenshot below, please run the following SQL in Grafana. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(55489).Z,width:"1120",height:"329"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"with _prs as(\n  SELECT\n    DATE_ADD(date(created_date), INTERVAL -DAY(date(created_date))+1 DAY) as time,\n    avg(TIMESTAMPDIFF(Minute,created_date,merged_date)/1440) as time_to_merge\n  FROM pull_requests\n  WHERE\n    $__timeFilter(created_date)\n    -- the following condition will remove the month with incomplete data\n    and created_date >= DATE_ADD(DATE_ADD($__timeFrom(), INTERVAL -DAY($__timeFrom())+1 DAY), INTERVAL +1 MONTH)\n    -- please replace the repo ids with your own, or create a '$repo_id' variable in Grafana\n      and base_repo_id in ('repo_1', 'repo_2')\n  GROUP BY 1\n)\n\nSELECT \n  date_format(time,'%M %Y') as month,\n  time_to_merge as \"Time to Merge\"\nFROM _prs\nORDER BY time\n")),(0,r.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use DevLake's dashboards to monitor your delivery progress;"),(0,r.kt)("li",{parentName:"ol"},"Have a habit to check for hanging PRs regularly;"),(0,r.kt)("li",{parentName:"ol"},"Set up alerts for your communication tools (e.g. Slack, Lark) when new PRs are issued;"),(0,r.kt)("li",{parentName:"ol"},"Reduce PR size;"),(0,r.kt)("li",{parentName:"ol"},"Analyze the causes for long reviews.")))}c.isMDXComponent=!0},55489:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/pr-time-to-merge-monthly-996cf97309f11f98aaece50be09604c8.png"},78707:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/pr-time-to-merge-text-3c5e1aa05c3ec3ff350ee3b2d54dce6c.png"}}]);