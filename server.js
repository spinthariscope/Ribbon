
// Import Required Libraries
require(__dirname + '/resource/config.js')
var fs = require('fs')
var net = require('net')

console.log(ribbonconfig.database)

// Load Initializers
var init_files = fs.readdirSync(__dirname + '/initializer') // read directory and is not async
init_files.forEach(function(initFile) {
    console.log('Loading Initializer: ' + initFile)
    require(__dirname + '/initializer/' + initFile)
})

// Load Data Models
var model_files = fs.readdirSync(__dirname + '/model') // read directory and is not async
model_files.forEach(function(modelFile) {
    console.log('Loading Model: ' + modelFile)
    require(__dirname + '/model/' + modelFile)
})

// Load Game Map Data
maps = {}
var map_files = fs.readdirSync(ribbonconfig.data_paths.maps)
map_files.forEach(function(mapFile) {
    console.log('Loading Map: ' + mapFile)
    var map = require(ribbonconfig.data_paths.maps + mapFile)
    maps[map.room] = map
})

console.log(maps)

net.createServer(function(socket) {
    console.log("Initialize Complete, Server running on port: " + ribbonconfig.port + " for environment " + ribbonconfig.environment)
}).listen(ribbonconfig.port)


// Initiate Server & Listen on Port


// Server Logic



