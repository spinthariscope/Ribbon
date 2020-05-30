
exports.name = "Home Town"
exports.room = "ribbon_map_home"

exports.start_x = 320
exports.start_y = 320

// Array of all clients in that room
// Better than global clients list so that each room becomes responsible
// for sending information to all of the clients currently in the room about the client in question
// For instance, if I took a step inside of a shop and you were outside killing monsters,
// you don't need to know about my movements.
exports.client = []