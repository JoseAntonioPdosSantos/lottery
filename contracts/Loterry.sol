// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Lottery {
    address payable public manager;
    address payable [] public players;

    constructor(){
        manager = getCurrentAddress();
    }

    function enter() public payable {
        require(msg.value > .01 ether);
        players.push(getCurrentAddress());
    }

    function getCurrentAddress() private view returns (address payable) {
        return payable(msg.sender);
    }
    function random() private view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, players)));
    }

    function pickWinner() public onlyManager {
        uint index = random() % players.length;
        players[index].transfer(address(this).balance);
        players = new address payable [](0);
    }

    modifier onlyManager() {
        require(msg.sender == manager);
        _;
    }

    function getPlayers() public view returns (address payable[] memory) {
        return players;
    }
}
