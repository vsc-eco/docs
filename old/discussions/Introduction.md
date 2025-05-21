---
sidebar_position: 1
---

# Introduction

## What is VSC?

VSC (virtual smart chain) is a next generation smart contract L2 built on the Hive blockchain. VSC not only aims to bring smart contracts to Hive, but completely change the onboarding experience by introducing native lite accounts and cross chain login functionality, support decentralized and secure wrapping technology, and power the future of DAPPs on Hive.  

VSC operates as a sidechain to Hive, this gives us a significant amount of flexibility to advance and build new features, along with the ability to scale the L2 network in the future. Using Hive as a clearing and synchronization method, VSC can push huge amounts of data with little to no overhead on the Hive L1. This approach allows VSC to inherit a lot of Hive's lower level functions such as feeless transactions and 3s block time.  

VSC uses Webassembly for smart contracts, which us to support any language that compiles down to native webassembly. The flexibility this gives to developers is emmense, where as EVM chains Solidity is the only option. Currently we support AssemblyScript (JavaScript like) with more languages to be added in the future as we vet and build out development tools for each programming language.  

We want to make programming on HIVE easy, cheap and most importantly _available to everyone_.

## Getting started

We are in the early roots of the project. Nevertheless, we want to give you a pleasant onboarding experience to our ecosystem. Here you will find various guides that help you through your journey of discovering and experiencing the capabilities of the VSC ecosystem.

### Create an account

To get started create an _ed25519_ compatible private/ public key pair that will represent your wallet. Checkout [this](./how-to/generate-wallet.md) guide for how to do so. 

### Write your first smart contract

Writing your first contract is easy! Dive into the rabbit hole [here](./tutorials/first-contract.md).  

## The ecosystem

The VSC ecosystem continuously grows. Inform yourself about the components that are important for _you_ to build on top of VSC!

### Block explorer

Navigating a decentralized network without a block explorer would result in a highly negative user experience. Thereby we have [this section](./references/block-explorers.md) on block explorers, which gives you various information regarding this topic.  

### VSC client

To make it easy for developers to build applications that integrate the VSC network we have developed the VSC client. It bridges the gap between the end user facing web2 code and the web3 aspects of the VSC network. [Inform yourself here](./references/client.md).

### Contract template

The contract template is the development environment for your contracts. It contains various tools for testing and validating your contracts capabilities up to scripts for easy deployment to the VSC network. Read more [here](./references/contract-template.md).

### VSC sdks

One of the goals of VSC is to provide language-agnostic smart contract writing capabilities. For that reason we are using webassembly. Plain webassembly without any helper functions is just a little too primitive. Thereby we create VSC sdk's that expose and abstract basic functionalities like persistance or encryption in a library so that the developer doesn't need to care about those basic premises. [Read more about the implementations here](./references/sdk.md).

## Topics of interest

Here you can find a list of different points of interest.

### Host your own node

We need YOU. A decentralized network without node operators is like a democracy with one leader. That just doesn't feel right.  

You help us to scale and make the network more secure.

By participating in the VSC network you will receive reimbursements for your node operation.  

Interested? [Checkout how to host a node here](./how-to/host-node.mdx).

### Bitcoin wrapping

VSC's mission extends beyond its innovative smart contract capabilities. It aspires to become the driving force behind the integration of various cryptocurrencies, starting with Bitcoin, into the HIVE ecosystem through a process known as wrapping. This approach paves the way for the seamless transfer and utilization of Bitcoin and potentially other cryptocurrencies within the HIVE network. [Read more here](./discussions/wrapping.md)

### Dex

We are building a decentralized exchange that allows users to exchange various currencies on top of your network. This is a crucial part of the VSC ecosystem as it allows users to exchange their assets in a decentralized manner. [Inform yourself about the current state here](./references/dex.md).

### Account types

One of our main goals is to improve the accessibility of smart contract creation and invocation. This is supported by the integration of various account types in the VSC network. Learn about [our supported authentication methods here](./references/account-types.md).

### Contract example

We have various example contracts/ applications that can be used as inspiration for your development journey. [You can see the full list here](./references/examples.md).

### FAQ

The most frequently asked questions get a spot in our FAQ document. This should be your entrypoint in case you are stuck. [Checkout the document here](./discussions/FAQ.md)

## The architecture

Here we give you an overview of the VSC architecture. This is important to understand the underlying principles of the VSC network.

### API documentation

The API of the VSC node can be queried for various information regarding the network. To get an overview of the available data checkout [this document](./references/api.md).

### The VSC node

The core principles of the VSC network, how they complement each other, and why we have chosen certain technologies is explained in detail [here](./discussions/core-philosophy.md).