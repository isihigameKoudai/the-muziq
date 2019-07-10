const path = require("path");

module.exports = {
  distDir: "../functions/.next",
  webpack(config, options) {
    config.resolve.alias["@"] = path.join(__dirname, "/");
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  }
};
