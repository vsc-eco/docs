---
slug: running-a-node
---

# Running a node

This tutorial will guide you through the process of setting up a VSC node .

Requirements:
- Hive account (50HP, will rise in the future)
- Technical knowledge of using a command line interface
- Docker and docker-compose installed. Please see [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/) for installation guide for docker. 

System requirements are very low, in the future requirements will rise as network usage incrases.

System requirements:
- Raspberry pi 4 or better
- 4 cores, 2GB ram or better


The setup:

1 ) `git clone https://github.com/vsc-eco/vsc-node`
2 ) `cd vsc-node`
3 ) < Fill in .env file here >

You'll need to create a .env file with the following values from the .env.example file.

```
# Fill these in with your hive account details
HIVE_ACCOUNT=Insert hive account username
HIVE_ACCOUNT_POSTING=Insert hive account posting key
HIVE_ACCOUNT_ACTIVE=Insert hive account active key
```

We generally recommend you use a different Hive account from your main account.


4 ) `docker-compose up -d`

You should be off to the races at this point! We can verify that your node is operating correctly on our discord server. Please actively monitor our Hive blog and discord server for incoming updates regarding VSC. You will need to consistent update your node as we release new versions of the software. Staying up to date with the rest of the network is critical in ensuring reliable operation of the network.