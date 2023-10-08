import { ethers } from "ethers";
import { provider } from "../utils";

/** Retrieves the balance of an ETH wallet. */
async function getAccountBalance(address: string) {
  try {
    const balance = await provider.getBalance(address);

    console.log(
      `\nETH Balance of ${address} --> ${ethers.formatEther(balance)} ETH\n`
    );
  } catch (error) {
    console.error("Error getting the balance: \n", error);
  }
}

const address = "0xc2d53671243C9a1C0b70516FD0e6366702C477ED";

getAccountBalance(address);
