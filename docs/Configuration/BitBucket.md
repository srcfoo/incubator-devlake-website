---
title: "BitBucket(Cloud)"
sidebar_position: 2
description: Config UI instruction for BitBucket(Cloud)
---

Visit config-ui: `http://localhost:4000` and go to `Connections` page.

### Step 1 - Add Data Connections

![image](https://user-images.githubusercontent.com/3294100/220118398-2d08070f-0edb-4de6-8696-9ee58b80719b.png)

#### Connection Name

Name your connection.

#### Endpoint URL

This should be a valid REST API endpoint for BitBucket Cloud: `https://api.bitbucket.org/2.0/`. The endpoint URL should end with `/`.

DevLake will support BitBucket Server in the future.

#### Authentication

BitBucket `username` and `app password` are required to add a connection. Learn about [how to create a BitBucket app password](https://support.atlassian.com/bitbucket-cloud/docs/create-an-app-password/).

The following permissions are required to collect data from BitBucket repositories:

- Account:Read
- Workspace membership:Read
- Projects:Read
- Repositories:Read
- Pull requests:Read
- Issues:Read
- Pipelines:Read
- Runners:Read

![bitbucket-app-password-permissions](/img/ConfigUI/bitbucket-app-password-permissions.jpeg)


#### Proxy URL (Optional)

If you are behind a corporate firewall or VPN you may need to utilize a proxy server. Enter a valid proxy server address on your network, e.g. `http://your-proxy-server.com:1080`


#### Fixed Rate Limit (Optional)

DevLake uses a dynamic rate limit to collect BitBucket data. You can adjust the rate limit if you want to increase or lower the speed.

The maximum rate limit for different entities in BitBucket(Cloud) is [1,000 requests/hour](https://support.atlassian.com/BitBucket-cloud/docs/api-request-limits/). But we find it can run when we try a rate limit of more than 1000/h. So you can try the bigger maximum if your repo is big enough.

<!-- ![image](https://user-images.githubusercontent.com/3294100/220094172-9e8e9e8b-75ea-4c3e-8e5b-716320dabb64.png) -->


#### Test and Save Connection

Click `Test Connection`, if the connection is successful, click `Save Connection` to add the connection.

### Step 2 - Configure Blueprint

![image](https://user-images.githubusercontent.com/3294100/220236338-772b30b7-974f-4bc2-89ce-f2abe5e92a5e.png)

#### Repositories

Select the BitBucket repos to collect.

#### Data Entities

Usually, you don't have to modify this part. However, if you don't want to collect certain BitBucket entities, you can unselect some entities to accelerate the collection speed.

- Issue Tracking: BitBucket issues, issue comments, etc.
- Source Code Management: BitBucket repos, refs, commits, etc.
- Code Review: BitBucket PRs, PR comments, etc.
- CI/CD: BitBucket Pipelines, BitBucket Deployments, etc.
- Cross Domain: BitBucket accounts, etc.

Please go to the `Blueprints` page and switch to advanced mode. See how to use advanced mode and JSON [examples](AdvancedMode.md).

### Step 3 - Adding Transformation Rules (Optional)

![image](https://user-images.githubusercontent.com/3294100/220338276-a67cd8cc-ea76-4cb2-bb7b-bba581d21d70.png)

Without changing default transformation rules, you can still view the Metrics dashboard. However, if you want to view pre-built dashboards, the following transformation rules, especially "Issue Tracking" should be added.<br/>

Each BitBucket repo has at most ONE set of transformation rules.

#### Issue Tracking

- TODO: the issues with selected states can be recognized not start issues. 
- IN-PROGRESS: The issues statuses that indicate an issue is work in progress.
- DONE: The issue statuses that indicate an issue is completed.
- OTHER: Other issues statuses that can not be mapped to the above three statuses.

#### CI/CD

This set of configurations is used for calculating [DORA metrics](../DORA.md).

BitBucket has several key CI entities: `pipelines`, `pipeline steps`, and `deployments`. A Bitbucket pipeline contains several pipeline steps. Each pipeline step defined with a deployment key can be mapped to a BitBucket deployment.

Each Bitbucket pipeline is converted to a cicd_pipeline in DevLake's domain layer schema and each Bitbucket pipeline step is converted to a cicd_task in DevLake's domain layer.
![image](https://user-images.githubusercontent.com/3294100/220288225-71bee07d-c319-45bd-98e5-f4d01359840e.png)



If a pipeline step defines `deployment` with a value (usually means envrionment), this pipeline step is also a BitBucket deployment. 

![img_v2_89602d14-a733-4679-9d4b-d9635c03bc5g](https://user-images.githubusercontent.com/3294100/221528908-4943b1e6-1398-49e9-8ce9-aa264995f9bc.jpg)

![image](https://user-images.githubusercontent.com/3294100/221887426-4cae1c46-31ce-4fcd-b773-a54c28af0264.png)



How does DevLake tell if a BitBucket pipeline step is a deployment? The pipeline steps (defined in the .yaml) with the `deployment` key are considered as `DevLake deployments`. The value of the `deployment` key will be considered as the environment of DevLake deployments.

These DevLake deployments will be recorded in table.cicd_tasks in DevLake's domain layer, with `type` = 'deployment' and `environment` = '{BitBucket-pipeline-step.deployment.value}', differentiating from other CI tasks.

Or if you're using BitBucket pipelines to conduct `deployments`, please select "Detect Deployments from Pipeline steps in BitBucket", and input the RegEx in the following fields:

- Deployment: A BitBucket pipeline steps with a name that matches the given regEx will be considered as a deployment.
- Production: A BitBucket pipeline steps with a name that matches the given regEx will be considered a job in the production environment.

The deployment and production regex are only applied to the records in the cicd_tasks table when BitBucket Deployments not exists.

#### Additional Settings (Optional)

- Tags Limit: It'll compare the last N pairs of tags to get the "commit diff', "issue diff" between tags. N defaults to 10.

    - commit diff: new commits for a tag relative to the previous one
    - issue diff: issues solved by the new commits for a tag relative to the previous one

- Tags Pattern: Only tags that meet the given regular expression will be counted.

- Tags Order: Only "reverse semver" order is supported for now.

Please click `Save` to save the transformation rules for the repo. In the data scope list, click `Next Step` to continue configuring.

### Step 4 - Setting Sync Frequency

You can choose how often you would like to sync your data in this step by selecting a sync frequency option or enter a cron code to specify your prefered schedule.

### Troubleshooting

If you run into any problem, please check the [Troubleshooting](/Troubleshooting/Configuration.md) or [create an issue](https://github.com/apache/incubator-devlake/issues)