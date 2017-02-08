# Demo


## Install global dependencies
```bash
npm install serverless karma-cli -g
```

## Develop

### Install dependencies
```bash
npm install
```

### Run tests
```bash
npm test
```

## Build
```bash
sls webpack
```

## Invoke function
```bash
sls webpack invoke -f hello -p event.json
```

## Run and watch function
```bash
serverless webpack watch --function hello --path event.json
```

## Simulate function locally
```bash
serverless webpack serve
```
## Debug
Add SLS_DEBUG=* environment variable to enable debug mode eg:
```bash
SLS_DEBUG=* sls webpack invoke -f hello -p event.json
```
## Deploy
```bash
sls deploy --region eu-west-1 --stage production
```