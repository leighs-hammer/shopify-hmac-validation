# shopify-hmac-validation
[![Build Status](https://travis-ci.com/leighs-hammer/shopify-hmac-validation.svg?branch=master)](https://travis-ci.com/leighs-hammer/shopify-hmac-validation)
[![Coverage Status](https://coveralls.io/repos/github/leighs-hammer/shopify-hmac-validation/badge.svg?branch=master)](https://coveralls.io/github/leighs-hammer/shopify-hmac-validation?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/leighs-hammer/shopify-hmac-validation/badge.svg?targetFile=package.json)](https://snyk.io/test/github/leighs-hammer/shopify-hmac-validation?targetFile=package.json)



## Overview 

1. This is only installation HMAC validation, this will not work for Webhook validation at present.
2. This is not intended nor should it be used for client side apps, as this will require surfacing your app secret tot he function and as such the world if used client side. The intention was for this to be used backend or serverless to validate the HMAC of a request. Take heed of this this is important for your apps security. 

## Usage

1. Install`npm install shopify-hmac-validation --save`
2. Import `const checkHmacValidity = require('')`
3. Pass it your APP key ( partners.shopify.com)
4. PAss it either a querystring object or simply the string it will figure it out (location.search)
5. Response will simply be a bool, true if they match, false if not

Example: 

`checkHmacValidity("SOMEKEY","SOMESTRING")`

In the github is a test that has a valid test object and string if you would like to reference that other wise I will place a more indepth docs out in time.
