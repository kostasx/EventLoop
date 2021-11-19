- Environmental Variables allow us to configure various values (ports, DB connections, host, etc.) for our application for multiple environments (dev, test, stage, production).

## QUICKSTART (Using dotenv)

npm init -y

npm install express dotenv
npm install cross-env -D

touch app.js
touch env.production
touch env.development

## REFERENCES

- [Node JS Environment Variables — Setting Node app for multiple environments](https://medium.com/geekculture/node-js-environment-variables-setting-node-app-for-multiple-environments-51351b51c7cd)