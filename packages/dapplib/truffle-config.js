require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock bridge silver normal note prefer purity hunt brave bone gift'; 
let testAccounts = [
"0xfa86c5ba55d89ad832acb62e1d7fd462e96dcfa427eb5c6c5b09a849b3dced7e",
"0xdfea172b2f85e6d18e41be88273fff88c2c41726ca8b4a95c892f89d1b0b0ebc",
"0x2e006b9aa6bd83fddd326db429c635cc509fd097b63502959f86dfced4c6ae5a",
"0x3a224aae6810249f4dc85e89fbf281e2641b5c53c4cd6eb7fa494381263863f6",
"0x9e041f463d26f3233a6c6e4a17b083776a8a194a7b8f3371d8f2944689c13f8e",
"0x3c8a5fe98d1d91f01f33daa53b40ad7e39371a8a5a324d799aaf0ed7d6a79226",
"0xd06bde63f2a625f1368843ee08cceecba5d0a0171892ec6787c14e058cd6bc57",
"0x8b0a98e1235b5db1dbb653ec691184cac6a65cfe8e3a2019e87f183d5350d938",
"0xbc6d7b52b5fe7b2097d4bea6dd4eeedffc930bc21d984ab29e1cb5e427add87c",
"0x4989c80faf5797aab455741eef8ad84e4a8862fc82a79ecf4e13333104e1992e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


