require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name return pitch property harvest father equal gas'; 
let testAccounts = [
"0x6a7ea7d95c183604db788aa8324c284acec22b370b3beecb03b6dc259598877c",
"0xf52095b8d08b9eb297bb77156d145fb85132fa29dfd3d405dee8682697fe8a02",
"0x700f45365a8402a029b4fcbaddc4025f3f5c77fdabded30122c32813b415beb5",
"0x7c6f49950711546c56399a95030fb1ef88ec4c8f3b4511ead619591bc3c1ddc9",
"0x089a74194d1ada80e5f0e42b9954969ac961d4c15a765223c1f219bda056aaa5",
"0x9f1adf3f2596762c1bc2fbf235f2b73999fe16a207605f614717583b77388cbe",
"0xc79dda20053fc01834148af41615322650bb2e3c4c23b9f45d2f25b8418ca428",
"0xaa592f6630702faa1e2ebb333740ecf9489e831163fa817ae8bc6f68aa747318",
"0x0ed84d1ec7839e47776b5a056c55f04381ffd646fbd469a590665d80a4f39681",
"0xd4272c74139d33a20b08e024100c2cbe756d6ca0b1d5664baa17dc4cbd690cd1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

