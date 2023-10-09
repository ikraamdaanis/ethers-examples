import { ethers } from "ethers";
import { PRIVATE_KEY, provider } from "../utils";

/**
 * Sends a signed Ethereum (ETH) transaction from a sender's wallet to a receiver's account.
 * It also logs the sender and receiver balances before and after the transaction.
 * @param {string} senderAccount - The sender's Ethereum wallet address.
 * @param {string} receiverAccount - The receiver's Ethereum wallet address.
 * @param {ethers.Wallet} wallet - The sender's Ethereum wallet instance.
 */
async function sendSignedTransaction(
  senderAccount: string,
  receiverAccount: string,
  wallet: ethers.Wallet
) {
  const senderBalanceBefore = await provider.getBalance(senderAccount);
  const receiverBalanceBefore = await provider.getBalance(receiverAccount);

  console.log(
    `\nSender balance before: ${ethers.formatEther(senderBalanceBefore)}`
  );
  console.log(
    `receiver balance before: ${ethers.formatEther(receiverBalanceBefore)}\n`
  );

  const transaction = await wallet.sendTransaction({
    to: senderAccount,
    value: ethers.parseEther("0.025")
  });

  await transaction.wait();
  console.log(transaction);

  const senderBalanceAfter = await provider.getBalance(senderAccount);
  const receiverBalanceAfter = await provider.getBalance(receiverAccount);

  console.log(
    `\nSender balance after: ${ethers.formatEther(senderBalanceAfter)}`
  );
  console.log(
    `receiver balance after: ${ethers.formatEther(receiverBalanceAfter)}\n`
  );
}

const senderAccount = "0x55E95595Cf92884e42a0E74b5B57A4B483B0d54d";
const receiverAccount = "";

const senderAccountWallet = new ethers.Wallet(PRIVATE_KEY, provider);

sendSignedTransaction(senderAccount, receiverAccount, senderAccountWallet);
