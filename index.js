/**
 * A simple HMAC validator fior shopify app instaltation stages at present
 * This is designed as a backend package as it requires the secret key to be surfaced to the function,
 * This can be used using a serverless function, Google or amazon lambda would do the trick if you
 * are purely building client side. 
 */

const crypto = require('crypto')
const queryString = require('query-string')

// helpers
const isString = (value) => {
	return typeof value === 'string' || value instanceof String;
}

const isObject =  (value) => {
	return value && typeof value === 'object' && value.constructor === Object;
}

const checkHmacValidity = (secret, qs) => {
	// should we add a message
	if (!secret || !qs) { return false }

	// QS object
	let obj = {}

	// if qs is a string
	if(isString(qs)) {
		// generate object
		obj = queryString.parse(qs)
	}

	if(isObject(qs)) {
		// set object
		obj = qs
	}

	// no hmac what are we doing here ?
	if (!obj.hmac) { return false }

	const hmac = obj.hmac
	const removeKey = (key, {[key]: _, ...rest}) => rest
	obj = removeKey("hmac", obj)
	console.log("OBJECT", obj)
  // let input = qs.stringify({ code, shop, timestamp });
  // let generatedHash = crypto.createHmac('sha256', secret).update(input).digest('hex');
	// validate and return
  // return generatedHash !== hmac;
}

module.exports = {
  checkHmacValidity,
}