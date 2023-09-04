export const BASE_URL = process.env.REACT_APP_BASE_URL!;

export const opBnbChainNetworkParams =
  process.env.REACT_APP_ENV! === "mainnet"
    ? {
        chainId: "0xCC",
        chainName: "opBNB Mainnet",
        nativeCurrency: {
          name: "BNB",
          symbol: "BNB",
          decimals: 18,
        },
        rpcUrls: ["https://opbnb-mainnet-rpc.bnbchain.org"],
        blockExplorerUrls: ["https://mainnet.opbnbscan.com/"],
      }
    : {
        chainId: "0x15EB",
        chainName: "opBNB Testnet",
        nativeCurrency: {
          name: "BNB",
          symbol: "tBNB",
          decimals: 18,
        },
        rpcUrls: ["https://opbnb-testnet-rpc.bnbchain.org"],
        blockExplorerUrls: ["https://opbnbscan.com/"],
      };

export const OPBNB_PLACE_ADDR =
  process.env.REACT_APP_ENV! === "mainnet"
    ? ""
    : "0xdb83ab530352d390c2c02b834fa8b303b2112ca2";
