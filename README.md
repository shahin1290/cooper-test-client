# The Cooper test challenge
We have a client request to build a mobile fitness tracking application. The idea is that the app will allow users to track their condition using a specific test called The Cooper Test.

The Cooper test is used to monitor the development of a person's aerobic endurance and to obtain an estimate of their VO2 max.

The challenge is to build a software solution that will make it possible not to only make the calculation but to record the data over time. Another requirement is that the app should have functionality that presents historical data of tests if a user has saved any historical data.

## Technology Stack
### The Back End
- Ruby on Rails to build an api [Cooper Test API](https://github.com/shahin1290/cooper_test_api)
- RSpec as out testing framework and PostgreSQL as our database.
### Mobile Client
- Ionic to build our mobile client
- Karma for unit testing.
- Jasmine is the unit testing framework.
- Protractor for our end-to-end (acceptance) tests.
### Installation
- npm install, to install the packages
- npm run test-coverage, to run the unit tests
- npm run e2e - to run the acceptance tests
- ionic serve --lab, to start the app in the localhost