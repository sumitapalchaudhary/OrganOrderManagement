This is javascript Command Line Application with Node.js.
Install the application using 

npm install -g .

Then run the below command to get the processed order from the csv provided

run --path data/input.csv 

To run the tests, run the below command 

node_modules/.bin/jest

Note:
- only csv-parse and jest is used as dependencies
- only wrote unit tests for the functions with business logic. (processOrder, orderSummary, getFreeOrgans)
- Rules of getting free organs are hardcoded since the info is not available in CSV.
