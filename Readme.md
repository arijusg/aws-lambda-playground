# Finq


## Install gloval dependencies
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
(cd dist/demoFunction; sls invoke local --function hello --path event.json)
```