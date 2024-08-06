# VSC Documentation

### Local Development

```
$ yarn install
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Deployment

execute `./publish.sh` or just push to main (github actions workflow will take care of the rest)

The repository needs to have its workflow permissions set to `read and write`, instead of the default vaule. Change that under the repositories settings -> Workflow permissions

### TODO

- [X] [Introduction.md](./docs/Introduction.md)
- [ ] [core-philosophy.md](./docs/discussions/core-philosophy.md)
- [ ] [dex.md](./docs/discussions/dex.md)
- [X] [FAQ.md](./docs/discussions/FAQ.md)
- [ ] [wrapping.md](./docs/discussions/wrapping.md)
- [X] [generate-wallet.md](./docs/how-to/generate-wallet.md)
- [X] [host-node.mdx](./docs/how-to/host-node.mdx)
- [ ] [api.md](./docs/references/api.md)
- [X] [block-explorers.md](./docs/references/block-explorers.md)
- [X] [client.md](./docs/references/client.md)
- [ ] [contract-template.md](./docs/references/contract-template.md)
- [X] [account-types.md](./docs/references/account-types.md)
- [X] [examples.md](./docs/references/examples.md)
- [ ] [sdk.md](./docs/references/sdk.md)
- [X] [first-contract.md](./docs/tutorials/first-contract.md)
- [X] [invoke-contract.md](./docs/tutorials/invoke-contract.md)


### Reminders

- when contract deployment supports lite accounts, add to the documentation