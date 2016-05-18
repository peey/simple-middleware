var assert = require("assert")
var Middleware = require("../src/simple-middleware.js")

describe("simple-middleware", function () {
  // tests here only on functionality introduced in this file. For tests of compose-simple-middleware, see its tests
  
  it("works", function () {
    var mw = new Middleware()
    
    mw.use(function (context, next) {
      context.foo += 1
      return next()
    })
    
    mw.use(function (context, next) {
      context.foo += 1
      return context.foo
    })
    
    assert(mw.run({foo: 0}) === 2)
  })
  
  it("runs and returns null when nothing is .use-d", function () {
    var mw = new Middleware()
    
    assert(mw.run() === null)
  })
})