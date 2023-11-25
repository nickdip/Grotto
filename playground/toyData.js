const fs = require("fs");

const toyData = JSON.parse(fs.readFileSync("./data.json", "utf8"));

module.exports = toyData;
