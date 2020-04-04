console.log('App starting...');

var instance;
var contracts = {};
let ethereum = window.ethereum;
console.log(ethereum.selectedAddress);
ethereum.enable();

function init() {
    console.log('Start init');

    return initContracts();
};

var provider = new Web3.providers.HttpProvider("http://localhost:8545");

var web3 = new Web3(provider);

async function initContracts() {
    $.getJSON('../build/contracts/MetaCoin.json', function (data) {
        contracts.MetaCoin = TruffleContract(data);

        contracts.MetaCoin.setProvider(provider);
        deployContracts();
    });
};

async function deployContracts() {
    console.log('accounts: ');
    
    instance = await contracts.MetaCoin.new({from: ethereum.selectedAddress});
}

$(function () {
    $(window).load(function () {
        console.log('before init starting...')
        init();
    })
})

async function setMessage() {
    console.log(instance);
    await instance.setString($("#setMessage").val(), {from: ethereum.selectedAddress});
}

async function getMessage() {
    $("#getMessage").val(await instance.getString({from: ethereum.selectedAddress}));
}
