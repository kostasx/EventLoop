# SETTING UP ENVIRONMENTAL VARIABLE FILES WITH A NODE APP

Environmental Variables allow us to configure various values (ports, DB connections, host, etc.) for our application for multiple environments (dev, test, stage, production).

## VSCODE CODETOUR

This repo uses the [Codetour VSCode extension](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.codetour), so make sure to **install it** before downloading and opening the repo.

To download and see the tour, follow the steps below:

1) Install the `Codetour` VSCode extension

2) Download the repo by running this command: `npx degit https://github.com/kostasx/EventLoop/learn/node/environmental-variables environmental-variables`

Press `y` when prompted to install `degit`

3) Open a new VSCode window, select `Open Folder` and pick the folder that was just created with the `npx degit` command. Run `npm install` on the project folder to install any required dependencies.

4) Once the project is loaded on VSCode, go to the `Codetour` panel found on the bottom of the Sidebar, wait for the tour script to be shown and hit the play icon.

5) That's it! Just follow the steps to understand more about the code.

## REFERENCES

- [Node JS Environment Variables — Setting Node app for multiple environments](https://medium.com/geekculture/node-js-environment-variables-setting-node-app-for-multiple-environments-51351b51c7cd)