var TRC20 = artifacts.require("./StandardTokenMock.sol");

module.exports = function (deployer, network, accounts) {
    deployer.deploy(TRC20, 100);
};