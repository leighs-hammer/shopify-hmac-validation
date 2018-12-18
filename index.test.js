const checkHmacValidity = require('./index')
const chai = require('chai')

const mockKey = "YYYYYYYYYY"

const mockObj = {
	something: "something",
	hmac: "a4a1af98de6ff6865728c384aee46377ede29e31237a02620f3a346d3005e975",
	more: "else",
}

const stringQueryValid = "?hmac=a4a1af98de6ff6865728c384aee46377ede29e31237a02620f3a346d3005e975&more=else&something=something"
const stringQueryInvalid = "?hmac=a4a1af98de6ff6865728c384aee46377ede29e31237a02620f3a3465e975&more=else&something=something"

const mockObjInvalid = {
	something: "something",
	hmac: "09851bfdff804ad33223dd2622ec",
	something: "else",
}

describe("It validates the hmac against the hash of the QS passed in", () => {

	it("Passing in a valid mock it will return true", () => {
		chai.expect(checkHmacValidity(mockKey, mockObj)).to.be.true
	})
	
	it("Passing in an invalid mock it will return false", () => {
		chai.expect(checkHmacValidity(mockKey, mockObjInvalid)).to.be.false
	})

	it("Passing a string will have it expanded and validated", () => {
		chai.expect(checkHmacValidity(mockKey, stringQueryValid)).to.be.true
	})

	it("Passing a string will have it expanded and invalidated", () => {
		chai.expect(checkHmacValidity(mockKey, stringQueryInvalid)).to.be.false
	})

	
})