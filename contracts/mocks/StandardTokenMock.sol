
pragma solidity ^0.4.23;

import "../StandardToken.sol";


contract StandardTokenMock is StandardToken {

  constructor(uint256 initialBalance) public {
    _balances[msg.sender] = initialBalance;
    _totalSupply = initialBalance;
  }

}