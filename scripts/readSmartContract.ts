import { ethers } from "ethers";
import { provider } from "../utils";

/**
 * Reads information from a given Ethereum smart contract, including its name, symbol,
 * total supply, and a specific wallet's balance, and prints the results to the console.
 * @param {ethers.Contract} contract - The Ethereum smart contract instance to read from.
 * @param {string} tokenContractAddress - The address of the token smart contract.
 * @param {string} walletAddress - The Ethereum wallet address to check the balance for.
 */
async function readSmartContract(
  contract: ethers.Contract,
  tokenContractAddress: string,
  walletAddress: string
) {
  const name = await contract.name();
  const symbol = await contract.symbol();
  const totalSupply = await contract.totalSupply();

  console.log(`\nReading from ${tokenContractAddress}\n`);
  console.log(`Name: ${name}`);
  console.log(`Symbol: ${symbol}`);
  console.log(`Total Supply: ${totalSupply}\n`);

  const balance = await contract.balanceOf(walletAddress);

  console.log(`Balance Returned: ${balance}`);
  console.log(`Balance Formatted: ${ethers.formatEther(balance)}\n`);
}

/** Tether USD (USDT) */
const contractAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

const ERC20_ABI: ethers.InterfaceAbi = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)"
];

const contract = new ethers.Contract(contractAddress, ERC20_ABI, provider);

const walletAddress = "0x9C26057ce781268D8d1e1D9D977bF9758c50A2d6";

readSmartContract(contract, contractAddress, walletAddress);
