## NOTE: THIS SECTION HAS NOT BEEN UPDATED FOR MAINNET VSC (PROCEED WITH CAUTION)

# FAQ

## Do we supply node snapshots for node operators?

No, you're node should sync up in ~1 day. If it takes significantly longer than that, contact us.

## Are there any node rewards?

Not yet. We have plans of doing a proof of burn model were node operators essentially buy credits to produce blocks. Then, when you produce blocks, you'd get a small reward on top of your initial investment.
Note: We are not guaranteeing any specifics at the moment. This is subject to change as we do addition research.

## When will I be able to deploy my token on VSC?

We do not have a specific timeline for this.
However, we are currently working on token and wrapping technology internally with HIVE, HBD, and BTC. Once all the kinks are ironed out with that, we will define public token standard(s) and create a reference implementation for each of those standard(s).

## How do I run a node?


 
## How do to update a node?

Firstly, be sure to use the deployment from #4 ⁠faqs⁠ and then run sudo docker-compose up -d. This will pull the latest VSC node docker image automatically.

## How to check if a node is up to date?

`sudo docker-compose exec vsc-node cat .git/refs/heads/main`

This will show you the commit you are on.

Then you can compare it the latest commit in the vsc-node [GitHub repo](https://github.com/vsc-eco/vsc-node/commits/main/).

## How do I migrate from the vsc-node repo to the vsc-deployment repo?

1) cd ~/vsc-node (or where ever your vsc-node repo is)
2) sudo docker-compose down
3) sudo ./migrate.sh
4) cd ../vsc-deployment (or where ever you set the new repo to be)
5) sudo docker-compose up -d

## How do I start writing a smart contract on VSC?

This is our contract template. It should be enough to get started. There is usage and suggestions in [this repo](https://github.com/vsc-eco/contract-template) README.

Also, [here is a DEX](https://github.com/vsc-eco/dex) that we are working on that tries to use/showcase best practices for writing VSC contracts.

As for a formal docs site, we don't have that at the moment.

However, you can checkout the AssemblyScript docs for usage of the smart contract language. It is very similar to TypeScript. Then, everything you need to interface with the VSC chain state is available in the @vsc.eco/sdk npm package.

If you have any concrete suggestions about what we should include in a formal documentation site, please let us know.

## Why is the documentation structured in this way?

The documentation approach is based on the _Diátaxis_ principle. You can watch a summary about it [here](https://www.youtube.com/watch?v=t4vKPhjcMZg).
