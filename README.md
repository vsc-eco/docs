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
