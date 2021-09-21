# cypress_listmeapp

## Overview

The following project contains some basic tests designed by cypress in order to run some end-to-end tests on the listme app.
The project's code is under the branch "develop" since the test's scope is to create a PoC and not a stable version that would be on master branch.

## Quick setup

1. Run 'npm install' to install the project's dependencies
2. Run 'npx cypress open" to open a chrome window where you can see the tests' senarios passing.

## Tests' senarios

### Senario 1 : Register a new user

#### Flow

1. using Chance, we generate a random user email
2. we sign up with the newly generated user to the app
3. we navigate to the home page

#### Affected file

register.spec.js

### Senario 2 : Register with existing user email

#### Flow

1. we try to sign up with an already created and tested email
2. we get an error msg indicating that the user exists

#### Affected file

register.spec.js

### Senario 3 : Login with an inexisting user

#### Flow

1. using Chance, we generate a random user email
2. we sign up with the newly generated user to the app
3. we navigate to the home page
4. we logout
5. we sign in to the app using that same user

#### Affected file

login.spec.js

### Senario 4 : Login with a newly created user

#### Flow

1. using Chance, we generate a random user email
2. we try signing in to the app with the newly generated user

#### Affected file

login.spec.js
