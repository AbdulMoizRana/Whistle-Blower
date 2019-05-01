pragma solidity ^0.4.17;

contract Reward{

    address public manager;

    function Reward(){
        manager = msg.sender;
    }

    function sendMoney(address to) payable{
        require(msg.value > .05 ether);
        to.transfer(this.balance);
    }
}
