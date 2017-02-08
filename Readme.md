# Finq


## Install global dependencies
```bash
npm install serverless -g
```

## Develop

### Install dependencies
```bash
npm install
```

### Watch files
```
gulp
```

### Run demo function
```bash
(cd dist; sls invoke local --function hello --path ../src/event.json)
```