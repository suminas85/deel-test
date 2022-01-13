const {
  aliasDangerous,
  configPaths,
} = require("react-app-rewire-alias/lib/aliasDangerous");

const aliasPaths = configPaths("./tsconfig.paths.json");

module.exports = aliasDangerous(aliasPaths);
