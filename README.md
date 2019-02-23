# tic-tac-toe API
#### On programming idioms
This project is an example of an API for the "tic-tac-toe" game. The main goal here was to identify "programming idioms" in the source code. Following are the ones identified so far:
* How to create a 2 dimensional array and fill with a default value. [See here](https://github.com/leo-fcx/tic-tac-toe-api/blob/develop/src/models/board.js#L56).
* How to check all the elements of an array have the same value. [See here](https://github.com/leo-fcx/tic-tac-toe-api/blob/develop/src/models/board.js#L48).
* How to print a 2 dimensional array. [See here](https://github.com/leo-fcx/tic-tac-toe-api/blob/develop/src/models/board.js#L82).
#### DEMO App
You can find running a version of this API [here](https://leo-tic-tac-toe-api.herokuapp.com/games).
#### Available scripts
After running `npm install`, you are allowed to run:
* `npm run start` starts the API server which is going to be available at `http://localhost:5000`
* `npm run test` starts the execution of all specs written for the project.
This project was develop using node.js version 8.15.0 and npm version 6.4.1
#### Postman collection to do an e2e test
Alternatively to the `specs` you can *import* the following Postman Request Collection and run all the request in the same order as they come: `https://www.getpostman.com/collections/ce27a164aa0e0bffee50`
