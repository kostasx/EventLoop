const sharp = require("sharp");

sharp('input.jpg')
.resize(300, 200)
.toFile('output.jpg', function(err) {});