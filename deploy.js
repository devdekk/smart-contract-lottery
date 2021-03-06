const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'pink mask galaxy repair economy group lake proud guess famous since retire',
    'https://rinkeby.infura.io/DMrIh52EIIUiCLX4NadY'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: '0x' +  bytecode })
        .send({ from: accounts[0], gas: '1000000' });
    
    console.log('Contract deployed to ', result.options.address);

};

deploy();