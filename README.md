# Smart contracts

This project is a simple Next.js web application that connects to the Ethereum blockchain using the ethers.js library to display the balance of a connected wallet. Users can connect their wallets using the ethers library and view their account balances in ETH. This application can be used as a starting point for building more complex Ethereum-powered applications on the web.


## Technologies Used
- Next.js
- Ethers.js

## How to install
- Clone this repository: `git clone https://github.com/alalbux/smart-contracts.git`
- Navigate to the root directory of the project: `cd smart-contracts`
- Install project dependencies: npm install

## How to use

- Create a .env.local file in the root directory of the project with the following environment variables:
- `contractAddress`: This is the address of the smart contract that you want to interact with on the Ethereum network.
- `contractABI`: This is the ABI (Application Binary Interface) of the smart contract, which defines the functions, events, and data types that the contract exposes to the outside world.
- `provider`: This is the Ethereum provider that you want to use to interact with the Ethereum network. In the example code, we are using the 

```
CONTRACT_ADDRESS=
ADDRESS_BALANCE=
PROVIDER=
PRIVATE_KEY=
ABI=
```
- Run the project: npm run dev
- Open your browser and go to http://localhost:3000


## How to Configure Your Wallet

- Click on the "Connect Wallet" button in the navigation bar.
- Select the wallet you want to use (for example, MetaMask).
- Follow the wallet instructions to connect your Ethereum account.
- If the connection is successful, your balance will be displayed on the screen.


## How to Contribute

If you want to contribute to this project, please follow these steps:

- Fork this repository.
- Create a new branch with your changes: git checkout -b my-branch
- Make your changes and commit: git commit -m 'My changes'
- Push your changes to your fork: git push origin my-branch
- Create a pull request to this repository.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.

## Contact
If you have any questions or suggestions, you can contact me by email: amandlei@hotmail.com.