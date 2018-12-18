const UglifyJS = require("uglify-js")
const textfile = require('textfile')
const path = require('path')

const srcPath = path.join(__dirname, '../src/index.js')
const outPath = path.join(__dirname, '../out/index.js')

textfile.read(srcPath, 'string').then(code => {
    var result = UglifyJS.minify(code)
    if (result.error) {
        throw new Error(result.error)
    }
    return textfile.write(outPath, result.code, 'string')
})
