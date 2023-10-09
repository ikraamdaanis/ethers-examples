import { ethers } from "ethers";

export const INFURA_ID = process.env.INFURA_ID || "";

export const provider = new ethers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

export const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
