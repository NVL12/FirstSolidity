console.log('starting...');

const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');
const provider = new HDWalletProvider(
    process.env.MNEMONIC,
    process.env.INFURA_URL
);

var web3 = new Web3(provider);

const abiDecoder = require('abi-decoder');

const abiJson = require('./build/contracts/MetaCoin.json');

// console.log(abiJson.abi);

const testABI = abiJson.abi;
abiDecoder.addABI(testABI);


web3.eth.getTransactionReceipt("0xca5596f5187519424f4022723c57c273799b0faee64e1178d74ed86c9eea3182", function (e, receipt) {
    //const decodedLogs = abiDecoder.decodeLogs(receipt.logs);
    //console.log(receipt);
    // console.log(decodedLogs);
});

async function getTran() {
    var transaction = await web3.eth.getTransaction('0x0a9c324b332294e60773af159b75d77775e157f06baba248586d3a0c81fb2f8b');
    // console.log(transaction);

    const testData = "0x7fcaf6660000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000b48656c6c6f20576f726c64000000000000000000000000000000000000000000";
    const decodedData = abiDecoder.decodeMethod(testData);
    console.log(decodedData);
}

getTran();

// console.log('ended');






// const Web3 = require('web3');
// const HDWalletProvider = require('truffle-hdwallet-provider');

// console.log('1');

// const provider = new HDWalletProvider(
//     process.env.MNEMONIC,
//     process.env.INFURA_URL
// );

// var web3 = new Web3(provider);

// console.log('2');

// // console.log(provider);

// async function getTran () {
//     var transaction = await web3.eth.getTransaction('0x0a9c324b332294e60773af159b75d77775e157f06baba248586d3a0c81fb2f8b');
//     console.log(transaction);
// } 

// getTran();


