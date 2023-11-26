import fs from "fs";

const toyData = JSON.parse(fs.readFileSync("../playground/data.json"))

export default toyData
