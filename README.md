# shopify-hmac-validation
[![Build Status](https://travis-ci.com/leighs-hammer/shopify-hmac-validation.svg?branch=master)](https://travis-ci.com/leighs-hammer/shopify-hmac-validation)
[![codecov](https://codecov.io/gh/leighs-hammer/shopify-hmac-validation/branch/master/graph/badge.svg)](https://codecov.io/gh/leighs-hammer/shopify-hmac-validation)
[![Known Vulnerabilities](https://snyk.io/test/github/leighs-hammer/shopify-hmac-validation/badge.svg?targetFile=package.json)](https://snyk.io/test/github/leighs-hammer/shopify-hmac-validation?targetFile=package.json)
![](https://img.shields.io/twitter/follow/@leighb4rnes.svg?label=follow&style=social)

## BREAKING CHANGE

if you were previously using common JS : `const checkHmacValidity = require('shopify-hmac-validation')`

this will now need to either be imported as default or implicitly. 
`const checkHmacValidity = require('shopify-hmac-validation').checkHmacValidity`
or
`const {checkHmacValidity} = require('shopify-hmac-validation')`

Only named exports are now provided. Implicitly load them. 




## Overview 

1. checkHmacValidity : Installation hmac validation
2. checkWebhookHmacValidity : Webhook validation
3. createRawBody : NextJS helper to save from turning off parser

## Usage: checkHmacValidity

1. Install`npm install shopify-hmac-validation --save`
2. Import `const checkHmacValidity = require('shopify-hmac-validation').checkHmacValidity` 
3. Pass it your APP Secret ( partners.shopify.com)
4. PAss it either a querystring object or simply the string it will figure it out (location.search)
5. Response will simply be a bool, true if they match, false if not

Example: 

`checkHmacValidity("SOMEKEY","SOMESTRING or {SOMEOBJECT}")`

In the github is a test that has a valid test object and string if you would like to reference that other wise I will place a more indepth docs out in time.

## Usage: checkWebhookHmacValidity

1. Install`npm install shopify-hmac-validation --save`
2. Import `const checkHmacValidity = require('shopify-hmac-validation').checkWebhookHmacValidity`
3. Pass it your APP Secret ( partners.shopify.com)
3.1 Pass it the raw body of the webook request
3.2 Pass in the hmac from the headers `x-shopify-hmac-sha256`
5. Response will simply be a bool, true if they match, false if not

## Usage: createRawBody

1. Install`npm install shopify-hmac-validation --save`
2. Import `const createRawBody = require('shopify-hmac-validation').createRawBody`
3. A request.body object ( useful with next js body parsed rer)
5. Response will simply be a string that can be used as the raw body in webhook validation
