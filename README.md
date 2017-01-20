# Gulp

## steps of creating a gulp project

- create a 'app' directory
- create `package.json` using `npm init`
- install gulp
  - `npm install -g gulp` to use `gulp` in the command line
  - you also need `npm install gulp --save-dev` to execute the scritps
- create a gulpfile.js
  - import the gulp module `require('gulp')`
  - create a task
- in `package.json` configure a script
- run `gulp <task>`