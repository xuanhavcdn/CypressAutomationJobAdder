# Cypress setup to build Automation project
## 1. Download and Install  Node.js & NPM: 
- https://nodejs.org/en/download/
- https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
# After install required software => Follow there step to build project
## 2. Download source code from git
## 3. Open folder code in Visual Studio Code
## 4. Open Terminal
## 5. Install cypress:
```javascript
npm install cypress --save-dev
```
## 6. Typescript install setup:
```javascript
npm install --save-dev typescript
```
## 7: Start cypress project:
```javascript
npm run test or npx cypress open
```
- https://docs.cypress.io/guides/tooling/typescript-support#Install-TypeScript

## 8. Xpath setup:
- https://github.com/cypress-io/cypress/tree/develop/npm/xpath
```javascript
npm install -D @cypress/xpath --save-dev
```
Add the code into e2e.js:
```javascript
require('@cypress/xpath');
```
Importance note: add the code  into tsconfig.json:
```javascript
"types": ["cypress", "node", "@cypress/xpath"]
```
## Project structure
```javascript
ProjectRoot
    |__cypress
    |        |___ fixtures
    |        |___ e2e
    |                |___ pages: PageObject Folder
    |                |___ tests: Test cases folder
    |        |___ reports
    |        |___ screenshots
    |        |___ videos
    |        |___ support
    |__package.json
    |__cypress.config.js
    |__tsconfig.json
```
## Demo video


# Additional:
## 9. Install report: 
- https://www.npmjs.com/package/cypress-mochawesome-reporter
```javascript
npm install mochawesome --save-dev
```
```javascript
npm i --save-dev cypress-mochawesome-reporter
```
```javascript
npm install mochawesome-merge --save-dev
```
Options commands:
- https://docs.cypress.io/guides/guides/command-line#cypress-run

## 10. Cucumber setup:
- https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/quick-start.md
```javascript
npm install @badeball/cypress-cucumber-preprocessor --save-dev
```
```javascript
npm install @bahmutov/cypress-esbuild-preprocessor --save-dev
```
```javascript
npm install esbuild --save-dev
```
