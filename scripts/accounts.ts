import { ethers } from "ethers";

const INFURA_ID = process.env.INFURA_ID || "";

const address = "0xc2d53671243C9a1C0b70516FD0e6366702C477ED";

async function main() {
  try {
    const provider = new ethers.JsonRpcProvider(
      `https://mainnet.infura.io/v3/${INFURA_ID}`
    );

    const balance = await provider.getBalance(address);
    console.log(
      `\nETH Balance of ${address} --> ${ethers.formatEther(balance)} ETH\n`
    );
  } catch (error) {
    console.error("Error getting the balance: \n", error);
  }
}

main();
