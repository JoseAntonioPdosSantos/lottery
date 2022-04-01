const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const Lottery = require('../compile');

let lottery;
let accounts;
const bytecode = Lottery.evm.bytecode.object;
const abi = Lottery.abi;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    lottery = new web3.eth.Contract(JSON.parse(abi))
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: '100000' });

});

describe('Lottery Contract', () => {
    if('deploys a contract', () => {
        assert.ok(lottery,options,address);
    });
});
