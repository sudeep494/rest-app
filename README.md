# RESTful parser app
This application is derived from express-generator-typescript[https://www.npmjs.com/package/express-generator-typescript] project off of npm.
It uses Express v4.17 and Typescript v4.3

## Start Server
* Run `npm run start`

## REST endpoints
* api/v1/parse[http://localhost:3000/api/v1/parse] (POST - returns parsed raw firstname, lastname, clientId)
* api/v2/parse[http://localhost:3000/api/v2/parse] (POST - returns parsed and sanitized/formatted firstname, lastname and clientId)
