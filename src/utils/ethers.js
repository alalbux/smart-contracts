import { ethers } from 'ethers';

// Check that the PROVIDER environment variable is defined
if (!process.env.PROVIDER) {
  throw new Error('PROVIDER environment variable is not defined');
}

// Create a JSON-RPC provider instance
const provider = new ethers.providers.JsonRpcProvider(process.env.PROVIDER);

// Check that the PRIVATE_KEY environment variable is defined
if (!process.env.PRIVATE_KEY) {
  throw new Error('PRIVATE_KEY environment variable is not defined');
}

// Create a wallet instance using the private key and provider
const privateKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey, provider);

// Export the provider and wallet instances
export { provider, wallet };