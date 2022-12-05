"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[4547],{55762:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var o=a(87462),i=(a(67294),a(3905));a(61839);const l={title:"FAQ",sidebar_position:10,description:"Frequently Asked Questions\n"},n=void 0,r={unversionedId:"UserManuals/FAQ",id:"UserManuals/FAQ",title:"FAQ",description:"Frequently Asked Questions\n",source:"@site/docs/UserManuals/FAQ.md",sourceDirName:"UserManuals",slug:"/UserManuals/FAQ",permalink:"/zh/docs/next/UserManuals/FAQ",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/UserManuals/FAQ.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"FAQ",sidebar_position:10,description:"Frequently Asked Questions\n"},sidebar:"docsSidebar",previous:{title:"Team Configuration",permalink:"/zh/docs/next/UserManuals/TeamConfiguration"},next:{title:"Supported Data Sources",permalink:"/zh/docs/next/SupportedDataSources"}},s={},c=[{value:"Failed to collect data from the server with a self-signed certificate",id:"failed-to-collect-data-from-the-server-with-a-self-signed-certificate",level:2},{value:"Pipeline failed with &quot;The total number of locks exceeds the lock table size&quot;",id:"pipeline-failed-with-the-total-number-of-locks-exceeds-the-lock-table-size",level:2},{value:"None of them solve your problem?",id:"none-of-them-solve-your-problem",level:2}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"failed-to-collect-data-from-the-server-with-a-self-signed-certificate"},"Failed to collect data from the server with a self-signed certificate"),(0,i.kt)("p",null,"There might be two problems when trying to collect data from a private GitLab server with a self-signed certificate:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'"Test Connection" error. This can be solved by setting the environment variable ',(0,i.kt)("inlineCode",{parentName:"li"},"IN_SECURE_SKIP_VERIFY=true")," for the ",(0,i.kt)("inlineCode",{parentName:"li"},"devlake")," container"),(0,i.kt)("li",{parentName:"ol"},'"GitExtractor" fails to clone the repository due to certificate verification, sadly, neither gogit nor git2go we are using supports insecure HTTPS.')),(0,i.kt)("p",null,"A better approach would be adding your root CA to the ",(0,i.kt)("inlineCode",{parentName:"p"},"devlake")," container:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Mount your ",(0,i.kt)("inlineCode",{parentName:"li"},"rootCA.crt")," into the ",(0,i.kt)("inlineCode",{parentName:"li"},"devlake")," container"),(0,i.kt)("li",{parentName:"ol"},"Add a ",(0,i.kt)("inlineCode",{parentName:"li"},"command")," node to install the mounted certificate")),(0,i.kt)("p",null,"Here is a example for the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose")," installation, the idea is applicable for other kinds of installation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  devlake:\n    image: apache/devlake:v...\n    ...\n    volumes:\n      ...\n      - /path/to/your/rootCA.crt:/usr/local/share/ca-certificates/rootCA.crt\n    command: [ "sh", "-c", "update-ca-certificates; lake" ]\n    ...\n')),(0,i.kt)("h2",{id:"pipeline-failed-with-the-total-number-of-locks-exceeds-the-lock-table-size"},'Pipeline failed with "The total number of locks exceeds the lock table size"'),(0,i.kt)("p",null,"We have had a couple of reports suggesting MySQL InnoDB would fail with the message."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/issues/3849"},"Error 1206: The total number of locks exceeds the lock table size \xb7 Issue #3849 \xb7 apache/incubator-devlake")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/issues/3653"},"[Bug][Gitlab] gitlab collectApiJobs task failed for mysql locks error \xb7 Issue #3653 \xb7 apache/incubator-devlake"))),(0,i.kt)("p",null,"The cause of the problem is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Before Apache DevLake data collection starts, it must purge expired data in the database."),(0,i.kt)("li",{parentName:"ul"},"MySQL InnoDB Engine would create locks in memory for the records being deleted."),(0,i.kt)("li",{parentName:"ul"},"When deleting huge amounts of records, the memory bursts, hence the error.")),(0,i.kt)("p",null,"You are likely to see the error when dealing with a huge repository or board. For MySQL, you can solve it by increasing the ",(0,i.kt)("inlineCode",{parentName:"p"},"innodb_buffer_pool_size")," to a higher value."),(0,i.kt)("p",null,"Here is a example for the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose")," installation, the idea is applicable for other kinds of installation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  mysql:\n    image: mysql:8.....\n    ...\n    # add the follow line to the mysql container\n    command: --innodb-buffer-pool-size=200M\n")),(0,i.kt)("h2",{id:"none-of-them-solve-your-problem"},"None of them solve your problem?"),(0,i.kt)("p",null,"Sorry for the inconvenience, please help us improve by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"creating an issue")))}u.isMDXComponent=!0}}]);