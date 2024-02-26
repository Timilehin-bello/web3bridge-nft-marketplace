import { ethers } from "hardhat";

async function main() {

  const NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
  const nftMarketplace = await NFTMarketplace.deploy();


  console.log(`Deployed contract Address ${nftMarketplace.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
