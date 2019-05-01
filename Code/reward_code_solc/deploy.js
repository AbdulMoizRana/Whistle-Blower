const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {
    interface,
    bytecode
} = require('./compile');

const provider = new HDWalletProvider(

    'crop desert alcohol purpose matter impose economy target engage cloud city click',
    'https://rinkeby.infura.io/v3/b5858abc339f4f31b299e4c8fe515766',

);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(accounts[0]);
    console.log(balance);
    console.log('Attempting to deploy ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode,
        })
        .send({
            from: accounts[0],
            gas: '1000000'
        });

    console.log(interface);
    console.log('Contract deployed to ', result.options.address);
};

deploy();