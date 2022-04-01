const path = require("path");
const fs = require("fs");
const solc = require("solc");

const contractPath = path.resolve(__dirname, "contracts", "Lottery.sol");

const source = fs.readFileSync(contractPath, { encoding: "utf8" });

var input = {
  language: "Solidity",
  sources: {
    Lottery: {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

const inputJson = JSON.stringify(input);

const compiledFile = solc.compile(inputJson);

const contract = JSON.parse(compiledFile);

module.exports = contract.contracts.Lottery.Lottery;
