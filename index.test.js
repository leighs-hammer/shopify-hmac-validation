const {checkHmacValidity, checkWebhookHmacValidity, createRawBody} = require('./index')

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

describe("Install: It validates the hmac against the hash of the QS passed in", () => {

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


const mockBuffer64 = "eyJzaG9wX2lkIjoyNjk5OTI1OTIxNSwic2hvcF9kb21haW4iOiJzdG9yZWZyb250LWV4cGVyaWVuY2UubXlzaG9waWZ5LmNvbSIsImN1c3RvbWVyIjp7ImlkIjoyOTg3OTU2NzY0NzUxLCJlbWFpbCI6ImxlaWdoYnJlbmRvbmJhcm5lcysxOUBnbWFpbC5jb20iLCJwaG9uZSI6bnVsbH0sIm9yZGVyc19yZXF1ZXN0ZWQiOltdfQ=="
const payload = Buffer.from(mockBuffer64, 'base64').toString()

describe("Webhook: It validates the hmac against the hash of the rawBody and secret passed in", () => {

	it("Passing in a valid mock it will return true", () => {
		chai.expect(checkWebhookHmacValidity(mockKey, JSON.stringify(payload), '2esWad2rPMt/alOK9Wfm9bbG1fvPmOHbmwQg+MmXDLo=')).to.be.true
	})

	it("Passing in an invalid payload it will return false", () => {
		chai.expect(checkWebhookHmacValidity(mockKey, JSON.stringify({}), '2esWad2rPMt/alOK9Wfm9bbG1fvPmOHbmwQg+MmXDLo=')).to.be.false
	})

	it("Passing in an invalid secret payload it will return false", () => {
		chai.expect(checkWebhookHmacValidity('', JSON.stringify(payload), '2esWad2rPMt/alOK9Wfm9bbG1fvPmOHbmwQg+MmXDLo=')).to.be.false
	})

	it("Passing in an missing params should fail it", () => {
		chai.expect(checkWebhookHmacValidity(null, null, '2esWad2rPMt/alOK9Wfm9bbG1fvPmOHbmwQg+MmXDLo=')).to.be.false
	})
	
})

const mockReqBody = {something: 'someValue'}
const equateTo = JSON.stringify(mockReqBody)

describe("createRawBody: Return a string from a buffer", () => {

	it("Passing in a valid mock it will return true", () => {
		chai.expect(createRawBody({something: "someValue"})).to.be.eql(equateTo)
	})
	
})