# Validators

**Securing the VSC Protocol through Hive Staking and Consensus Participation**

Validators are responsible for **securing the VSC network**, maintaining consensus, and validating all state changes — including deposits, withdrawals, and in-protocol actions like swaps or mapped transfers. They run the VSC validator software and participate in the consensus mechanism by **staking HIVE tokens**, which aligns their incentives with the integrity of the system.

### Validator Responsibilities 

- **Confirm asset deposits** from connected chains and reflect them in the VSC ledger.
- **Validate in-protocol actions** (swaps, transfers, mint/burn logic) with precision.
- **Process withdrawals** and sign native asset transactions for outbound transfers.
- **Uphold consensus** over the VSC state, using Hive as the final source of truth.
- **Govern protocol changes** through participation in upgrades and configuration.

### Why Validators Matter

Validators are the backbone of the trustless design in VSC. Because VSC doesn't rely on bridges or centralized actors, **honest validation** is key to keeping assets safe and operations decentralized. Their staking of HIVE ensures skin in the game and allows the protocol to slash or remove malicious actors.

# VSC Node deployment 

This repository hosts the Docker Compose file necessary for deploying the VSC node.

### Setup

1. Install [Docker](https://docs.docker.com/get-docker/) and [Docker compose v2](https://docs.docker.com/compose/install/).
2. git clone https://github.com/vsc-eco/vsc-deployment Clone this repository as a normal user (not root/admin) to a desired location. It's crucial to ensure the Docker user has write permissions in the directory where you plan to initiate the Docker Compose file.
3. docker compose run initInitialize the configuration files
4. Edit the config file located at ./data/config/identityConfig.json and be sure to add in your Hive username and active key
5. docker compose up -dStart the Docker containers. This will add a GraphQL server on port 8080, a MongoDB instance on port 27021, and a libp2p connection on port 10720.

### Starting Up

To launch the node, execute docker compose up -d from the command line (or docker-compose up -d depending on your docker compose version).

For real-time log observation, use docker logs go-vsc-node -f.

### Maintenance

The node is designed to self-update as necessary. However, on rare occasions, the deployment configuration may require manual updates not covered by automatic updates. Should such a situation arise, we will inform the community through our usual communication channels [discord](http://discord.gg/yvGXZsQTU6) and [twitter](https://twitter.com/vsc_eco).

You can disable automatic updates by setting the environment variable AUTO_UPDATE to *false*. However, we recommend to keep this feature enabled to ensure the node is always up-to-date. In our rapidly evolving ecosystem, it's crucial to keep the node updated for optimal network health.

