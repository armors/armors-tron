const port = process.env.HOST_PORT || 8090

module.exports = {
  networks: {
    development: {
      // For trontools/quickstart docker image
      privateKey: 'da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0',
      userFeePercentage: 30,
      feeLimit: 1e8,
      fullHost: 'http://127.0.0.1:' + port,
      network_id: port
    },
    development2: {
      // For trontools/quickstart docker image
      privateKey: 'da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0',
      userFeePercentage: 30,
      feeLimit: 1e8,
      fullHost: "http://127.0.0.1:9091",
      network_id: "9091"
    },
    shasta: {
      privateKey: process.env.PRIVATE_KEY_SHASTA,
      userFeePercentage: 50,
      feeLimit: 1e8,
      fullHost: "https://api.shasta.trongrid.io",
      network_id: "2"
    },
    mainnet: {
      // Don't put your private key here:
      privateKey: process.env.PRIVATE_KEY_MAINNET,
      /*
Create a .env file (it must be gitignored) containing something like

  export PRIVATE_KEY_MAINNET=4E7FECCB71207B867C495B51A9758B104B1D4422088A87F4978BE64636656243

Then, run the migration with:

  source .env && tronbox migrate --network mainnet

*/
      userFeePercentage: 100,
      feeLimit: 1e8,
      fullHost: "https://api.trongrid.io",
      network_id: "1"
    }
  }
}