
exports.name = "Home Town Shop"
exports.room = "ribbon_map_home_shop"

exports.start_x = 240
exports.start_y = 240

// Array of all clients in that room
// Better than global clients list so that each room becomes responsible
// for sending information to all of the clients currently in the room about the client in question
// For instance, if I took a step inside of a shop and you were outside killing monsters,
// you don't need to know about my movements.
exports.client = []