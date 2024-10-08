import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { config as dotEnvConfig } from "dotenv";

dotEnvConfig();

// console.log({ infura: process.env.INFURA_RPC_URL });

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      accounts: [`0x${process.env.PRIVATE_KEY as string}`],
      url: process.env.INFURA_RPC_URL as string,
      chainId: 11155111,
    },
  },
};

export default config;