
// Import required libraries
var args = require('minimist')(process.argv.slice(2))
var extend = require('extend')

// Load environment variable
var environment = args.env || "ATEST"
var ip = args.ip || "0.0.0.0"

// Common config i.e., name, version, max player, etc

var common_conf = {
    name: "Ribbon MMO Server",
    version: "0.0.1",
    environment: environment,
    max_players: 100,
    data_paths: {
        items: __dirname + '\\gamedata\\' + 'item\\',
        maps: __dirname + '\\gamedata\\' + 'map\\',
    },
    starting_zone: "ribbon_map_home"
}

// Environment-Specific Configuration
var conf = {
    PROD: {
        ip: ip,
        port: args.port || 8081,
        database: "mongodb://127.0.0.1/ribbon_prod"
    },

    TPT: {
        ip: ip,
        port: args.port || 8082,
        database: "mongodb://127.0.0.1/ribbon_tpt"
    },

    ATEST: {
        ip: ip,
        port: args.port || 8083,
        database: "mongodb://127.0.0.1/ribbon_atest"
    }
}


extend(false, conf.PROD, common_conf)
extend(false, conf.TPT, common_conf)
extend(false, conf.ATEST, common_conf)


// To entire application, there is a variable called config, which is equal to conf's environment we selected via args
module.exports = ribbonconfig = conf[environment]




