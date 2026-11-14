const fs = require("node:fs");
const path = require("node:path");

// Site CSS is inlined into <head> at build time (no render-blocking stylesheet).
module.exports = () =>
  fs.readFileSync(path.join(__dirname, "../assets/css/site.css"), "utf8")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}:;,>])\s*/g, "$1")
    .replace(/;}/g, "}")
    .trim();
