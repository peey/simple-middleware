# simple-middleware

A package implementing the middleware pattern.

## Example Usage

```js
/**
 * A library for returning base64 representation of image of *any* kind
 */
var Middleware = require("simple-middleware")

imageToBase64Middleware = new Middleware()

imageToBase64Middleware.use(function (context, next) {
  context.imageExtension = getExtensionFromFileName(context.fileName)
  return next()
})

// if jpeg
imageToBase64Middleware.use(function (context, next) {
  if (context.imageExtension === 'jpeg' || context.imageExtension === 'jpg') {
    // code for jpeg to Base64 goes here
    return result
  } else {
    return next()
  }
})

// if png
imageToBase64Middleware.use(function (context, next) {
  ...
})

...

// if tiff

imageToBase64Middleware.use(function (context, next) {
  if (context.imageExtension === 'tiff') {
    // code for tiff to Base64 goes here
    return result
  } else {
    return next() // if there is no next(), null is returned
  }
})

// add more code here in future when support for another new image type is needed

module.exports = function (fileName, imageFileContents) {
  return imageToBase64Middleware.run({imageFileContents : imageFileContents, fileName: fileName})
}
```


## Installation

If you want to use this in node.js, simply install via npm using `npm install simple-middleware` and in
your code use it by `var Middleware = require("simple-middleware")`

If you want to use this in browser, simply download the compose-simple-middleware.js and simple-middleware.js files 
in that order and include it via a script tag. The module exposes a global variable called `Middleware`.

## Examples

See `test/test.js` file and [this test file](https://github.com/peey/compose-simple-middleware/blob/master/test/test.js) 
from a sister project for examples of how to use this package.
    
## License

MIT License. See LICENSE file.