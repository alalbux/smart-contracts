import { useState } from 'react';
import { ethers } from 'ethers';
import { provider, wallet } from '../utils/ethers';

export default function Contract() {
  const [balance, setBalance] = useState('0');

  async function handleClick() {
    const contractAddress = `${process.env.CONTRACT_ADDRESS}`;
    const contractABI = `${process.env.ABI}`

    const contract = new ethers.Contract(contractAddress, contractABI, provider);
    const result = await contract.balanceOf(wallet.address);
    setBalance(result.toString());
  }

  return (
    <div>
      <button onClick={handleClick}>Verificar Saldo</button>
      <p>Saldo: {balance}</p>
    </div>
  );
}