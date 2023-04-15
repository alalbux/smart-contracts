import { useState } from 'react';
import { ethers } from 'ethers';
import { provider, wallet } from '../utils/ethers';

export default function Home() {
  const [balance, setBalance] = useState('0');

  async function handleClick() {
    const contractAddress = `${process.env.CONTRACT_ADDRESS}`;
    const contractABI = `${process.env.ABI}`;
    let contract;
    
    try {
      contract = new ethers.Contract(contractAddress, contractABI, provider);
    } catch (error) {
      console.error("Error creating contract:", error);
    }
    
    if (contract) {
      try {
        const result = await contract.balanceOf(wallet.address);
        setBalance(result.toString());
      } catch (error) {
        console.error("Error getting balance:", error);
      }
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Verificar Saldo</button>
      <p>Saldo: {balance}</p>
    </div>
  );
}