/* jshint asi:true */
;(function () {
  
  /* importing */
  var compose = typeof require !== "undefined"? require("compose-simple-middleware") : window.composeMiddleware ;
  
  /* actual code */
  var Middleware = function () {
    this.context = {}
    this.list = []
    this.list.push(function (context, next) {
      return next()
    })
  }

  Middleware.prototype.use = function (fn) {
    this.list.push(fn)
  }

  Middleware.prototype.run = function (context) {
    return compose(this.list)(context)
  }
  
  /* Exporting */
  
 // for node.js
  if (typeof module !== "undefined" &&  typeof module.exports !== "undefined") module.exports = Middleware ;
  
  // for browsers
  if (typeof window !== "undefined") {
    window.Middleware = Middleware;
  }

})();