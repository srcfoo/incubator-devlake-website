"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[9396],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(g,p(p({ref:t},u),{},{components:r})):n.createElement(g,p({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var s=2;s<i;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2809:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),p=["components"],o={slug:"some-practices-of-supporting-postgresql",title:"Apache DevLake \u517c\u5bb9 PostgreSQL \u8e29\u5751\u5c0f\u7ed3",authors:"ZhangLiang",tags:["devlake","database","postgresql"]},l="Apache DevLake \u517c\u5bb9 PostgreSQL \u8e29\u5751\u5c0f\u7ed3",s={permalink:"/blog/some-practices-of-supporting-postgresql",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/blog/2022-06-17-Apache-DevLake\u517c\u5bb9PostgreSQL\u8e29\u5751\u5c0f\u7ed3/index.md",source:"@site/blog/2022-06-17-Apache-DevLake\u517c\u5bb9PostgreSQL\u8e29\u5751\u5c0f\u7ed3/index.md",title:"Apache DevLake \u517c\u5bb9 PostgreSQL \u8e29\u5751\u5c0f\u7ed3",description:"\u672c\u6587\u4f5c\u8005\uff1aZhangLiang",date:"2022-06-17T00:00:00.000Z",formattedDate:"June 17, 2022",tags:[{label:"devlake",permalink:"/blog/tags/devlake"},{label:"database",permalink:"/blog/tags/database"},{label:"postgresql",permalink:"/blog/tags/postgresql"}],readingTime:3.5933333333333333,truncated:!1,authors:[{name:"ZhangLiang",title:"Apache DevLake PPMC",url:"https://github.com/mindlesscloud",imageURL:"https://avatars.githubusercontent.com/u/8455907?s=400&v=4",key:"ZhangLiang"}],frontMatter:{slug:"some-practices-of-supporting-postgresql",title:"Apache DevLake \u517c\u5bb9 PostgreSQL \u8e29\u5751\u5c0f\u7ed3",authors:"ZhangLiang",tags:["devlake","database","postgresql"]},prevItem:{title:"refdiff\u63d2\u4ef6\u7684\u8ba1\u7b97\u63d0\u4ea4\u7248\u672c\u5dee\u5f02\u7b97\u6cd5",permalink:"/blog/refdiff-calculate-commits-diff"},nextItem:{title:"How DevLake is Up and Running",permalink:"/blog/how-DevLake-is-up-and-running"}},u={authorsImageUrls:[void 0]},c=[{value:"PostgreSQL \u4e0d\u652f\u6301 uint \u7c7b\u578b\u7684\u6570\u636e\u7c7b\u578b",id:"postgresql-\u4e0d\u652f\u6301-uint-\u7c7b\u578b\u7684\u6570\u636e\u7c7b\u578b",level:3},{value:"MySQL \u6ca1\u6709 bool \u578b",id:"mysql-\u6ca1\u6709-bool-\u578b",level:3},{value:"\u6279\u91cf\u63d2\u5165",id:"\u6279\u91cf\u63d2\u5165",level:3},{value:"\u5b57\u6bb5\u7c7b\u578b model \u5b9a\u4e49\u4e0e schema \u4e0d\u4e00\u81f4",id:"\u5b57\u6bb5\u7c7b\u578b-model-\u5b9a\u4e49\u4e0e-schema-\u4e0d\u4e00\u81f4",level:3},{value:"\u53cd\u5f15\u53f7",id:"\u53cd\u5f15\u53f7",level:3},{value:"\u4e0d\u89c4\u8303\u7684\u5220\u9664\u8bed\u53e5",id:"\u4e0d\u89c4\u8303\u7684\u5220\u9664\u8bed\u53e5",level:3}],m={toc:c};function d(e){var t=e.components,o=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u4f5c\u8005\uff1aZhangLiang",(0,i.kt)("br",{parentName:"p"}),"\n","\u4e2a\u4eba\u4e3b\u9875\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mindlesscloud"},"https://github.com/mindlesscloud")),(0,i.kt)("p",null,"Apache DevLake \u662f\u4e00\u4e2a\u7814\u53d1\u6570\u636e\u5e73\u53f0\uff0c\u53ef\u4ee5\u6536\u96c6\u548c\u6574\u5408\u5404\u7c7b\u7814\u53d1\u5de5\u5177\u7684\u6570\u636e\uff0c\u6bd4\u5982 Jira\u3001Github\u3001Gitlab\u3001Jenkins\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u672c\u6587\u5e76\u4e0d\u6253\u7b97\u5bf9\u6570\u636e\u5e93\u517c\u5bb9\u8fd9\u4e2a\u95ee\u9898\u505a\u5168\u9762\u7684\u603b\u7ed3\uff0c\u53ea\u662f\u5bf9\u6211\u4eec\u5b9e\u9645\u9047\u5230\u7684\u95ee\u9898\u505a\u4e00\u4e2a\u8bb0\u5f55\uff0c\u5e0c\u671b\u80fd\u5bf9\u6709\u76f8\u4f3c\u9700\u6c42\u7684\u4eba\u63d0\u4f9b\u4e00\u4e2a\u53c2\u8003\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1\u3001\u6570\u636e\u7c7b\u578b\u5dee\u5f02")),(0,i.kt)("h3",{id:"postgresql-\u4e0d\u652f\u6301-uint-\u7c7b\u578b\u7684\u6570\u636e\u7c7b\u578b"},"PostgreSQL \u4e0d\u652f\u6301 uint \u7c7b\u578b\u7684\u6570\u636e\u7c7b\u578b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'type JenkinsBuild struct {\n    common.NoPKModel\n    JobName           string  `gorm:"primaryKey;type:varchar(255)"`\n    Duration          float64 // build time\n    DisplayName       string  // "#7"\n    EstimatedDuration float64\n    Number            int64 `gorm:"primaryKey;type:INT(10) UNSIGNED NOT NULL"`\n    Result            string\n    Timestamp         int64     // start time\n    StartTime         time.Time // convered by timestamp\n    CommitSha         string\n}\n\n')),(0,i.kt)("p",null,"\u5176\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"JenkinsBuild.Number"),"\u5b57\u6bb5\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"gorm")," struct tag \u4f7f\u7528\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"UNSIGNED"),"\u4f1a\u5bfc\u81f4\u5efa\u8868\u5931\u8d25\uff0c\u9700\u8981\u53bb\u6389\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(5492).Z,width:"3730",height:"236"})),(0,i.kt)("h3",{id:"mysql-\u6ca1\u6709-bool-\u578b"},"MySQL \u6ca1\u6709 bool \u578b"),(0,i.kt)("p",null,"\u5bf9\u4e8e model \u91cc\u5b9a\u4e49\u4e3a bool \u578b\u7684\u5b57\u6bb5\uff0cgorm \u4f1a\u628a\u5b83\u6620\u5c04\u6210 MySQL \u7684 TINYINT \u7c7b\u578b\uff0c\u5728 SQL \u91cc\u53ef\u4ee5\u76f4\u63a5\u7528 0 \u6216\u8005 1 \u67e5\u8be2\uff0c\u4f46\u662f PostgreSQL \u91cc\u662f\u6709 bool \u7c7b\u578b\u7684\uff0c\u6240\u4ee5 gorm \u4f1a\u628a\u5b83\u6620\u5c04\u6210 BOOL \u7c7b\u578b\uff0c\u5982\u679c SQL \u91cc\u8fd8\u662f\u7528\u7684 0 \u6216\u8005 1 \u53bb\u67e5\u8be2\u5c31\u4f1a\u62a5\u9519\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u5177\u4f53\u7684\u4f8b\u5b50\uff08\u4e3a\u4e86\u6e05\u6670\u8d77\u89c1\u6211\u4eec\u5220\u6389\u4e86\u65e0\u5173\u7684\u5b57\u6bb5\uff09\uff0c\u4e0b\u9762\u7684\u67e5\u8be2\u8bed\u53e5\u5728 MySQL \u91cc\u662f\u6ca1\u6709\u95ee\u9898\u7684\uff0c\u4f46\u662f\u5728  PostgreSQL \u4e0a\u5c31\u4f1a\u62a5\u9519\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'type GitlabMergeRequestNote struct {\n    MergeRequestId  int    `gorm:"index"`\n    System          bool \n}\n    \ndb.Where("merge_request_id = ? AND `system` = 0", gitlabMr.GitlabId).\n')),(0,i.kt)("p",null,"\u8bed\u53e5\u6539\u6210\u8fd9\u6837\u540e\u4ecd\u7136\u4f1a\u6709\u9519\u8bef\uff0c\u5177\u4f53\u8bf7\u89c1\u4e0b\u9762\u5173\u4e8e\u53cd\u5f15\u53f7\u7684\u95ee\u9898\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'db.Where("merge_request_id = ? AND `system` = ?", gitlabMr.GitlabId, false)  \n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2\u3001\u884c\u4e3a\u5dee\u5f02")),(0,i.kt)("h3",{id:"\u6279\u91cf\u63d2\u5165"},"\u6279\u91cf\u63d2\u5165"),(0,i.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"ON CONFLIT UPDATE ALL"),"\u4ece\u53e5\u6279\u91cf\u63d2\u5165\u7684\u65f6\u5019\uff0c\u672c\u6279\u6b21\u5982\u679c\u6709\u591a\u6761\u4e3b\u952e\u76f8\u540c\u7684\u8bb0\u5f55\u4f1a\u5bfc\u81f4 PostgreSQL \u62a5\u9519\uff0cMySQL \u5219\u4e0d\u4f1a\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(2461).Z,width:"3718",height:"634"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(8392).Z,width:"3712",height:"184"})),(0,i.kt)("h3",{id:"\u5b57\u6bb5\u7c7b\u578b-model-\u5b9a\u4e49\u4e0e-schema-\u4e0d\u4e00\u81f4"},"\u5b57\u6bb5\u7c7b\u578b model \u5b9a\u4e49\u4e0e schema \u4e0d\u4e00\u81f4"),(0,i.kt)("p",null,"\u4f8b\u5982\u5728 model \u5b9a\u4e49\u4e2d",(0,i.kt)("inlineCode",{parentName:"p"},"GithubPullRequest.AuthorId"),"\u662f int \u7c7b\u578b\uff0c\u4f46\u662f\u6570\u636e\u5e93\u91cc\u8fd9\u4e2a\u5b57\u6bb5\u662f VARCHAR \u7c7b\u578b\uff0c\u63d2\u5165\u6570\u636e\u7684\u65f6\u5019 MySQL \u662f\u5141\u8bb8\u7684\uff0cPostgreSQL \u5219\u4f1a\u62a5\u9519\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'type GithubPullRequest struct {\n    GithubId        int    `gorm:"primaryKey"`\n    RepoId          int    `gorm:"index"`\n    Number          int    `gorm:"index"` \n    State           string `gorm:"type:varchar(255)"`\n    Title           string `gorm:"type:varchar(255)"`\n    GithubCreatedAt time.Time\n    GithubUpdatedAt time.Time `gorm:"index"`\n    ClosedAt        *time.Time\n    // In order to get the following fields, we need to collect PRs individually from GitHub\n    Additions      int\n    Deletions      int\n    Comments       int\n    Commits        int\n    ReviewComments int\n    Merged         bool\n    MergedAt       *time.Time\n    Body           string\n    Type           string `gorm:"type:varchar(255)"`\n    Component      string `gorm:"type:varchar(255)"`\n    MergeCommitSha string `gorm:"type:varchar(40)"`\n    HeadRef        string `gorm:"type:varchar(255)"`\n    BaseRef        string `gorm:"type:varchar(255)"`\n    BaseCommitSha  string `gorm:"type:varchar(255)"`\n    HeadCommitSha  string `gorm:"type:varchar(255)"`\n    Url            string `gorm:"type:varchar(255)"`\n    AuthorName     string `gorm:"type:varchar(100)"`\n    AuthorId       int\n    common.NoPKModel\n}\n\n')),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(361).Z,width:"3718",height:"224"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3\u3001MySQL \u7279\u6709\u7684\u51fd\u6570")),(0,i.kt)("p",null,"\u5728\u4e00\u4e2a\u590d\u6742\u67e5\u8be2\u4e2d\u6211\u4eec\u66fe\u7ecf\u4f7f\u7528\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP_CONCAT")," \u51fd\u6570\uff0c\u867d\u7136 PostgreSQL \u4e2d\u6709\u529f\u80fd\u7c7b\u4f3c\u7684\u51fd\u6570\u4f46\u662f\u51fd\u6570\u540d\u4e0d\u540c\uff0c\u4f7f\u7528\u65b9\u5f0f\u4e5f\u6709\u7ec6\u5fae\u5dee\u522b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'cursor2, err := db.Table("pull_requests pr1").\n        Joins("left join pull_requests pr2 on pr1.parent_pr_id = pr2.id").Group("pr1.parent_pr_id, pr2.created_date").Where("pr1.parent_pr_id != \'\'").\n        Joins("left join repos on pr2.base_repo_id = repos.id").\n        Order("pr2.created_date ASC").\n        Select(`pr2.key as parent_pr_key, pr1.parent_pr_id as parent_pr_id, GROUP_CONCAT(pr1.base_ref order by pr1.base_ref ASC) as cherrypick_base_branches, \n            GROUP_CONCAT(pr1.key order by pr1.base_ref ASC) as cherrypick_pr_keys, repos.name as repo_name, \n            concat(repos.url, \'/pull/\', pr2.key) as parent_pr_url`).Rows()\n')),(0,i.kt)("p",null,"\u89e3\u51b3\u65b9\u6848\uff1a\n\u6211\u4eec\u6700\u7ec8\u51b3\u5b9a\u628a",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP_CONCAT"),"\u51fd\u6570\u7684\u529f\u80fd\u62c6\u5206\u6210\u4e24\u6b65\uff0c\u5148\u7528\u6700\u7b80\u5355\u7684 SQL \u67e5\u8be2\u5f97\u5230\u6392\u5e8f\u597d\u7684\u591a\u6761\u6570\u636e\uff0c\u7136\u540e\u7528\u4ee3\u7801\u505a\u805a\u5408\u3002"),(0,i.kt)("p",null,"\u4fee\u6539\u540e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"cursor2, err := db.Raw(\n        `\n            SELECT pr2.pull_request_key                 AS parent_pr_key,\n                   pr1.parent_pr_id                     AS parent_pr_id,\n                   pr1.base_ref                         AS cherrypick_base_branch,\n                   pr1.pull_request_key                 AS cherrypick_pr_key,\n                   repos.NAME                           AS repo_name,\n                   Concat(repos.url, '/pull/', pr2.pull_request_key) AS parent_pr_url,\n                   pr2.created_date\n            FROM   pull_requests pr1\n                   LEFT JOIN pull_requests pr2\n                          ON pr1.parent_pr_id = pr2.id\n                   LEFT JOIN repos\n                          ON pr2.base_repo_id = repos.id\n            WHERE  pr1.parent_pr_id != ''\n            ORDER  BY pr1.parent_pr_id,\n                      pr2.created_date,\n                      pr1.base_ref ASC\n            `).Rows()\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"4\u3001\u8bed\u6cd5\u5dee\u5f02")),(0,i.kt)("h3",{id:"\u53cd\u5f15\u53f7"},"\u53cd\u5f15\u53f7"),(0,i.kt)("p",null,"\u67d0\u4e9b SQL \u8bed\u53e5\u4e2d\u6211\u4eec\u4f7f\u7528\u4e86\u53cd\u5f15\u53f7\uff0c\u7528\u6765\u4fdd\u62a4\u5b57\u6bb5\u540d\uff0c\u4ee5\u514d\u8ddf MySQL \u4fdd\u7559\u5b57\u6709\u51b2\u7a81\uff0c\u8fd9\u79cd\u505a\u6cd5\u5728 PostgreSQL \u4f1a\u5bfc\u81f4\u8bed\u6cd5\u9519\u8bef\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u6211\u4eec\u91cd\u65b0\u5ba1\u89c6\u4e86\u6211\u4eec\u7684\u4ee3\u7801\uff0c\u628a\u6240\u6709\u8ddf\u4fdd\u7559\u5b57\u51b2\u7a81\u7684\u5b57\u6bb5\u540d\u505a\u4e86\u4fee\u6539\uff0c\u540c\u65f6\u53bb\u6389\u4e86 SQL \u8bed\u53e5\u4e2d\u7684\u53cd\u5f15\u53f7\u3002\u4f8b\u5982\u521a\u624d\u63d0\u5230\u7684\u8fd9\u4e2a\u4f8b\u5b50\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'db.Where("merge_request_id = ? AND `system` = ?", gitlabMr.GitlabId, false)\n')),(0,i.kt)("p",null,"\u89e3\u51b3\u65b9\u6848\uff1a\u6211\u4eec\u628a",(0,i.kt)("inlineCode",{parentName:"p"},"system"),"\u6539\u4e2a\u540d\u5b57",(0,i.kt)("inlineCode",{parentName:"p"},"is_system"),"\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u628a\u53cd\u5f15\u53f7\u53bb\u6389\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'db.Where("merge_request_id = ? AND is_system = ?", gitlabMr.GitlabId, false)\n')),(0,i.kt)("h3",{id:"\u4e0d\u89c4\u8303\u7684\u5220\u9664\u8bed\u53e5"},"\u4e0d\u89c4\u8303\u7684\u5220\u9664\u8bed\u53e5"),(0,i.kt)("p",null,"\u6211\u4eec\u7684\u4ee3\u7801\u4e2d\u66fe\u7ecf\u51fa\u73b0\u8fc7\u8fd9\u79cd\u5220\u9664\u8bed\u53e5\uff0c\u8fd9\u5728 MySQL \u4e2d\u662f\u5408\u6cd5\u7684\uff0c\u4f46\u662f\u5728 PostgreSQL \u4e2d\u4f1a\u62a5\u8bed\u6cd5\u9519\u8bef\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"err := db.Exec(`\n    DELETE ic\n    FROM jira_issue_commits ic\n    LEFT JOIN jira_board_issues bi ON (bi.source_id = ic.source_id AND bi.issue_id = ic.issue_id)\n    WHERE ic.source_id = ? AND bi.board_id = ?\n    `, sourceId, boardId).Error\n")),(0,i.kt)("p",null,"\u89e3\u51b3\u65b9\u6848\uff1a\u6211\u4eec\u628a",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE"),"\u540e\u9762\u7684\u8868\u522b\u540d\u53bb\u6389\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4e86\u89e3\u66f4\u591a\u6700\u65b0\u52a8\u6001")),(0,i.kt)("p",null,"\u5b98\u7f51\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://devlake.incubator.apache.org/"},"https://devlake.incubator.apache.org/")),(0,i.kt)("p",null,"GitHub\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/"},"https://github.com/apache/incubator-devlake/")),(0,i.kt)("p",null,"Slack\uff1a\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"https://devlake-io.slack.com/join/shared_invite/zt-18uayb6ut-cHOjiYcBwERQ8VVPZ9cQQw#/shared-invite/email"},"Slack")," \u8054\u7cfb\u6211\u4eec"))}d.isMDXComponent=!0},8392:function(e,t,r){t.Z=r.p+"assets/images/7b2a6f29-ea2a-4a84-97c8-7eba5a5131a8-ecef21ecd88f5e7e73b4ba15818892d4.png"},361:function(e,t,r){t.Z=r.p+"assets/images/8afb097c-a0b3-4bdc-80f3-7241c3fa566f-05d6a3d073455a2d728f33dedce09593.png"},5492:function(e,t,r){t.Z=r.p+"assets/images/df2f9837-121e-4a64-976c-c5039d452bfd-f129f63a0aad6218d9040f3eb2917990.png"},2461:function(e,t,r){t.Z=r.p+"assets/images/efea0188-80e4-4519-a010-977a7fd5432e-24bf2c80d325f021cfb13cd26652aec9.png"}}]);